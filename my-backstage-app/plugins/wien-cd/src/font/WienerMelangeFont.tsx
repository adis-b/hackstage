import { useEffect } from 'react';
import { AppRootElementBlueprint } from '@backstage/frontend-plugin-api';

import { wienerMelangeWoff2Base64 } from './wienerMelangeWoff2Base64';
import { wienFontStack } from '../theme/wienTheme';

const STYLE_ELEMENT_ID = 'wien-cd-fontface';

/**
 * Injects a single `<style>` tag containing the `@font-face` declaration for
 * the Wiener Melange variable font and overrides the `--bui-font-regular`
 * custom property exposed by `@backstage/ui`, plus the inherited body font,
 * so the whole Backstage app is rendered in the Stadt Wien brand typography.
 *
 * The font data is embedded as a base64 woff2 data URI so no asset hosting
 * is required.
 */
const WienerMelangeFontFace = () => {
  useEffect(() => {
    if (document.getElementById(STYLE_ELEMENT_ID)) {
      return undefined;
    }
    const style = document.createElement('style');
    style.id = STYLE_ELEMENT_ID;
    style.appendChild(
      document.createTextNode(`
@font-face {
  font-family: 'Wiener Melange';
  font-style: normal;
  font-weight: 300 900;
  font-display: swap;
  src: url(data:font/woff2;base64,${wienerMelangeWoff2Base64}) format('woff2-variations'),
       url(data:font/woff2;base64,${wienerMelangeWoff2Base64}) format('woff2');
}
:root {
  --bui-font-regular: ${wienFontStack} !important;
}
html, body, #root {
  font-family: ${wienFontStack};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h1, h2, h3, h4, h5, h6 {
  font-family: ${wienFontStack} !important;
}
      `),
    );
    document.head.appendChild(style);
    return () => {
      style.parentElement?.removeChild(style);
    };
  }, []);
  return null;
};

/**
 * App-root extension that attaches the Wiener Melange `@font-face` definition
 * to the running Backstage app. Exposed as an ExtensionBlueprint so that
 * consumers can disable it via `app-config.yaml`
 * (`app-root-element:wien-cd/wiener-melange-font: false`) if they want to
 * self-host the font themselves.
 */
export const WienerMelangeFontElement = AppRootElementBlueprint.make({
  name: 'wiener-melange-font',
  params: {
    element: <WienerMelangeFontFace />,
  },
});
