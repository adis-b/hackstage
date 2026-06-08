import { createTranslationMessages } from '@backstage/frontend-plugin-api';
import { scaffolderTranslationRef } from '@backstage/plugin-scaffolder/alpha';

export const scaffolderDe = createTranslationMessages({
  ref: scaffolderTranslationRef,
  full: false,
  messages: {
    // ── About-Card on entities backed by a template ────────────────────
    'aboutCard.launchTemplate': 'Vorlage starten',

    // ── /create/actions — installed scaffolder actions overview ────────
    'actionsPage.title': 'Installierte Aktionen',
    'actionsPage.pageTitle': 'Neue Komponente erstellen',
    'actionsPage.subtitle':
      'Sammlung aller installierten Scaffolder-Aktionen',
    'actionsPage.content.emptyState.title':
      'Keine Informationen verfügbar',
    'actionsPage.content.emptyState.description':
      'Es sind keine Aktionen installiert oder die Verbindung zum Backend ist gestört.',
    'actionsPage.content.searchFieldPlaceholder': 'Aktion suchen',
    'actionsPage.action.input': 'Eingabe',
    'actionsPage.action.output': 'Ausgabe',
    'actionsPage.action.examples': 'Beispiele',

    // ── Form-field titles + descriptions used by built-in pickers ──────
    'fields.entityNamePicker.title': 'Name',
    'fields.entityNamePicker.description': 'Eindeutiger Name der Komponente',
    'fields.entityPicker.title': 'Entität',
    'fields.entityPicker.description': 'Eine Entität aus dem Katalog',
    'fields.entityTagsPicker.title': 'Schlagworte',
    'fields.entityTagsPicker.description':
      'Relevante Schlagworte hinzufügen. Mit Eingabetaste neue Schlagworte ergänzen. Erlaubt: [a-z0-9+#] getrennt durch [-], maximal 63 Zeichen.',
    'fields.multiEntityPicker.title': 'Entität',
    'fields.multiEntityPicker.description': 'Eine Entität aus dem Katalog',
    'fields.myGroupsPicker.title': 'Entität',
    'fields.myGroupsPicker.description': 'Eine Entität aus dem Katalog',
    'fields.ownedEntityPicker.title': 'Entität',
    'fields.ownedEntityPicker.description': 'Eine Entität aus dem Katalog',
    'fields.ownerPicker.title': 'Eigentümer',
    'fields.ownerPicker.description': 'Der Eigentümer der Komponente',
    'fields.azureRepoPicker.organization.title': 'Organisation',
    'fields.azureRepoPicker.organization.description':
      'Organisation, der das Repository zugeordnet wird',
    'fields.azureRepoPicker.project.title': 'Projekt',
    'fields.azureRepoPicker.project.description':
      'Projekt, dem das Repository zugeordnet wird',
    'fields.bitbucketRepoPicker.workspaces.title':
      'Erlaubte Workspaces',
    'fields.bitbucketRepoPicker.workspaces.inputTitle': 'Workspaces',
    'fields.bitbucketRepoPicker.workspaces.description':
      'Workspace, dem das Repository zugeordnet wird',
    'fields.bitbucketRepoPicker.project.title': 'Erlaubte Projekte',
    'fields.bitbucketRepoPicker.project.inputTitle': 'Projekte',
    'fields.bitbucketRepoPicker.project.description':
      'Projekt, dem das Repository zugeordnet wird',
    'fields.gerritRepoPicker.owner.title': 'Eigentümer',
    'fields.gerritRepoPicker.owner.description':
      'Eigentümer des Projekts (optional)',
    'fields.gerritRepoPicker.parent.title': 'Übergeordnetes Projekt',
    'fields.gerritRepoPicker.parent.description':
      'Übergeordnetes Projekt, dem das Repository zugeordnet wird',
    'fields.giteaRepoPicker.owner.title': 'Eigentümer verfügbar',
    'fields.giteaRepoPicker.owner.inputTitle': 'Eigentümer',
    'fields.giteaRepoPicker.owner.description':
      'Gitea-Namespace, dem dieses Repository zugeordnet wird. Kann der Name einer Organisation, Gruppe, Untergruppe, eines Benutzers oder Projekts sein.',
    'fields.githubRepoPicker.owner.title': 'Eigentümer verfügbar',
    'fields.githubRepoPicker.owner.inputTitle': 'Eigentümer',
    'fields.githubRepoPicker.owner.description':
      'Organisation, Benutzer oder Projekt, dem dieses Repository zugeordnet wird',
    'fields.gitlabRepoPicker.owner.title': 'Eigentümer verfügbar',
    'fields.gitlabRepoPicker.owner.inputTitle': 'Eigentümer',
    'fields.gitlabRepoPicker.owner.description':
      'GitLab-Namespace, dem dieses Repository zugeordnet wird. Kann der Name einer Organisation, Gruppe, Untergruppe, eines Benutzers oder Projekts sein.',
    'fields.repoUrlPicker.host.title': 'Host',
    'fields.repoUrlPicker.host.description':
      'Host, auf dem das Repository angelegt wird',
    'fields.repoUrlPicker.repository.title': 'Verfügbare Repositorys',
    'fields.repoUrlPicker.repository.inputTitle': 'Repository',
    'fields.repoUrlPicker.repository.description': 'Name des Repositorys',
    'fields.repoOwnerPicker.title': 'Eigentümer',
    'fields.repoOwnerPicker.description':
      'Eigentümer des Repositorys',

    // ── /create/tasks — list of all started template runs ─────────────
    'listTaskPage.title': 'Vorlagen-Aufgaben anzeigen',
    'listTaskPage.pageTitle': 'Vorlagen-Aufgaben',
    'listTaskPage.subtitle': 'Alle gestarteten Aufgaben',
    'listTaskPage.content.emptyState.title':
      'Keine Informationen verfügbar',
    'listTaskPage.content.emptyState.description':
      'Es liegen keine Aufgaben vor oder die Verbindung zum Backend ist gestört.',
    'listTaskPage.content.tableTitle': 'Aufgaben',
    'listTaskPage.content.tableCell.taskID': 'Aufgaben-ID',
    'listTaskPage.content.tableCell.template': 'Vorlage',
    'listTaskPage.content.tableCell.created': 'Erstellt',
    'listTaskPage.content.tableCell.owner': 'Eigentümer',
    'listTaskPage.content.tableCell.status': 'Status',

    'ownerListPicker.title': 'Aufgaben-Eigentümer',
    'ownerListPicker.options.owned': 'Eigene',
    'ownerListPicker.options.all': 'Alle',

    // ── Single ongoing task page (/tasks/:taskId) ─────────────────────
    'ongoingTask.title': 'Ausführung von',
    'ongoingTask.pageTitle.hasTemplateName':
      'Ausführung von {{templateName}}',
    'ongoingTask.pageTitle.noTemplateName': 'Scaffolder-Lauf',
    'ongoingTask.subtitle': 'Aufgabe {{taskId}}',
    'ongoingTask.cancelButtonTitle': 'Abbrechen',
    'ongoingTask.retryButtonTitle': 'Erneut versuchen',
    'ongoingTask.startOverButtonTitle': 'Neu beginnen',
    'ongoingTask.hideLogsButtonTitle': 'Logs ausblenden',
    'ongoingTask.showLogsButtonTitle': 'Logs anzeigen',
    'ongoingTask.contextMenu.moreOptions': 'Weitere Optionen',
    'ongoingTask.contextMenu.hideLogs': 'Logs ausblenden',
    'ongoingTask.contextMenu.showLogs': 'Logs anzeigen',
    'ongoingTask.contextMenu.hideButtonBar': 'Button-Leiste ausblenden',
    'ongoingTask.contextMenu.retry': 'Erneut versuchen',
    'ongoingTask.contextMenu.showButtonBar': 'Button-Leiste anzeigen',
    'ongoingTask.contextMenu.startOver': 'Neu beginnen',
    'ongoingTask.contextMenu.cancel': 'Abbrechen',

    // ── Template editor (/create/edit) ────────────────────────────────
    'templateEditorForm.stepper.emptyText':
      'In der Vorlage sind keine spec-Parameter zur Vorschau enthalten.',
    'renderSchema.tableCell.name': 'Name',
    'renderSchema.tableCell.title': 'Titel',
    'renderSchema.tableCell.description': 'Beschreibung',
    'renderSchema.tableCell.type': 'Typ',
    'renderSchema.tableCell.value': 'Wert',
    'renderSchema.undefined': 'Kein Schema definiert',

    // ── /create/templating-extensions ─────────────────────────────────
    'templatingExtensions.title': 'Vorlagen-Erweiterungen',
    'templatingExtensions.pageTitle': 'Vorlagen-Erweiterungen',
    'templatingExtensions.subtitle':
      'Sammlung aller verfügbaren Vorlagen-Erweiterungen',
    'templatingExtensions.content.emptyState.title':
      'Keine Informationen verfügbar',
    'templatingExtensions.content.emptyState.description':
      'Es sind keine Vorlagen-Erweiterungen verfügbar oder die Verbindung zum Backend ist gestört.',
    'templatingExtensions.content.searchFieldPlaceholder':
      'Erweiterung suchen',
    'templatingExtensions.content.filters.title': 'Filter',
    'templatingExtensions.content.filters.notAvailable':
      'Keine Vorlagen-Filter definiert.',
    'templatingExtensions.content.filters.metadataAbsent':
      'Filter-Metadaten nicht verfügbar',
    'templatingExtensions.content.filters.schema.input': 'Eingabe',
    'templatingExtensions.content.filters.schema.arguments':
      'Argumente',
    'templatingExtensions.content.filters.schema.output': 'Ausgabe',
    'templatingExtensions.content.filters.examples': 'Beispiele',
    'templatingExtensions.content.functions.title': 'Funktionen',
    'templatingExtensions.content.functions.notAvailable':
      'Keine globalen Vorlagen-Funktionen definiert.',
    'templatingExtensions.content.functions.metadataAbsent':
      'Funktions-Metadaten nicht verfügbar',
    'templatingExtensions.content.functions.schema.arguments':
      'Argumente',
    'templatingExtensions.content.functions.schema.output': 'Ausgabe',
    'templatingExtensions.content.functions.examples': 'Beispiele',
    'templatingExtensions.content.values.title': 'Werte',
    'templatingExtensions.content.values.notAvailable':
      'Keine globalen Vorlagen-Werte definiert.',

    // ── Template-categories sidebar picker ────────────────────────────
    'templateTypePicker.title': 'Kategorien',

    // ── Template-Editor intro / sub-pages ─────────────────────────────
    'templateIntroPage.title': 'Vorlagen verwalten',
    'templateIntroPage.subtitle':
      'Vorlagen, Formulare und benutzerdefinierte Felder bearbeiten, anschauen und ausprobieren',
    'templateFormPage.title': 'Vorlagen-Editor',
    'templateFormPage.subtitle':
      'Vorlagen-Formulare bearbeiten, anschauen und ausprobieren',
    'templateCustomFieldPage.title': 'Custom-Field-Explorer',
    'templateCustomFieldPage.subtitle':
      'Benutzerdefinierte Felder bearbeiten, anschauen und ausprobieren',
    'templateEditorPage.title': 'Vorlagen-Editor',
    'templateEditorPage.subtitle':
      'Vorlagen und Vorlagen-Formulare bearbeiten, anschauen und ausprobieren',
    'templateEditorPage.dryRunResults.title': 'Probelauf-Ergebnisse',
    'templateEditorPage.dryRunResultsList.title':
      'Ergebnis {{resultId}}',
    'templateEditorPage.dryRunResultsList.downloadButtonTitle':
      'Als .zip herunterladen',
    'templateEditorPage.dryRunResultsList.deleteButtonTitle':
      'Ergebnis löschen',
    'templateEditorPage.dryRunResultsView.tab.files': 'Dateien',
    'templateEditorPage.dryRunResultsView.tab.log': 'Log',
    'templateEditorPage.dryRunResultsView.tab.output': 'Ausgabe',
    'templateEditorPage.taskStatusStepper.skippedStepTitle':
      'Übersprungen',
    'templateEditorPage.customFieldExplorer.selectFieldLabel':
      'Custom-Field-Erweiterung auswählen',
    'templateEditorPage.customFieldExplorer.fieldForm.title':
      'Feld-Optionen',
    'templateEditorPage.customFieldExplorer.fieldForm.applyButtonTitle':
      'Anwenden',
    'templateEditorPage.customFieldExplorer.fieldPreview.title':
      'Feld-Vorschau',
    'templateEditorPage.customFieldExplorer.preview.title':
      'Vorlagen-Spezifikation',
    'templateEditorPage.templateEditorBrowser.closeConfirmMessage':
      'Sicher? Nicht gespeicherte Änderungen gehen verloren.',
    'templateEditorPage.templateEditorBrowser.saveIconTooltip':
      'Alle Dateien speichern',
    'templateEditorPage.templateEditorBrowser.reloadIconTooltip':
      'Verzeichnis neu laden',
    'templateEditorPage.templateEditorBrowser.closeIconTooltip':
      'Verzeichnis schließen',
    'templateEditorPage.templateEditorIntro.title':
      'Wählen Sie eine der folgenden Optionen, um zu starten',
    'templateEditorPage.templateEditorIntro.loadLocal.title':
      'Vorlagen-Verzeichnis laden',
    'templateEditorPage.templateEditorIntro.loadLocal.description':
      'Lokales Vorlagen-Verzeichnis laden, um die eigene Vorlage zu bearbeiten und auszuprobieren.',
    'templateEditorPage.templateEditorIntro.loadLocal.unsupportedTooltip':
      'Nur in einigen Chromium-basierten Browsern mit HTTPS-Verbindung verfügbar',
    'templateEditorPage.templateEditorIntro.createLocal.title':
      'Neue Vorlage erstellen',
    'templateEditorPage.templateEditorIntro.createLocal.description':
      'Lokales Vorlagen-Verzeichnis anlegen, um die eigene Vorlage zu bearbeiten und auszuprobieren.',
    'templateEditorPage.templateEditorIntro.createLocal.unsupportedTooltip':
      'Nur in einigen Chromium-basierten Browsern mit HTTPS-Verbindung verfügbar',
    'templateEditorPage.templateEditorIntro.formEditor.title':
      'Vorlagen-Formular-Spielwiese',
    'templateEditorPage.templateEditorIntro.formEditor.description':
      'Vorlagen-Formular ansehen und bearbeiten — entweder mit Beispiel-Vorlage oder durch Laden einer Vorlage aus dem Katalog.',
    'templateEditorPage.templateEditorIntro.fieldExplorer.title':
      'Custom-Field-Explorer',
    'templateEditorPage.templateEditorIntro.fieldExplorer.description':
      'Verfügbare benutzerdefinierte Feld-Erweiterungen ansehen und ausprobieren.',
    'templateEditorPage.templateEditorTextArea.saveIconTooltip':
      'Datei speichern',
    'templateEditorPage.templateEditorTextArea.refreshIconTooltip':
      'Datei neu laden',
    'templateEditorPage.templateEditorTextArea.emptyStateParagraph':
      'Bitte wählen Sie eine Aktion aus dem Datei-Menü.',
    'templateEditorPage.templateFormPreviewer.title':
      'Vorhandene Vorlage laden',

    // ── /create — list of templates (already partially translated) ────
    'templateListPage.title': 'Neue Komponente erstellen',
    'templateListPage.subtitle':
      'Neue Software-Komponenten aus Standardvorlagen Ihrer Organisation erstellen',
    'templateListPage.pageTitle': 'Neue Komponente erstellen',
    'templateListPage.templateGroups.defaultTitle': 'Vorlagen',
    'templateListPage.templateGroups.otherTitle': 'Weitere Vorlagen',
    'templateListPage.contentHeader.registerExistingButtonTitle':
      'Bestehende Komponente registrieren',
    'templateListPage.contentHeader.supportButtonTitle':
      'Neue Software-Komponenten aus Standardvorlagen erstellen. Verschiedene Vorlagen erzeugen verschiedene Komponenten-Arten (Services, Websites, Dokumentation, …).',
    'templateListPage.additionalLinksForEntity.viewTechDocsTitle':
      'TechDocs ansehen',

    // ── Wizard page — running a template ──────────────────────────────
    'templateWizardPage.title': 'Neue Komponente erstellen',
    'templateWizardPage.subtitle':
      'Neue Software-Komponenten aus Standardvorlagen Ihrer Organisation erstellen',
    'templateWizardPage.pageTitle': 'Neue Komponente erstellen',
    'templateWizardPage.templateWithTitle':
      '{{templateTitle}} erstellen',
    'templateWizardPage.pageContextMenu.editConfigurationTitle':
      'Konfiguration bearbeiten',

    // ── Toolbar in the template editor ────────────────────────────────
    'templateEditorToolbar.customFieldExplorerTooltip':
      'Custom-Field-Explorer',
    'templateEditorToolbar.installedActionsDocumentationTooltip':
      'Dokumentation der installierten Aktionen',
    'templateEditorToolbar.templatingExtensionsDocumentationTooltip':
      'Dokumentation der Vorlagen-Erweiterungen',
    'templateEditorToolbar.addToCatalogButton': 'Veröffentlichen',
    'templateEditorToolbar.addToCatalogDialogTitle':
      'Änderungen veröffentlichen',
    'templateEditorToolbar.addToCatalogDialogContent.stepsIntroduction':
      'Folgen Sie den Anweisungen, um eine Vorlage zu erstellen oder zu aktualisieren:',
    'templateEditorToolbar.addToCatalogDialogContent.stepsListItems':
      'Vorlagen-Dateien in lokales Verzeichnis speichern\nPull Request gegen ein neues oder bestehendes Git-Repository öffnen\nWenn die Vorlage bereits existiert, werden Änderungen nach dem Merge im Software-Katalog sichtbar\nWenn Sie eine neue Vorlage anlegen, registrieren Sie das neue Vorlagen-Repository gemäß der unten verlinkten Dokumentation im Software-Katalog',
    'templateEditorToolbar.addToCatalogDialogActions.documentationButton':
      'Zur Dokumentation',
    'templateEditorToolbar.addToCatalogDialogActions.documentationUrl':
      'https://backstage.io/docs/features/software-templates/adding-templates/',

    'templateEditorToolbarFileMenu.button': 'Datei',
    'templateEditorToolbarFileMenu.options.openDirectory':
      'Vorlagen-Verzeichnis öffnen',
    'templateEditorToolbarFileMenu.options.createDirectory':
      'Vorlagen-Verzeichnis erstellen',
    'templateEditorToolbarFileMenu.options.closeEditor':
      'Vorlagen-Editor schließen',

    'templateEditorToolbarTemplatesMenu.button': 'Vorlagen',
  },
});
