import { createTranslationMessages } from '@backstage/frontend-plugin-api';
import { catalogGraphTranslationRef } from '@backstage/plugin-catalog-graph/alpha';

export const catalogGraphDe = createTranslationMessages({
  ref: catalogGraphTranslationRef,
  full: false,
  messages: {
    'catalogGraphCard.title': 'Beziehungen',
    'catalogGraphCard.deepLinkTitle': 'Diagramm anzeigen',
    'catalogGraphPage.title': 'Katalog-Diagramm',
    'catalogGraphPage.filterToggleButtonTitle': 'Filter',
    'catalogGraphPage.supportButtonDescription':
      'Verfolgen Sie Ihre Komponenten, indem Sie sie zum Software-Katalog hinzufügen.',
    'catalogGraphPage.simplifiedSwitchLabel': 'Vereinfacht',
    'catalogGraphPage.mergeRelationsSwitchLabel': 'Beziehungen zusammenführen',
    'catalogGraphPage.zoomOutDescription':
      'Mit Pinch- und Zoom-Gesten können Sie sich im Diagramm bewegen. Klicken Sie, um den aktiven Knoten zu wechseln, bzw. mit Umschalt-Klick, um zur Entität zu navigieren.',
    'catalogGraphPage.curveFilter.title': 'Kurve',
    'catalogGraphPage.curveFilter.curveMonotoneX': 'Monoton X',
    'catalogGraphPage.curveFilter.curveStepBefore': 'Stufe davor',
    'catalogGraphPage.directionFilter.title': 'Richtung',
    'catalogGraphPage.directionFilter.leftToRight': 'Links nach rechts',
    'catalogGraphPage.directionFilter.rightToLeft': 'Rechts nach links',
    'catalogGraphPage.directionFilter.topToBottom': 'Oben nach unten',
    'catalogGraphPage.directionFilter.bottomToTop': 'Unten nach oben',
    'catalogGraphPage.maxDepthFilter.title': 'Maximale Tiefe',
    'catalogGraphPage.maxDepthFilter.inputPlaceholder': '\u221E unbegrenzt',
    'catalogGraphPage.maxDepthFilter.clearButtonAriaLabel':
      'Maximale Tiefe zurücksetzen',
    'catalogGraphPage.selectedKindsFilter.title': 'Arten',
    'catalogGraphPage.selectedRelationsFilter.title': 'Beziehungen',
  },
});
