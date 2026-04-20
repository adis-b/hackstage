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
 *         - api:app/app-language:
 *             config:
 *               availableLanguages: [de, en]
 *               defaultLanguage: de
 *         - nav-content:app/wien-sidebar:
 *             config:
 *               title: Wien
 *               subtitle: Developer Portal
 */
export interface Config {
  /**
   * Existing Backstage `app.extensions` list. Keys relevant for this
   * plugin:
   *
   *  - `nav-content:app/wien-sidebar` — the branded sidebar. Supports:
   *    - `title` (string): the main line of the wordmark next to the
   *       Wiener Wappen. Defaults to "Wien".
   *    - `subtitle` (string): the secondary line below the title.
   *       Defaults to "Developer Portal".
   *
   *  - `app-root-element:wien-cd/wiener-melange-font` — disable with
   *    `false` if you want to self-host the Wiener Melange font instead
   *    of shipping the embedded data URI.
   */
  app?: {
    extensions?: unknown[];
  };
}
