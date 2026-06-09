/**
 * Configuration schema contributed by `@wien/backstage-cd-plugin`.
 *
 * The `wien.instances` registry (used to derive the theme accent from
 * `app.baseUrl`) is declared canonically by `@wien/backstage-shared`.
 *
 * Typical snippet:
 *
 *     app:
 *       extensions:
 *         - theme:app/light: false
 *         - theme:app/dark: false
 *         - theme:app/wien-light: true
 *         - theme:app/wien-dark: true
 */
export interface Config {
  /**
   * Backstage `app.extensions` keys relevant for this plugin:
   *
   *  - `theme:app/wien-light` / `theme:app/wien-dark` — Stadt Wien themes.
   *    The accent variant (Wien Rot vs Wasserblau) is derived from
   *    `app.baseUrl` matched against the shared `wien.instances` registry.
   *
   *  - `app-root-element:cd/wiener-melange-font` — disable with `false` to
   *    self-host the Wiener Melange font instead of the embedded data URI.
   */
  app?: {
    extensions?: unknown[];
  };
}
