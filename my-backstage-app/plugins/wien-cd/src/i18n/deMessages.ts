import {
  createTranslationMessages,
  createTranslationResource,
} from '@backstage/frontend-plugin-api';
import { userSettingsTranslationRef } from '@backstage/plugin-user-settings/alpha';
import { catalogTranslationRef } from '@backstage/plugin-catalog/alpha';
import { scaffolderTranslationRef } from '@backstage/plugin-scaffolder/alpha';

const userSettingsDe = createTranslationMessages({
  ref: userSettingsTranslationRef,
  messages: {
    'sidebarTitle': 'Einstellungen',
    'settingsLayout.title': 'Einstellungen',
    'appearanceCard.title': 'Erscheinungsbild',
    'profileCard.title': 'Profil',
    'themeToggle.title': 'Theme',
    'themeToggle.description': 'Theme-Modus ändern',
    'themeToggle.select': '{{theme}} auswählen',
    'themeToggle.selectAuto': 'Auto-Theme auswählen',
    'themeToggle.names.light': 'Hell',
    'themeToggle.names.dark': 'Dunkel',
    'themeToggle.names.auto': 'Auto',
    'languageToggle.title': 'Sprache',
    'languageToggle.description': 'Sprache der Oberfläche ändern',
    'languageToggle.select': 'Sprache {{language}} auswählen',
    'pinToggle.title': 'Seitenleiste anheften',
    'pinToggle.description': 'Verhindert das Einklappen der Seitenleiste',
    'pinToggle.switchTitles.pin': 'Seitenleiste anheften',
    'pinToggle.switchTitles.unpin': 'Seitenleiste lösen',
    'pinToggle.ariaLabelTitle': 'Schalter: Seitenleiste anheften',
    'identityCard.title': 'Backstage-Identität',
    'identityCard.noIdentityTitle': 'Keine Backstage-Identität',
    'identityCard.userEntity': 'Benutzer-Entität',
    'identityCard.ownershipEntities': 'Eigentümer-Entitäten',
    'signOutMenu.title': 'Abmelden',
    'signOutMenu.moreIconTitle': 'mehr',
    'authProviders.title': 'Verfügbare Anbieter',
    'defaultProviderSettings.description':
      'Stellt Authentifizierung gegen {{provider}}-APIs und -Identitäten bereit',
    'emptyProviders.title': 'Keine Authentifizierungs-Anbieter',
    'emptyProviders.description':
      'Sie können Authentifizierungs-Anbieter zu Backstage hinzufügen, um sich anzumelden.',
    'emptyProviders.action.title':
      'Öffnen Sie app-config.yaml und nehmen Sie die unten markierten Änderungen vor:',
    'emptyProviders.action.readMoreButtonTitle': 'Mehr lesen',
    'defaultSettingsPage.tabsTitle.general': 'Allgemein',
    'defaultSettingsPage.tabsTitle.authProviders':
      'Authentifizierungs-Anbieter',
    'defaultSettingsPage.tabsTitle.featureFlags': 'Feature-Flags',
    'featureFlags.title': 'Feature-Flags',
    'featureFlags.description':
      'Bitte laden Sie die Seite neu, wenn Sie Feature-Flags umschalten',
    'featureFlags.filterTitle': 'Filter',
    'featureFlags.clearFilter': 'Filter zurücksetzen',
    'featureFlags.emptyFlags.title': 'Keine Feature-Flags',
    'featureFlags.emptyFlags.description':
      'Feature-Flags ermöglichen es Plugins, neue Funktionen zur Aktivierung anzubieten.',
    'featureFlags.emptyFlags.action.title':
      'Ein Beispiel, wie ein Feature-Flag hinzugefügt wird, ist unten markiert:',
    'featureFlags.emptyFlags.action.readMoreButtonTitle': 'Mehr lesen',
    'featureFlags.flagItem.title.disable': 'Deaktivieren',
    'featureFlags.flagItem.title.enable': 'Aktivieren',
    'featureFlags.flagItem.subtitle.registeredInApplication':
      'In der Anwendung registriert',
    'featureFlags.flagItem.subtitle.registeredInPlugin':
      'Im Plugin {{pluginId}} registriert',
    'providerSettingsItem.title.signIn': 'Bei {{title}} anmelden',
    'providerSettingsItem.title.signOut': 'Von {{title}} abmelden',
    'providerSettingsItem.buttonTitle.signIn': 'Anmelden',
    'providerSettingsItem.buttonTitle.signOut': 'Abmelden',
  },
});

const catalogDe = createTranslationMessages({
  ref: catalogTranslationRef,
  messages: {
    'indexPage.title': '{{orgName}} Katalog',
    'indexPage.createButtonTitle': 'Erstellen',
    'indexPage.supportButtonContent': 'Alle Einträge im Software-Katalog',
    'entityPage.notFoundMessage':
      'Es gibt kein {{kind}} mit der angeforderten {{link}}.',
    'entityPage.notFoundLinkText': 'Art, Namespace und Name',
    'aboutCard.title': 'Über',
    'aboutCard.refreshButtonTitle': 'Aktualisierung der Entität planen',
    'aboutCard.refreshScheduledMessage': 'Aktualisierung geplant',
    'aboutCard.refreshButtonAriaLabel': 'Aktualisieren',
    'aboutCard.editButtonTitle': 'Metadaten bearbeiten',
    'aboutCard.editButtonAriaLabel': 'Bearbeiten',
    'aboutCard.createSimilarButtonTitle': 'Ähnliches erstellen',
    'aboutCard.launchTemplate': 'Vorlage starten',
    'aboutCard.viewTechdocs': 'TechDocs ansehen',
    'aboutCard.viewSource': 'Quellcode ansehen',
    'aboutCard.unknown': 'unbekannt',
    'aboutCard.descriptionField.label': 'Beschreibung',
    'aboutCard.descriptionField.value': 'Keine Beschreibung',
    'aboutCard.ownerField.label': 'Eigentümer',
    'aboutCard.ownerField.value': 'Kein Eigentümer',
    'aboutCard.systemField.label': 'System',
    'aboutCard.systemField.value': 'Kein System',
    'aboutCard.domainField.label': 'Bereich',
    'aboutCard.domainField.value': 'Keine Domain',
    'aboutCard.parentComponentField.label': 'Übergeordnete Komponente',
    'aboutCard.parentComponentField.value':
      'Keine übergeordnete Komponente',
    'aboutCard.kindField.label': 'Art',
    'aboutCard.typeField.label': 'Typ',
    'aboutCard.lifecycleField.label': 'Lebenszyklus',
    'aboutCard.tagsField.label': 'Schlagworte',
    'aboutCard.tagsField.value': 'Keine Schlagworte',
    'aboutCard.targetsField.label': 'Ziele',
    'searchResultItem.kind': 'Art',
    'searchResultItem.type': 'Typ',
    'searchResultItem.lifecycle': 'Lebenszyklus',
    'searchResultItem.owner': 'Eigentümer',
    'catalogTable.warningPanelTitle':
      'Katalog-Entitäten konnten nicht geladen werden.',
    'catalogTable.viewActionTitle': 'Ansehen',
    'catalogTable.editActionTitle': 'Bearbeiten',
    'catalogTable.starActionTitle': 'Zu Favoriten hinzufügen',
    'catalogTable.unStarActionTitle': 'Aus Favoriten entfernen',
    'catalogTable.allFilters': 'Alle',
    'dependsOnComponentsCard.title': 'Abhängig von Komponenten',
    'dependsOnComponentsCard.emptyMessage':
      'Keine Komponente ist eine Abhängigkeit dieser Komponente.',
    'dependencyOfComponentsCard.title': 'Abhängigkeit von Komponenten',
    'dependencyOfComponentsCard.emptyMessage':
      'Keine Komponente hängt von dieser Komponente ab.',
    'dependsOnResourcesCard.title': 'Abhängig von Ressourcen',
    'dependsOnResourcesCard.emptyMessage':
      'Keine Ressource ist eine Abhängigkeit dieser Komponente.',
    'entityContextMenu.copiedMessage': 'Kopiert!',
    'entityContextMenu.moreButtonTitle': 'Mehr',
    'entityContextMenu.inspectMenuTitle': 'Entität inspizieren',
    'entityContextMenu.copyURLMenuTitle': 'Entitäts-URL kopieren',
    'entityContextMenu.unregisterMenuTitle': 'Entität abmelden',
    'entityContextMenu.moreButtonAriaLabel': 'mehr',
  },
});

const scaffolderDe = createTranslationMessages({
  ref: scaffolderTranslationRef,
  messages: {
    'templateListPage.title': 'Neue Komponente erstellen',
    'templateListPage.pageTitle': 'Neue Komponente erstellen',
    'templateListPage.subtitle':
      'Neue Software-Komponenten aus Standardvorlagen Ihrer Organisation erstellen',
    'templateListPage.templateGroups.defaultTitle': 'Vorlagen',
    'templateListPage.templateGroups.otherTitle': 'Weitere Vorlagen',
    'templateListPage.contentHeader.registerExistingButtonTitle':
      'Bestehende Komponente registrieren',
    'templateListPage.contentHeader.supportButtonTitle':
      'Neue Software-Komponenten aus Standardvorlagen erstellen.',
    'templateListPage.additionalLinksForEntity.viewTechDocsTitle':
      'TechDocs ansehen',
  },
});

/** German translation resources keyed by plugin. */
export const wienGermanTranslations = {
  userSettings: createTranslationResource({
    ref: userSettingsTranslationRef,
    translations: { de: async () => ({ default: userSettingsDe }) },
  }),
  catalog: createTranslationResource({
    ref: catalogTranslationRef,
    translations: { de: async () => ({ default: catalogDe }) },
  }),
  scaffolder: createTranslationResource({
    ref: scaffolderTranslationRef,
    translations: { de: async () => ({ default: scaffolderDe }) },
  }),
};
