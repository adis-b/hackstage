import { NavContentBlueprint } from '@backstage/plugin-app-react';
import { z } from 'zod';

import { WienSidebarContent } from './WienSidebarContent';

/**
 * Backstage extension that replaces the whole sidebar with the Stadt
 * Wien branded one. Title / subtitle can be overridden via
 * `app-config.yaml`:
 *
 *     app:
 *       extensions:
 *         - nav-content:app/wien-sidebar:
 *             config:
 *               title: Wien
 *               subtitle: Developer Portal
 *
 * This extension must be attached to the core `app` plugin because
 * `NavContentBlueprint` limits the `app/nav > content` input to
 * app-internal extensions.
 */
export const WienSidebar = NavContentBlueprint.makeWithOverrides({
  name: 'wien-sidebar',
  configSchema: {
    title: z.string().optional(),
    subtitle: z.string().optional(),
  },
  factory(originalFactory, { config }) {
    return originalFactory({
      component: ({ navItems }) => (
        <WienSidebarContent
          title={config.title}
          subtitle={config.subtitle}
          navItems={navItems}
        />
      ),
    });
  },
});
