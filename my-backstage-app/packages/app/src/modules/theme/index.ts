import { createFrontendModule } from '@backstage/frontend-plugin-api';
import { WienLightTheme, WienDarkTheme } from './wienTheme';

export const themeModule = createFrontendModule({
  pluginId: 'app',
  extensions: [WienLightTheme, WienDarkTheme],
});
