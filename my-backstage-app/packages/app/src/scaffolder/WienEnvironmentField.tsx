import { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { configApiRef, useApi } from '@backstage/frontend-plugin-api';
import { createFormField } from '@backstage/plugin-scaffolder-react/alpha';
import type { FieldExtensionComponentProps } from '@backstage/plugin-scaffolder-react';

import { readCurrentWienInstance } from '@wien/backstage-shared';

const DEFAULT_HELPER_TEXT =
  'If you want to change environment - use the multi instance switcher on the top right';

/**
 * Read-only scaffolder field that displays the current deployment instance
 * (On-Premises / Cloud), resolved from `app.baseUrl` against the shared
 * `wien.instances` registry. The value cannot be edited from the form —
 * switching environments is done via the floating instance switcher.
 */
const WienEnvironmentFieldComponent = ({
  onChange,
  formData,
  uiSchema,
}: FieldExtensionComponentProps<string>) => {
  const configApi = useApi(configApiRef);
  const { current } = readCurrentWienInstance(configApi);
  const label = current?.label ?? 'Unbekannt / Unknown';

  useEffect(() => {
    if (formData !== label) {
      onChange(label);
    }
  }, [label, formData, onChange]);

  const helperText =
    (uiSchema?.['ui:description'] as string | undefined) ?? DEFAULT_HELPER_TEXT;

  return (
    <TextField
      id="wien-environment"
      label="Environment"
      value={label}
      disabled
      fullWidth
      margin="normal"
      variant="outlined"
      helperText={helperText}
    />
  );
};

/** Field extension registered as `ui:field: WienEnvironment` in templates. */
export const WienEnvironmentField = createFormField({
  name: 'WienEnvironment',
  component: WienEnvironmentFieldComponent,
});
