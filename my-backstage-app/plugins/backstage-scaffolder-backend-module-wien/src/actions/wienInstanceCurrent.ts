import { Config } from '@backstage/config';
import { createTemplateAction } from '@backstage/plugin-scaffolder-node';

import { readCurrentWienInstance } from '@wien/backstage-shared';

/**
 * Scaffolder action that resolves the current deployment by matching
 * `app.baseUrl` against the `wien.instances` registry. Templates cannot read
 * app-config directly, so this action surfaces the active instance as step
 * outputs they can stamp onto generated entities.
 */
export function createWienInstanceCurrentAction(options: { config: Config }) {
  const { config } = options;

  return createTemplateAction({
    id: 'wien:instance:current',
    description:
      'Returns the current Backstage deployment instance (on-prem or cloud), resolved from app.baseUrl against the wien.instances registry',
    schema: {
      output: {
        id: z => z.string().describe('Instance id (e.g. on-prem, cloud)'),
        variant: z =>
          z
            .enum(['on-prem', 'cloud'])
            .describe('Instance variant for Stadt Wien CD accents'),
        label: z => z.string().describe('Human-readable instance label'),
        url: z => z.string().describe('Public base URL of this deployment'),
      },
    },
    async handler(ctx) {
      const { current, instances } = readCurrentWienInstance(config);
      if (!current) {
        throw new Error(
          `Could not resolve the current Wien instance: app.baseUrl did not match any wien.instances url ` +
            `(configured: ${instances.map(i => i.url).join(', ') || 'none'})`,
        );
      }
      ctx.logger.info(
        `Resolved deployment instance: ${current.id} (${current.variant})`,
      );
      ctx.output('id', current.id);
      ctx.output('variant', current.variant);
      ctx.output('label', current.label);
      ctx.output('url', current.url);
    },
  });
}
