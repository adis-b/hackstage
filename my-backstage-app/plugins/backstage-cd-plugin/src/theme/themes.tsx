/**
 * ThemeBlueprint extensions that register the Stadt Wien corporate-design
 * themes as `theme:…/wien-light` and `theme:…/wien-dark` extensions whose
 * **AppTheme** ids are the standard `light` / `dark` so
 * `UserSettingsThemeToggle` can resolve labels via
 * `userSettingsTranslationRef` (DE/EN) instead of a hard-coded title.
 *
 * The accent variant (Wien Rot vs Wasserblau) is derived from `app.baseUrl`
 * matched against the shared `wien.instances` registry — there is no separate
 * `instanceVariant` to configure per environment.
 */
import { useMemo } from 'react';
import { UnifiedThemeProvider } from '@backstage/theme';
import { ThemeBlueprint } from '@backstage/plugin-app-react';
import { configApiRef, useApi } from '@backstage/frontend-plugin-api';
import LightIcon from '@material-ui/icons/WbSunny';
import DarkIcon from '@material-ui/icons/Brightness2';

import { readCurrentWienInstance } from '@wien/backstage-shared';
import { createWienTheme } from './wienTheme';

/** Resolve the deployment variant from config, defaulting to on-prem. */
const WienThemeProvider = ({
  mode,
  children,
}: {
  mode: 'light' | 'dark';
  children: React.ReactNode;
}) => {
  const configApi = useApi(configApiRef);
  const { current } = readCurrentWienInstance(configApi);
  const variant = current?.variant ?? 'on-prem';
  const theme = useMemo(
    () => createWienTheme({ variant, mode }),
    [variant, mode],
  );
  return <UnifiedThemeProvider theme={theme}>{children}</UnifiedThemeProvider>;
};

export const WienLightTheme = ThemeBlueprint.makeWithOverrides({
  name: 'wien-light',
  factory(originalFactory) {
    return originalFactory({
      theme: {
        id: 'light',
        title: '',
        variant: 'light',
        icon: <LightIcon />,
        Provider: ({ children }) => (
          <WienThemeProvider mode="light">{children}</WienThemeProvider>
        ),
      },
    });
  },
});

export const WienDarkTheme = ThemeBlueprint.makeWithOverrides({
  name: 'wien-dark',
  factory(originalFactory) {
    return originalFactory({
      theme: {
        id: 'dark',
        title: '',
        variant: 'dark',
        icon: <DarkIcon />,
        Provider: ({ children }) => (
          <WienThemeProvider mode="dark">{children}</WienThemeProvider>
        ),
      },
    });
  },
});
