import { createTranslationMessages } from '@backstage/frontend-plugin-api';
import { wienInstanceSwitcherTranslationRef } from '../wienInstanceSwitcherTranslationRef';

export const instanceSwitcherDe = createTranslationMessages({
  ref: wienInstanceSwitcherTranslationRef,
  full: false,
  messages: {
    'instanceSwitcher.ariaLabel': 'Backstage-Instanz wechseln',
    'instanceSwitcher.compactAriaLabel':
      'Aktuelle Instanz: {{label}}. Klicken zum Wechseln.',
    'instanceSwitcher.current': 'aktiv',
  },
});
