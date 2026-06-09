/**
 * Configuration schema contributed by `@wien/backstage-shared`.
 *
 * Canonical declaration for `wien.instances` — consumed by the instance
 * switcher, CD theme accent, `WienEnvironment` scaffolder field, and the
 * `wien:instance:current` backend action.
 */
export interface Config {
  wien?: {
    /**
     * Sibling Backstage deployments. The **current** deployment is resolved by
     * matching `app.baseUrl` against each entry's `url`.
     *
     * @visibility frontend
     */
    instances?: Array<{
      /** Stable instance id. @visibility frontend */
      id: string;
      /** Human-readable label. @visibility frontend */
      label: string;
      /**
       * Public base URL of the deployment. Matched against `app.baseUrl`.
       * @visibility frontend
       */
      url: string;
      /** Visual variant (`on-prem` | `cloud`). @visibility frontend */
      variant: 'on-prem' | 'cloud';
    }>;
  };
}
