/**
 * ThemeBlueprint extensions that register the Stadt Wien corporate-design
 * themes as `theme:…/wien-light` and `theme:…/wien-dark` extensions whose
 * **AppTheme** ids are the standard `light` / `dark` so
 * `UserSettingsThemeToggle` can resolve labels via
 * `userSettingsTranslationRef` (DE/EN) instead of a hard-coded title.
 */
import { UnifiedThemeProvider } from '@backstage/theme';
import { ThemeBlueprint } from '@backstage/plugin-app-react';
import LightIcon from '@material-ui/icons/WbSunny';
import DarkIcon from '@material-ui/icons/Brightness2';

import { wienDarkTheme, wienLightTheme } from './wienTheme';

export const WienLightTheme = ThemeBlueprint.make({
  name: 'wien-light',
  params: {
    theme: {
      id: 'light',
      // Falsy title → UserSettingsThemeToggle uses t('themeToggle.names.light')
      title: '',
      variant: 'light',
      icon: <LightIcon />,
      Provider: ({ children }) => (
        <UnifiedThemeProvider theme={wienLightTheme}>
          {children}
        </UnifiedThemeProvider>
      ),
    },
  },
});

export const WienDarkTheme = ThemeBlueprint.make({
  name: 'wien-dark',
  params: {
    theme: {
      id: 'dark',
      title: '',
      variant: 'dark',
      icon: <DarkIcon />,
      Provider: ({ children }) => (
        <UnifiedThemeProvider theme={wienDarkTheme}>
          {children}
        </UnifiedThemeProvider>
      ),
    },
  },
});
