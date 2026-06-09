import { createTranslationRef } from '@backstage/frontend-plugin-api';

export const wienInstanceSwitcherTranslationRef = createTranslationRef({
  id: 'instanceswitcher',
  messages: {
    instanceSwitcher: {
      ariaLabel: 'Switch Backstage instance',
      compactAriaLabel: 'Current instance: {{label}}. Click to switch.',
      current: 'active',
    },
  },
});
