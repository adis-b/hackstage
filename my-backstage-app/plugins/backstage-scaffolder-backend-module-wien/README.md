# @wien/backstage-scaffolder-backend-module-wien

Backend scaffolder module that exposes the configured Wien deployment instance to templates.

## Configuration

Add to `app-config.yaml` (and `app-config.cloud.yaml` for the cloud profile):

```yaml
wien:
  instance:
  # Must match app.extensions config for the instance switcher.
    id: on-prem
    variant: on-prem # on-prem | cloud
    label: On-Premises
    url: http://localhost:3000
```

## Scaffolder action: `wien:instance:current`

Resolves the active instance from backend config. No input required.

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
            wien.gv.at/instance: ${{ steps['resolve-instance'].output.id }}
            wien.gv.at/instance-variant: ${{ steps['resolve-instance'].output.variant }}
            wien.gv.at/instance-url: ${{ steps['resolve-instance'].output.url }}
```

## Development

```bash
yarn workspace @wien/backstage-scaffolder-backend-module-wien test
```
