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
export {
  normalizeInstanceUrl,
  readWienInstances,
  resolveCurrentInstance,
  readCurrentWienInstance,
  type WienInstance,
  type CurrentWienInstance,
} from './instances';
export {
  WIEN_ANNOTATION_PREFIX,
  wienAnnotations,
  type WienAnnotationKey,
} from './annotations';
