---
'@stadt-wien/backstage-plugin-cd': patch
---

Fix: bogus `@backstage/config` runtime dependency removed from
`package.json`. The plugin lists `@backstage/config@^1.2.0` as a
hard dependency but nothing inside `src/` actually imports it,
which led to a confusing yarn warning at install time:

    YN0002: app@workspace:packages/app doesn't provide
            @backstage/config (p0578d),
            requested by @stadt-wien/backstage-plugin-cd.

The dependency was a copy-paste leftover from the package
template and serves no purpose. Removing it shrinks the install
graph slightly and removes the spurious warning.
