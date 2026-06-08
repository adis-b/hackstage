import { wienColors } from './colors';

/** Deployment instance type — drives the primary accent colour. */
export type WienInstanceVariant = 'on-prem' | 'cloud';

/** Accent colours used by a deployment instance variant. */
export interface WienVariantAccent {
  primary: string;
  primaryLight: string;
  primaryDark: string;
  primaryHover: string;
}

/** Resolve accent tokens for an instance variant. */
export function getVariantAccent(variant: WienInstanceVariant): WienVariantAccent {
  if (variant === 'cloud') {
    return {
      primary: wienColors.wasserblau,
      primaryLight: wienColors.wasserblauLight,
      primaryDark: wienColors.uiLink,
      primaryHover: '#1f4baf',
    };
  }
  return {
    primary: wienColors.wienRot,
    primaryLight: wienColors.morgenrot,
    primaryDark: '#cd0000',
    primaryHover: '#cd0000',
  };
}

/** Map instance variant to a display colour (for chips, badges). */
export function getVariantDisplayColor(variant: WienInstanceVariant): string {
  return getVariantAccent(variant).primary;
}
