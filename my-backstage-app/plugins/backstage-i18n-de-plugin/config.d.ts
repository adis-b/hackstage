/**
 * Configuration schema contributed by `@wien/backstage-i18n-de-plugin`.
 */
export interface Config {
  /**
   * Backstage `app.extensions` keys relevant for this plugin:
   *
   *  - `nav-content:app/translated-nav` — grouped sidebar with DE/EN labels.
   *  - `page:techdocs: false` — disable upstream techdocs index page.
   *  - `page:app/wien-techdocs` — enabled automatically via plugin wiring.
   *  - `api:app/app-language` — enable DE/EN toggle in Settings → Appearance.
   */
  app?: {
    extensions?: unknown[];
  };
}
