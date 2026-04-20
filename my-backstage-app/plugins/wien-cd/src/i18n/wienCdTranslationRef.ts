/**
 * Stadt Wien Corporate Design translation ref — covers all UI strings that
 * are **not** covered by an upstream Backstage translation ref. Most
 * notably:
 *
 *  - the sidebar group labels ("Search / Menu / Settings")
 *  - the sidebar notifications item text
 *  - titles of NavItems that are otherwise hard-coded in each plugin's
 *    NavItemBlueprint / PageBlueprint (e.g. "Catalog", "APIs", "Docs",
 *    "Catalog Graph", "Visualizer", "OpenShift", "Register ...",
 *    "Settings", "Create", "Notifications")
 *
 * The ref is defined with English default messages; localised German
 * messages are registered by `wienCdAppModule` via `TranslationBlueprint`
 * the same way any other Backstage plugin does it, so toggling the
 * language in Settings → Appearance swaps these strings as well.
 */
import { createTranslationRef } from '@backstage/frontend-plugin-api';

export const wienCdTranslationRef = createTranslationRef({
  id: 'wien-cd',
  messages: {
    sidebar: {
      groups: {
        search: 'Search',
        menu: 'Menu',
        settings: 'Settings',
      },
      notifications: 'Notifications',
    },
    // Nav item labels keyed by a safe slug derived from the extension
    // id. We do NOT use the raw extension id (e.g. `page:catalog`) as a
    // key because i18next treats `:` as a special namespace separator.
    // The slug is produced by replacing `:` and `/` with `_`, see
    // `slugifyNavItemId` in the consuming app.
    navItemTitles: {
      page_catalog: 'Catalog',
      nav_item_catalog: 'Catalog',
      page_scaffolder: 'Create',
      nav_item_scaffolder: 'Create',
      page_search: 'Search',
      nav_item_search: 'Search',
      page_api_docs_apis: 'APIs',
      nav_item_api_docs: 'APIs',
      page_techdocs: 'Docs',
      nav_item_techdocs: 'Docs',
      page_catalog_graph: 'Catalog Graph',
      page_notifications: 'Notifications',
      page_kubernetes: 'OpenShift',
      page_catalog_import: 'Register Existing Component',
      page_app_visualizer: 'Visualizer',
      nav_item_app_visualizer: 'Visualizer',
      page_user_settings: 'Settings',
      nav_item_user_settings: 'Settings',
    },
  },
});

/**
 * Convert a Backstage extension id (e.g. `page:catalog`,
 * `nav-item:user-settings`) to the safe translation key used by
 * {@link wienCdTranslationRef}.
 */
export function slugifyNavItemId(extensionId: string): string {
  return extensionId.replace(/[:/-]/g, '_');
}
