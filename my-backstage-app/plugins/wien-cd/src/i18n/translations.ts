import { TranslationBlueprint } from '@backstage/plugin-app-react';

import { wienGermanTranslations } from './deMessages';

export const WienUserSettingsGerman = TranslationBlueprint.make({
  name: 'user-settings-de',
  params: { resource: wienGermanTranslations.userSettings },
});

export const WienCatalogGerman = TranslationBlueprint.make({
  name: 'catalog-de',
  params: { resource: wienGermanTranslations.catalog },
});

export const WienScaffolderGerman = TranslationBlueprint.make({
  name: 'scaffolder-de',
  params: { resource: wienGermanTranslations.scaffolder },
});
