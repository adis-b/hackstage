import {
  getVariantAccent,
  getVariantDisplayColor,
  wienColors,
} from './index';

describe('@wien/backstage-shared', () => {
  it('maps variant display colours', () => {
    expect(getVariantDisplayColor('on-prem')).toBe(wienColors.wienRot);
    expect(getVariantDisplayColor('cloud')).toBe(wienColors.wasserblau);
  });

  it('returns distinct accent tokens per variant', () => {
    expect(getVariantAccent('cloud').primaryDark).toBe(wienColors.uiLink);
    expect(getVariantAccent('on-prem').primaryDark).toBe('#cd0000');
  });
});
