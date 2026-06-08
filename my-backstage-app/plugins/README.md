# @wien Backstage plugins

| Package | npm name | Depends on |
|---|---|---|
| [backstage-shared](./backstage-shared/) | `@wien/backstage-shared` | — |
| [backstage-cd-plugin](./backstage-cd-plugin/) | `@wien/backstage-cd-plugin` | `@wien/backstage-shared` |
| [backstage-i18n-de-plugin](./backstage-i18n-de-plugin/) | `@wien/backstage-i18n-de-plugin` | 14 upstream `@backstage/plugin-*` peers |
| [backstage-instanceswitcher-plugin](./backstage-instanceswitcher-plugin/) | `@wien/backstage-instanceswitcher-plugin` | `@wien/backstage-shared` |

Each plugin has its own README with wiring, extensions, and tests.

Create a new plugin with `yarn new` from the repo root.
