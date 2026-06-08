# @wien/backstage-cd-plugin

## 1.0.0

Initial release under `@wien` scope. Split from `@stadt-wien/backstage-plugin-cd`.

- Wien light/dark themes with `instanceVariant` support
- Wiener Melange font injector (`app-root-element:cd/wiener-melange-font`)
- Stable theme/token API (`wienColors`, `createWienTheme`, etc.)

**Breaking:** `pluginId` is now `cd` (was `wien-cd`). i18n, nav, and instance switcher moved to sibling packages.
