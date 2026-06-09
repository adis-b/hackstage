import { FormFieldBlueprint } from '@backstage/plugin-scaffolder-react/alpha';

/**
 * Registers the read-only `WienEnvironment` scaffolder field so templates can
 * reference it via `ui:field: WienEnvironment`. Auto-attaches to the
 * scaffolder form-fields API; the component is loaded lazily so apps without
 * the scaffolder page pay no bundle cost.
 */
export const WienEnvironmentFormField = FormFieldBlueprint.make({
  name: 'wien-environment',
  params: {
    field: () =>
      import('./WienEnvironmentField').then(m => m.WienEnvironmentField),
  },
});
