import { Config } from '@backstage/config';
import { createTemplateAction } from '@backstage/plugin-scaffolder-node';

import { readWienInstanceFromConfig } from '../instance/readWienInstanceFromConfig';

/** Scaffolder action that resolves the current deployment from `wien.instance`. */
export function createWienInstanceCurrentAction(options: { config: Config }) {
  const { config } = options;

  return createTemplateAction({
    id: 'wien:instance:current',
    description:
      'Returns the current Backstage deployment instance (on-prem or cloud) from app-config wien.instance',
    schema: {
      output: {
        id: z =>
          z.string().describe('Instance id (e.g. on-prem, cloud)'),
        variant: z =>
          z
            .enum(['on-prem', 'cloud'])
            .describe('Instance variant for Stadt Wien CD accents'),
        label: z => z.string().describe('Human-readable instance label'),
        url: z => z.string().describe('Public base URL of this deployment'),
      },
    },
    async handler(ctx) {
      const instance = readWienInstanceFromConfig(config);
      ctx.logger.info(
        `Resolved deployment instance: ${instance.id} (${instance.variant})`,
      );
      ctx.output('id', instance.id);
      ctx.output('variant', instance.variant);
      ctx.output('label', instance.label);
      ctx.output('url', instance.url);
    },
  });
}
