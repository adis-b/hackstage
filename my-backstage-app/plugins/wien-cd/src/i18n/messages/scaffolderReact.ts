import { createTranslationMessages } from '@backstage/frontend-plugin-api';
import { scaffolderReactTranslationRef } from '@backstage/plugin-scaffolder-react/alpha';

export const scaffolderReactDe = createTranslationMessages({
  ref: scaffolderReactTranslationRef,
  full: false,
  messages: {
    'passwordWidget.content':
      'Dieses Widget ist unsicher. Bitte verwenden Sie [`ui:field: Secret`](https://backstage.io/docs/features/software-templates/writing-templates/#using-secrets) anstelle von `ui:widget: password`.',
    'scaffolderPageContextMenu.moreLabel': 'mehr',
    'scaffolderPageContextMenu.createLabel': 'Erstellen',
    'scaffolderPageContextMenu.editorLabel': 'Vorlagen verwalten',
    'scaffolderPageContextMenu.actionsLabel': 'Installierte Aktionen',
    'scaffolderPageContextMenu.tasksLabel': 'Aufgabenliste',
    'scaffolderPageContextMenu.templatingExtensionsLabel':
      'Vorlagen-Erweiterungen',
    'stepper.backButtonText': 'Zurück',
    'stepper.createButtonText': 'Erstellen',
    'stepper.reviewButtonText': 'Überprüfen',
    'stepper.stepIndexLabel': 'Schritt {{index, number}}',
    'stepper.nextButtonText': 'Weiter',
    'templateCategoryPicker.title': 'Kategorien',
    'templateCard.noDescription': 'Keine Beschreibung',
    'templateCard.chooseButtonText': 'Auswählen',
    'cardHeader.detailBtnTitle':
      'Entitätsdetails der Vorlage anzeigen',
    'templateOutputs.title': 'Text-Ausgabe',
    'workflow.noDescription': 'Keine Beschreibung',
  },
});
