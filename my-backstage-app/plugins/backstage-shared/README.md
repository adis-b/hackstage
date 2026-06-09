# @wien/backstage-shared

Framework-agnostic Stadt Wien design tokens for `@wien` Backstage plugins.

Use this package when you need brand colours, on-prem/cloud variant accents, deployment instance resolution, or catalog annotation keys **without** pulling in the full CD theme plugin (fonts, MUI themes, etc.).

## Installation

```sh
yarn workspace app add @wien/backstage-shared
```

## Configuration

This package contributes the canonical `config.d.ts` schema for the shared deployment registry:

```yaml
wien:
  instances:
    - id: on-prem
      label: On-Premises
      url: http://localhost:3000
      variant: on-prem
    - id: cloud
      label: Cloud
      url: http://localhost:3001
      variant: cloud
```

The **current** deployment is resolved by matching `app.baseUrl` against each entry's `url`. See the workspace README for how the switcher, CD theme, scaffolder action, and `WienEnvironment` field consume this registry.

## API

```ts
import {
  wienColors,
  getVariantAccent,
  getVariantDisplayColor,
  readWienInstances,
  readCurrentWienInstance,
  wienAnnotations,
  type WienInstanceVariant,
  type WienInstance,
  type WienAnnotationKey,
} from '@wien/backstage-shared';
```

| Export | Purpose |
|---|---|
| `wienColors` | Full Stadt Wien brand palette |
| `WienInstanceVariant` | `'on-prem' \| 'cloud'` |
| `getVariantAccent()` | Primary/light/dark/hover tokens per variant |
| `getVariantDisplayColor()` | Single accent colour for chips and badges |
| `readWienInstances()` | Parse `wien.instances` from a `Config` / `configApi` |
| `resolveCurrentInstance()` | Match one base URL against the registry |
| `readCurrentWienInstance()` | Registry + current instance for `app.baseUrl` |
| `WIEN_ANNOTATION_PREFIX` | `'wien.at'` |
| `wienAnnotations` | Stable `wien.at/*` catalog annotation keys |
| `WienAnnotationKey` | Union type of all `wienAnnotations` values |

### Annotation keys

Use `wienAnnotations` instead of string literals when reading bilingual metadata or deployment identity from entity annotations:

```ts
const titleEn =
  entity.metadata.annotations?.[wienAnnotations.titleEn] ??
  entity.metadata.title;
```

## Used by

| Package | Usage |
|---|---|
| `@wien/backstage-cd-plugin` | Theme palette + variant accents |
| `@wien/backstage-instanceswitcher-plugin` | Instance pill colours + `WienEnvironment` field |
| `@wien/backstage-scaffolder-backend-module-wien` | `wien:instance:current` action |

## Tests

```sh
yarn workspace @wien/backstage-shared test
```
