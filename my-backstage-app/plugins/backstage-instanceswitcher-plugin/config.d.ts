/**
 * Configuration schema contributed by `@wien/backstage-instanceswitcher-plugin`.
 */
export interface Config {
  /**
   * Stadt Wien deployment registry, shared by the instance switcher, the CD
   * theme accent, and the `wien:instance:current` scaffolder action.
   *
   * The **current** deployment is resolved by matching `app.baseUrl` against
   * each entry's `url`, so there is no separate "current instance id" to keep
   * in sync per environment.
   */
  wien?: {
    /**
     * Sibling Backstage deployments (min 2 to render the switcher).
     * @visibility frontend
     */
    instances?: Array<{
      /**
       * Stable instance id.
       * @visibility frontend
       */
      id: string;
      /**
       * Human-readable label shown in the switcher.
       * @visibility frontend
       */
      label: string;
      /**
       * Public base URL of the deployment. Matched against `app.baseUrl`
       * to determine the current instance.
       * @visibility frontend
       */
      url: string;
      /**
       * Visual variant driving the Stadt Wien accent colour.
       * @visibility frontend
       */
      variant: 'on-prem' | 'cloud';
    }>;
  };

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
