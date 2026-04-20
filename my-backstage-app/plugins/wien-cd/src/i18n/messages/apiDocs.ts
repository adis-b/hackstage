import { createTranslationMessages } from '@backstage/frontend-plugin-api';
import { apiDocsTranslationRef } from '@backstage/plugin-api-docs/alpha';

export const apiDocsDe = createTranslationMessages({
  ref: apiDocsTranslationRef,
  messages: {
    'apiDefinitionCard.error.title': 'API konnte nicht geladen werden',
    'apiDefinitionCard.rawButtonTitle': 'Rohformat',
    'apiDefinitionDialog.closeButtonTitle': 'Schließen',
    'apiDefinitionDialog.tabsAriaLabel': 'API-Definitionsoptionen',
    'apiDefinitionDialog.toggleButtonAriaLabel':
      'API-Definitionsdialog umschalten',
    'apiDefinitionDialog.rawButtonTitle': 'Rohformat',
    'defaultApiExplorerPage.title': 'APIs',
    'defaultApiExplorerPage.subtitle': '{{orgName}} API-Verzeichnis',
    'defaultApiExplorerPage.pageTitleOverride': 'APIs',
    'defaultApiExplorerPage.createButtonTitle': 'Bestehende API registrieren',
    'defaultApiExplorerPage.supportButtonTitle': 'Alle Ihre APIs',
    'consumedApisCard.title': 'Genutzte APIs',
    'consumedApisCard.error.title': 'APIs konnten nicht geladen werden',
    'consumedApisCard.emptyContent.title':
      'Diese {{entity}} nutzt keine APIs.',
    'hasApisCard.title': 'APIs',
    'hasApisCard.error.title': 'APIs konnten nicht geladen werden',
    'hasApisCard.emptyContent.title':
      'Diese {{entity}} enthält keine APIs.',
    'providedApisCard.title': 'Bereitgestellte APIs',
    'providedApisCard.error.title': 'APIs konnten nicht geladen werden',
    'providedApisCard.emptyContent.title':
      'Diese {{entity}} stellt keine APIs bereit.',
    'apiEntityColumns.typeTitle': 'Typ',
    'apiEntityColumns.apiDefinitionTitle': 'API-Definition',
    'consumingComponentsCard.title': 'Verbraucher',
    'consumingComponentsCard.error.title':
      'Komponenten konnten nicht geladen werden',
    'consumingComponentsCard.emptyContent.title':
      'Keine Komponente nutzt diese API.',
    'providingComponentsCard.title': 'Anbieter',
    'providingComponentsCard.error.title':
      'Komponenten konnten nicht geladen werden',
    'providingComponentsCard.emptyContent.title':
      'Keine Komponente stellt diese API bereit.',
    'apisCardHelpLinkTitle': 'So können Sie das ändern.',
  },
});
