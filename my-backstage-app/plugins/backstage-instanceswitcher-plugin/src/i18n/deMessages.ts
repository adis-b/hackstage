import { createTranslationResource } from '@backstage/frontend-plugin-api';

import { instanceSwitcherDe } from './messages/instanceSwitcherDe';
import { wienInstanceSwitcherTranslationRef } from './wienInstanceSwitcherTranslationRef';

export const instanceSwitcherTranslations = {
  instanceSwitcher: createTranslationResource({
    ref: wienInstanceSwitcherTranslationRef,
    translations: { de: async () => ({ default: instanceSwitcherDe }) },
  }),
};
