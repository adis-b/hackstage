/**
 * Stadt Wien Corporate Design theme for Backstage.
 *
 * Colors and typography are based on the City of Vienna CD manual:
 *   https://www.wien.gv.at/spezial/cd-manual/
 *   https://handbuch.wien.gv.at/look-and-feel/farben/
 *   https://handbuch.wien.gv.at/look-and-feel/typography/
 *
 * Brand font: Wiener Melange (Variable Font) — self-hosted under
 *   /fonts/WienerMelangeVF.woff2.
 */
import {
  UnifiedThemeProvider,
  createUnifiedTheme,
  genPageTheme,
  palettes,
  shapes,
} from '@backstage/theme';
import { ThemeBlueprint } from '@backstage/plugin-app-react';
import LightIcon from '@material-ui/icons/WbSunny';
import DarkIcon from '@material-ui/icons/Brightness2';

export const wienColors = {
  wienRot: '#ff0000',
  morgenrot: '#ff5a64',
  morgenrotLight: '#ffced1',
  abendstimmung: '#49274b',
  abendstimmungLight: '#d4c8d4',
  flieder: '#aaaafa',
  fliederLight: '#e6e5fe',
  frischgruen: '#82d282',
  frischgruenLight: '#cdedcd',
  goldgelb: '#e6c828',
  goldgelbLight: '#f8efbd',
  wasserblau: '#73cee5',
  wasserblauLight: '#d2f0ff',
  nebelgrau: '#d6d1ca',
  nebelgrauLight: '#f3f1ef',
  fastSchwarz: '#292929',
  weiss: '#ffffff',
  uiLink: '#1f4baf',
  uiError: '#910000',
  uiSuccess: '#005738',
  uiInteractive: '#4b4b82',
};

const fontStack = `"Wiener Melange", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;

const headerFontWeight = 700;

const typography = {
  fontFamily: fontStack,
  htmlFontSize: 16,
  h1: {
    fontSize: 54,
    fontWeight: 800,
    marginBottom: 10,
    fontFamily: fontStack,
  },
  h2: {
    fontSize: 40,
    fontWeight: 800,
    marginBottom: 8,
    fontFamily: fontStack,
  },
  h3: {
    fontSize: 30,
    fontWeight: headerFontWeight,
    marginBottom: 6,
    fontFamily: fontStack,
  },
  h4: {
    fontSize: 24,
    fontWeight: headerFontWeight,
    marginBottom: 6,
    fontFamily: fontStack,
  },
  h5: {
    fontSize: 20,
    fontWeight: headerFontWeight,
    marginBottom: 4,
    fontFamily: fontStack,
  },
  h6: {
    fontSize: 17,
    fontWeight: headerFontWeight,
    marginBottom: 2,
    fontFamily: fontStack,
  },
};

const pageThemes = {
  home: genPageTheme({
    colors: [wienColors.wienRot, wienColors.morgenrot],
    shape: shapes.wave,
  }),
  documentation: genPageTheme({
    colors: [wienColors.abendstimmung, wienColors.flieder],
    shape: shapes.wave2,
  }),
  tool: genPageTheme({
    colors: [wienColors.abendstimmung, wienColors.wienRot],
    shape: shapes.round,
  }),
  service: genPageTheme({
    colors: [wienColors.wienRot, wienColors.morgenrot],
    shape: shapes.wave,
  }),
  website: genPageTheme({
    colors: [wienColors.wasserblau, wienColors.flieder],
    shape: shapes.wave,
  }),
  library: genPageTheme({
    colors: [wienColors.frischgruen, wienColors.goldgelb],
    shape: shapes.round,
  }),
  other: genPageTheme({
    colors: [wienColors.fastSchwarz, wienColors.abendstimmung],
    shape: shapes.wave,
  }),
  app: genPageTheme({
    colors: [wienColors.wienRot, wienColors.abendstimmung],
    shape: shapes.wave,
  }),
  apis: genPageTheme({
    colors: [wienColors.flieder, wienColors.wasserblau],
    shape: shapes.wave,
  }),
};

export const wienLightTheme = createUnifiedTheme({
  fontFamily: fontStack,
  defaultPageTheme: 'home',
  pageTheme: pageThemes,
  typography,
  palette: {
    ...palettes.light,
    primary: {
      main: wienColors.wienRot,
      light: wienColors.morgenrot,
      dark: '#cd0000',
      contrastText: wienColors.weiss,
    },
    secondary: {
      main: wienColors.abendstimmung,
      light: wienColors.abendstimmungLight,
      dark: '#2f1831',
      contrastText: wienColors.weiss,
    },
    error: {
      main: wienColors.uiError,
      light: wienColors.morgenrot,
      dark: '#6b0000',
      contrastText: wienColors.weiss,
    },
    warning: {
      main: wienColors.goldgelb,
      light: wienColors.goldgelbLight,
      dark: '#a58a00',
      contrastText: wienColors.fastSchwarz,
    },
    info: {
      main: wienColors.wasserblau,
      light: wienColors.wasserblauLight,
      dark: '#1f4baf',
      contrastText: wienColors.fastSchwarz,
    },
    success: {
      main: wienColors.uiSuccess,
      light: wienColors.frischgruenLight,
      dark: '#003a25',
      contrastText: wienColors.weiss,
    },
    background: {
      default: wienColors.nebelgrauLight,
      paper: wienColors.weiss,
    },
    text: {
      primary: wienColors.fastSchwarz,
      secondary: '#4c4a4a',
    },
    link: wienColors.uiLink,
    linkHover: '#153a82',
    banner: {
      ...palettes.light.banner,
      info: wienColors.wasserblau,
      error: wienColors.uiError,
      warning: wienColors.goldgelb,
      link: wienColors.uiLink,
      text: wienColors.fastSchwarz,
      closeButtonColor: wienColors.fastSchwarz,
    },
    border: '#e0dcd5',
    textContrast: wienColors.fastSchwarz,
    textSubtle: '#605e5e',
    textVerySubtle: '#a6a39d',
    navigation: {
      background: wienColors.fastSchwarz,
      indicator: wienColors.wienRot,
      color: '#f3f1ef',
      selectedColor: wienColors.weiss,
      navItem: { hoverBackground: '#1b1b1b' },
      submenu: { background: '#1b1b1b' },
    },
    pinSidebarButton: {
      icon: wienColors.weiss,
      background: wienColors.wienRot,
    },
    tabbar: { indicator: wienColors.wienRot },
    highlight: wienColors.goldgelbLight,
    errorBackground: wienColors.morgenrotLight,
    warningBackground: wienColors.goldgelbLight,
    infoBackground: wienColors.wasserblauLight,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: fontStack,
          backgroundColor: wienColors.nebelgrauLight,
          color: wienColors.fastSchwarz,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 700,
          borderRadius: 4,
          letterSpacing: 0.1,
        },
        containedPrimary: {
          backgroundColor: wienColors.wienRot,
          color: wienColors.weiss,
          '&:hover': { backgroundColor: '#cd0000' },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: wienColors.wienRot,
          color: wienColors.weiss,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { borderRadius: 6 },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: 0.4,
          fontSize: 12,
          color: wienColors.fastSchwarz,
          borderBottom: `2px solid ${wienColors.wienRot}`,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 4, fontWeight: 600 },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: { color: wienColors.uiLink, fontWeight: 600 },
      },
    },
    BackstageHeader: {
      styleOverrides: {
        header: {
          backgroundImage: 'none',
          backgroundColor: wienColors.wienRot,
          color: wienColors.weiss,
          boxShadow: 'none',
          paddingTop: 40,
          paddingBottom: 40,
        },
        title: {
          color: wienColors.weiss,
          fontWeight: 800,
          fontSize: 40,
          letterSpacing: -0.25,
        },
        subtitle: { color: 'rgba(255,255,255,0.92)' },
        type: { color: 'rgba(255,255,255,0.92)' },
      },
    },
    BackstageHeaderLabel: {
      styleOverrides: {
        label: { color: 'rgba(255,255,255,0.92)' },
        value: { color: wienColors.weiss },
      },
    },
    BackstageSidebar: {
      styleOverrides: {
        drawer: { backgroundColor: wienColors.fastSchwarz },
      },
    },
    BackstageSidebarItem: {
      styleOverrides: {
        selected: { borderLeft: `4px solid ${wienColors.wienRot}` },
      },
    },
  },
});

export const wienDarkTheme = createUnifiedTheme({
  fontFamily: fontStack,
  defaultPageTheme: 'home',
  pageTheme: pageThemes,
  typography,
  palette: {
    ...palettes.dark,
    primary: {
      main: wienColors.morgenrot,
      light: wienColors.morgenrotLight,
      dark: wienColors.wienRot,
      contrastText: wienColors.fastSchwarz,
    },
    secondary: {
      main: wienColors.flieder,
      light: wienColors.fliederLight,
      dark: wienColors.abendstimmung,
      contrastText: wienColors.fastSchwarz,
    },
    background: {
      default: '#1b1b1b',
      paper: '#262626',
    },
    navigation: {
      background: '#121212',
      indicator: wienColors.wienRot,
      color: '#d6d1ca',
      selectedColor: wienColors.weiss,
      navItem: { hoverBackground: '#2a2a2a' },
      submenu: { background: '#1e1e1e' },
    },
    pinSidebarButton: {
      icon: wienColors.weiss,
      background: wienColors.wienRot,
    },
    tabbar: { indicator: wienColors.wienRot },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: { body: { fontFamily: fontStack } },
    },
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', fontWeight: 700, borderRadius: 4 },
      },
    },
    BackstageHeader: {
      styleOverrides: {
        header: {
          backgroundImage: 'none',
          backgroundColor: wienColors.wienRot,
          color: wienColors.weiss,
          boxShadow: 'none',
        },
      },
    },
  },
});

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
