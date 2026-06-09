/**
 * Frontend-system entry point for `@wien/backstage-instanceswitcher-plugin`.
 */
import {
  FrontendFeature,
  createFrontendModule,
  createFrontendPlugin,
} from '@backstage/frontend-plugin-api';

import { InstanceSwitcherElement } from './instance/InstanceSwitcherElement';
import { InstanceSwitcherTranslationExtension } from './i18n/translations';
import { WienEnvironmentFormField } from './scaffolder/WienEnvironmentFormField';

export const instanceSwitcherAppModule = createFrontendModule({
  pluginId: 'app',
  extensions: [InstanceSwitcherTranslationExtension],
});

export const instanceSwitcherPlugin = createFrontendPlugin({
  pluginId: 'instanceswitcher',
  extensions: [InstanceSwitcherElement, WienEnvironmentFormField],
});

export const instanceSwitcherFeatures: FrontendFeature[] = [
  instanceSwitcherPlugin,
  instanceSwitcherAppModule,
];

export default instanceSwitcherPlugin;

export { wienInstanceSwitcherTranslationRef } from './i18n/wienInstanceSwitcherTranslationRef';
