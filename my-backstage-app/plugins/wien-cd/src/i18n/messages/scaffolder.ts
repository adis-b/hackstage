import { createTranslationMessages } from '@backstage/frontend-plugin-api';
import { scaffolderTranslationRef } from '@backstage/plugin-scaffolder/alpha';

export const scaffolderDe = createTranslationMessages({
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
