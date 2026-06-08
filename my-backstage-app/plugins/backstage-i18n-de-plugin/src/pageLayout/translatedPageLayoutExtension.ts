import { SwappableComponentBlueprint } from '@backstage/plugin-app-react';

import { translatedPageLayoutExtension } from './TranslatedPageLayout';

/** Overrides `component:app/core-page-layout` with language-aware titles. */
export const TranslatedPageLayoutExtension = SwappableComponentBlueprint.make({
  name: 'core-page-layout',
  params: define =>
    define({
      component: translatedPageLayoutExtension.component,
      loader: translatedPageLayoutExtension.loader,
    }),
});
