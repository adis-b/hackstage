import {
  Sidebar,
  SidebarDivider,
  SidebarGroup,
  SidebarItem,
  SidebarScrollWrapper,
  SidebarSpace,
} from '@backstage/core-components';
import { useTranslationRef } from '@backstage/frontend-plugin-api';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { SidebarSearchModal } from '@backstage/plugin-search';
import { UserSettingsSignInAvatar } from '@backstage/plugin-user-settings';
import { NotificationsSidebarItem } from '@backstage/plugin-notifications';

import { WienSidebarLogo } from './WienSidebarLogo';
import {
  slugifyNavItemId,
  wienCdTranslationRef,
} from '../i18n/wienCdTranslationRef';

export interface WienSidebarProps {
  /** Wordmark title shown next to the Wappen (defaults to "Wien"). */
  title?: string;
  /** Wordmark subtitle (defaults to "Developer Portal"). */
  subtitle?: string;
}

interface NavContentProps {
  /** Nav item bag supplied by Backstage to any NavContentBlueprint component. */
  navItems: any;
}

/**
 * The Stadt Wien sidebar layout — top Wappen/wordmark logo, a Suche
 * group hosting the search modal, a Menü group with the main catalog
 * and scaffolder entries + everything else sorted alphabetically, a
 * Benachrichtigungen item and finally an Einstellungen group.
 *
 * All user-visible labels flow through `wienCdTranslationRef` so that
 * the language toggle under Settings → Appearance swaps them
 * bidirectionally without any hard-coded per-language strings.
 */
export const WienSidebarContent = ({
  title,
  subtitle,
  navItems,
}: WienSidebarProps & NavContentProps) => {
  const { t } = useTranslationRef(wienCdTranslationRef);

  const titleForId = (id: string, fallback: string): string => {
    const key = `navItemTitles.${slugifyNavItemId(id)}`;
    const translated = (t as unknown as (k: string) => string)(key);
    return translated === key ? fallback : translated;
  };

  const nav = navItems.withComponent((item: any) => (
    <SidebarItem
      icon={() => item.icon}
      to={item.href}
      text={titleForId(item.node.spec.id, item.title)}
    />
  ));

  nav.take('page:search'); // replaced by the search modal in the header group

  return (
    <Sidebar>
      <WienSidebarLogo title={title} subtitle={subtitle} />
      <SidebarGroup
        label={t('sidebar.groups.search')}
        icon={<SearchIcon />}
        to="/search"
      >
        <SidebarSearchModal />
      </SidebarGroup>
      <SidebarDivider />
      <SidebarGroup label={t('sidebar.groups.menu')} icon={<MenuIcon />}>
        {nav.take('page:catalog')}
        {nav.take('page:scaffolder')}
        <SidebarDivider />
        <SidebarScrollWrapper>
          {nav.rest({ sortBy: 'title' })}
        </SidebarScrollWrapper>
      </SidebarGroup>
      <SidebarSpace />
      <SidebarDivider />
      <NotificationsSidebarItem text={t('sidebar.notifications')} />
      <SidebarDivider />
      <SidebarGroup
        label={t('sidebar.groups.settings')}
        icon={<UserSettingsSignInAvatar />}
        to="/settings"
      >
        {nav.take('page:app-visualizer')}
        {nav.take('page:user-settings')}
      </SidebarGroup>
    </Sidebar>
  );
};
