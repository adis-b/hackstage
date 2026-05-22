import { AppRootElementBlueprint } from '@backstage/frontend-plugin-api';
import { z } from 'zod';

import {
  InstanceSwitcher,
  type InstanceSwitcherInstance,
} from './InstanceSwitcher';

const instanceSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  url: z.string().url(),
  variant: z.enum(['on-prem', 'cloud']),
});

/**
 * App-root extension that mounts the floating instance switcher.
 *
 * Configure via `app-config.yaml`:
 *
 *     app:
 *       extensions:
 *         - app-root-element:wien-cd/instance-switcher:
 *             config:
 *               currentInstanceId: on-prem
 *               instances:
 *                 - id: on-prem
 *                   label: On-Premises
 *                   url: https://backstage.internal.example.com
 *                   variant: on-prem
 *                 - id: cloud
 *                   label: Cloud
 *                   url: https://backstage.cloud.example.com
 *                   variant: cloud
 *
 * Disable with `- app-root-element:wien-cd/instance-switcher: false`.
 */
export const InstanceSwitcherElement = AppRootElementBlueprint.makeWithOverrides({
  name: 'instance-switcher',
  configSchema: {
    currentInstanceId: z.string().min(1),
    instances: z.array(instanceSchema).min(2),
    scrollThreshold: z.number().int().positive().optional().default(16),
    position: z.enum(['top-center', 'top-right']).optional().default('top-right'),
  },
  factory(originalFactory, { config }) {
    const instances = config.instances as InstanceSwitcherInstance[];
    return originalFactory({
      element: (
        <InstanceSwitcher
          currentInstanceId={config.currentInstanceId}
          instances={instances}
          scrollThreshold={config.scrollThreshold}
          position={config.position}
        />
      ),
    });
  },
});
