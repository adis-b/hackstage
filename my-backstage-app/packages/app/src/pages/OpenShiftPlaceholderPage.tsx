import { PageBlueprint } from '@backstage/frontend-plugin-api';
import kubernetesPlugin from '@backstage/plugin-kubernetes/alpha';

import { OpenShiftPlaceholderContent } from './OpenShiftPlaceholderContent';

/**
 * Stadt Wien demo page on `/kubernetes` (sidebar label: OpenShift).
 *
 * Mounted while `page:kubernetes` is disabled in app-config.yaml — the upstream
 * page calls `useEntity()` and crashes on a standalone route.
 */
export const OpenShiftPlaceholderPage = PageBlueprint.make({
  name: 'openshift',
  params: {
    path: '/kubernetes',
    title: 'OpenShift',
    icon: kubernetesPlugin.icon,
    routeRef: kubernetesPlugin.routes.kubernetes,
    loader: async () => <OpenShiftPlaceholderContent />,
  },
});
