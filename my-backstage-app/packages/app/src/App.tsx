import { createApp } from '@backstage/frontend-defaults';
import catalogPlugin from '@backstage/plugin-catalog/alpha';
import { navModule } from './modules/nav';
import { themeModule } from './modules/theme';
import { i18nModule } from './modules/i18n';

export default createApp({
  features: [catalogPlugin, navModule, themeModule, i18nModule],
});
