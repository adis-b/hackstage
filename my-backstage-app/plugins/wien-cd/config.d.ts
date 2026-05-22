/**
 * Configuration schema contributed by `@stadt-wien/backstage-plugin-cd`.
 *
 * Backstage uses the `configSchema` top-level field in this package's
 * `package.json` to find this file and merge its shape into the app's
 * `app-config.yaml` schema. See https://backstage.io/docs/conf/defining
 *
 * Only `app.extensions` is contributed — the plugin does not introduce
 * any top-level config keys of its own. Typical snippet:
 *
 *     app:
 *       extensions:
 *         - theme:app/light: false
 *         - theme:app/dark: false
 *         - theme:app/wien-light:
 *             config:
 *               instanceVariant: on-prem
 *         - theme:app/wien-dark:
 *             config:
 *               instanceVariant: on-prem
 *         - api:app/app-language:
 *             config:
 *               availableLanguages: [de, en]
 *               defaultLanguage: de
 *         - nav-content:app/wien-sidebar:
 *             config:
 *               title: Wien
 *               subtitle: Developer Portal
 *         - app-root-element:wien-cd/instance-switcher:
 *             config:
 *               currentInstanceId: on-prem
 *               instances:
 *                 - id: on-prem
 *                   label: On-Premises
 *                   url: https://backstage.internal.example.com
 *                   variant: on-prem
 *                 - id: cloud
 *                   label: Cloud
 *                   url: https://backstage.cloud.example.com
 *                   variant: cloud
 */
export interface Config {
  /**
   * Existing Backstage `app.extensions` list. Keys relevant for this
   * plugin:
   *
   *  - `theme:app/wien-light` / `theme:app/wien-dark` — Stadt Wien themes.
   *    Supports:
   *    - `instanceVariant` (`on-prem` | `cloud`): primary accent colour.
   *       Defaults to `on-prem` (Wien Rot). Use `cloud` (Wasserblau) on
   *       cloud deployments.
   *
   *  - `nav-content:app/wien-sidebar` — the branded sidebar. Supports:
   *    - `title` (string): the main line of the wordmark next to the
   *       Wiener Wappen. Defaults to "Wien".
   *    - `subtitle` (string): the secondary line below the title.
   *       Defaults to "Developer Portal".
   *
   *  - `app-root-element:wien-cd/instance-switcher` — floating top
   *    instance picker. Supports:
   *    - `currentInstanceId` (string): id of this deployment.
   *    - `instances` (array, min 2): sibling instances to link to.
   *      Each entry: `id`, `label`, `url`, `variant` (`on-prem`|`cloud`).
   *    - `scrollThreshold` (number, optional): px from top before hiding.
   *    - `position` (`top-center`|`top-right`, optional).
   *    Disable with `false`.
   *
   *  - `app-root-element:wien-cd/wiener-melange-font` — disable with
   *    `false` if you want to self-host the Wiener Melange font instead
   *    of shipping the embedded data URI.
   */
  app?: {
    extensions?: unknown[];
  };
}
