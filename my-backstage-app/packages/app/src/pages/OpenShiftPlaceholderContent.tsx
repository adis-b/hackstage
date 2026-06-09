import { Content, InfoCard, MarkdownContent } from '@backstage/core-components';
import { useTranslationRef } from '@backstage/frontend-plugin-api';
import { wienI18nDeTranslationRef } from '@wien/backstage-i18n-de-plugin';
import Grid from '@material-ui/core/Grid';

/**
 * Demo placeholder for the OpenShift nav item. The upstream kubernetes plugin
 * page calls `useEntity()` and crashes when opened as a standalone route.
 */
export const OpenShiftPlaceholderContent = () => {
  const { t } = useTranslationRef(wienI18nDeTranslationRef);

  return (
    <Content>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <InfoCard title={t('openshift.emptyState.title')}>
            <MarkdownContent content={t('openshift.emptyState.description')} />
          </InfoCard>
        </Grid>
      </Grid>
    </Content>
  );
};
