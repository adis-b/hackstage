# hackstage — Stadt Wien Corporate Design for Backstage

Drop-in Backstage frontend plugin (`@stadt-wien/backstage-plugin-cd`) that applies Stadt Wien branding: Wien CD colours, Wiener Melange typography, translated grouped sidebar, German/English UI, and optional multi-instance switching for on-prem vs cloud deployments.

![Stadt Wien Developer Portal — Deutsch](docs/assets/wien_cd_de.png)

## Quick start

### 1. Install

```sh
yarn workspace app add @stadt-wien/backstage-plugin-cd
# or: yarn workspace app add file:./stadt-wien-backstage-plugin-cd-0.3.0.tgz
```

### 2. Wire into `App.tsx`

```tsx
import { createApp } from '@backstage/frontend-defaults';
import catalogPlugin from '@backstage/plugin-catalog/alpha';
import { wienCdFeatures } from '@stadt-wien/backstage-plugin-cd/alpha';

export default createApp({
  features: [catalogPlugin, ...wienCdFeatures],
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
    - app-root-element:wien-cd/instance-switcher:
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

## What the plugin provides

| Extension | Purpose |
|---|---|
| `theme:…/wien-light`, `theme:…/wien-dark` | Wien CD themes; `instanceVariant` sets accent (`on-prem` red, `cloud` blue) |
| `translation:app/*-de` (×14) | German bundles for core Backstage plugins |
| `nav-content:app/translated-nav` | Grouped sidebar with DE/EN nav labels (no branding) |
| `page:app/wien-techdocs` | Translatable TechDocs empty state |
| `app-root-element:wien-cd/instance-switcher` | Floating top-right picker linking sibling instances |
| `app-root-element:wien-cd/wiener-melange-font` | Embedded Wiener Melange `@font-face` |

Full plugin docs: [`my-backstage-app/plugins/wien-cd/README.md`](my-backstage-app/plugins/wien-cd/README.md).

## Multi-instance deployments

Stadt Wien runs **separate Backstage instances** for on-prem and cloud (same plugin bundle, isolated workflows and catalog data). Each deployment sets its own `instanceVariant` and lists sibling URLs in the instance switcher. The switcher appears as a floating pill at the **top-right** when scrolled to the top.

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
| `my-backstage-app/plugins/wien-cd/` | Distributable plugin |
| `my-backstage-app/packages/app/` | Demo Backstage app (~42 LOC) |
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

Code: Apache-2.0 ([`my-backstage-app/plugins/wien-cd/LICENSE`](my-backstage-app/plugins/wien-cd/LICENSE)).\
Wiener Melange typeface: proprietary, © Stadt Wien.
