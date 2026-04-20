/**
 * Note: @backstage/plugin-techdocs does not publicly export its translation
 * ref (only `@backstage/plugin-techdocs/dist/translation.esm.js` has it,
 * but that path is not in `package.json` `exports`). So we cannot register
 * a TechDocs translation resource from here. Luckily the only translatable
 * key it currently has is `aboutCard.viewTechdocs`, and we already translate
 * the equivalent string via the `catalogTranslationRef` ("TechDocs ansehen").
 */
import { createTranslationMessages } from '@backstage/frontend-plugin-api';
import { kubernetesTranslationRef } from '@backstage/plugin-kubernetes/alpha';

export const kubernetesDe = createTranslationMessages({
  ref: kubernetesTranslationRef,
  messages: {
    'kubernetesContentPage.permissionAlert.title': 'Berechtigung erforderlich',
    'kubernetesContentPage.permissionAlert.message':
      'Um Kubernetes-Objekte anzusehen, bitten Sie Ihre:n Portaladministrator:in, Ihnen die Berechtigungen „kubernetes.clusters.read" und „kubernetes.resources.read" zuzuweisen.',
    'kubernetesContentPage.title': 'Ihre Cluster',
    'kubernetesContentPage.emptyState.title': 'Keine OpenShift-Ressourcen',
    'kubernetesContentPage.emptyState.description':
      'Keine Ressourcen auf bekannten Clustern für {{entityName}}',
    'entityContent.title': 'OpenShift',
  },
});
