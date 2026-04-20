/**
 * @stadt-wien/backstage-plugin-cd
 *
 * A Backstage frontend plugin that applies the official Stadt Wien Corporate
 * Design to any Backstage app that uses the new frontend system (Backstage
 * >= 1.36):
 *
 *   - Registers two themes, `wien-light` and `wien-dark`, that follow the
 *     Wien Rot / Abendstimmung / Morgenrot brand palette from the wien.gv.at
 *     handbook (https://handbuch.wien.gv.at/look-and-feel/farben/).
 *   - Ships the Wiener Melange variable font embedded as an inline data URI
 *     and injects an `@font-face` rule, so Wien typography is applied
 *     out-of-the-box without any asset-hosting setup.
 *   - Provides German translations for the most user-visible core plugins
 *     (user-settings, catalog, scaffolder).
 *
 * Typical usage in `packages/app/src/App.tsx`:
 *
 *     import { createApp } from '@backstage/frontend-defaults';
 *     import { wienCdFeatures } from '@stadt-wien/backstage-plugin-cd';
 *
 *     export default createApp({
 *       features: [...wienCdFeatures],
 *     });
 *
 * and in `app-config.yaml`:
 *
 *     app:
 *       extensions:
 *         # Replace the default Backstage light/dark themes with Stadt Wien.
 *         - theme:app/light: false
 *         - theme:app/dark: false
 *         # Enable German + English language toggle in Settings → Appearance.
 *         - api:app/app-language:
 *             config:
 *               availableLanguages: [de, en]
 *               defaultLanguage: de
 *
 * Ownership notes
 * ---------------
 * The Wiener Melange typeface is the property of the City of Vienna. This
 * package is distributed for use by Stadt Wien projects and partners; any
 * other redistribution requires written permission from
 * markenmanagement@ma53.wien.gv.at.
 */
import {
  FrontendFeature,
  createFrontendModule,
  createFrontendPlugin,
} from '@backstage/frontend-plugin-api';

import { WienDarkTheme, WienLightTheme } from './theme/themes';
import { WienerMelangeFontElement } from './font/WienerMelangeFont';
import { WienGermanTranslationExtensions } from './i18n/translations';

/**
 * Stadt Wien Corporate Design — registers the two Wien themes and the
 * German translation resources that go with them.
 *
 * These extensions must be attached to the `app` plugin because the
 * underlying `theme` and `translation` inputs on the core AppThemeApi /
 * TranslationsApi are marked `internal: true`, which means the frontend
 * system only accepts them from inside the `app` plugin itself. We
 * therefore ship them as a `createFrontendModule({ pluginId: 'app' })`.
 */
export const wienCdAppModule = createFrontendModule({
  pluginId: 'app',
  extensions: [
    WienLightTheme,
    WienDarkTheme,
    ...WienGermanTranslationExtensions,
  ],
});

/**
 * Stadt Wien Corporate Design — cross-cutting extensions that do not have
 * to be attached to the `app` plugin. Right now this is just the
 * `@font-face` injector for the Wiener Melange variable font.
 */
export const wienCdPlugin = createFrontendPlugin({
  pluginId: 'wien-cd',
  extensions: [WienerMelangeFontElement],
});

/**
 * All features provided by this package, ready to be spread into
 * `createApp({ features: [...] })`.
 */
export const wienCdFeatures: FrontendFeature[] = [
  wienCdPlugin,
  wienCdAppModule,
];

export default wienCdPlugin;

export { wienColors, wienFontStack, wienLightTheme, wienDarkTheme } from './theme/wienTheme';
export { wienGermanTranslations } from './i18n/deMessages';
export { wienCdTranslationRef, slugifyNavItemId } from './i18n/wienCdTranslationRef';
