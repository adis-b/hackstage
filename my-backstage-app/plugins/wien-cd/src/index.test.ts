import {
  wienColors,
  wienFontStack,
  wienLightTheme,
  wienDarkTheme,
  wienCdTranslationRef,
  slugifyNavItemId,
  wienGermanTranslations,
} from './index';

describe('@stadt-wien/backstage-plugin-cd', () => {
  describe('palette', () => {
    it('uses Wien Rot as the primary brand color', () => {
      expect(wienColors.wienRot).toBe('#ff0000');
    });

    it('contains every named Wien CD color at a non-empty hex value', () => {
      for (const [name, value] of Object.entries(wienColors)) {
        expect(value).toMatch(/^#([0-9a-fA-F]{3}){1,2}$/);
        expect(name).not.toMatch(/undefined/);
      }
    });

    it('exposes a font stack that begins with Wiener Melange', () => {
      expect(wienFontStack.startsWith('"Wiener Melange"')).toBe(true);
    });
  });

  describe('themes', () => {
    it('registers a wien-light theme with Wien Rot as primary', () => {
      expect(wienLightTheme.getTheme('v5')?.palette.primary.main).toBe(
        wienColors.wienRot,
      );
    });

    it('registers a wien-dark theme whose body background is dark', () => {
      const bg = wienDarkTheme.getTheme('v5')?.palette.background.default;
      expect(bg).toBe('#1b1b1b');
    });
  });

  describe('translation ref', () => {
    it('is identified as "wien-cd"', () => {
      expect(wienCdTranslationRef.id).toBe('wien-cd');
    });

    it('slugifyNavItemId sanitises `:` and `/` characters', () => {
      expect(slugifyNavItemId('page:catalog')).toBe('page_catalog');
      expect(slugifyNavItemId('nav-item:user-settings')).toBe(
        'nav_item_user_settings',
      );
      expect(slugifyNavItemId('page:api-docs/apis')).toBe(
        'page_api_docs_apis',
      );
    });
  });

  describe('german translations', () => {
    it('ships resources for every user-visible core plugin', () => {
      const expected = [
        'wienCd',
        'userSettings',
        'catalog',
        'catalogReact',
        'scaffolder',
        'scaffolderReact',
        'apiDocs',
        'catalogGraph',
        'catalogImport',
        'notifications',
        'search',
        'searchReact',
        'org',
        'coreComponents',
      ];
      for (const key of expected) {
        expect(
          (wienGermanTranslations as Record<string, unknown>)[key],
        ).toBeDefined();
      }
    });
  });

  // Mirrors what `scripts/coverage.cjs --require-coverage 100` enforces
  // at CI time. We assert here too so that a developer who breaks
  // coverage by adding a new key to an upstream ref but forgetting the
  // German bundle gets a fast `yarn workspace ... test` failure.
  describe('translation coverage', () => {
    it('every covered upstream ref is at 100% German coverage', () => {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const path = require('path');
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const { spawnSync } = require('child_process');
      const script = path.resolve(__dirname, '..', 'scripts', 'coverage.cjs');
      const result = spawnSync(
        'node',
        [script, '--require-coverage', '100'],
        { encoding: 'utf8' },
      );
      if (result.status !== 0) {
        // eslint-disable-next-line no-console
        console.error(result.stdout, result.stderr);
      }
      expect(result.status).toBe(0);
    }, 30000);
  });
});
