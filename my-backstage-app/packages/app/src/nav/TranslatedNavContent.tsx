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
import {
  slugifyNavItemId,
  wienI18nDeTranslationRef,
} from '@wien/backstage-i18n-de-plugin';

interface NavContentProps {
  /** Nav item bag supplied by Backstage to any NavContentBlueprint component. */
  navItems: any;
}

/**
 * Demo-app sidebar layout with DE/EN nav labels via `wienI18nDeTranslationRef`.
 * Adopters can copy this into their own app or build a custom NavContent that
 * reuses `wienI18nDeTranslationRef` + `slugifyNavItemId` from the i18n plugin.
 */
export const TranslatedNavContent = ({ navItems }: NavContentProps) => {
  const { t } = useTranslationRef(wienI18nDeTranslationRef);

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

  nav.take('page:search');
  nav.take('page:notifications');

  return (
    <Sidebar>
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
