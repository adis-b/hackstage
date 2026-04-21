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
  Link,
  LinkButton,
  WarningPanel,
} from '@backstage/core-components';
import {
  EntityListDocsTable,
  TechDocsPicker,
} from '@backstage/plugin-techdocs';
import { useTranslationRef } from '@backstage/frontend-plugin-api';

import { wienCdTranslationRef } from '../i18n/wienCdTranslationRef';

const GETTING_STARTED_URL =
  'https://backstage.io/docs/features/techdocs/getting-started';

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
    // The description follows the JSX-interpolation pattern from
    // https://backstage.io/docs/frontend-system/building-plugins/internationalization#jsx-elements
    // so the anchor label is translated together with the rest of the
    // sentence — `t(...)` returns a JSX.Element because the `link`
    // value is a JSX element.
    const description = t('techdocs.emptyState.description', {
      link: (
        <Link to={GETTING_STARTED_URL}>
          {t('techdocs.emptyState.linkLabel')}
        </Link>
      ),
    });
    return (
      <EmptyState
        missing="data"
        title={t('techdocs.emptyState.title')}
        description={description}
        action={
          <LinkButton
            color="primary"
            to={GETTING_STARTED_URL}
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
