import { createFrontendModule } from '@backstage/frontend-plugin-api';

import { TranslatedNav } from './nav/TranslatedNav';
import { OpenShiftPlaceholderPage } from './pages/OpenShiftPlaceholderPage';

/** Demo-app wiring — Stadt Wien grouped sidebar (not part of the i18n plugin). */
export const demoAppModule = createFrontendModule({
  pluginId: 'app',
  extensions: [TranslatedNav, OpenShiftPlaceholderPage],
});
