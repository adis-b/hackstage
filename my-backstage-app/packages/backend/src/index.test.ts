import { startTestBackend, mockServices } from '@backstage/backend-test-utils';
import scaffolderBackend from '@backstage/plugin-scaffolder-backend';
import { scaffolderModuleWien } from '@wien/backstage-scaffolder-backend-module-wien';

describe('backend', () => {
  it('starts scaffolder with the Wien module', async () => {
    const backend = await startTestBackend({
      features: [
        mockServices.rootConfig.factory({
          data: {
            app: { baseUrl: 'http://localhost:3000' },
            wien: {
              instances: [
                {
                  id: 'on-prem',
                  label: 'On-Premises',
                  url: 'http://localhost:3000',
                  variant: 'on-prem',
                },
              ],
            },
          },
        }),
        scaffolderBackend,
        scaffolderModuleWien,
      ],
    });

    expect(backend.server.port()).toBeGreaterThan(0);
  });
});
