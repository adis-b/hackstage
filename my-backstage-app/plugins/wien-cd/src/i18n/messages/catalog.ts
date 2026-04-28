import { createTranslationMessages } from '@backstage/frontend-plugin-api';
import { catalogTranslationRef } from '@backstage/plugin-catalog/alpha';

export const catalogDe = createTranslationMessages({
  ref: catalogTranslationRef,
  full: false,
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
    'entityLabelsCard.title': 'Labels',
    'entityLabelsCard.columnKeyLabel': 'Schlüssel',
    'entityLabelsCard.columnValueLabel': 'Wert',
    'entityLabelsCard.emptyDescription': 'Keine Labels vorhanden.',
    'entityLabelsCard.readMoreButtonTitle': 'Mehr erfahren',
    'entityLabels.warningPanelTitle':
      'Labels konnten nicht geladen werden.',
    'entityLabels.ownerLabel': 'Eigentümer',
    'entityLabels.lifecycleLabel': 'Lebenszyklus',
    'entityLinksCard.title': 'Links',
    'entityLinksCard.emptyDescription':
      'Keine Links zu dieser Entität vorhanden.',
    'entityLinksCard.readMoreButtonTitle': 'Mehr erfahren',
    'entityNotFound.title': 'Entität nicht gefunden',
    'entityNotFound.description':
      'Die angeforderte Entität wurde nicht im Katalog gefunden.',
    'entityNotFound.docButtonTitle': 'Dokumentation öffnen',
    'entityTabs.tabsAriaLabel': 'Entitäts-Tabs',
    'deleteEntity.dialogTitle':
      'Möchten Sie diese Entität wirklich löschen?',
    'deleteEntity.deleteButtonTitle': 'Löschen',
    'deleteEntity.cancelButtonTitle': 'Abbrechen',
    'deleteEntity.description':
      'Diese Entität wird von keiner Location referenziert und erhält keine Aktualisierungen.',
    'deleteEntity.actionButtonTitle': 'Entität löschen',
    'entityProcessingErrorsDescription':
      'Bei der Verarbeitung dieser Entität sind Fehler aufgetreten:',
    'entityRelationWarningDescription':
      'Diese Entität verweist auf andere Entitäten, die nicht im Katalog gefunden werden konnten.',
    'hasComponentsCard.title': 'Hat Komponenten',
    'hasComponentsCard.emptyMessage':
      'Diesem System sind keine Komponenten zugeordnet.',
    'hasResourcesCard.title': 'Hat Ressourcen',
    'hasResourcesCard.emptyMessage':
      'Diesem System sind keine Ressourcen zugeordnet.',
    'hasSubcomponentsCard.title': 'Hat Unterkomponenten',
    'hasSubcomponentsCard.emptyMessage':
      'Dieser Komponente sind keine Unterkomponenten zugeordnet.',
    'hasSubdomainsCard.title': 'Hat Unterbereiche',
    'hasSubdomainsCard.emptyMessage':
      'Diesem Bereich sind keine Unterbereiche zugeordnet.',
    'hasSystemsCard.title': 'Hat Systeme',
    'hasSystemsCard.emptyMessage':
      'Diesem Bereich sind keine Systeme zugeordnet.',
    'relatedEntitiesCard.emptyHelpLinkTitle': 'So können Sie das ändern.',
    'systemDiagramCard.title': 'System-Diagramm',
    'systemDiagramCard.description':
      'Visualisierung der Beziehungen zwischen Komponenten, Ressourcen und APIs in diesem System.',
    'systemDiagramCard.edgeLabels.partOf': 'Teil von',
    'systemDiagramCard.edgeLabels.provides': 'stellt bereit',
    'systemDiagramCard.edgeLabels.dependsOn': 'hängt ab von',
  },
});
