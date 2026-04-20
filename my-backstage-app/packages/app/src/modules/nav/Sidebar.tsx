import {
  Sidebar,
  SidebarDivider,
  SidebarGroup,
  SidebarItem,
  SidebarScrollWrapper,
  SidebarSpace,
} from '@backstage/core-components';
import { NavContentBlueprint } from '@backstage/plugin-app-react';
import { useTranslationRef } from '@backstage/frontend-plugin-api';
import {
  slugifyNavItemId,
  wienCdTranslationRef,
} from '@stadt-wien/backstage-plugin-cd';
import { SidebarLogo } from './SidebarLogo';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { SidebarSearchModal } from '@backstage/plugin-search';
import { UserSettingsSignInAvatar } from '@backstage/plugin-user-settings';
import { NotificationsSidebarItem } from '@backstage/plugin-notifications';

/**
 * Stadt Wien sidebar layout. All user-visible labels flow through the
 * shared `wienCdTranslationRef` so that toggling the language in
 * Settings → Appearance swaps both directions — English ⇄ Deutsch —
 * with no hard-coded strings in the app code.
 */
const WienSidebarContent = ({ navItems }: { navItems: any }) => {
  const { t } = useTranslationRef(wienCdTranslationRef);

  // Look up a translated title for a given nav item by extension id
  // (e.g. `page:catalog`, `nav-item:user-settings`). The key space is
  // namespaced under `navItemTitles` and the id is slugified because
  // i18next reserves `:` and `/` as path separators. Falls back to the
  // plugin-supplied title when no override exists for the given id.
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

  // Skipped items
  nav.take('page:search'); // Using search modal instead

  return (
    <Sidebar>
      <SidebarLogo />
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

export const SidebarContent = NavContentBlueprint.make({
  params: {
    component: props => <WienSidebarContent {...props} />,
  },
});
