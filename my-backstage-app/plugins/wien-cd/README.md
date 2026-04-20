# @stadt-wien/backstage-plugin-cd

Stadt Wien Corporate Design for [Backstage](https://backstage.io) — brand colors (Wien Rot, Abendstimmung, Morgenrot, …), the **Wiener Melange** variable font, and German translations for the most common core plugins, all in one drop-in frontend plugin for the new Backstage frontend system.

Wien light theme

## What you get

- **Themes** — `wien-light` (`Wien (hell)`) and `wien-dark` (`Wien (dunkel)`) built with `createUnifiedTheme`. Palette sourced from the official [wien.gv.at Farben handbook](https://handbuch.wien.gv.at/look-and-feel/farben/): Wien Rot `#ff0000`, Abendstimmung `#49274b`, Morgenrot `#ff5a64`, Fast Schwarz `#292929`, Nebelgrau Light `#f3f1ef`, …
- **Typography** — the Wiener Melange variable font is embedded as a base64 woff2 inside the package (~30 KB). The plugin injects an `@font-face` rule and overrides both the body `font-family` and the `--bui-font-regular` custom property used by `@backstage/ui`, so every piece of Backstage UI renders in the Wien brand typography without any CDN or asset hosting on your side.
- **Page themes** — red/purple/green/blue page banners for `home`, `documentation`, `tool`, `service`, `website`, `library`, `app`, `apis`, `other`, all using Wien CD colours.
- **German translations** — localised UI for `user-settings`, `catalog` and `scaffolder`. Enables the Settings → Appearance language toggle (Deutsch / English).

## Installation

```sh
# npm
npm install @stadt-wien/backstage-plugin-cd

# yarn classic
yarn add @stadt-wien/backstage-plugin-cd

# yarn berry
yarn workspace app add @stadt-wien/backstage-plugin-cd
```

Peer deps: React 17/18 and Backstage frontend system >= 1.36.

## Wiring it up

### 1. Register the features

In `packages/app/src/App.tsx`:

```tsx
import { createApp } from '@backstage/frontend-defaults';
import catalogPlugin from '@backstage/plugin-catalog/alpha';
import { wienCdFeatures } from '@stadt-wien/backstage-plugin-cd';

export default createApp({
  features: [catalogPlugin, ...wienCdFeatures],
});
```

`wienCdFeatures` is a tuple of two `FrontendFeature`s:


| Feature           | Purpose                                                                                                                                                                                                                             |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `wienCdAppModule` | Registers the `wien-light` / `wien-dark` themes and the German translation resources. Attaches to the core `app` plugin because Backstage marks the theme / translation inputs as `internal: true` and only accepts them from `app` |
| `wienCdPlugin`    | Registers the `@font-face` injector for the Wiener Melange variable font                                                                                                                                                            |


You can also import them individually if you prefer granular control:

```ts
import { wienCdPlugin, wienCdAppModule } from '@stadt-wien/backstage-plugin-cd';
```

### 2. Configure `app-config.yaml`

```yaml
app:
  extensions:
    # Replace the built-in Backstage themes with the Stadt Wien CD themes.
    - theme:app/light: false
    - theme:app/dark: false

    # Enable the language toggle in Settings → Appearance.
    - api:app/app-language:
        config:
          availableLanguages:
            - de
            - en
          defaultLanguage: de
```

That's it. The Wien themes appear under **Settings → Appearance → Theme**, the language toggle appears below them, and the Wiener Melange font is loaded automatically on app start.

## Optional: disable the embedded font

If you prefer to host the font yourself (e.g. via your own CDN or the `assets.wien.gv.at` CDN), disable the bundled `@font-face` injector in `app-config.yaml`:

```yaml
app:
  extensions:
    - app-root-element:wien-cd/wiener-melange-font: false
```

and add your own `<style>` / `<link rel="stylesheet">` to `packages/app/public/index.html`.

## Programmatic theme access

The raw `UnifiedTheme` objects and the brand palette are also exported:

```ts
import {
  wienLightTheme,
  wienDarkTheme,
  wienColors,
  wienFontStack,
} from '@stadt-wien/backstage-plugin-cd';
```

Useful for standalone Material UI surfaces outside the Backstage shell (e.g. Storybook stories, standalone admin tools).

## Publishing / distributing

The package is a regular Backstage frontend plugin under the `plugins/*` workspace. To distribute it:

- **npm (public)** — `yarn workspace @stadt-wien/backstage-plugin-cd npm publish --access public`
- **npm (GitHub Packages / Artifactory / Verdaccio)** — set `publishConfig.registry` in `package.json` and run the same command.
- **Tarball (air-gapped)** — `yarn workspace @stadt-wien/backstage-plugin-cd pack` → produces a `.tgz` that can be installed with `npm install ./stadt-wien-backstage-plugin-cd-0.1.0.tgz`.
- **In-repo monorepo** — other repos can consume the package directly as a yarn workspace or a `file:` / `portal:` dependency.

## Typography license

The **Wiener Melange** typeface is the property of the City of Vienna and is redistributed here under the Stadt Wien brand usage terms. Use outside Stadt Wien / City of Vienna projects requires written permission from:

> Markenmanagement Kommunikation und Medien  
> [markenmanagement@ma53.wien.gv.at](mailto:markenmanagement@ma53.wien.gv.at)  
> +43 1 4000 81024

See [https://handbuch.wien.gv.at/look-and-feel/typography/](https://handbuch.wien.gv.at/look-and-feel/typography/) for the official policy.

## License

Code: Apache-2.0 (see `LICENSE`).  
Font asset: proprietary, © Stadt Wien. See "Typography license" above.