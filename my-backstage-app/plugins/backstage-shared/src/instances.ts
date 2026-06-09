import type { Config } from '@backstage/config';
import type { WienInstanceVariant } from './variants';

/** A single Stadt Wien deployment in the `wien.instances` registry. */
export interface WienInstance {
  id: string;
  label: string;
  url: string;
  variant: WienInstanceVariant;
}

const VARIANTS: ReadonlySet<string> = new Set(['on-prem', 'cloud']);

function parseVariant(value: string): WienInstanceVariant {
  if (!VARIANTS.has(value)) {
    throw new Error(
      `wien.instances[].variant must be "on-prem" or "cloud", got "${value}"`,
    );
  }
  return value as WienInstanceVariant;
}

/** Normalise a base URL for comparison (drop trailing slashes, lowercase). */
export function normalizeInstanceUrl(url: string): string {
  return url.trim().replace(/\/+$/, '').toLowerCase();
}

/**
 * Read the `wien.instances` deployment registry from app-config.
 *
 * Works with both the frontend `configApi` and the backend root config —
 * both implement the `@backstage/config` `Config` interface.
 */
export function readWienInstances(config: Config): WienInstance[] {
  const configured = config.getOptionalConfigArray('wien.instances') ?? [];
  return configured.map(entry => ({
    id: entry.getString('id'),
    label: entry.getString('label'),
    url: entry.getString('url'),
    variant: parseVariant(entry.getString('variant')),
  }));
}

/** Find the registry entry whose `url` matches the given base URL. */
export function resolveCurrentInstance(
  instances: WienInstance[],
  baseUrl: string,
): WienInstance | undefined {
  const target = normalizeInstanceUrl(baseUrl);
  return instances.find(instance => normalizeInstanceUrl(instance.url) === target);
}

/** Result of resolving the active deployment from config. */
export interface CurrentWienInstance {
  instances: WienInstance[];
  current?: WienInstance;
}

/**
 * Read the registry and resolve the current deployment by matching
 * `app.baseUrl` against `wien.instances[].url`. This makes `app.baseUrl`
 * the single source of truth for which instance a deployment is.
 */
export function readCurrentWienInstance(config: Config): CurrentWienInstance {
  const instances = readWienInstances(config);
  const baseUrl = config.getOptionalString('app.baseUrl') ?? '';
  return { instances, current: resolveCurrentInstance(instances, baseUrl) };
}
