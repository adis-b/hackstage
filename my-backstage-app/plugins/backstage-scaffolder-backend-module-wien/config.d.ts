/**
 * Configuration schema contributed by
 * `@wien/backstage-scaffolder-backend-module-wien`.
 */
export interface Config {
  /**
   * Deployment identity for this Backstage instance.
   *
   * Set per environment (on-prem vs cloud). Should match
   * `currentInstanceId` on the instance switcher extension.
   */
  wien?: {
    instance?: {
      id: string;
      variant: 'on-prem' | 'cloud';
      label: string;
      url: string;
    };
  };
}
