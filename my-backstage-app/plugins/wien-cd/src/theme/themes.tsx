/**
 * ThemeBlueprint extensions that register the Stadt Wien corporate-design
 * themes under the IDs `theme:wien-cd/wien-light` and
 * `theme:wien-cd/wien-dark` so that end users can pick them in
 * Settings → Appearance.
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
      id: 'wien-light',
      title: 'Wien (hell)',
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
      id: 'wien-dark',
      title: 'Wien (dunkel)',
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
