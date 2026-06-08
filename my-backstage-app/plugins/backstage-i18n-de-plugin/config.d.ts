/**
 * Configuration schema contributed by `@wien/backstage-i18n-de-plugin`.
 */
export interface Config {
  /**
   * Backstage `app.extensions` keys relevant for this plugin:
   *
   *  - `page:techdocs: false` — disable upstream techdocs index page.
   *  - `page:app/wien-techdocs` — enabled automatically via plugin wiring.
   *  - `api:app/app-language` — enable DE/EN toggle in Settings → Appearance.
   *
   * Grouped sidebar (`nav-content:app/translated-nav`) is wired by the demo
   * app, not this plugin — see `packages/app/src/demoAppModule.ts`.
   */
  app?: {
    extensions?: unknown[];
  };
}
