/**
 * Maps current routes to {@link wienI18nDeTranslationRef} `pageTitles.*` keys.
 *
 * PageBlueprint titles are static English strings; this table lets a
 * swappable PageLayout resolve bilingual headers at render time.
 */

/** Longest-prefix wins — order more specific prefixes first. */
const PAGE_TITLE_PREFIXES: ReadonlyArray<[prefix: string, key: string]> = [
  ['/settings', 'pageTitles.page_user_settings'],
  ['/create', 'pageTitles.page_scaffolder'],
];

const PAGE_TITLE_EXACT: ReadonlyRecord<string, string> = {
  '/': 'pageTitles.page_catalog',
  '/catalog': 'pageTitles.page_catalog',
  '/catalog-graph': 'pageTitles.page_catalog_graph',
  '/search': 'pageTitles.page_search',
  '/api-docs': 'pageTitles.page_api_docs',
  '/catalog-import': 'pageTitles.page_catalog_import',
  '/kubernetes': 'pageTitles.page_app_openshift',
  '/notifications': 'pageTitles.page_notifications',
  '/docs': 'pageTitles.page_app_wien_techdocs',
  '/visualizer': 'pageTitles.page_app_visualizer',
};

/** Tab segment (last path part) → translation key, scoped by parent section. */
const TAB_TITLE_KEYS: ReadonlyRecord<string, ReadonlyRecord<string, string>> = {
  settings: {
    general: 'pageTitles.page_user_settings_general',
    'auth-providers': 'pageTitles.page_user_settings_auth_providers',
    'feature-flags': 'pageTitles.page_user_settings_feature_flags',
  },
  create: {
    templates: 'pageTitles.page_scaffolder_templates',
    tasks: 'pageTitles.page_scaffolder_tasks',
    actions: 'pageTitles.page_scaffolder_actions',
    editor: 'pageTitles.page_scaffolder_editor',
    'templating-extensions': 'pageTitles.page_scaffolder_templating_extensions',
  },
};

type ReadonlyRecord<K extends string, V> = Readonly<Partial<Record<K, V>>>;

export function normalizePathname(pathname: string): string {
  const trimmed = pathname.replace(/\/$/, '');
  return trimmed === '' ? '/' : trimmed;
}

export function getPageTitleKey(pathname: string): string | undefined {
  const normalized = normalizePathname(pathname);

  const exact = PAGE_TITLE_EXACT[normalized];
  if (exact) {
    return exact;
  }

  for (const [prefix, key] of PAGE_TITLE_PREFIXES) {
    if (normalized === prefix || normalized.startsWith(`${prefix}/`)) {
      return key;
    }
  }

  return undefined;
}

export function getTabTitleKey(
  parentPathname: string,
  tabHref: string,
): string | undefined {
  const parent = normalizePathname(parentPathname);
  const section = parent.split('/').filter(Boolean)[0];
  if (!section) {
    return undefined;
  }

  const segment = tabHref.replace(/^\//, '').split('/').filter(Boolean).pop();
  if (!segment) {
    return undefined;
  }

  return TAB_TITLE_KEYS[section]?.[segment];
}
