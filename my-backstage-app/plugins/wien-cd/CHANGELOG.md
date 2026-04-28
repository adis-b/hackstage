# @stadt-wien/backstage-plugin-cd

All notable changes to this package are documented in this file. The format
follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and this
project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Going forward each pull request that touches the plugin must add a
`.changeset/<id>.md` file via `yarn changeset` so this file can be
regenerated mechanically.

## 0.3.0 — 2026-04-28

### Added

- **Coverage CI script** at `plugins/wien-cd/scripts/coverage.cjs` that
  cross-checks every key from every covered upstream `createTranslationRef`
  against the German bundles shipped by this plugin. Supports a
  `--require-coverage <pct>` flag for use as a CI gate.
- **Bilingual Scaffolder template** under
  `examples/template-wien-bilingual/` — a four-step form that generates
  a `catalog-info.yaml` whose textual metadata is filled out in both
  German and English.
- **Bilingual example entity descriptor** under
  `examples/catalog-info.de-en.yaml` plus its companion Group/System/API
  in `examples/catalog-info.de-en.deps.yaml`. Demonstrates the
  `wien.gv.at/{title,description}-{de,en}` annotation convention.

### Changed

- **Translation coverage at 100% across all 13 covered upstream refs**
  (704/704 keys). Previously some plugins were partially or
  unsovered:
    - `plugin-scaffolder`: 8 → 181 keys (+173). Covers `actionsPage`,
      `templateWizardPage`, `templateEditorPage`, every
      `*RepoPicker`, `ongoingTask`, `listTaskPage`,
      `templatingExtensions` and the Template-Editor toolbar.
    - `plugin-catalog`: 54 → 92 keys (+38). Covers every
      `entityLabels*Card`, `entityLinksCard`, `entityNotFound`,
      `entityTabs`, `deleteEntity`, `hasComponentsCard`,
      `hasResourcesCard`, `hasSubcomponentsCard`,
      `hasSubdomainsCard`, `hasSystemsCard`, `relatedEntitiesCard`
      and `systemDiagramCard`.
- **Static German labels for Scaffolder sub-pages** in `app-config.yaml`
  via `page:scaffolder/<sub>.config.title` overrides. The Scaffolder
  hard-codes its tab titles ("Templates / Tasks / Actions / Template
  Editor / Templating Extensions") in JSX literals, so they cannot
  flow through a translation ref. Pragmatic compromise: deutsche
  Beschriftung statisch über die Config; Trade-off ist, dass die
  Tab-Titel nicht beim Sprach-Toggle umschalten.
- **Changesets tooling installed.** From this release onward every
  pull request that touches `@stadt-wien/backstage-plugin-cd` must
  include a `.changeset/<id>.md` so the CHANGELOG can be generated
  mechanically.

### Limitations (knowingly left out)

- **TechDocs reader** — the Markdown viewer's "Edit this page" link
  and toolbar tooltips are rendered by the underlying MkDocs theme,
  not by Backstage. Outside the scope of this plugin.
- **Catalog `EntityListDocsTable` / `CatalogTable` table titles** of
  the form "Owned Components (3)" — the kind ("Components") is
  pluralized by `lodash`/`pluralize` from a runtime filter value and
  bypasses every translation ref. Translating it requires forking
  the entire `CatalogTable` component or registering a replacement
  page; not done in 0.3.0.

## 0.2.0 — 2026-04-21

### Added

- **`wienCdTranslationRef` v2** — added a `techdocs` namespace
  (`techdocs.errors.couldNotLoad`, `techdocs.emptyState.{title,
  description,linkLabel,actionTitle}`) for the Wien Techdocs
  replacement page.
- **`page:app/wien-techdocs`** — drop-in replacement for the upstream
  `page:techdocs` index page with a fully translated empty state. The
  upstream `DocsTable` hard-codes its empty-state text in JSX
  literals; the wien-cd version routes those strings through
  `wienCdTranslationRef`.
- **JSX-element interpolation** for the techdocs empty-state
  description. The "Getting Started Information" link is now an
  in-sentence `<Link>`, translated via i18next's `{{link}}`
  interpolation pattern from the official Backstage i18n docs.
- **Branded sidebar moved into the plugin** as
  `WienSidebar` (`nav-content:app/wien-sidebar`), backed by the
  reusable `WienerWappen`, `WienSidebarLogoFull`, `WienSidebarLogo`
  components. Title/subtitle of the wordmark are configurable via
  `app-config.yaml`.
- **Real publish-ready build pipeline** — split entry points (`./` for
  the stable API, `./alpha` for the FrontendPlugin), `dist/`-based
  exports, `typesVersions`, automatic `backstage.features` field
  population. `yarn pack` produces a ~108 KB tarball.
- **Eight Jest smoke tests** covering palette, themes, translation
  ref identity, slug helper and the set of registered translation
  resources.
- **`config.d.ts`** with a documentation-only schema for the
  `nav-content:app/wien-sidebar`, `app-root-element:wien-cd/wiener-melange-font`
  and related extension config keys.
- **`full: false`** declared explicitly on every
  `createTranslationMessages` call (per the official Backstage docs)
  to signal that the German bundles are partial overrides.

### Changed

- `zod` peer/dep bumped to `^4.0.0`. Backstage's `configSchema`
  option requires a Standard-Schema-compatible zod with JSON Schema
  conversion — the `zod/v4` subpath of zod v3 does not satisfy this.

## 0.1.0 — 2026-04-20

### Added

- Initial release.
- **Themes** — `wien-light` ("Wien (hell)") and `wien-dark` ("Wien
  (dunkel)") built with `createUnifiedTheme`. Palette sourced from
  the [wien.gv.at Farben handbook](https://handbuch.wien.gv.at/look-and-feel/farben/).
- **Wiener Melange variable font** — embedded as a base64 woff2 data
  URI inside the package and injected via an
  `app-root-element:wien-cd/wiener-melange-font` extension.
- **German translations** for `user-settings`, `catalog`,
  `catalog-react`, `scaffolder`, `scaffolder-react`, `api-docs`,
  `catalog-graph`, `catalog-import`, `notifications`, `search`,
  `search-react`, `org`, `core-components`.
- **`wienCdTranslationRef`** for everything not covered by upstream
  refs: sidebar group labels (Suche / Menü / Einstellungen),
  `NotificationsSidebarItem` text, NavItem title overrides keyed by
  the slugified extension id (`page_catalog`, `nav_item_user_settings`,
  …).
