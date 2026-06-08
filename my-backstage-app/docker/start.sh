#!/usr/bin/env bash
# Start Backstage via Docker Compose (optional — yarn start is the primary dev path).
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

info()  { echo -e "${GREEN}[INFO]${NC} $*"; }
warn()  { echo -e "${YELLOW}[WARN]${NC} $*"; }

if ! docker image inspect backstage:latest &>/dev/null; then
    info "Building Backstage Docker image..."
    cd "${REPO_ROOT}"

    if [[ ! -f "packages/backend/dist/bundle.tar.gz" ]]; then
        info "Installing dependencies..."
        yarn install --immutable
        info "Building backend..."
        yarn build:backend
    fi

    docker build -f packages/backend/Dockerfile -t backstage:latest .
    info "Image built successfully."
fi

info "Starting Backstage with Docker Compose..."
cd "${SCRIPT_DIR}"
docker compose up -d

info "Waiting for Backstage to be ready (max 60s)..."
for _ in $(seq 1 12); do
    if curl -sf "http://localhost:7007/" &>/dev/null; then
        echo ""
        info "Backstage is running at http://localhost:7007"
        exit 0
    fi
    echo -n "."
    sleep 5
done

warn "Backstage may still be starting. Check: docker compose logs -f backstage"
