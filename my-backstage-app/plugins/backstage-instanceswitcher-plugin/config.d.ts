/**
 * Configuration schema contributed by `@wien/backstage-instanceswitcher-plugin`.
 */
export interface Config {
  /**
   * Backstage `app.extensions` keys relevant for this plugin:
   *
   *  - `app-root-element:instanceswitcher/instance-switcher` — floating
   *    top instance picker. Supports:
   *    - `currentInstanceId` (string): id of this deployment.
   *    - `instances` (array, min 2): sibling instances to link to.
   *      Each entry: `id`, `label`, `url`, `variant` (`on-prem`|`cloud`).
   *    - `scrollThreshold` (number, optional): px from top before hiding.
   *    - `position` (`top-center`|`top-right`, optional, default `top-right`).
   *    Disable with `false`.
   *
   * Pair `instances[].variant` with `theme:app/wien-light` /
   * `theme:app/wien-dark` `instanceVariant` from `@wien/backstage-cd-plugin`
   * (colours resolve via `@wien/backstage-shared`).
   */
  app?: {
    extensions?: unknown[];
  };
}
