/**
 * Stable API surface of `@stadt-wien/backstage-plugin-cd`.
 *
 * This entry point contains everything that is framework-agnostic:
 *
 *   - The raw `UnifiedTheme` objects (`wienLightTheme`, `wienDarkTheme`)
 *     and the brand palette (`wienColors`, `wienFontStack`).
 *   - The `wienCdTranslationRef` that owns the plugin's own
 *     translation keys (sidebar labels, nav-item title overrides).
 *   - The `wienGermanTranslations` resource map, for programmatic use
 *     from a legacy (non-frontend-system) Backstage app that still
 *     wants the German messages.
 *
 * The actual Backstage frontend-system plugin/module/feature objects
 * live in the `./alpha` sub-path so that auto-discovery treats this
 * package as a frontend plugin.
 *
 * Typical usage:
 *
 *     // packages/app/src/App.tsx
 *     import { createApp } from '@backstage/frontend-defaults';
 *     import { wienCdFeatures } from '@stadt-wien/backstage-plugin-cd/alpha';
 *
 *     export default createApp({ features: [...wienCdFeatures] });
 */
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
