/**
 * Configuration schema contributed by `@wien/backstage-cd-plugin`.
 *
 * Typical snippet:
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
 */
export interface Config {
  /**
   * Backstage `app.extensions` keys relevant for this plugin:
   *
   *  - `theme:app/wien-light` / `theme:app/wien-dark` — Stadt Wien themes.
   *    `instanceVariant` (`on-prem` | `cloud`) selects the primary accent.
   *
   *  - `app-root-element:cd/wiener-melange-font` — disable with `false` to
   *    self-host the Wiener Melange font instead of the embedded data URI.
   */
  app?: {
    extensions?: unknown[];
  };
}
