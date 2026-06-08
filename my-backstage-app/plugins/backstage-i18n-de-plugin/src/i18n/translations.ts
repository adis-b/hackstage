import { TranslationBlueprint } from '@backstage/plugin-app-react';

import { wienGermanTranslations } from './deMessages';

export const WienGermanTranslationExtensions = [
  TranslationBlueprint.make({
    name: 'wien-i18n-de-de',
    params: { resource: wienGermanTranslations.wienI18nDe },
  }),
  TranslationBlueprint.make({
    name: 'user-settings-de',
    params: { resource: wienGermanTranslations.userSettings },
  }),
  TranslationBlueprint.make({
    name: 'catalog-de',
    params: { resource: wienGermanTranslations.catalog },
  }),
  TranslationBlueprint.make({
    name: 'catalog-react-de',
    params: { resource: wienGermanTranslations.catalogReact },
  }),
  TranslationBlueprint.make({
    name: 'scaffolder-de',
    params: { resource: wienGermanTranslations.scaffolder },
  }),
  TranslationBlueprint.make({
    name: 'scaffolder-react-de',
    params: { resource: wienGermanTranslations.scaffolderReact },
  }),
  TranslationBlueprint.make({
    name: 'api-docs-de',
    params: { resource: wienGermanTranslations.apiDocs },
  }),
  TranslationBlueprint.make({
    name: 'catalog-graph-de',
    params: { resource: wienGermanTranslations.catalogGraph },
  }),
  TranslationBlueprint.make({
    name: 'catalog-import-de',
    params: { resource: wienGermanTranslations.catalogImport },
  }),
  TranslationBlueprint.make({
    name: 'notifications-de',
    params: { resource: wienGermanTranslations.notifications },
  }),
  TranslationBlueprint.make({
    name: 'search-de',
    params: { resource: wienGermanTranslations.search },
  }),
  TranslationBlueprint.make({
    name: 'search-react-de',
    params: { resource: wienGermanTranslations.searchReact },
  }),
  TranslationBlueprint.make({
    name: 'org-de',
    params: { resource: wienGermanTranslations.org },
  }),
  TranslationBlueprint.make({
    name: 'core-components-de',
    params: { resource: wienGermanTranslations.coreComponents },
  }),
];
