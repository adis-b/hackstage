import {
  createWienTheme,
  wienCloudLightTheme,
  wienColors,
  wienLightTheme,
} from './wienTheme';

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
});
