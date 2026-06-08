/**
 * Frontend-system entry point for `@wien/backstage-i18n-de-plugin`.
 */
import {
  FrontendFeature,
  createFrontendModule,
  createFrontendPlugin,
} from '@backstage/frontend-plugin-api';

import { WienGermanTranslationExtensions } from './i18n/translations';
import { TranslatedNav } from './nav/TranslatedNav';
import { WienTechDocsPage } from './techdocs/WienTechDocsPage';

export const wienI18nDeAppModule = createFrontendModule({
  pluginId: 'app',
  extensions: [
    ...WienGermanTranslationExtensions,
    TranslatedNav,
    WienTechDocsPage,
  ],
});

export const i18nDePlugin = createFrontendPlugin({
  pluginId: 'i18n-de',
  extensions: [],
});

export const i18nDeFeatures: FrontendFeature[] = [i18nDePlugin, wienI18nDeAppModule];

export default i18nDePlugin;

export {
  wienI18nDeTranslationRef,
  slugifyNavItemId,
} from './i18n/wienI18nDeTranslationRef';
export { wienGermanTranslations } from './i18n/deMessages';
