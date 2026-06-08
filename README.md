# hackstage — Stadt Wien Corporate Design for Backstage

Three publishable Backstage frontend plugins under the `@wien` scope:

| Package | Purpose |
|---|---|
| `@wien/backstage-cd-plugin` | Wien CD themes, Wiener Melange font, brand tokens |
| `@wien/backstage-i18n-de-plugin` | German translations, grouped sidebar, TechDocs i18n |
| `@wien/backstage-instanceswitcher-plugin` | Floating on-prem ↔ cloud instance switcher |

![Stadt Wien Developer Portal — Deutsch](docs/assets/wien_cd_de.png)

## Quick start

### 1. Install

```sh
yarn workspace app add @wien/backstage-cd-plugin
yarn workspace app add @wien/backstage-i18n-de-plugin
yarn workspace app add @wien/backstage-instanceswitcher-plugin
```

### 2. Wire into `App.tsx`

```tsx
import { createApp } from '@backstage/frontend-defaults';
import catalogPlugin from '@backstage/plugin-catalog/alpha';
import { cdFeatures } from '@wien/backstage-cd-plugin/alpha';
import { i18nDeFeatures } from '@wien/backstage-i18n-de-plugin/alpha';
import { instanceSwitcherFeatures } from '@wien/backstage-instanceswitcher-plugin/alpha';

export default createApp({
  features: [
    catalogPlugin,
    ...cdFeatures,
    ...i18nDeFeatures,
    ...instanceSwitcherFeatures,
  ],
});
```

### 3. Configure `app-config.yaml`

```yaml
app:
  title: Wien Developer Portal
  extensions:
    - theme:app/light: false
    - theme:app/dark: false
    - theme:app/wien-light:
        config:
          instanceVariant: on-prem   # on-prem = Wien Rot, cloud = Wasserblau
    - theme:app/wien-dark:
        config:
          instanceVariant: on-prem

    - api:app/app-language:
        config:
          availableLanguages: [de, en]
          defaultLanguage: de

    - nav-item:search: false
    - nav-item:catalog: false
    - nav-item:scaffolder: false
    - nav-item:user-settings: false
    - page:techdocs: false

    - nav-content:app/translated-nav: true

    # Optional: link sibling Backstage instances (on-prem ↔ cloud)
    - app-root-element:instanceswitcher/instance-switcher:
        config:
          currentInstanceId: on-prem
          instances:
            - id: on-prem
              label: On-Premises
              url: https://backstage.internal.wien.gv.at
              variant: on-prem
            - id: cloud
              label: Cloud
              url: https://backstage.cloud.wien.gv.at
              variant: cloud

organization:
  name: Stadt Wien
```

Run `yarn start` from `my-backstage-app/`.

## What the plugins provide

| Extension | Package |
|---|---|
| `theme:…/wien-light`, `theme:…/wien-dark` | `@wien/backstage-cd-plugin` |
| `app-root-element:cd/wiener-melange-font` | `@wien/backstage-cd-plugin` |
| `translation:app/*-de` (×14) | `@wien/backstage-i18n-de-plugin` |
| `nav-content:app/translated-nav` | `@wien/backstage-i18n-de-plugin` |
| `page:app/wien-techdocs` | `@wien/backstage-i18n-de-plugin` |
| `app-root-element:instanceswitcher/instance-switcher` | `@wien/backstage-instanceswitcher-plugin` |

Plugin READMEs:

- [`my-backstage-app/plugins/backstage-cd-plugin/README.md`](my-backstage-app/plugins/backstage-cd-plugin/README.md)
- [`my-backstage-app/plugins/backstage-i18n-de-plugin/README.md`](my-backstage-app/plugins/backstage-i18n-de-plugin/README.md)
- [`my-backstage-app/plugins/backstage-instanceswitcher-plugin/README.md`](my-backstage-app/plugins/backstage-instanceswitcher-plugin/README.md)

## Multi-instance deployments

Stadt Wien runs **separate Backstage instances** for on-prem and cloud. Each deployment sets its own `instanceVariant` on the CD themes and lists sibling URLs in the instance switcher.

Local two-instance demo overlay: [`app-config.cloud.yaml`](my-backstage-app/app-config.cloud.yaml).

## Requirements

| Component | Version |
|---|---|
| Backstage | ≥ 1.36 (tested on 1.50.0) |
| Node | 22 or 24 |
| React | 17 or 18 |

## Repository layout

| Path | Purpose |
|---|---|
| `my-backstage-app/plugins/backstage-*-plugin/` | Three distributable `@wien` plugins |
| `my-backstage-app/packages/app/` | Demo Backstage app |
| `my-backstage-app/packages/backend/` | Backstage backend |
| `my-backstage-app/deploy/` | Docker, Kubernetes, OpenShift manifests |
| `docs/assets/` | Screenshots and walkthrough media |

## Demo media

[Full walkthrough (MP4)](docs/assets/wien_cd_plugin_full_walkthrough.mp4)

## Contacts

- **Repository:** [adis-b/hackstage](https://github.com/adis-b/hackstage)
- **Stadt Wien Markenmanagement:** [markenmanagement@ma53.wien.gv.at](mailto:markenmanagement@ma53.wien.gv.at)
- **Wien CD Manual:** https://www.wien.gv.at/spezial/cd-manual/

## License

Code: Apache-2.0. Wiener Melange typeface: proprietary, © Stadt Wien.
