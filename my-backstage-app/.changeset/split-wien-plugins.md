---
"@wien/backstage-cd-plugin": major
"@wien/backstage-i18n-de-plugin": major
"@wien/backstage-instanceswitcher-plugin": major
---

Split the monolithic `@stadt-wien/backstage-plugin-cd` into three publishable `@wien/backstage-*-plugin` packages per Stadt Wien IDP guidelines.

**Breaking changes:**
- Package rename: `@stadt-wien/backstage-plugin-cd` → three `@wien/*` packages
- Extension IDs: `app-root-element:wien-cd/*` → `app-root-element:cd/wiener-melange-font` and `app-root-element:instanceswitcher/instance-switcher`
- Translation ref: `wienCdTranslationRef` → `wienI18nDeTranslationRef` (id `i18n-de`)
- Feature exports: `wienCdFeatures` → `cdFeatures`, `i18nDeFeatures`, `instanceSwitcherFeatures`
