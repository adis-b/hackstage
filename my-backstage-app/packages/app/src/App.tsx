import { createApp } from '@backstage/frontend-defaults';
import catalogPlugin from '@backstage/plugin-catalog/alpha';
import { navModule } from './modules/nav';
import { wienI18nPlugin } from './modules/i18n';

export default createApp({
  features: [catalogPlugin, navModule, wienI18nPlugin],
});
