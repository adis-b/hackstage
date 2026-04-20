/**
 * Stadt Wien drop-in replacement for the techdocs `page:techdocs`.
 *
 * The upstream `DocsTable` empty state hard-codes its title, description
 * and "DOCS" link button text without going through any translation
 * ref. Instead of patching the DOM, we render a small wrapper that:
 *
 *   - reuses `useEntityList()` from @backstage/plugin-catalog-react to
 *     decide whether the catalog has any docs entities for the current
 *     filter, and
 *   - renders the upstream `EntityListDocsTable` if there are entities,
 *   - or a fully translated `<EmptyState>` if there are none.
 *
 * Everything else (filters, paging, searching, page header) is reused
 * unchanged from the upstream techdocs index page.
 */
import { Container } from '@backstage/ui';
import {
  CatalogFilterLayout,
  EntityListProvider,
  EntityOwnerPicker,
  EntityTagPicker,
  UserListPicker,
  useEntityList,
} from '@backstage/plugin-catalog-react';
import {
  EmptyState,
  LinkButton,
  WarningPanel,
} from '@backstage/core-components';
import {
  EntityListDocsTable,
  TechDocsPicker,
} from '@backstage/plugin-techdocs';
import { useTranslationRef } from '@backstage/frontend-plugin-api';

import { wienCdTranslationRef } from '../i18n/wienCdTranslationRef';

const TechDocsContent = () => {
  const { t } = useTranslationRef(wienCdTranslationRef);
  const { entities, loading, error } = useEntityList();

  if (error) {
    return (
      <WarningPanel
        severity="error"
        title={t('techdocs.errors.couldNotLoad')}
      >
        {error.toString()}
      </WarningPanel>
    );
  }

  if (!loading && entities && entities.length === 0) {
    return (
      <EmptyState
        missing="data"
        title={t('techdocs.emptyState.title')}
        description={t('techdocs.emptyState.description')}
        action={
          <LinkButton
            color="primary"
            to="https://backstage.io/docs/features/techdocs/getting-started"
            variant="contained"
          >
            {t('techdocs.emptyState.actionTitle')}
          </LinkButton>
        }
      />
    );
  }

  return <EntityListDocsTable />;
};

export const WienTechDocsIndexPageContent = () => {
  return (
    <Container mt="6">
      <EntityListProvider>
        <CatalogFilterLayout>
          <CatalogFilterLayout.Filters>
            <TechDocsPicker />
            <UserListPicker initialFilter="owned" />
            <EntityOwnerPicker />
            <EntityTagPicker />
          </CatalogFilterLayout.Filters>
          <CatalogFilterLayout.Content>
            <TechDocsContent />
          </CatalogFilterLayout.Content>
        </CatalogFilterLayout>
      </EntityListProvider>
    </Container>
  );
};
