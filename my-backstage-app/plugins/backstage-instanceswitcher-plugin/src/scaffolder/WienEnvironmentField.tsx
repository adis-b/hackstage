import { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import {
  configApiRef,
  useApi,
  useTranslationRef,
} from '@backstage/frontend-plugin-api';
import { createFormField } from '@backstage/plugin-scaffolder-react/alpha';
import type { FieldExtensionComponentProps } from '@backstage/plugin-scaffolder-react';

import { readCurrentWienInstance } from '@wien/backstage-shared';

import { wienInstanceSwitcherTranslationRef } from '../i18n/wienInstanceSwitcherTranslationRef';

/**
 * Read-only scaffolder field that displays the current deployment instance
 * (On-Premises / Cloud), resolved from `app.baseUrl` against the shared
 * `wien.instances` registry. The value cannot be edited from the form —
 * switching environments is done via the floating instance switcher.
 *
 * Label and helper text follow the language selected in the frontend
 * (German / English) via the plugin's translation ref.
 */
const WienEnvironmentFieldComponent = ({
  onChange,
  formData,
  uiSchema,
}: FieldExtensionComponentProps<string>) => {
  const configApi = useApi(configApiRef);
  const { t } = useTranslationRef(wienInstanceSwitcherTranslationRef);
  const { current } = readCurrentWienInstance(configApi);
  const label = current?.label ?? t('environmentField.unknown');

  useEffect(() => {
    if (formData !== label) {
      onChange(label);
    }
  }, [label, formData, onChange]);

  const helperText =
    (uiSchema?.['ui:description'] as string | undefined) ??
    t('environmentField.helperText');

  return (
    <TextField
      id="wien-environment"
      label={t('environmentField.label')}
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
