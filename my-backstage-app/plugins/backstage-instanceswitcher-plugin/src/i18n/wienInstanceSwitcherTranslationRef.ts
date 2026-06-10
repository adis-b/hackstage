import { createTranslationRef } from '@backstage/frontend-plugin-api';

export const wienInstanceSwitcherTranslationRef = createTranslationRef({
  id: 'instanceswitcher',
  messages: {
    instanceSwitcher: {
      ariaLabel: 'Switch Backstage instance',
      compactAriaLabel: 'Current instance: {{label}}. Click to switch.',
      current: 'active',
    },
    environmentField: {
      label: 'Environment',
      helperText:
        'If you want to change environment - use the multi instance switcher on the top right',
      unknown: 'Unknown',
    },
  },
});
