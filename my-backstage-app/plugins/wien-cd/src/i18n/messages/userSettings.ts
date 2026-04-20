import { createTranslationMessages } from '@backstage/frontend-plugin-api';
import { userSettingsTranslationRef } from '@backstage/plugin-user-settings/alpha';

export const userSettingsDe = createTranslationMessages({
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
