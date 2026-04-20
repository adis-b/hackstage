import { createTranslationMessages } from '@backstage/frontend-plugin-api';
import { orgTranslationRef } from '@backstage/plugin-org/alpha';

export const orgDe = createTranslationMessages({
  ref: orgTranslationRef,
  messages: {
    'groupProfileCard.groupNotFound': 'Gruppe nicht gefunden',
    'groupProfileCard.editIconButtonTitle': 'Metadaten bearbeiten',
    'groupProfileCard.refreshIconButtonTitle':
      'Aktualisierung der Entität planen',
    'groupProfileCard.refreshIconButtonAriaLabel': 'Aktualisieren',
    'groupProfileCard.listItemTitle.entityRef': 'Entitätsreferenz',
    'groupProfileCard.listItemTitle.email': 'E-Mail',
    'groupProfileCard.listItemTitle.parentGroup': 'Übergeordnete Gruppe',
    'groupProfileCard.listItemTitle.childGroups': 'Untergruppen',
    'membersListCard.cardLabel': 'Benutzerseite für {{memberName}}',
    'membersListCard.title': 'Mitglieder von {{groupName}}',
    'membersListCard.noMembersDescription':
      'Diese Gruppe hat keine Mitglieder.',
    'membersListCard.noSearchResult':
      'Keine Mitglieder gefunden für „{{searchTerm}}".',
    'membersListCard.aggregateMembersToggle.label':
      'Untergruppen einbeziehen',
    'ownershipCard.title': 'Eigentum',
    'ownershipCard.aggregateRelationsToggle.label':
      'Indirektes Eigentum einbeziehen',
    'userProfileCard.userNotFound': 'Benutzer:in nicht gefunden',
    'userProfileCard.editIconButtonTitle': 'Metadaten bearbeiten',
    'userProfileCard.listItemTitle.email': 'E-Mail',
    'userProfileCard.listItemTitle.memberOf': 'Mitglied von',
    'userProfileCard.moreGroupButtonTitle': '\u2026 Mehr ({{number}})',
    'userProfileCard.allGroupDialog.title': 'Alle Gruppen von {{name}}:',
    'userProfileCard.allGroupDialog.closeButtonTitle': 'Schließen',
  },
});
