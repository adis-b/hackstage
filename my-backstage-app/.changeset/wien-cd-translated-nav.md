---
"@stadt-wien/backstage-plugin-cd": minor
---

Replace branded `nav-content:app/wien-sidebar` with `nav-content:app/translated-nav`: grouped sidebar with DE/EN nav labels via `wienCdTranslationRef`, no Wappen/wordmark. Removed public exports `WienerWappen`, `WienSidebarLogo`, `WienSidebarLogoFull`. Use a separate plugin for custom branded nav; reuse `wienCdTranslationRef` + `slugifyNavItemId` for nav i18n.
