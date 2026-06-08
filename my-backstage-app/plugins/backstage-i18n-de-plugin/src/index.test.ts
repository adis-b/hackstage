import {
  wienI18nDeTranslationRef,
  slugifyNavItemId,
  wienGermanTranslations,
} from './index';

describe('@wien/backstage-i18n-de-plugin', () => {
  describe('translation ref', () => {
    it('is identified as "i18n-de"', () => {
      expect(wienI18nDeTranslationRef.id).toBe('i18n-de');
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
        'wienI18nDe',
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
