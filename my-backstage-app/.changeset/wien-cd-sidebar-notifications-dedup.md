---
'@stadt-wien/backstage-plugin-cd': patch
---

Fix: doppelter "Benachrichtigungen"-Eintrag in der Sidebar. Die
gebrandete Wien-Sidebar rendert die Notifications-Spalte explizit
über `<NotificationsSidebarItem>` (mit Unread-Counter-Badge), aber
das `page:notifications`-Extension hat trotzdem einen automatisch
abgeleiteten NavItem produziert, der durch `nav.rest()`
alphabetisch unter den anderen Menü-Einträgen aufgetaucht ist.

Behoben durch zusätzliches `nav.take('page:notifications')` in
`WienSidebarContent`, analog zu dem bereits bestehenden
`nav.take('page:search')`-Skip für die Suche, die auch über das
Search-Modal in der Header-Gruppe gerendert wird.
