import { createTranslationMessages } from '@backstage/frontend-plugin-api';
import { searchTranslationRef } from '@backstage/plugin-search/alpha';
import { searchReactTranslationRef } from '@backstage/plugin-search-react/alpha';

export const searchDe = createTranslationMessages({
  ref: searchTranslationRef,
  messages: {
    'searchModal.viewFullResults': 'Vollständige Ergebnisse anzeigen',
    'searchType.allResults': 'Alle Ergebnisse',
    'searchType.tabs.allTitle': 'Alle',
    'searchType.accordion.allTitle': 'Alle',
    'searchType.accordion.collapse': 'Einklappen',
    'searchType.accordion.numberOfResults': '{{number}} Ergebnisse',
    'sidebarSearchModal.title': 'Suche',
  },
});

export const searchReactDe = createTranslationMessages({
  ref: searchReactTranslationRef,
  messages: {
    'searchBar.title': 'Suche',
    'searchBar.placeholder': 'In {{org}} suchen',
    'searchBar.clearButtonTitle': 'Zurücksetzen',
    'searchFilter.allOptionTitle': 'Alle',
    'searchPagination.limitLabel': 'Ergebnisse pro Seite:',
    'searchPagination.limitText': 'von {{num}}',
    'noResultsDescription': 'Keine Ergebnisse gefunden',
    'searchResultGroup.linkTitle': 'Alle anzeigen',
    'searchResultGroup.addFilterButtonTitle': 'Filter hinzufügen',
    'searchResultPager.previous': 'Zurück',
    'searchResultPager.next': 'Weiter',
  },
});
