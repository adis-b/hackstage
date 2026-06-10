import { renderHook } from '@testing-library/react';

import { wienInstanceSwitcherTranslationRef } from './index';
import { instanceSwitcherDe } from './i18n/messages/instanceSwitcherDe';
import { useScrollAtTop } from './instance/useScrollAtTop';

describe('@wien/backstage-instanceswitcher-plugin', () => {
  describe('translation ref', () => {
    it('is identified as "instanceswitcher"', () => {
      expect(wienInstanceSwitcherTranslationRef.id).toBe('instanceswitcher');
    });

    it('declares environment field messages with German translations', () => {
      const defaults = (
        wienInstanceSwitcherTranslationRef as unknown as {
          getDefaultMessages: () => Record<string, string>;
        }
      ).getDefaultMessages();
      expect(defaults['environmentField.label']).toBe('Environment');
      expect(defaults['environmentField.helperText']).toContain(
        'multi instance switcher',
      );
      expect(defaults['environmentField.unknown']).toBe('Unknown');

      const de = (
        instanceSwitcherDe as unknown as {
          messages: Record<string, string | null>;
        }
      ).messages;
      expect(de['environmentField.label']).toBe('Umgebung');
      expect(de['environmentField.helperText']).toContain(
        'Multi-Instanz-Umschalter',
      );
      expect(de['environmentField.unknown']).toBe('Unbekannt');
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
