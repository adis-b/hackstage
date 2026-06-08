/**
 * Stadt Wien Corporate Design themes for Backstage.
 *
 * Colours and typography follow the City of Vienna CD manual:
 *   https://www.wien.gv.at/spezial/cd-manual/
 *   https://handbuch.wien.gv.at/look-and-feel/farben/
 *
 * Both a light ("hell") and a dark ("dunkel") variant are provided.
 * The primary accent can be tuned per deployment instance:
 *   - `on-prem` — Wien Rot (default Stadt Wien brand)
 *   - `cloud`   — Wasserblau (cloud instance indicator)
 */
import {
  UnifiedTheme,
  createUnifiedTheme,
  genPageTheme,
  palettes,
  shapes,
} from '@backstage/theme';

/** Deployment instance type — drives the primary accent colour. */
export type WienInstanceVariant = 'on-prem' | 'cloud';

/** Stadt Wien brand palette (HEX from the wien.gv.at handbook). */
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
} as const;

/** Accent colours used by a deployment instance variant. */
export interface WienVariantAccent {
  primary: string;
  primaryLight: string;
  primaryDark: string;
  primaryHover: string;
}

/** Resolve accent tokens for an instance variant. */
export function getVariantAccent(variant: WienInstanceVariant): WienVariantAccent {
  if (variant === 'cloud') {
    return {
      primary: wienColors.wasserblau,
      primaryLight: wienColors.wasserblauLight,
      primaryDark: wienColors.uiLink,
      primaryHover: '#1f4baf',
    };
  }
  return {
    primary: wienColors.wienRot,
    primaryLight: wienColors.morgenrot,
    primaryDark: '#cd0000',
    primaryHover: '#cd0000',
  };
}

/** Map instance variant to a display colour (for chips, badges). */
export function getVariantDisplayColor(variant: WienInstanceVariant): string {
  return getVariantAccent(variant).primary;
}

/**
 * Wiener Melange font stack with the Lucida Sans fallback chain recommended
 * by the handbook, extended with modern system fonts for platforms where
 * Lucida Sans is not available.
 */
export const wienFontStack =
  '"Wiener Melange", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", ' +
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

const headerFontWeight = 700;

const typography = {
  fontFamily: wienFontStack,
  htmlFontSize: 16,
  h1: { fontSize: 54, fontWeight: 800, marginBottom: 10, fontFamily: wienFontStack },
  h2: { fontSize: 40, fontWeight: 800, marginBottom: 8, fontFamily: wienFontStack },
  h3: { fontSize: 30, fontWeight: headerFontWeight, marginBottom: 6, fontFamily: wienFontStack },
  h4: { fontSize: 24, fontWeight: headerFontWeight, marginBottom: 6, fontFamily: wienFontStack },
  h5: { fontSize: 20, fontWeight: headerFontWeight, marginBottom: 4, fontFamily: wienFontStack },
  h6: { fontSize: 17, fontWeight: headerFontWeight, marginBottom: 2, fontFamily: wienFontStack },
};

function createPageThemes(accent: WienVariantAccent) {
  return {
    home: genPageTheme({ colors: [accent.primary, accent.primaryLight], shape: shapes.wave }),
    documentation: genPageTheme({
      colors: [wienColors.abendstimmung, wienColors.flieder],
      shape: shapes.wave2,
    }),
    tool: genPageTheme({
      colors: [wienColors.abendstimmung, accent.primary],
      shape: shapes.round,
    }),
    service: genPageTheme({
      colors: [accent.primary, accent.primaryLight],
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
      colors: [accent.primary, wienColors.abendstimmung],
      shape: shapes.wave,
    }),
    apis: genPageTheme({
      colors: [wienColors.flieder, wienColors.wasserblau],
      shape: shapes.wave,
    }),
  };
}

function createLightComponents(accent: WienVariantAccent) {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: wienFontStack,
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
          backgroundColor: accent.primary,
          color: wienColors.weiss,
          '&:hover': { backgroundColor: accent.primaryHover },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { backgroundColor: accent.primary, color: wienColors.weiss },
      },
    },
    MuiPaper: { styleOverrides: { root: { borderRadius: 6 } } },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: 0.4,
          fontSize: 12,
          color: wienColors.fastSchwarz,
          borderBottom: `2px solid ${accent.primary}`,
        },
      },
    },
    MuiChip: { styleOverrides: { root: { borderRadius: 4, fontWeight: 600 } } },
    MuiLink: {
      styleOverrides: { root: { color: wienColors.uiLink, fontWeight: 600 } },
    },
    BackstageHeader: {
      styleOverrides: {
        header: {
          backgroundImage: 'none',
          backgroundColor: accent.primary,
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
      styleOverrides: { drawer: { backgroundColor: wienColors.fastSchwarz } },
    },
    BackstageSidebarItem: {
      styleOverrides: {
        selected: { borderLeft: `4px solid ${accent.primary}` },
      },
    },
  };
}

function createDarkComponents(accent: WienVariantAccent) {
  return {
    MuiCssBaseline: {
      styleOverrides: { body: { fontFamily: wienFontStack } },
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
          backgroundColor: accent.primaryDark,
          color: wienColors.weiss,
          boxShadow: 'none',
        },
      },
    },
  };
}

export interface CreateWienThemeOptions {
  variant?: WienInstanceVariant;
  mode: 'light' | 'dark';
}

/**
 * Build a Stadt Wien unified theme for a given deployment instance and mode.
 */
export function createWienTheme({
  variant = 'on-prem',
  mode,
}: CreateWienThemeOptions): UnifiedTheme {
  const accent = getVariantAccent(variant);
  const pageThemes = createPageThemes(accent);

  if (mode === 'light') {
    return createUnifiedTheme({
      fontFamily: wienFontStack,
      defaultPageTheme: 'home',
      pageTheme: pageThemes,
      typography,
      palette: {
        ...palettes.light,
        primary: {
          main: accent.primary,
          light: accent.primaryLight,
          dark: accent.primaryDark,
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
          indicator: accent.primary,
          color: '#f3f1ef',
          selectedColor: wienColors.weiss,
          navItem: { hoverBackground: '#1b1b1b' },
          submenu: { background: '#1b1b1b' },
        },
        pinSidebarButton: {
          icon: wienColors.weiss,
          background: accent.primary,
        },
        tabbar: { indicator: accent.primary },
        highlight: wienColors.goldgelbLight,
        errorBackground: wienColors.morgenrotLight,
        warningBackground: wienColors.goldgelbLight,
        infoBackground: wienColors.wasserblauLight,
      },
      components: createLightComponents(accent),
    });
  }

  return createUnifiedTheme({
    fontFamily: wienFontStack,
    defaultPageTheme: 'home',
    pageTheme: pageThemes,
    typography,
    palette: {
      ...palettes.dark,
      primary: {
        main: accent.primaryLight,
        light: accent.primaryLight,
        dark: accent.primary,
        contrastText: wienColors.fastSchwarz,
      },
      secondary: {
        main: wienColors.flieder,
        light: wienColors.fliederLight,
        dark: wienColors.abendstimmung,
        contrastText: wienColors.fastSchwarz,
      },
      background: { default: '#1b1b1b', paper: '#262626' },
      navigation: {
        background: '#121212',
        indicator: accent.primary,
        color: '#d6d1ca',
        selectedColor: wienColors.weiss,
        navItem: { hoverBackground: '#2a2a2a' },
        submenu: { background: '#1e1e1e' },
      },
      pinSidebarButton: {
        icon: wienColors.weiss,
        background: accent.primary,
      },
      tabbar: { indicator: accent.primary },
    },
    components: createDarkComponents(accent),
  });
}

/** Stadt Wien light ("hell") theme — on-premises default. */
export const wienLightTheme: UnifiedTheme = createWienTheme({
  variant: 'on-prem',
  mode: 'light',
});

/** Stadt Wien dark ("dunkel") theme — on-premises default. */
export const wienDarkTheme: UnifiedTheme = createWienTheme({
  variant: 'on-prem',
  mode: 'dark',
});

/** Cloud light theme convenience export. */
export const wienCloudLightTheme: UnifiedTheme = createWienTheme({
  variant: 'cloud',
  mode: 'light',
});

/** Cloud dark theme convenience export. */
export const wienCloudDarkTheme: UnifiedTheme = createWienTheme({
  variant: 'cloud',
  mode: 'dark',
});
