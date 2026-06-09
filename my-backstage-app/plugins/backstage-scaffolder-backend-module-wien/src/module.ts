import {
  coreServices,
  createBackendModule,
} from '@backstage/backend-plugin-api';
import { scaffolderActionsExtensionPoint } from '@backstage/plugin-scaffolder-node/alpha';
import { createWienInstanceCurrentAction } from './actions/wienInstanceCurrent';

/**
 * Registers Wien-specific scaffolder actions for the template backend.
 *
 * @public
 */
export const scaffolderModuleWien = createBackendModule({
  pluginId: 'scaffolder',
  moduleId: 'wien',
  register(env) {
    env.registerInit({
      deps: {
        scaffolder: scaffolderActionsExtensionPoint,
        config: coreServices.rootConfig,
      },
      async init({ scaffolder, config }) {
        scaffolder.addActions(createWienInstanceCurrentAction({ config }));
      },
    });
  },
});

export default scaffolderModuleWien;
