import { NavContentBlueprint } from '@backstage/plugin-app-react';

import { TranslatedNavContent } from './TranslatedNavContent';

/** Demo-app extension — grouped sidebar with DE/EN labels from the i18n plugin. */
export const TranslatedNav = NavContentBlueprint.make({
  name: 'translated-nav',
  params: {
    component: ({ navItems }) => (
      <TranslatedNavContent navItems={navItems} />
    ),
  },
});
