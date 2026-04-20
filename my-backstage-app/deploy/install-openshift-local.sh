#!/usr/bin/env bash
# ============================================================
# install-openshift-local.sh
#
# Installs OpenShift Local (CRC) on a Linux host with KVM,
# starts the cluster, builds and deploys Backstage.
#
# Requirements (host machine, NOT inside Docker):
#   - Linux x86_64 with KVM/hardware virtualization enabled
#   - 4 CPU cores, 9 GB RAM free, 35 GB disk free
#   - A valid Red Hat account for pull-secret download
#   - curl, tar, oc (or will be installed via CRC)
#
# Usage:
#   1. Download pull-secret from https://console.redhat.com/openshift/create/local
#      and save as ~/pull-secret.txt
#   2. ./install-openshift-local.sh
# ============================================================
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"
CRC_VERSION="2.43.0"
CRC_INSTALL_DIR="${HOME}/.crc"
PULL_SECRET_FILE="${HOME}/pull-secret.txt"
BACKSTAGE_NAMESPACE="backstage"
BACKSTAGE_IMAGE="backstage:latest"

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

info()    { echo -e "${GREEN}[INFO]${NC} $*"; }
warn()    { echo -e "${YELLOW}[WARN]${NC} $*"; }
error()   { echo -e "${RED}[ERROR]${NC} $*" >&2; }

# ── 1. Preflight checks ────────────────────────────────────
info "Checking prerequisites..."

if [[ ! -f "${PULL_SECRET_FILE}" ]]; then
    error "Pull secret not found at ${PULL_SECRET_FILE}"
    error "Download it from: https://console.redhat.com/openshift/create/local"
    exit 1
fi

if ! grep -qE '(vmx|svm)' /proc/cpuinfo 2>/dev/null; then
    error "KVM hardware virtualization is not available."
    error "OpenShift Local requires a physical machine with VT-x/AMD-V enabled."
    exit 1
fi

if ! command -v libvirtd &>/dev/null; then
    warn "libvirtd not found, installing libvirt..."
    sudo dnf install -y libvirt libvirt-daemon-kvm qemu-kvm NetworkManager 2>/dev/null || \
    sudo apt-get install -y qemu-kvm libvirt-daemon-system network-manager 2>/dev/null || \
    { error "Could not install libvirt. Install it manually."; exit 1; }
fi

# ── 2. Install CRC ────────────────────────────────────────
if ! command -v crc &>/dev/null; then
    info "Downloading OpenShift Local (CRC) ${CRC_VERSION}..."
    CRC_TARBALL="crc-linux-amd64.tar.xz"
    curl -L "https://developers.redhat.com/content-gateway/rest/mirror/pub/openshift-v4/clients/crc/${CRC_VERSION}/crc-linux-amd64.tar.xz" \
         -o "/tmp/${CRC_TARBALL}"
    tar -xJf "/tmp/${CRC_TARBALL}" -C /tmp/
    CRC_DIR=$(find /tmp -maxdepth 1 -name "crc-linux-*" -type d | head -1)
    sudo mv "${CRC_DIR}/crc" /usr/local/bin/crc
    chmod +x /usr/local/bin/crc
    info "CRC installed at /usr/local/bin/crc"
else
    info "CRC already installed: $(crc version | head -1)"
fi

# ── 3. Configure and start CRC ────────────────────────────
info "Configuring CRC..."
crc config set consent-telemetry no
crc config set cpus 4
crc config set memory 10240

info "Setting up CRC (downloads bundle on first run ~4 GB)..."
crc setup

info "Starting CRC cluster (this takes 5–10 minutes on first run)..."
crc start --pull-secret-file "${PULL_SECRET_FILE}"

# ── 4. Configure oc and login ─────────────────────────────
info "Configuring oc CLI..."
eval "$(crc oc-env)"

info "Logging in to OpenShift as admin..."
oc login -u kubeadmin -p "$(crc console --credentials | grep kubeadmin | awk '{print $NF}')" \
   "https://api.crc.testing:6443" --insecure-skip-tls-verify 2>/dev/null || \
oc login -u developer "https://api.crc.testing:6443" --insecure-skip-tls-verify

# ── 5. Build and push Backstage image into CRC registry ───
info "Building Backstage Docker image..."
cd "${REPO_ROOT}"

# Ensure dependencies and build artifacts are ready
if [[ ! -f "packages/backend/dist/bundle.tar.gz" ]]; then
    info "Installing dependencies..."
    yarn install --immutable
    info "Building backend..."
    yarn build:backend
fi

# Point Docker at the CRC internal registry
eval "$(crc podman-env)"

# Tag and push to CRC's internal registry
CRC_REGISTRY="default-route-openshift-image-registry.apps-crc.testing"
oc whoami -t | docker login "${CRC_REGISTRY}" -u "$(oc whoami)" --password-stdin

docker build -f packages/backend/Dockerfile \
    -t "${CRC_REGISTRY}/${BACKSTAGE_NAMESPACE}/backstage:latest" \
    .

docker push "${CRC_REGISTRY}/${BACKSTAGE_NAMESPACE}/backstage:latest"

# Update the image reference in the deployment
BACKSTAGE_IMAGE="${CRC_REGISTRY}/${BACKSTAGE_NAMESPACE}/backstage:latest"

# ── 6. Deploy to OpenShift ────────────────────────────────
info "Creating namespace ${BACKSTAGE_NAMESPACE}..."
oc apply -f "${SCRIPT_DIR}/k8s/namespace.yaml"

info "Deploying PostgreSQL..."
oc apply -f "${SCRIPT_DIR}/k8s/postgres.yaml"

info "Waiting for PostgreSQL to be ready..."
oc -n "${BACKSTAGE_NAMESPACE}" rollout status deployment/backstage-postgres --timeout=120s

info "Deploying Backstage..."
oc apply -f "${SCRIPT_DIR}/k8s/backstage.yaml"

# Patch with the correct registry image
oc -n "${BACKSTAGE_NAMESPACE}" set image deployment/backstage \
    "backstage=${BACKSTAGE_IMAGE}"

# Apply OpenShift-specific resources
info "Applying OpenShift Route and SCC..."
oc apply -f "${SCRIPT_DIR}/openshift/scc.yaml"
oc apply -f "${SCRIPT_DIR}/openshift/route.yaml"

info "Waiting for Backstage to be ready..."
oc -n "${BACKSTAGE_NAMESPACE}" rollout status deployment/backstage --timeout=180s

# ── 7. Print access info ──────────────────────────────────
ROUTE_HOST=$(oc -n "${BACKSTAGE_NAMESPACE}" get route backstage -o jsonpath='{.spec.host}')
info "============================================================"
info "Backstage is deployed and running on OpenShift Local!"
info ""
info "  URL:      https://${ROUTE_HOST}"
info "  Username: (guest login enabled)"
info ""
info "OpenShift Console: $(crc console --url)"
info "OpenShift Admin:   kubeadmin / $(crc console --credentials | grep kubeadmin | awk '{print $NF}')"
info "============================================================"
