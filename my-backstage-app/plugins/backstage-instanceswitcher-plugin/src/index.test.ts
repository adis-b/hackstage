import { renderHook } from '@testing-library/react';

import { wienInstanceSwitcherTranslationRef } from './index';
import { useScrollAtTop } from './instance/useScrollAtTop';

describe('@wien/backstage-instanceswitcher-plugin', () => {
  describe('translation ref', () => {
    it('is identified as "instanceswitcher"', () => {
      expect(wienInstanceSwitcherTranslationRef.id).toBe('instanceswitcher');
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
});
