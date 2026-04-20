import { PageBlueprint } from '@backstage/frontend-plugin-api';
import techdocsPlugin from '@backstage/plugin-techdocs/alpha';
import DescriptionIcon from '@material-ui/icons/Description';

import { WienTechDocsIndexPageContent } from './WienTechDocsIndexPageContent';

/**
 * Drop-in replacement for the upstream `page:techdocs` index page.
 *
 * The upstream extension at `page:techdocs` is disabled via the
 * `app.extensions` config in the consuming app's `app-config.yaml`,
 * and this extension is mounted on the same `/docs` path with a
 * fully translated empty state.
 *
 * We reuse the upstream techdocs `root` route ref so that all
 * internal links into `/docs/<namespace>/<kind>/<name>` keep
 * resolving correctly.
 *
 * `title` / `icon` are passed explicitly so the page header and the
 * sidebar nav-item that Backstage auto-generates from this page pick
 * them up — the sidebar label is further translated by the Wien
 * branded sidebar through `wienCdTranslationRef.navItemTitles`.
 */
export const WienTechDocsPage = PageBlueprint.makeWithOverrides({
  name: 'wien-techdocs',
  factory(originalFactory) {
    return originalFactory({
      path: '/docs',
      title: 'Docs',
      icon: <DescriptionIcon />,
      routeRef: techdocsPlugin.routes.root,
      loader: async () => <WienTechDocsIndexPageContent />,
    });
  },
});
