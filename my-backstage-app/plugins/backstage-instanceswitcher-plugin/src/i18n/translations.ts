import { TranslationBlueprint } from '@backstage/plugin-app-react';

import { instanceSwitcherTranslations } from './deMessages';

export const InstanceSwitcherTranslationExtension = TranslationBlueprint.make({
  name: 'instanceswitcher-de',
  params: { resource: instanceSwitcherTranslations.instanceSwitcher },
});
