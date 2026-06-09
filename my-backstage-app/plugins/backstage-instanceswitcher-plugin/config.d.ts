/**
 * Configuration schema contributed by `@wien/backstage-instanceswitcher-plugin`.
 *
 * The `wien.instances` registry is declared canonically by
 * `@wien/backstage-shared` (see that package's `config.d.ts`).
 */
export interface Config {
  /**
   * Backstage `app.extensions` keys relevant for this plugin:
   *
   *  - `app-root-element:instanceswitcher/instance-switcher` — floating
   *    top instance picker. Supports presentation options only:
   *    - `scrollThreshold` (number, optional): px from top before hiding.
   *    - `compactDelayMs` (number, optional): ms at top before shrinking to
   *      a compact circle (default 4000). Set to 0 to disable compact mode.
   *    - `position` (`top-center`|`top-right`, optional, default `top-right`).
   *    - `offsetTop` (number, optional): px from viewport top (default 8).
   *    - `offsetRight` (number, optional): px from viewport right when
   *      `position` is `top-right` (default 20).
   *    Disable with `false`.
   */
  app?: {
    extensions?: unknown[];
  };
}
