/**
 * Shared Stadt Wien tokens for `@wien` Backstage plugins.
 *
 * Use this package when a plugin needs brand colours or on-prem/cloud
 * variant accents without depending on the full CD theme plugin.
 */
export { wienColors } from './colors';
export {
  getVariantAccent,
  getVariantDisplayColor,
  type WienInstanceVariant,
  type WienVariantAccent,
} from './variants';
