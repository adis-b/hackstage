#!/usr/bin/env bash
# ============================================================
# start.sh - Start Backstage using Docker Compose
# ============================================================
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/../.." && pwd)"

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

info()  { echo -e "${GREEN}[INFO]${NC} $*"; }
warn()  { echo -e "${YELLOW}[WARN]${NC} $*"; }

# ── 1. Build if image doesn't exist ────────────────────────
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

# ── 2. Start services ──────────────────────────────────────
info "Starting Backstage with Docker Compose..."
cd "${SCRIPT_DIR}"
docker compose up -d

# ── 3. Wait for health ─────────────────────────────────────
info "Waiting for Backstage to be ready (max 60s)..."
for i in $(seq 1 12); do
    if curl -sf "http://localhost:7007/" &>/dev/null; then
        echo ""
        info "============================================================"
        info "Backstage is running!"
        info "  URL: http://localhost:7007"
        info "============================================================"
        exit 0
    fi
    echo -n "."
    sleep 5
done

warn "Backstage may still be starting up. Check logs with:"
warn "  docker compose logs -f backstage"
warn "  Access URL: http://localhost:7007"
