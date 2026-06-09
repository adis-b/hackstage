import { PageBlueprint } from '@backstage/frontend-plugin-api';
import kubernetesPlugin from '@backstage/plugin-kubernetes/alpha';

import { OpenShiftPlaceholderContent } from './OpenShiftPlaceholderContent';

/**
 * Stadt Wien demo page on `/kubernetes` (sidebar label: OpenShift).
 *
 * Disables the upstream `page:kubernetes` route, which expects catalog entity
 * context and throws "Entity context is not available" on a standalone page.
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
