/**
 * Frontend-system entry point for `@stadt-wien/backstage-plugin-cd`.
 *
 * This path is marked as `@backstage/FrontendPlugin` in the package
 * `exports` map so Backstage's `frontend-defaults` auto-discovery
 * picks up the default export automatically when `app.packages: all`
 * is used in `app-config.yaml`.
 *
 * In a typical `App.tsx` you spread `wienCdFeatures` into the `features`
 * array of `createApp({...})` to opt into everything the plugin
 * provides:
 *
 *   - `wienCdPlugin`           — the Wiener Melange `@font-face`
 *                                injector (pluginId `wien-cd`).
 *   - `wienCdAppModule`        — themes, German translations, branded
 *                                sidebar. Attached to the core `app`
 *                                plugin because the underlying theme /
 *                                translation / nav-content inputs are
 *                                all limited to the `app` plugin.
 *
 * Config schema (declared in `config.d.ts`):
 *
 *     app:
 *       extensions:
 *         # Replace the default Backstage light/dark themes with
 *         # Stadt Wien.
 *         - theme:app/light: false
 *         - theme:app/dark: false
 *
 *         # Enable the German + English language toggle under
 *         # Settings → Appearance.
 *         - api:app/app-language:
 *             config:
 *               availableLanguages: [de, en]
 *               defaultLanguage: de
 *
 *         # Optional: customise the sidebar wordmark.
 *         - nav-content:app/wien-sidebar:
 *             config:
 *               title: Wien
 *               subtitle: Developer Portal
 */
import {
  FrontendFeature,
  createFrontendModule,
  createFrontendPlugin,
} from '@backstage/frontend-plugin-api';

import { WienDarkTheme, WienLightTheme } from './theme/themes';
import { WienerMelangeFontElement } from './font/WienerMelangeFont';
import { WienGermanTranslationExtensions } from './i18n/translations';
import { WienSidebar } from './nav/WienSidebar';

/**
 * Frontend module that attaches everything that must live inside the
 * core `app` plugin:
 *   - Wien Rot / Wien Dark unified themes (the theme input is internal)
 *   - All German translation resources (the translation input is internal)
 *   - The branded sidebar (`NavContentBlueprint` attach point is
 *     limited to the `app` plugin)
 */
export const wienCdAppModule = createFrontendModule({
  pluginId: 'app',
  extensions: [
    WienLightTheme,
    WienDarkTheme,
    ...WienGermanTranslationExtensions,
    WienSidebar,
  ],
});

/**
 * Cross-cutting plugin with no dependency on the core `app` plugin's
 * internal inputs. Currently just the `@font-face` injector for the
 * Wiener Melange variable font.
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

export {
  wienColors,
  wienFontStack,
  wienLightTheme,
  wienDarkTheme,
} from './theme/wienTheme';
export { wienGermanTranslations } from './i18n/deMessages';
export {
  wienCdTranslationRef,
  slugifyNavItemId,
} from './i18n/wienCdTranslationRef';
export { WienerWappen } from './nav/WienerWappen';
export {
  WienSidebarLogoFull,
  type WienSidebarLogoFullProps,
} from './nav/WienSidebarLogoFull';
export { WienSidebarLogo, type WienSidebarLogoProps } from './nav/WienSidebarLogo';
