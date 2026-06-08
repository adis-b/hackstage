import {
  getPageTitleKey,
  getTabTitleKey,
  normalizePathname,
} from './pageTitlePaths';

describe('pageTitlePaths', () => {
  it('normalizes trailing slashes', () => {
    expect(normalizePathname('/search/')).toBe('/search');
    expect(normalizePathname('/')).toBe('/');
  });

  it('maps single-page routes to pageTitles keys', () => {
    expect(getPageTitleKey('/catalog-graph')).toBe(
      'pageTitles.page_catalog_graph',
    );
    expect(getPageTitleKey('/search')).toBe('pageTitles.page_search');
    expect(getPageTitleKey('/')).toBe('pageTitles.page_catalog');
  });

  it('maps section roots for nested routes', () => {
    expect(getPageTitleKey('/settings/general')).toBe(
      'pageTitles.page_user_settings',
    );
    expect(getPageTitleKey('/create/templates')).toBe(
      'pageTitles.page_scaffolder',
    );
  });

  it('maps settings and scaffolder tab segments', () => {
    expect(getTabTitleKey('/settings', 'general')).toBe(
      'pageTitles.page_user_settings_general',
    );
    expect(getTabTitleKey('/settings', 'auth-providers')).toBe(
      'pageTitles.page_user_settings_auth_providers',
    );
    expect(getTabTitleKey('/create', 'templates')).toBe(
      'pageTitles.page_scaffolder_templates',
    );
  });
});
