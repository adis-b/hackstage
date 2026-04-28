---
'@stadt-wien/backstage-plugin-cd': minor
---

100% Übersetzungs-Abdeckung über alle 13 unterstützten Backstage-Plugins
(704/704 Schlüssel). Größte Sprünge: `plugin-scaffolder` von 8 auf 181
Schlüsseln und `plugin-catalog` von 54 auf 92.

Neu: Coverage-Script (`yarn workspace @stadt-wien/backstage-plugin-cd
i18n:coverage`) plus Build-Gate (`i18n:coverage:check`), das fehlende
deutsche Übersetzungen mit Exit-Code 1 quittiert. Eingebunden ins
Jest-Suite als zusätzlicher Test, sodass `yarn workspace
@stadt-wien/backstage-plugin-cd test` direkt fehlschlägt, sobald ein
Upstream-Ref einen neuen Schlüssel ergänzt und das deutsche Bundle
nicht nachzieht.

Außerdem: bilingualer Scaffolder-Template
(`examples/template-wien-bilingual/`), zweisprachige Beispiel-Entity
unter `examples/catalog-info.de-en.yaml` plus passende
Group/System/API. Demonstriert die `wien.gv.at/{title,description}-{de,en}`-
Annotation-Konvention.

Statische deutsche Tab-Beschriftungen für `/create` über
`page:scaffolder/<sub>.config.title`-Overrides in `app-config.yaml` —
die Scaffolder-Tabs sind upstream als JSX-Literale hartkodiert und
gehen durch keinen Translation-Ref. Tradeoff: Tab-Titel sind statisch
DE, schalten beim Sprach-Toggle nicht um. Akzeptabel für Stadt
Wien-internen Einsatz.

Changesets-Tooling installiert. Ab dieser Version benötigt jeder
Pull Request, der `@stadt-wien/backstage-plugin-cd` berührt, eine
`.changeset/<id>.md` damit der CHANGELOG mechanisch generiert werden
kann.
