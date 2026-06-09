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

## Deployment instances & environment

This portal can run as more than one deployment (e.g. **On-Premises** and **Cloud**).
Everything that is instance-specific is derived from **one** registry plus the app's
own base URL — there is no per-deployment instance id to keep in sync.

### 1. The single registry: `wien.instances`

Define every sibling deployment **once** in `app-config.yaml`:

```yaml
app:
  baseUrl: http://localhost:3000 # decides which instance THIS deployment is

wien:
  instances:
    - id: on-prem
      label: On-Premises
      url: http://localhost:3000
      variant: on-prem # on-prem | cloud  → drives the accent colour
    - id: cloud
      label: Cloud
      url: http://localhost:3001
      variant: cloud
```

The **current** instance is the registry entry whose `url` matches `app.baseUrl`
(trailing slash / case-insensitive). To deploy the cloud variant, only override
`app.baseUrl` — see `app-config.cloud.yaml`, which is intentionally tiny:

```yaml
app:
  baseUrl: http://localhost:3001 # now resolves to the "cloud" entry

backend:
  baseUrl: http://localhost:7008
  listen: { port: 7008 }
  cors: { origin: http://localhost:3001 }
```

### 2. What the registry drives

| Consumer | Package | Behaviour |
|---|---|---|
| Instance switcher | `@wien/backstage-instanceswitcher-plugin` | Floating pill linking siblings; current = matched `app.baseUrl` |
| CD theme accent | `@wien/backstage-cd-plugin` | `variant` of the current instance → Wien Rot (on-prem) / Wasserblau (cloud) |
| Scaffolder action | `@wien/backstage-scaffolder-backend-module-wien` | `wien:instance:current` resolves the current instance for templates |
| Template form field | `packages/app` (`WienEnvironment`) | Read-only "Environment" field in scaffolder forms |

The shared resolver lives in `@wien/backstage-shared`
(`readWienInstances` / `resolveCurrentInstance` / `readCurrentWienInstance`) and works
with both the frontend `configApi` and the backend `Config`.

The instance switcher extension only configures presentation (no instance data):

```yaml
app:
  extensions:
    - app-root-element:instanceswitcher/instance-switcher:
        config:
          scrollThreshold: 16   # px scrolled before hiding
          compactDelayMs: 4000  # ms at top before shrinking to a circle (0 = never)
          position: top-right   # or top-center
          offsetTop: 8
          offsetRight: 20
```

### 3. Using the instance in scaffolder templates

Template YAML cannot read `app-config` directly (`${{ }}` only resolves
`parameters`, `steps`, `secrets`, `user`). Two mechanisms bridge that gap:

**a) `wien:instance:current` action** — stamp the instance onto generated entities:

```yaml
steps:
  - id: resolve-instance
    action: wien:instance:current     # no input
  - id: write-catalog-info
    action: catalog:write
    input:
      entity:
        metadata:
          annotations:
            wien.at/instance: ${{ steps['resolve-instance'].output.id }}
            wien.at/instance-variant: ${{ steps['resolve-instance'].output.variant }}
            wien.at/instance-url: ${{ steps['resolve-instance'].output.url }}
```

Outputs: `id`, `variant`, `label`, `url`.

**b) `WienEnvironment` form field** — show the current deployment in the form as a
**read-only** field. Add a property and point `ui:field` at it:

```yaml
parameters:
  - title: Component identity
    properties:
      # Read-only — shows On-Premises / Cloud, resolved from app.baseUrl.
      # If you want to change environment - use the multi instance switcher
      # on the top right.
      environment:
        title: Environment
        description: >-
          If you want to change environment - use the multi instance switcher
          on the top right
        type: string
        ui:field: WienEnvironment
```

The field is greyed out and cannot be edited; switching environments is done via
the floating instance switcher. It is registered in `packages/app`
(`src/scaffolder/`) and wired through `demoAppModule.ts`, so it is available to
every template in this app. See
`examples/template-wien-bilingual/template.yaml` for a full example.

> **Annotation namespace:** Stadt Wien metadata uses the `wien.at/*` prefix
> (e.g. `wien.at/title-de`, `wien.at/instance`).

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
