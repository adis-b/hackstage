import { createApp } from '@backstage/frontend-defaults';
import catalogPlugin from '@backstage/plugin-catalog/alpha';
import { wienCdFeatures } from '@stadt-wien/backstage-plugin-cd';
import { navModule } from './modules/nav';

export default createApp({
  features: [catalogPlugin, navModule, ...wienCdFeatures],
});
