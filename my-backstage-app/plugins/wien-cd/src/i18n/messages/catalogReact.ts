import { createTranslationMessages } from '@backstage/frontend-plugin-api';
import { catalogReactTranslationRef } from '@backstage/plugin-catalog-react/alpha';

export const catalogReactDe = createTranslationMessages({
  ref: catalogReactTranslationRef,
  full: false,
  messages: {
    'catalogFilter.title': 'Filter',
    'catalogFilter.buttonTitle': 'Filter',
    'entityKindPicker.title': 'Art',
    'entityKindPicker.errorMessage':
      'Entitätsarten konnten nicht geladen werden',
    'entityLifecyclePicker.title': 'Lebenszyklus',
    'entityNamespacePicker.title': 'Namespace',
    'entityOwnerPicker.title': 'Eigentümer',
    'entityProcessingStatusPicker.title': 'Verarbeitungsstatus',
    'entityTagPicker.title': 'Schlagworte',
    'entityPeekAheadPopover.title':
      'Öffnen Sie die Entität, um alle Schlagworte zu sehen.',
    'entityPeekAheadPopover.emailCardAction.title': 'E-Mail an {{email}}',
    'entityPeekAheadPopover.emailCardAction.subTitle': 'mailto {{email}}',
    'entityPeekAheadPopover.emailCardAction.ariaLabel': 'E-Mail',
    'entityPeekAheadPopover.entityCardActionsAriaLabel': 'Anzeigen',
    'entityPeekAheadPopover.entityCardActionsTitle': 'Details anzeigen',
    'entitySearchBar.placeholder': 'Suchen',
    'entityTypePicker.title': 'Typ',
    'entityTypePicker.errorMessage':
      'Entitätstypen konnten nicht geladen werden',
    'entityTypePicker.optionAllTitle': 'alle',
    'favoriteEntity.addToFavorites': 'Zu Favoriten hinzufügen',
    'favoriteEntity.removeFromFavorites': 'Aus Favoriten entfernen',
    'inspectEntityDialog.title': 'Entitäts-Inspektor',
    'inspectEntityDialog.closeButtonTitle': 'Schließen',
    'inspectEntityDialog.ancestryPage.title': 'Vorfahren',
    'inspectEntityDialog.ancestryPage.description':
      'Dies sind die Vorfahren-Entitäten der aktuellen Entität — also die Kette von Entitäten, deren {{processorsLink}} schließlich zur Existenz der aktuellen Entität geführt haben. Beachten Sie, dass dies ein völlig anderer Mechanismus als Beziehungen ist.',
    'inspectEntityDialog.ancestryPage.processorsLink':
      'Prozessoren Kind-Entitäten ausgegeben haben',
    'inspectEntityDialog.colocatedPage.title': 'Co-lokalisiert',
    'inspectEntityDialog.colocatedPage.description':
      'Diese Entitäten stammen aus derselben Datenquelle wie die aktuelle Entität (z. B. aus derselben YAML-Datei oder vom selben Ursprung).',
    'inspectEntityDialog.colocatedPage.alertNoLocation':
      'Die Entität hat keine Standortinformationen.',
    'inspectEntityDialog.colocatedPage.alertNoEntity':
      'An diesem Standort gab es keine weiteren Entitäten.',
    'inspectEntityDialog.colocatedPage.locationHeader':
      'Am gleichen Standort',
    'inspectEntityDialog.colocatedPage.originHeader': 'Am gleichen Ursprung',
    'inspectEntityDialog.colocatedPage.entityListAriaLabel':
      'Co-lokalisierte Entitäten',
    'inspectEntityDialog.jsonPage.title': 'Entität als JSON',
    'inspectEntityDialog.jsonPage.description':
      'Dies sind die rohen Entitätsdaten im JSON-Format, wie sie vom Katalog empfangen wurden.',
    'inspectEntityDialog.overviewPage.title': 'Übersicht',
    'inspectEntityDialog.overviewPage.relation.title': 'Beziehungen',
    'inspectEntityDialog.overviewPage.status.title': 'Status',
    'inspectEntityDialog.overviewPage.identity.title': 'Identität',
    'inspectEntityDialog.overviewPage.metadata.title': 'Metadaten',
    'inspectEntityDialog.overviewPage.annotations': 'Annotationen',
    'inspectEntityDialog.overviewPage.labels': 'Labels',
    'inspectEntityDialog.overviewPage.tags': 'Schlagworte',
    'inspectEntityDialog.overviewPage.copyAriaLabel':
      '{{label}} kopieren',
    'inspectEntityDialog.overviewPage.copiedStatus': 'Kopiert',
    'inspectEntityDialog.overviewPage.helpLinkAriaLabel': 'Mehr erfahren',
    'inspectEntityDialog.yamlPage.title': 'Entität als YAML',
    'inspectEntityDialog.yamlPage.description':
      'Dies sind die rohen Entitätsdaten im YAML-Format, wie sie vom Katalog empfangen wurden.',
    'inspectEntityDialog.tabNames.overview': 'Übersicht',
    'inspectEntityDialog.tabNames.ancestry': 'Vorfahren',
    'inspectEntityDialog.tabNames.colocated': 'Co-lokalisiert',
    'inspectEntityDialog.tabNames.json': 'Rohes JSON',
    'inspectEntityDialog.tabNames.yaml': 'Rohes YAML',
    'inspectEntityDialog.tabsAriaLabel': 'Inspektor-Optionen',
    'unregisterEntityDialog.title':
      'Möchten Sie diese Entität wirklich abmelden?',
    'unregisterEntityDialog.cancelButtonTitle': 'Abbrechen',
    'unregisterEntityDialog.deleteButtonTitle': 'Entität löschen',
    'unregisterEntityDialog.deleteEntitySuccessMessage':
      'Entität {{entityName}} entfernt',
    'unregisterEntityDialog.bootstrapState.title':
      'Sie können diese Entität nicht abmelden, da sie aus einer geschützten Backstage-Konfiguration stammt (Standort „{{location}}"). Falls dies nicht zutrifft, wenden Sie sich bitte an die:den {{appTitle}}-Integrator:in.',
    'unregisterEntityDialog.bootstrapState.advancedDescription':
      'Sie haben die Möglichkeit, die Entität direkt aus dem Katalog zu löschen. Dies sollte nur geschehen, wenn Sie wissen, dass die Katalog-Datei am Ursprung gelöscht oder verschoben wurde.',
    'unregisterEntityDialog.bootstrapState.advancedOptions':
      'Erweiterte Optionen',
    'unregisterEntityDialog.onlyDeleteStateTitle':
      'Diese Entität scheint nicht von einem registrierten Standort zu stammen. Sie können sie daher nur direkt aus dem Katalog löschen.',
    'unregisterEntityDialog.unregisterState.title':
      'Diese Aktion wird die folgenden Entitäten abmelden:',
    'unregisterEntityDialog.unregisterState.subTitle':
      'Gefunden am folgenden Standort:',
    'unregisterEntityDialog.unregisterState.description':
      'Um dies rückgängig zu machen, registrieren Sie die Entität in {{appTitle}} einfach erneut.',
    'unregisterEntityDialog.unregisterState.unregisterButtonTitle':
      'Standort abmelden',
    'unregisterEntityDialog.unregisterState.advancedOptions':
      'Erweiterte Optionen',
    'unregisterEntityDialog.unregisterState.advancedDescription':
      'Sie können die Entität auch direkt aus dem Katalog löschen. Dies sollte nur geschehen, wenn die Katalog-Datei am Ursprung gelöscht oder verschoben wurde.',
    'unregisterEntityDialog.errorStateTitle':
      'Interner Fehler: Unbekannter Zustand',
    'userListPicker.defaultOrgName': 'Organisation',
    'userListPicker.personalFilter.title': 'Persönlich',
    'userListPicker.personalFilter.ownedLabel': 'Eigentümer',
    'userListPicker.personalFilter.starredLabel': 'Favoriten',
    'userListPicker.orgFilterAllLabel': 'Alle',
    'entityTableColumnTitle.name': 'Name',
    'entityTableColumnTitle.system': 'System',
    'entityTableColumnTitle.owner': 'Eigentümer',
    'entityTableColumnTitle.type': 'Typ',
    'entityTableColumnTitle.lifecycle': 'Lebenszyklus',
    'entityTableColumnTitle.namespace': 'Namespace',
    'entityTableColumnTitle.description': 'Beschreibung',
    'entityTableColumnTitle.tags': 'Schlagworte',
    'entityTableColumnTitle.targets': 'Ziele',
    'entityTableColumnTitle.title': 'Titel',
    'entityTableColumnTitle.label': 'Label',
    'entityTableColumnTitle.domain': 'Bereich',
    'entityRelationCard.emptyHelpLinkTitle': 'So können Sie das ändern.',
    'missingAnnotationEmptyState.title': 'Fehlende Annotation',
    'missingAnnotationEmptyState.readMore': 'Mehr erfahren',
    'missingAnnotationEmptyState.annotationYaml':
      'Fügen Sie die Annotation wie im hervorgehobenen Beispiel unten zu Ihrer {{entityKind}}-YAML hinzu:',
    'missingAnnotationEmptyState.generateDescription_one':
      'Die Annotation {{annotations}} fehlt. Sie müssen die Annotation zu Ihrer {{entityKind}} hinzufügen, wenn Sie dieses Werkzeug aktivieren möchten.',
    'missingAnnotationEmptyState.generateDescription_other':
      'Die Annotationen {{annotations}} fehlen. Sie müssen die Annotationen zu Ihrer {{entityKind}} hinzufügen, wenn Sie dieses Werkzeug aktivieren möchten.',
  },
});
