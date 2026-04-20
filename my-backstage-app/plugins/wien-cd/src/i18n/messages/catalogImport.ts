import { createTranslationMessages } from '@backstage/frontend-plugin-api';
import { catalogImportTranslationRef } from '@backstage/plugin-catalog-import/alpha';

export const catalogImportDe = createTranslationMessages({
  ref: catalogImportTranslationRef,
  messages: {
    'buttons.back': 'Zurück',
    'defaultImportPage.headerTitle': 'Bestehende Komponente registrieren',
    'defaultImportPage.contentHeaderTitle':
      'Beginnen Sie, Ihre Komponente in {{appTitle}} zu verfolgen',
    'defaultImportPage.supportTitle':
      'Beginnen Sie, Ihre Komponente in {{appTitle}} zu verfolgen, indem Sie sie zum Software-Katalog hinzufügen.',
    'importInfoCard.title': 'Bestehende Komponente registrieren',
    'importInfoCard.deepLinkTitle': 'Mehr über den Software-Katalog erfahren',
    'importInfoCard.linkDescription':
      'Geben Sie die URL zu Ihrem Quellcode-Repository ein, um es zu {{appTitle}} hinzuzufügen.',
    'importInfoCard.fileLinkTitle': 'Link zu einer bestehenden Entitätsdatei',
    'importInfoCard.examplePrefix': 'Beispiel: ',
    'importInfoCard.fileLinkDescription':
      'Der Assistent analysiert die Datei, zeigt eine Vorschau der Entitäten und fügt sie zum {{appTitle}}-Katalog hinzu.',
    'importInfoCard.githubIntegration.title': 'Link zu einem Repository',
    'importInfoCard.githubIntegration.label': 'Nur GitHub',
    'importInfoCard.exampleDescription':
      'Der Assistent sucht alle {{catalogFilename}}-Dateien im Repository, zeigt eine Vorschau der Entitäten und fügt sie zum {{appTitle}}-Katalog hinzu.',
    'importInfoCard.preparePullRequestDescription':
      'Wenn keine Entitäten gefunden werden, bereitet der Assistent einen Pull Request vor, der eine Beispiel-{{catalogFilename}} anlegt und den {{appTitle}}-Katalog darauf vorbereitet, alle Entitäten zu laden, sobald der Pull Request zusammengeführt wurde.',
    'importStepper.singleLocation.title': 'Standorte auswählen',
    'importStepper.singleLocation.description': 'Gefundene Standorte: 1',
    'importStepper.multipleLocations.title': 'Standorte auswählen',
    'importStepper.multipleLocations.description':
      'Gefundene Standorte: {{length, number}}',
    'importStepper.noLocation.title': 'Pull Request erstellen',
    'importStepper.noLocation.createPr.detailsTitle': 'Pull Request-Details',
    'importStepper.noLocation.createPr.titleLabel': 'Titel des Pull Requests',
    'importStepper.noLocation.createPr.titlePlaceholder':
      'Backstage-Catalog-Entitätsbeschreibungsdateien hinzufügen',
    'importStepper.noLocation.createPr.bodyLabel':
      'Beschreibung des Pull Requests',
    'importStepper.noLocation.createPr.bodyPlaceholder':
      'Ein beschreibender Text mit Markdown-Unterstützung',
    'importStepper.noLocation.createPr.configurationTitle':
      'Entitätskonfiguration',
    'importStepper.noLocation.createPr.componentNameLabel':
      'Name der neu angelegten Komponente',
    'importStepper.noLocation.createPr.componentNamePlaceholder':
      'meine-komponente',
    'importStepper.noLocation.createPr.ownerLoadingText':
      'Gruppen werden geladen \u2026',
    'importStepper.noLocation.createPr.ownerHelperText':
      'Wählen Sie einen Eigentümer aus der Liste oder geben Sie eine Referenz auf eine Gruppe oder eine:n Benutzer:in ein',
    'importStepper.noLocation.createPr.ownerErrorHelperText':
      'Pflichtfeld',
    'importStepper.noLocation.createPr.ownerLabel':
      'Eigentümer der Entität',
    'importStepper.noLocation.createPr.ownerPlaceholder': 'meine-gruppe',
    'importStepper.noLocation.createPr.codeownersHelperText':
      'ACHTUNG: Dies kann fehlschlagen, wenn am Zielort keine CODEOWNERS-Datei gefunden wird.',
    'importStepper.analyze.title': 'URL auswählen',
    'importStepper.prepare.title': 'Import-Aktionen',
    'importStepper.prepare.description': 'Optional',
    'importStepper.review.title': 'Überprüfen',
    'importStepper.finish.title': 'Fertigstellen',
    'stepFinishImportLocation.backButtonText': 'Weitere registrieren',
    'stepFinishImportLocation.repository.title':
      'Der folgende Pull Request wurde geöffnet: ',
    'stepFinishImportLocation.repository.description':
      'Ihre Entitäten werden importiert, sobald der Pull Request zusammengeführt wurde.',
    'stepFinishImportLocation.locations.new':
      'Die folgenden Entitäten wurden zum Katalog hinzugefügt:',
    'stepFinishImportLocation.locations.existing':
      'Eine Aktualisierung wurde für die folgenden Standorte ausgelöst:',
    'stepFinishImportLocation.locations.viewButtonText':
      'Komponente anzeigen',
    'stepFinishImportLocation.locations.backButtonText':
      'Weitere registrieren',
    'stepInitAnalyzeUrl.error.repository':
      'Für Ihr Repository konnten keine Entitäten erzeugt werden',
    'stepInitAnalyzeUrl.error.locations':
      'An diesem Standort gibt es keine Entitäten',
    'stepInitAnalyzeUrl.error.default':
      'Unbekanntes Analyseergebnis vom Typ {{type}} erhalten. Bitte kontaktieren Sie den Support.',
    'stepInitAnalyzeUrl.error.url':
      'Muss mit http:// oder https:// beginnen.',
    'stepInitAnalyzeUrl.urlHelperText':
      'Geben Sie den vollständigen Pfad zu Ihrer Entitätsdatei ein, um Ihre Komponente zu verfolgen',
    'stepInitAnalyzeUrl.nextButtonText': 'Analysieren',
    'stepPrepareCreatePullRequest.description':
      'Sie haben einen Link zu einem {{integrationType}}-Repository angegeben, aber es konnte keine {{catalogFilename}} gefunden werden. Verwenden Sie dieses Formular, um einen Pull Request zu öffnen, der diese erstellt.',
    'stepPrepareCreatePullRequest.previewPr.title':
      'Pull Request-Vorschau',
    'stepPrepareCreatePullRequest.previewPr.subheader':
      'Neuen Pull Request erstellen',
    'stepPrepareCreatePullRequest.previewCatalogInfo.title':
      'Entitäten-Vorschau',
    'stepPrepareCreatePullRequest.nextButtonText': 'PR erstellen',
    'stepPrepareSelectLocations.locations.description':
      'Wählen Sie einen oder mehrere Standorte aus, die in Ihrem Git-Repository vorhanden sind:',
    'stepPrepareSelectLocations.locations.selectAll': 'Alle auswählen',
    'stepPrepareSelectLocations.existingLocations.description':
      'Diese Standorte sind bereits im Katalog vorhanden:',
    'stepPrepareSelectLocations.nextButtonText': 'Überprüfen',
    'stepReviewLocation.prepareResult.title':
      'Der folgende Pull Request wurde geöffnet: ',
    'stepReviewLocation.prepareResult.description':
      'Sie können den Standort bereits importieren und {{appTitle}} holt die Entitäten ab, sobald der Pull Request zusammengeführt wurde.',
    'stepReviewLocation.catalog.exists':
      'Die folgenden Standorte sind bereits im Katalog vorhanden:',
    'stepReviewLocation.catalog.new':
      'Die folgenden Entitäten werden zum Katalog hinzugefügt:',
    'stepReviewLocation.refresh': 'Aktualisieren',
    'stepReviewLocation.import': 'Importieren',
  },
});
