import { configApiRef, useApi } from '@backstage/frontend-plugin-api';

import { readCurrentWienInstance } from '@wien/backstage-shared';
import { InstanceSwitcher } from './InstanceSwitcher';

/** Presentation options forwarded from the extension config. */
export interface InstanceSwitcherContainerProps {
  scrollThreshold?: number;
  compactDelayMs?: number;
  position?: 'top-center' | 'top-right';
  offsetTop?: number;
  offsetRight?: number;
}

/**
 * Reads the `wien.instances` registry and resolves the current deployment from
 * `app.baseUrl`, then renders the presentational {@link InstanceSwitcher}. This
 * keeps `app.baseUrl` as the single source of truth — there is no separate
 * `currentInstanceId` to configure per environment.
 */
export const InstanceSwitcherContainer = (
  props: InstanceSwitcherContainerProps,
) => {
  const configApi = useApi(configApiRef);
  const { instances, current } = readCurrentWienInstance(configApi);

  if (!current) {
    return null;
  }

  return (
    <InstanceSwitcher
      currentInstanceId={current.id}
      instances={instances}
      {...props}
    />
  );
};
