# my-backstage-app — Plugin development workspace

Minimal [Backstage](https://backstage.io) monorepo for developing and testing the `@wien` plugins.

## Run locally

```sh
yarn install
yarn start
```

- Frontend: http://localhost:3000
- Backend: http://localhost:7007

![Catalog with Wien CD and German sidebar](../docs/assets/plugin-cd-theme.png)

The grouped German sidebar is wired in `packages/app/src/nav/` + `demoAppModule.ts`, not in the i18n plugin.

![German sidebar](../docs/assets/plugin-i18n-sidebar-de.png)

Two-instance demo (on-prem + cloud):

```sh
# Terminal 1
yarn start

# Terminal 2
yarn workspace app start --config ../../app-config.yaml --config ../../app-config.cloud.yaml --port 3001
```

## Packages

| Package | Role |
|---|---|
| `plugins/backstage-shared` | `@wien/backstage-shared` — shared tokens |
| `plugins/backstage-cd-plugin` | `@wien/backstage-cd-plugin` |
| `plugins/backstage-i18n-de-plugin` | `@wien/backstage-i18n-de-plugin` |
| `plugins/backstage-instanceswitcher-plugin` | `@wien/backstage-instanceswitcher-plugin` |
| `plugins/backstage-scaffolder-backend-module-wien` | `@wien/backstage-scaffolder-backend-module-wien` — `wien:instance:current` scaffolder action |
| `packages/app` | Demo frontend + grouped German sidebar (`src/nav/`) |
| `packages/backend` | Demo backend |

## Commands

```sh
yarn test                              # all packages
yarn workspace @wien/backstage-shared test
yarn workspace @wien/backstage-cd-plugin test
yarn workspace @wien/backstage-i18n-de-plugin test
yarn workspace @wien/backstage-i18n-de-plugin i18n:coverage:check
yarn workspace @wien/backstage-instanceswitcher-plugin test
yarn workspace @wien/backstage-scaffolder-backend-module-wien test
yarn screenshots                         # requires yarn start running
```

## Optional Docker backend

```sh
./docker/start.sh
```

See [../README.md](../README.md) for plugin architecture and dependency details.

## Troubleshooting

**Changes not visible on http://localhost:3000?** Pull the latest `main`, then fully restart the dev server — `app-config.yaml` and frontend module changes are not picked up by hot reload:

```sh
git pull origin main
# stop the running yarn start (Ctrl+C), then:
yarn start
```

**OpenShift (`/kubernetes`) shows `Entity context is not available`:** You are on an old build or stale dev server. After pulling and restarting, the page should show an “OpenShift nicht konfiguriert” placeholder instead.
