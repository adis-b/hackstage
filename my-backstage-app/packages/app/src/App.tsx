import { createApp } from '@backstage/frontend-defaults';
import catalogPlugin from '@backstage/plugin-catalog/alpha';
import { cdFeatures } from '@wien/backstage-cd-plugin/alpha';
import { i18nDeFeatures } from '@wien/backstage-i18n-de-plugin/alpha';
import { instanceSwitcherFeatures } from '@wien/backstage-instanceswitcher-plugin/alpha';

export default createApp({
  features: [
    catalogPlugin,
    ...cdFeatures,
    ...i18nDeFeatures,
    ...instanceSwitcherFeatures,
  ],
});
