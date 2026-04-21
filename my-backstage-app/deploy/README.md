# hackstage — Backstage on OpenShift Local

This repository contains a fully scaffolded [Backstage](https://backstage.io) developer portal
(Spotify open-source) together with deployment tooling targeting **OpenShift Local (CRC)** and
plain Kubernetes/Docker.

---

## What is included

| Path | Purpose |
|---|---|
| `my-backstage-app/` | Scaffolded Backstage monorepo (frontend + backend) |
| `deploy/docker/` | `docker-compose.yml` + `start.sh` for local Docker |
| `deploy/k8s/` | Standard Kubernetes manifests (Namespace, Deployment, Service, Secret, PVC) |
| `deploy/openshift/` | OpenShift-specific Route, SCC binding, Kustomize overlay |
| `deploy/install-openshift-local.sh` | End-to-end script: installs CRC, builds image, deploys |

---

## Quick start — Docker (runs anywhere)

Requires: Docker ≥ 20

```bash
cd my-backstage-app
# One-shot: build image + start Postgres + Backstage
./deploy/docker/start.sh
```

Or manually with Docker Compose:

```bash
cd my-backstage-app

# Build the image (first time only)
yarn install --immutable
yarn build:backend
docker build -f packages/backend/Dockerfile -t backstage:latest .

# Start everything
cd deploy/docker
docker compose up -d

# Backstage is now at http://localhost:7007
```

---

## Deploy to OpenShift Local (CRC)

### Prerequisites (host machine — not inside Docker)

- Linux x86_64 with **KVM hardware virtualization** enabled (`grep -E '(vmx|svm)' /proc/cpuinfo`)
- At least **4 CPU cores, 9 GB RAM free, 35 GB disk**
- A free [Red Hat account](https://console.redhat.com/openshift/create/local) to download the pull secret

### Steps

1. Download your pull secret from <https://console.redhat.com/openshift/create/local> and save it as `~/pull-secret.txt`.

2. Run the all-in-one install script:

   ```bash
   ./deploy/install-openshift-local.sh
   ```

   This will:
   - Download and install CRC 2.43.0
   - Run `crc setup` and `crc start` (downloads the OpenShift bundle ~4 GB on first run)
   - Build the Backstage Docker image
   - Push the image to the CRC internal registry
   - Deploy PostgreSQL + Backstage to the `backstage` namespace
   - Create an OpenShift Route for external access
   - Print the final URL

3. Access Backstage at the printed `https://backstage-backstage.apps-crc.testing` URL.

### Manual OpenShift deployment (image already in a registry)

```bash
# Login to CRC
eval "$(crc oc-env)"
oc login -u kubeadmin https://api.crc.testing:6443 --insecure-skip-tls-verify

# Create namespace + deploy
oc apply -f deploy/k8s/namespace.yaml
oc apply -f deploy/k8s/postgres.yaml
oc apply -f deploy/k8s/backstage.yaml
oc apply -f deploy/openshift/scc.yaml
oc apply -f deploy/openshift/route.yaml

# Watch rollout
oc -n backstage rollout status deployment/backstage

# Get the URL
oc -n backstage get route backstage -o jsonpath='{.spec.host}'
```

---

## Why not OpenShift Local in this CI/Cloud agent environment?

OpenShift Local (CRC) requires **hardware KVM virtualization** to boot an OpenShift VM.
This Cloud Agent runs inside a Docker container whose host exposes **cgroupv2 in threaded mode**,
which prevents:

- KVM / nested virtualization (no `/dev/kvm`, no vmx/svm CPU flags)
- k3s / containerd pod scheduling (cgroupv2 "domain invalid" child cgroups)
- kind (systemd won't boot inside a cgroupv2-threaded nested container)

The workaround deployed here runs Backstage via Docker Compose directly on the host
Docker daemon (which sidesteps cgroup isolation entirely).  
A proper OpenShift Local installation requires a physical or bare-metal VM with KVM.

---

## Backstage features enabled

- **Software Catalog** — browse and register services, APIs, libraries
- **Scaffolder** — create new projects from templates
- **TechDocs** — documentation-as-code
- **Search** — full-text search across the catalog
- **Auth** — guest login enabled (configure OAuth providers as needed)
- **Kubernetes plugin** — view workloads from connected clusters
- **Notifications** — in-app notification system
- **Permissions** — fine-grained access control framework

---

## Configuration

Edit `my-backstage-app/app-config.yaml` for local development.  
Edit `my-backstage-app/app-config.production.yaml` (or the ConfigMap in `deploy/k8s/backstage.yaml`) for production.

Key environment variables:

| Variable | Default | Description |
|---|---|---|
| `POSTGRES_HOST` | `backstage-postgres` | PostgreSQL hostname |
| `POSTGRES_PORT` | `5432` | PostgreSQL port |
| `POSTGRES_USER` | `backstage` | Database user |
| `POSTGRES_PASSWORD` | `backstage` | Database password |
| `GITHUB_TOKEN` | _(optional)_ | GitHub PAT for catalog integration |
