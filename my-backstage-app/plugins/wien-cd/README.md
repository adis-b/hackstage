# @stadt-wien/backstage-plugin-cd

Stadt Wien Corporate Design for [Backstage](https://backstage.io) — in one drop-in frontend plugin:

- brand colours (Wien Rot, Abendstimmung, Morgenrot, …) as two themes,
- the **Wiener Melange** variable font (embedded),
- a branded sidebar with the Wiener Wappen and configurable wordmark,
- German translations for every user-visible core plugin,
- full bidirectional language toggle (Deutsch ⇄ English) via Settings → Appearance.

After installation and a ~10-line `app-config.yaml` change your Backstage app renders as a Stadt-Wien portal — no per-app styling, no per-app sidebar, no per-app i18n wiring required.

## Installation

```sh
# public npm (or your internal registry — see "Publishing" below)
yarn workspace app add @stadt-wien/backstage-plugin-cd

# offline / air-gapped: install from tarball
yarn workspace app add file:./stadt-wien-backstage-plugin-cd-0.2.0.tgz
```

Peer deps: React 17/18 and Backstage frontend system ≥ 1.36.

## Wiring

### 1. `packages/app/src/App.tsx`

```tsx
import { createApp } from '@backstage/frontend-defaults';
import catalogPlugin from '@backstage/plugin-catalog/alpha';
import { wienCdFeatures } from '@stadt-wien/backstage-plugin-cd/alpha';

export default createApp({
  features: [catalogPlugin, ...wienCdFeatures],
});
```

That is *the entire app-side code* — no `modules/theme`, no `modules/nav`, no `modules/i18n`.

### 2. `app-config.yaml`

```yaml
app:
  extensions:
    # Replace the default Backstage light/dark themes with Stadt Wien.
    - theme:app/light: false
    - theme:app/dark: false

    # Enable the German + English language toggle under Settings → Appearance.
    - api:app/app-language:
        config:
          availableLanguages: [de, en]
          defaultLanguage: de

    # Wordmark rendered next to the Wiener Wappen in the sidebar.
    - nav-content:app/wien-sidebar:
        config:
          title: Wien
          subtitle: Developer Portal

    # Suppress the auto-generated NavItems that the branded sidebar
    # already renders in its own groups.
    - nav-item:search: false
    - nav-item:catalog: false
    - nav-item:scaffolder: false
    - nav-item:user-settings: false
```

That's it.

## What you get

### Extensions registered


| Extension id                                   | Kind             | Purpose                                                                                                                                                                                                                                      |
| ---------------------------------------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `theme:app/wien-light`                         | theme            | Light theme (Wien Rot / Nebelgrau Light) named "Wien (hell)".                                                                                                                                                                                |
| `theme:app/wien-dark`                          | theme            | Dark theme (Wien Rot on #1b1b1b) named "Wien (dunkel)".                                                                                                                                                                                      |
| `translation:app/*-de` (x 14)                  | translation      | German resource bundles for `user-settings`, `catalog`, `catalog-react`, `scaffolder`, `scaffolder-react`, `api-docs`, `catalog-graph`, `catalog-import`, `notifications`, `search`, `search-react`, `org`, `core-components`, `kubernetes`. |
| `translation:app/wien-cd-de`                   | translation      | Sidebar labels + NavItem title overrides (the things no upstream ref covers).                                                                                                                                                                |
| `nav-content:app/wien-sidebar`                 | nav-content      | Replaces the default Backstage sidebar with the Wien-branded one. Configurable title/subtitle.                                                                                                                                               |
| `app-root-element:wien-cd/wiener-melange-font` | app-root-element | `@font-face` injector with the embedded Wiener Melange variable font.                                                                                                                                                                        |


### Programmatic exports

`@stadt-wien/backstage-plugin-cd` (stable):

```ts
import {
  wienColors, wienFontStack,
  wienLightTheme, wienDarkTheme,        // raw UnifiedTheme objects
  wienGermanTranslations,               // { userSettings, catalog, … } resources
  wienCdTranslationRef, slugifyNavItemId,
  WienerWappen, WienSidebarLogoFull, WienSidebarLogo,
} from '@stadt-wien/backstage-plugin-cd';
```

`@stadt-wien/backstage-plugin-cd/alpha` (frontend-system):

```ts
import {
  wienCdFeatures,      // [wienCdPlugin, wienCdAppModule]
  wienCdPlugin,        // the font plugin on its own
  wienCdAppModule,     // themes + translations + sidebar attached to 'app'
} from '@stadt-wien/backstage-plugin-cd/alpha';
```

### Disabling the embedded font

If you prefer to self-host the Wiener Melange font (e.g. from `assets.wien.gv.at`), disable the injector:

```yaml
app:
  extensions:
    - app-root-element:wien-cd/wiener-melange-font: false
```

and add your own `@font-face` to `packages/app/public/index.html`.

## Publishing / distributing

- **Public npm**: `yarn workspace @stadt-wien/backstage-plugin-cd npm publish --access public`
- **Internal registry** (GitHub Packages, Verdaccio, Artifactory): set `publishConfig.registry` in `package.json`, then same `npm publish` command.
- **Tarball** (air-gapped): `yarn workspace @stadt-wien/backstage-plugin-cd pack -o wien-cd.tgz` → install with `yarn add ./wien-cd.tgz`.
- **In-repo monorepo**: works out of the box as a `workspace:^` dep.

## Typography license

The **Wiener Melange** typeface is the property of the City of Vienna and is redistributed here under the Stadt Wien brand usage terms. Use outside Stadt Wien / City of Vienna projects requires written permission from:

> Markenmanagement Kommunikation und Medien  
> [markenmanagement@ma53.wien.gv.at](mailto:markenmanagement@ma53.wien.gv.at)  
> +43 1 4000 81024

See [https://handbuch.wien.gv.at/look-and-feel/typography/](https://handbuch.wien.gv.at/look-and-feel/typography/) for the official policy.

## License

Code: Apache-2.0 (see `LICENSE`).  
Font asset: proprietary, © Stadt Wien. See "Typography license" above.