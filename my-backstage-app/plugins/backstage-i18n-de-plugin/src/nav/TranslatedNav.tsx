import { NavContentBlueprint } from '@backstage/plugin-app-react';

import { TranslatedNavContent } from './TranslatedNavContent';

/**
 * Backstage extension that replaces the default sidebar with a grouped
 * layout whose labels follow `wienI18nDeTranslationRef` (DE/EN toggle).
 *
 * Enable in `app-config.yaml`:
 *
 *     app:
 *       extensions:
 *         - nav-content:app/translated-nav: true
 *
 * This extension must attach to the core `app` plugin because
 * `NavContentBlueprint` limits the `app/nav > content` input to
 * app-internal extensions.
 */
export const TranslatedNav = NavContentBlueprint.make({
  name: 'translated-nav',
  params: {
    component: ({ navItems }) => (
      <TranslatedNavContent navItems={navItems} />
    ),
  },
});
