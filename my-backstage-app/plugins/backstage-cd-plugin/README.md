# @wien/backstage-cd-plugin

Stadt Wien Corporate Design for [Backstage](https://backstage.io) — brand colours, Wien light/dark themes, and the embedded **Wiener Melange** variable font.

## Installation

```sh
yarn workspace app add @wien/backstage-cd-plugin
```

Peer deps: React 17/18 and Backstage frontend system ≥ 1.36.

## Wiring

### `packages/app/src/App.tsx`

```tsx
import { cdFeatures } from '@wien/backstage-cd-plugin/alpha';

export default createApp({
  features: [catalogPlugin, ...cdFeatures],
});
```

### `app-config.yaml`

```yaml
app:
  extensions:
    - theme:app/light: false
    - theme:app/dark: false
    - theme:app/wien-light:
        config:
          instanceVariant: on-prem   # on-prem = Wien Rot, cloud = Wasserblau
    - theme:app/wien-dark:
        config:
          instanceVariant: on-prem
```

## Extensions

| Extension ID | Purpose |
|---|---|
| `theme:app/wien-light` | Light theme; `instanceVariant` selects accent |
| `theme:app/wien-dark` | Dark theme; `instanceVariant` selects accent |
| `app-root-element:cd/wiener-melange-font` | Embedded Wiener Melange `@font-face` |

Disable the font with `- app-root-element:cd/wiener-melange-font: false`.

## Stable API

```ts
import {
  wienColors,
  wienFontStack,
  wienLightTheme,
  wienDarkTheme,
  createWienTheme,
  getVariantDisplayColor,
  type WienInstanceVariant,
} from '@wien/backstage-cd-plugin';
```

## Architecture

```mermaid
flowchart LR
  AppTsx[App.tsx] --> cdFeatures[cdFeatures]
  cdFeatures --> cdPlugin[cdPlugin]
  cdFeatures --> cdAppModule[cdAppModule]
  cdPlugin --> Font[WienerMelangeFont]
  cdAppModule --> Themes[WienLightTheme + WienDarkTheme]
```

## Troubleshooting

- **Themes not applied:** ensure default `theme:app/light` and `theme:app/dark` are disabled.
- **Wrong accent colour:** set `instanceVariant` on both `wien-light` and `wien-dark` extensions.
- **Font not loading:** check that `app-root-element:cd/wiener-melange-font` is not disabled.

## Tests

```sh
yarn workspace @wien/backstage-cd-plugin test
```

## Related packages

- `@wien/backstage-shared` — shared brand colours and variant tokens (used internally)
- `@wien/backstage-i18n-de-plugin` — German UI and translated sidebar
- `@wien/backstage-instanceswitcher-plugin` — on-prem ↔ cloud switcher
