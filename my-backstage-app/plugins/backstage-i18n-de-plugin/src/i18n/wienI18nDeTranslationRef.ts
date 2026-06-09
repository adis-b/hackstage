/**
 * German i18n translation ref — sidebar labels, nav-item title overrides,
 * and TechDocs empty-state strings not covered by upstream Backstage refs.
 */
import { createTranslationRef } from '@backstage/frontend-plugin-api';

export const wienI18nDeTranslationRef = createTranslationRef({
  id: 'i18n-de',
  messages: {
    sidebar: {
      groups: {
        search: 'Search',
        menu: 'Menu',
        settings: 'Settings',
      },
      notifications: 'Notifications',
    },
    pageTitles: {
      page_catalog: 'Catalog',
      page_user_settings: 'Settings',
      page_user_settings_general: 'General',
      page_user_settings_auth_providers: 'Authentication Providers',
      page_user_settings_feature_flags: 'Feature Flags',
      page_catalog_graph: 'Catalog Graph',
      page_search: 'Search',
      page_api_docs: 'APIs',
      page_catalog_import: 'Register Existing Component',
      page_kubernetes: 'OpenShift',
      page_notifications: 'Notifications',
      page_app_wien_techdocs: 'Docs',
      page_app_visualizer: 'Visualizer',
      page_app_openshift: 'OpenShift',
      page_scaffolder: 'Create',
      page_scaffolder_templates: 'Templates',
      page_scaffolder_tasks: 'Tasks',
      page_scaffolder_actions: 'Actions',
      page_scaffolder_editor: 'Template Editor',
      page_scaffolder_templating_extensions: 'Templating Extensions',
    },
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
      page_app_wien_techdocs: 'Docs',
      page_catalog_graph: 'Catalog Graph',
      page_notifications: 'Notifications',
      page_kubernetes: 'OpenShift',
      page_catalog_import: 'Register Existing Component',
      page_app_visualizer: 'Visualizer',
      nav_item_app_visualizer: 'Visualizer',
      page_user_settings: 'Settings',
      nav_item_user_settings: 'Settings',
      page_app_openshift: 'OpenShift',
    },
    openshift: {
      emptyState: {
        title: 'OpenShift not configured',
        description:
          'This demo portal does not connect to a cluster yet. OpenShift workload views appear on catalog entity pages once `kubernetes.io/*` annotations are configured.',
      },
    },
    techdocs: {
      errors: {
        couldNotLoad: 'Could not load available documentation.',
      },
      emptyState: {
        title: 'No documents to show',
        description: 'Create your own document. Check out our {{link}}.',
        linkLabel: 'Getting Started Information',
        actionTitle: 'DOCS',
      },
    },
  },
});

/**
 * Convert a Backstage extension id to the safe translation key used by
 * {@link wienI18nDeTranslationRef}.
 */
export function slugifyNavItemId(extensionId: string): string {
  return extensionId.replace(/[:/-]/g, '_');
}
