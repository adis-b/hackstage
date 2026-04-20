import { createTranslationMessages } from '@backstage/frontend-plugin-api';
import { wienCdTranslationRef } from '../wienCdTranslationRef';

export const wienCdDe = createTranslationMessages({
  ref: wienCdTranslationRef,
  messages: {
    'sidebar.groups.search': 'Suche',
    'sidebar.groups.menu': 'Menü',
    'sidebar.groups.settings': 'Einstellungen',
    'sidebar.notifications': 'Benachrichtigungen',
    'navItemTitles.page_catalog': 'Katalog',
    'navItemTitles.nav_item_catalog': 'Katalog',
    'navItemTitles.page_scaffolder': 'Erstellen',
    'navItemTitles.nav_item_scaffolder': 'Erstellen',
    'navItemTitles.page_search': 'Suche',
    'navItemTitles.nav_item_search': 'Suche',
    'navItemTitles.page_api_docs_apis': 'APIs',
    'navItemTitles.nav_item_api_docs': 'APIs',
    'navItemTitles.page_techdocs': 'Dokumentation',
    'navItemTitles.nav_item_techdocs': 'Dokumentation',
    'navItemTitles.page_catalog_graph': 'Katalog-Diagramm',
    'navItemTitles.page_notifications': 'Benachrichtigungen',
    'navItemTitles.page_kubernetes': 'Kubernetes',
    'navItemTitles.page_catalog_import': 'Bestehende Komponente registrieren',
    'navItemTitles.page_app_visualizer': 'Visualisierung',
    'navItemTitles.nav_item_app_visualizer': 'Visualisierung',
    'navItemTitles.page_user_settings': 'Einstellungen',
    'navItemTitles.nav_item_user_settings': 'Einstellungen',
  },
});
