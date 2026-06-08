/**
 * Entry point for Stadt Wien German translation resources.
 */
import { createTranslationResource } from '@backstage/frontend-plugin-api';

import { wienI18nDe } from './messages/wienI18nDe';
import { wienI18nDeTranslationRef } from './wienI18nDeTranslationRef';
import { userSettingsDe } from './messages/userSettings';
import { catalogDe } from './messages/catalog';
import { catalogReactDe } from './messages/catalogReact';
import { scaffolderDe } from './messages/scaffolder';
import { scaffolderReactDe } from './messages/scaffolderReact';
import { apiDocsDe } from './messages/apiDocs';
import { catalogGraphDe } from './messages/catalogGraph';
import { catalogImportDe } from './messages/catalogImport';
import { notificationsDe } from './messages/notifications';
import { searchDe, searchReactDe } from './messages/search';
import { orgDe } from './messages/org';
import { coreComponentsDe } from './messages/coreComponents';

import { userSettingsTranslationRef } from '@backstage/plugin-user-settings/alpha';
import { catalogTranslationRef } from '@backstage/plugin-catalog/alpha';
import { catalogReactTranslationRef } from '@backstage/plugin-catalog-react/alpha';
import { scaffolderTranslationRef } from '@backstage/plugin-scaffolder/alpha';
import { scaffolderReactTranslationRef } from '@backstage/plugin-scaffolder-react/alpha';
import { apiDocsTranslationRef } from '@backstage/plugin-api-docs/alpha';
import { catalogGraphTranslationRef } from '@backstage/plugin-catalog-graph/alpha';
import { catalogImportTranslationRef } from '@backstage/plugin-catalog-import/alpha';
import { notificationsTranslationRef } from '@backstage/plugin-notifications/alpha';
import { searchTranslationRef } from '@backstage/plugin-search/alpha';
import { searchReactTranslationRef } from '@backstage/plugin-search-react/alpha';
import { orgTranslationRef } from '@backstage/plugin-org/alpha';
import { coreComponentsTranslationRef } from '@backstage/core-components/alpha';

/** German translation resources keyed by plugin. */
export const wienGermanTranslations = {
  wienI18nDe: createTranslationResource({
    ref: wienI18nDeTranslationRef,
    translations: { de: async () => ({ default: wienI18nDe }) },
  }),
  userSettings: createTranslationResource({
    ref: userSettingsTranslationRef,
    translations: { de: async () => ({ default: userSettingsDe }) },
  }),
  catalog: createTranslationResource({
    ref: catalogTranslationRef,
    translations: { de: async () => ({ default: catalogDe }) },
  }),
  catalogReact: createTranslationResource({
    ref: catalogReactTranslationRef,
    translations: { de: async () => ({ default: catalogReactDe }) },
  }),
  scaffolder: createTranslationResource({
    ref: scaffolderTranslationRef,
    translations: { de: async () => ({ default: scaffolderDe }) },
  }),
  scaffolderReact: createTranslationResource({
    ref: scaffolderReactTranslationRef,
    translations: { de: async () => ({ default: scaffolderReactDe }) },
  }),
  apiDocs: createTranslationResource({
    ref: apiDocsTranslationRef,
    translations: { de: async () => ({ default: apiDocsDe }) },
  }),
  catalogGraph: createTranslationResource({
    ref: catalogGraphTranslationRef,
    translations: { de: async () => ({ default: catalogGraphDe }) },
  }),
  catalogImport: createTranslationResource({
    ref: catalogImportTranslationRef,
    translations: { de: async () => ({ default: catalogImportDe }) },
  }),
  notifications: createTranslationResource({
    ref: notificationsTranslationRef,
    translations: { de: async () => ({ default: notificationsDe }) },
  }),
  search: createTranslationResource({
    ref: searchTranslationRef,
    translations: { de: async () => ({ default: searchDe }) },
  }),
  searchReact: createTranslationResource({
    ref: searchReactTranslationRef,
    translations: { de: async () => ({ default: searchReactDe }) },
  }),
  org: createTranslationResource({
    ref: orgTranslationRef,
    translations: { de: async () => ({ default: orgDe }) },
  }),
  coreComponents: createTranslationResource({
    ref: coreComponentsTranslationRef,
    translations: { de: async () => ({ default: coreComponentsDe }) },
  }),
};
