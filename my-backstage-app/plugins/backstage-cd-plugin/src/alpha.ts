/**
 * Frontend-system entry point for `@wien/backstage-cd-plugin`.
 *
 * Spread `cdFeatures` into `createApp({ features: [...] })`:
 *
 *   - `cdPlugin`    — Wiener Melange `@font-face` injector (pluginId `cd`).
 *   - `cdAppModule` — Wien light/dark themes attached to the core `app` plugin.
 */
import {
  FrontendFeature,
  createFrontendModule,
  createFrontendPlugin,
} from '@backstage/frontend-plugin-api';

import { WienDarkTheme, WienLightTheme } from './theme/themes';
import { WienerMelangeFontElement } from './font/WienerMelangeFont';

export const cdAppModule = createFrontendModule({
  pluginId: 'app',
  extensions: [WienLightTheme, WienDarkTheme],
});

export const cdPlugin = createFrontendPlugin({
  pluginId: 'cd',
  extensions: [WienerMelangeFontElement],
});

export const cdFeatures: FrontendFeature[] = [cdPlugin, cdAppModule];

export default cdPlugin;

export {
  wienColors,
  wienFontStack,
  wienLightTheme,
  wienDarkTheme,
  wienCloudLightTheme,
  wienCloudDarkTheme,
  createWienTheme,
  getVariantAccent,
  getVariantDisplayColor,
  type WienInstanceVariant,
  type CreateWienThemeOptions,
} from './theme/wienTheme';
