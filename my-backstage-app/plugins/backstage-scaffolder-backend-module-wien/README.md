# @wien/backstage-scaffolder-backend-module-wien

Backend scaffolder module that exposes the active Wien deployment instance to templates.

Scaffolder template YAML cannot read `app-config` directly (`${{ }}` only resolves
`parameters`, `steps`, `secrets`, and `user`). This module bridges that gap with a
single action that resolves the current deployment and surfaces it as step outputs.

## Configuration

The deployment registry lives once in `app-config.yaml` and is shared by every
instance. The **current** instance is resolved by matching `app.baseUrl` against
each entry's `url` — no per-environment instance id to keep in sync.

```yaml
app:
  baseUrl: http://localhost:3000 # decides which instance "this" deployment is

wien:
  instances:
    - id: on-prem
      label: On-Premises
      url: http://localhost:3000
      variant: on-prem # on-prem | cloud
    - id: cloud
      label: Cloud
      url: http://localhost:3001
      variant: cloud
```

The same `wien.instances` registry drives the frontend instance switcher, the CD theme
accent, and this backend action. The config schema is declared by
`@wien/backstage-shared`.

## Scaffolder action: `wien:instance:current`

Resolves the active instance from `app.baseUrl`. No input required.

**Outputs:**

| Field | Description |
|-------|-------------|
| `id` | Instance id (e.g. `on-prem`, `cloud`) |
| `variant` | Visual variant (`on-prem` or `cloud`) |
| `label` | Human-readable label |
| `url` | Base URL of this deployment |

### Template example

```yaml
steps:
  - id: resolve-instance
    name: Resolve Wien instance
    action: wien:instance:current

  - id: write-catalog-info
    name: Write catalog-info.yaml
    action: catalog:write
    input:
      entity:
        apiVersion: backstage.io/v1alpha1
        kind: Component
        metadata:
          name: ${{ parameters.name }}
          annotations:
            wien.at/instance: ${{ steps['resolve-instance'].output.id }}
            wien.at/instance-variant: ${{ steps['resolve-instance'].output.variant }}
            wien.at/instance-url: ${{ steps['resolve-instance'].output.url }}
```

## Companion: read-only `WienEnvironment` form field

To **show** the current instance in a scaffolder form (rather than stamp it on the
output), use the `WienEnvironment` field extension shipped by
`@wien/backstage-instanceswitcher-plugin`. It renders a disabled "Environment"
field resolved from `app.baseUrl`:

```yaml
parameters:
  - title: Component identity
    properties:
      environment:
        title: Environment
        description: >-
          If you want to change environment - use the multi instance switcher
          on the top right
        type: string
        ui:field: WienEnvironment
```

## Development

```bash
yarn workspace @wien/backstage-scaffolder-backend-module-wien test
```
