import { Config } from '@backstage/config';
import type { WienInstanceVariant } from '@wien/backstage-shared';

/** Deployment identity read from `wien.instance` in app-config. */
export interface WienInstanceConfig {
  id: string;
  variant: WienInstanceVariant;
  label: string;
  url: string;
}

const VARIANTS: ReadonlySet<string> = new Set(['on-prem', 'cloud']);

function parseVariant(value: string): WienInstanceVariant {
  if (!VARIANTS.has(value)) {
    throw new Error(
      `wien.instance.variant must be "on-prem" or "cloud", got "${value}"`,
    );
  }
  return value as WienInstanceVariant;
}

/**
 * Read the current deployment instance from `wien.instance` in app-config.
 * This is the authoritative source for scaffolder actions and backend logic.
 */
export function readWienInstanceFromConfig(config: Config): WienInstanceConfig {
  const instanceConfig = config.getOptionalConfig('wien.instance');
  if (!instanceConfig) {
    throw new Error(
      'Missing wien.instance in app-config — set id, variant, label, and url for this deployment',
    );
  }

  return {
    id: instanceConfig.getString('id'),
    variant: parseVariant(instanceConfig.getString('variant')),
    label: instanceConfig.getString('label'),
    url: instanceConfig.getString('url'),
  };
}
