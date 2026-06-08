import { createTranslationMessages } from '@backstage/frontend-plugin-api';
import { coreComponentsTranslationRef } from '@backstage/core-components/alpha';

export const coreComponentsDe = createTranslationMessages({
  ref: coreComponentsTranslationRef,
  full: false,
  messages: {
    'signIn.title': 'Anmelden',
    'signIn.loginFailed': 'Anmeldung fehlgeschlagen',
    'signIn.customProvider.title': 'Benutzerdefinierte:r Benutzer:in',
    'signIn.customProvider.subtitle':
      'Geben Sie Ihre eigene Benutzer-ID und Anmeldedaten ein.\n Diese Auswahl wird nicht gespeichert.',
    'signIn.customProvider.userId': 'Benutzer-ID',
    'signIn.customProvider.tokenInvalid':
      'Token ist kein gültiges OpenID-Connect-JWT-Token',
    'signIn.customProvider.continue': 'Weiter',
    'signIn.customProvider.idToken': 'ID-Token (optional)',
    'signIn.guestProvider.title': 'Gast',
    'signIn.guestProvider.subtitle':
      'Als Gast anmelden.\n Sie haben keine verifizierte Identität, manche Funktionen sind daher nicht verfügbar.',
    'signIn.guestProvider.enter': 'Weiter',
    'skipToContent': 'Zum Inhalt springen',
    'copyTextButton.tooltipText':
      'Text in die Zwischenablage kopiert',
    'simpleStepper.reset': 'Zurücksetzen',
    'simpleStepper.finish': 'Fertigstellen',
    'simpleStepper.next': 'Weiter',
    'simpleStepper.skip': 'Überspringen',
    'simpleStepper.back': 'Zurück',
    'errorPage.subtitle': 'FEHLER {{status}}: {{statusMessage}}',
    'errorPage.title': 'Oh, hier ist etwas schiefgelaufen!',
    'errorPage.goBack': 'Zurück',
    'errorPage.showMoreDetails': 'Mehr Details anzeigen',
    'errorPage.showLessDetails': 'Weniger Details anzeigen',
    'emptyState.missingAnnotation.title': 'Fehlende Annotation',
    'emptyState.missingAnnotation.actionTitle':
      'Fügen Sie die Annotation wie im hervorgehobenen Beispiel unten zu Ihrer Komponenten-YAML hinzu:',
    'emptyState.missingAnnotation.readMore': 'Mehr erfahren',
    'supportConfig.default.title': 'Support ist nicht konfiguriert',
    'supportConfig.default.linkTitle':
      'Fügen Sie den Konfigurationsschlüssel `app.support` hinzu',
    'errorBoundary.title':
      'Bitte kontaktieren Sie {{slackChannel}}, um Hilfe zu erhalten.',
    'oauthRequestDialog.title': 'Anmeldung erforderlich',
    'oauthRequestDialog.authRedirectTitle':
      'Dies löst eine HTTP-Weiterleitung zur OAuth-Anmeldung aus.',
    'oauthRequestDialog.login': 'Anmelden',
    'oauthRequestDialog.rejectAll': 'Alle ablehnen',
    'oauthRequestDialog.message':
      'Melden Sie sich an, um {{appTitle}} Zugriff auf {{provider}}-APIs und -Identitäten zu gewähren.',
    'supportButton.title': 'Support',
    'supportButton.close': 'Schließen',
    'table.filter.title': 'Filter',
    'table.filter.clearAll': 'Alle zurücksetzen',
    'table.filter.placeholder': 'Alle Ergebnisse',
    'table.body.emptyDataSourceMessage': 'Keine Einträge vorhanden',
    'table.pagination.firstTooltip': 'Erste Seite',
    'table.pagination.labelDisplayedRows': '{from}-{to} von {count}',
    'table.pagination.labelRowsSelect': 'Zeilen',
    'table.pagination.lastTooltip': 'Letzte Seite',
    'table.pagination.nextTooltip': 'Nächste Seite',
    'table.pagination.previousTooltip': 'Vorherige Seite',
    'table.toolbar.search': 'Filter',
    'table.header.actions': 'Aktionen',
    'alertDisplay.message_one': '({{ count }} neuere Nachricht)',
    'alertDisplay.message_other': '({{ count }} neuere Nachrichten)',
    'autoLogout.stillTherePrompt.title':
      'Abmeldung wegen Inaktivität',
    'autoLogout.stillTherePrompt.buttonText':
      'Ja! Bitte nicht abmelden',
    'dependencyGraph.fullscreenTooltip': 'Vollbild umschalten',
    'proxiedSignInPage.title':
      'Sie scheinen nicht angemeldet zu sein. Bitte laden Sie die Seite neu.',
    'logViewer.downloadBtn.tooltip': 'Logs herunterladen',
    'logViewer.searchField.placeholder': 'Suchen',
  },
});
