import { createApp } from '@backstage/frontend-defaults';
import catalogPlugin from '@backstage/plugin-catalog/alpha';
import { wienCdFeatures } from '@stadt-wien/backstage-plugin-cd/alpha';

export default createApp({
  features: [catalogPlugin, ...wienCdFeatures],
});
