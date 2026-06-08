import { Fragment, useMemo } from 'react';
import {
  PageLayout as SwappablePageLayout,
  useTranslationRef,
  type PageLayoutProps,
} from '@backstage/frontend-plugin-api';
import { PluginHeader } from '@backstage/ui';
import { useResolvedPath } from 'react-router-dom';

import { wienI18nDeTranslationRef } from '../i18n/wienI18nDeTranslationRef';
import { getPageTitleKey, getTabTitleKey } from './pageTitlePaths';

/**
 * Drop-in replacement for the default `core.page-layout` swappable component.
 * Resolves page headers and sub-page tab labels via {@link wienI18nDeTranslationRef}
 * so they follow the Settings → Appearance language toggle.
 */
export function TranslatedPageLayout(props: PageLayoutProps) {
  const {
    title,
    icon,
    noHeader,
    titleLink,
    headerActions,
    tabs,
    children,
  } = props;
  const { t } = useTranslationRef(wienI18nDeTranslationRef);
  const parentPath = useResolvedPath('.').pathname.replace(/\/$/, '');

  const translatedTitle = useMemo(() => {
    const key = getPageTitleKey(parentPath || '/');
    return key ? t(key) : title;
  }, [parentPath, t, title]);

  const resolvedTabs = useMemo(
    () =>
      tabs?.map(tab => {
        const href = tab.href.startsWith('/')
          ? tab.href
          : `${parentPath}/${tab.href}`.replace(/\/{2,}/g, '/');
        const tabKey = getTabTitleKey(parentPath, tab.href);
        return {
          ...tab,
          href,
          label: tabKey ? t(tabKey) : tab.label,
          matchStrategy: 'prefix' as const,
        };
      }),
    [parentPath, t, tabs],
  );

  if (noHeader) {
    return <Fragment>{children}</Fragment>;
  }

  return (
    <Fragment>
      <PluginHeader
        title={translatedTitle}
        icon={icon}
        titleLink={titleLink}
        tabs={resolvedTabs}
        customActions={headerActions}
      />
      {children}
    </Fragment>
  );
}

export const translatedPageLayoutExtension = {
  component: SwappablePageLayout,
  loader: () => TranslatedPageLayout,
};
