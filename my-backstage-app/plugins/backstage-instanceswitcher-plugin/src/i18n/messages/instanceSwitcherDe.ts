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
    'environmentField.label': 'Umgebung',
    'environmentField.helperText':
      'Wenn Sie die Umgebung wechseln möchten, verwenden Sie den Multi-Instanz-Umschalter oben rechts',
    'environmentField.unknown': 'Unbekannt',
  },
});
