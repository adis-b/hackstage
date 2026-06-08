#!/usr/bin/env node
/**
 * Fail fast when the @wien workspace plugins are not linked yet.
 * Run `yarn install` from my-backstage-app/ after pulling the split.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const required = [
  'backstage-cd-plugin',
  'backstage-i18n-de-plugin',
  'backstage-instanceswitcher-plugin',
];

const missing = required.filter(name => {
  const link = path.join(repoRoot, 'node_modules', '@wien', name);
  return !fs.existsSync(link);
});

if (missing.length > 0) {
  // eslint-disable-next-line no-console
  console.error(
    [
      '',
      'Missing @wien workspace packages:',
      ...missing.map(name => `  - @wien/${name}`),
      '',
      'Run from my-backstage-app/:',
      '  yarn install',
      '',
      'Then restart the dev server:',
      '  yarn start',
      '',
    ].join('\n'),
  );
  process.exit(1);
}
