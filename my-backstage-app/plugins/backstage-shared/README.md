# @wien/backstage-shared

Framework-agnostic Stadt Wien design tokens for `@wien` Backstage plugins.

Use this package when you need brand colours or on-prem/cloud variant accents **without** pulling in the full CD theme plugin (fonts, MUI themes, etc.).

## Installation

```sh
yarn workspace app add @wien/backstage-shared
```

## API

```ts
import {
  wienColors,
  getVariantAccent,
  getVariantDisplayColor,
  type WienInstanceVariant,
} from '@wien/backstage-shared';
```

| Export | Purpose |
|---|---|
| `wienColors` | Full Stadt Wien brand palette |
| `WienInstanceVariant` | `'on-prem' \| 'cloud'` |
| `getVariantAccent()` | Primary/light/dark/hover tokens per variant |
| `getVariantDisplayColor()` | Single accent colour for chips and badges |

## Used by

| Package | Usage |
|---|---|
| `@wien/backstage-cd-plugin` | Theme palette + variant accents |
| `@wien/backstage-instanceswitcher-plugin` | Instance pill colours |

## Tests

```sh
yarn workspace @wien/backstage-shared test
```
