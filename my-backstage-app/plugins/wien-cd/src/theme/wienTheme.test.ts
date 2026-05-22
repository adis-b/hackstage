import { renderHook } from '@testing-library/react';

import {
  createWienTheme,
  getVariantAccent,
  getVariantDisplayColor,
  wienColors,
  wienCloudLightTheme,
  wienLightTheme,
} from './wienTheme';
import { useScrollAtTop } from '../instance/useScrollAtTop';

describe('createWienTheme', () => {
  it('uses Wien Rot as primary for on-prem light theme', () => {
    const theme = createWienTheme({ variant: 'on-prem', mode: 'light' });
    expect(theme.getTheme('v5')?.palette.primary.main).toBe(wienColors.wienRot);
  });

  it('uses Wasserblau as primary for cloud light theme', () => {
    const theme = createWienTheme({ variant: 'cloud', mode: 'light' });
    expect(theme.getTheme('v5')?.palette.primary.main).toBe(wienColors.wasserblau);
  });

  it('keeps backward-compatible default exports', () => {
    expect(wienLightTheme.getTheme('v5')?.palette.primary.main).toBe(
      wienColors.wienRot,
    );
    expect(wienCloudLightTheme.getTheme('v5')?.palette.primary.main).toBe(
      wienColors.wasserblau,
    );
  });

  it('maps variant display colours', () => {
    expect(getVariantDisplayColor('on-prem')).toBe(wienColors.wienRot);
    expect(getVariantDisplayColor('cloud')).toBe(wienColors.wasserblau);
  });

  it('returns distinct accent tokens per variant', () => {
    expect(getVariantAccent('cloud').primaryDark).toBe(wienColors.uiLink);
    expect(getVariantAccent('on-prem').primaryDark).toBe('#cd0000');
  });
});

describe('useScrollAtTop', () => {
  it('defaults to true at scroll position zero', () => {
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const { result } = renderHook(() => useScrollAtTop(16));
    expect(result.current).toBe(true);
  });
});
