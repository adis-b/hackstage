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
import { z } from 'zod';

import {
  createWienTheme,
  type WienInstanceVariant,
} from './wienTheme';

const instanceVariantSchema = z.enum(['on-prem', 'cloud']).optional().default('on-prem');

export const WienLightTheme = ThemeBlueprint.makeWithOverrides({
  name: 'wien-light',
  configSchema: {
    instanceVariant: instanceVariantSchema,
  },
  factory(originalFactory, { config }) {
    const variant = config.instanceVariant as WienInstanceVariant;
    const theme = createWienTheme({ variant, mode: 'light' });
    return originalFactory({
      theme: {
        id: 'light',
        title: '',
        variant: 'light',
        icon: <LightIcon />,
        Provider: ({ children }) => (
          <UnifiedThemeProvider theme={theme}>{children}</UnifiedThemeProvider>
        ),
      },
    });
  },
});

export const WienDarkTheme = ThemeBlueprint.makeWithOverrides({
  name: 'wien-dark',
  configSchema: {
    instanceVariant: instanceVariantSchema,
  },
  factory(originalFactory, { config }) {
    const variant = config.instanceVariant as WienInstanceVariant;
    const theme = createWienTheme({ variant, mode: 'dark' });
    return originalFactory({
      theme: {
        id: 'dark',
        title: '',
        variant: 'dark',
        icon: <DarkIcon />,
        Provider: ({ children }) => (
          <UnifiedThemeProvider theme={theme}>{children}</UnifiedThemeProvider>
        ),
      },
    });
  },
});
