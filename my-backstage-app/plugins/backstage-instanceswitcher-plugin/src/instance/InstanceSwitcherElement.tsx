import { AppRootElementBlueprint } from '@backstage/frontend-plugin-api';
import { z } from 'zod';

import { InstanceSwitcherContainer } from './InstanceSwitcherContainer';

/**
 * App-root extension that mounts the floating instance switcher.
 *
 * The deployment registry is read from the shared `wien.instances` config and
 * the current instance is resolved from `app.baseUrl`, so this extension only
 * configures presentation:
 *
 *     app:
 *       baseUrl: https://backstage.internal.example.com
 *       extensions:
 *         - app-root-element:instanceswitcher/instance-switcher:
 *             config:
 *               compactDelayMs: 4000
 *
 *     wien:
 *       instances:
 *         - id: on-prem
 *           label: On-Premises
 *           url: https://backstage.internal.example.com
 *           variant: on-prem
 *         - id: cloud
 *           label: Cloud
 *           url: https://backstage.cloud.example.com
 *           variant: cloud
 *
 * Disable with `- app-root-element:instanceswitcher/instance-switcher: false`.
 */
export const InstanceSwitcherElement = AppRootElementBlueprint.makeWithOverrides({
  name: 'instance-switcher',
  configSchema: {
    scrollThreshold: z.number().int().positive().optional().default(16),
    compactDelayMs: z.number().int().nonnegative().optional().default(4000),
    position: z.enum(['top-center', 'top-right']).optional().default('top-right'),
    offsetTop: z.number().int().nonnegative().optional().default(8),
    offsetRight: z.number().int().nonnegative().optional().default(20),
  },
  factory(originalFactory, { config }) {
    return originalFactory({
      element: (
        <InstanceSwitcherContainer
          scrollThreshold={config.scrollThreshold}
          compactDelayMs={config.compactDelayMs}
          position={config.position}
          offsetTop={config.offsetTop}
          offsetRight={config.offsetRight}
        />
      ),
    });
  },
});
