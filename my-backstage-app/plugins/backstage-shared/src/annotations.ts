/** Stadt Wien metadata annotation namespace on catalog entities. */
export const WIEN_ANNOTATION_PREFIX = 'wien.at' as const;

/**
 * Well-known `wien.at/*` annotation keys for bilingual metadata and
 * deployment identity. Use these instead of string literals when reading or
 * writing entity annotations in TypeScript.
 */
export const wienAnnotations = {
  instance: `${WIEN_ANNOTATION_PREFIX}/instance`,
  instanceVariant: `${WIEN_ANNOTATION_PREFIX}/instance-variant`,
  instanceUrl: `${WIEN_ANNOTATION_PREFIX}/instance-url`,
  titleDe: `${WIEN_ANNOTATION_PREFIX}/title-de`,
  titleEn: `${WIEN_ANNOTATION_PREFIX}/title-en`,
  descriptionDe: `${WIEN_ANNOTATION_PREFIX}/description-de`,
  descriptionEn: `${WIEN_ANNOTATION_PREFIX}/description-en`,
} as const;

/** Union of all exported `wien.at/*` annotation keys. */
export type WienAnnotationKey =
  (typeof wienAnnotations)[keyof typeof wienAnnotations];
