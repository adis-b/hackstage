#!/usr/bin/env node
/* eslint-disable */
/**
 * scripts/coverage.cjs
 *
 * Cross-checks every Upstream Backstage `createTranslationRef`'s key set
 * against the German translation bundles shipped by this plugin.
 *
 * Output: a markdown-style coverage report on stdout. If the
 * `--require-coverage <pct>` flag is given, the script exits non-zero
 * when any plugin's coverage falls below the threshold — suitable for
 * CI gating.
 *
 * Run from anywhere inside the monorepo:
 *
 *     node plugins/wien-cd/scripts/coverage.cjs                    # report only
 *     node plugins/wien-cd/scripts/coverage.cjs --require-coverage 80
 */
'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..', '..', '..');
const NODE_MODULES = path.join(REPO_ROOT, 'node_modules');
const MESSAGES_DIR = path.resolve(__dirname, '..', 'src', 'i18n', 'messages');

// ── 1. Read every Backstage upstream translation ref ──────────────────────
//
// Each ref is a `createTranslationRef({ id, messages: <nested> })` object
// literal in a .esm.js file.  We don't need to evaluate them — we just need
// the nested key tree to know which dotted keys exist.  We require() each
// file under a tiny shim that pretends to be `@backstage/core-plugin-api/alpha`
// + `@backstage/frontend-plugin-api`, so `createTranslationRef` is captured.

function loadRef(file) {
  // Strip ESM wrapper into something we can evaluate as CJS-ish.
  // The files are simple: `import { createTranslationRef } from '...';
  // const X = createTranslationRef({...}); export { X };`
  const src = fs.readFileSync(file, 'utf8');
  let captured;
  const fakeCreate = options => {
    captured = options;
    return options;
  };
  // Replace the imports + exports with something we can sandbox eval.
  const cleaned = src
    .replace(/^import.*from.*$/gm, '')
    .replace(/^export\s*\{[^}]*\};?$/gm, '')
    .replace(/^\/\/.*$/gm, '')
    .replace(/createTranslationRef/g, '__cTR');
  // eslint-disable-next-line no-new-func
  const fn = new Function('__cTR', cleaned);
  fn(fakeCreate);
  return captured; // { id, messages }
}

function flatten(obj, prefix = '') {
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      Object.assign(out, flatten(v, key));
    } else {
      out[key] = v;
    }
  }
  return out;
}

const REFS = [
  ['core-components', 'node_modules/@backstage/core-components/dist/translation.esm.js'],
  ['user-settings', 'node_modules/@backstage/plugin-user-settings/dist/translation.esm.js'],
  ['catalog', 'node_modules/@backstage/plugin-catalog/dist/alpha/translation.esm.js'],
  ['catalog-react', 'node_modules/@backstage/plugin-catalog-react/dist/translation.esm.js'],
  ['catalog-graph', 'node_modules/@backstage/plugin-catalog-graph/dist/translation.esm.js'],
  ['catalog-import', 'node_modules/@backstage/plugin-catalog-import/dist/translation.esm.js'],
  ['scaffolder', 'node_modules/@backstage/plugin-scaffolder/dist/translation.esm.js'],
  ['scaffolder-react', 'node_modules/@backstage/plugin-scaffolder-react/dist/translation.esm.js'],
  ['api-docs', 'node_modules/@backstage/plugin-api-docs/dist/translation.esm.js'],
  ['search', 'node_modules/@backstage/plugin-search/dist/translation.esm.js'],
  ['search-react', 'node_modules/@backstage/plugin-search-react/dist/translation.esm.js'],
  ['org', 'node_modules/@backstage/plugin-org/dist/translation.esm.js'],
  ['notifications', 'node_modules/@backstage/plugin-notifications/dist/translation.esm.js'],
];

// ── 2. Read every wien-cd translation message bundle ──────────────────────
//
// Each src/i18n/messages/*.ts has a single `createTranslationMessages({ ref,
// full, messages: { 'a.b.c': '...', ... } })` block. We extract the keys via
// a regex; faster than wiring the TS compiler.

function readBundles(filePath) {
  // Returns [{ refSymbol, keys: Set<string> }, ...] — one entry per
  // createTranslationMessages call in the file.
  const src = fs.readFileSync(filePath, 'utf8');
  const out = [];
  const callRe =
    /createTranslationMessages\s*\(\s*\{[\s\S]*?ref:\s*([A-Za-z0-9_]+)[\s\S]*?messages:\s*\{([\s\S]*?)\n\s*\}\s*,?\s*\}\s*\)/g;
  let m;
  while ((m = callRe.exec(src)) !== null) {
    const refSymbol = m[1];
    const body = m[2];
    const keys = new Set();
    const keyRe = /['"`]([\w.][\w.\-_/]*?)['"`]\s*:/g;
    let km;
    while ((km = keyRe.exec(body)) !== null) keys.add(km[1]);
    out.push({ refSymbol, keys });
  }
  return out;
}

const REF_SYMBOL_TO_PLUGIN = {
  coreComponentsTranslationRef: 'core-components',
  userSettingsTranslationRef: 'user-settings',
  catalogTranslationRef: 'catalog',
  catalogReactTranslationRef: 'catalog-react',
  catalogGraphTranslationRef: 'catalog-graph',
  catalogImportTranslationRef: 'catalog-import',
  scaffolderTranslationRef: 'scaffolder',
  scaffolderReactTranslationRef: 'scaffolder-react',
  apiDocsTranslationRef: 'api-docs',
  searchTranslationRef: 'search',
  searchReactTranslationRef: 'search-react',
  orgTranslationRef: 'org',
  notificationsTranslationRef: 'notifications',
};

const BUNDLES = {};
for (const file of fs.readdirSync(MESSAGES_DIR)) {
  if (!file.endsWith('.ts')) continue;
  if (file === 'wienCdDe.ts') continue; // own ref, handled separately
  for (const { refSymbol, keys } of readBundles(path.join(MESSAGES_DIR, file))) {
    const plugin = REF_SYMBOL_TO_PLUGIN[refSymbol];
    if (!plugin) continue;
    if (!BUNDLES[plugin]) BUNDLES[plugin] = new Set();
    for (const k of keys) BUNDLES[plugin].add(k);
  }
}

// ── 3. Build the report ───────────────────────────────────────────────────

const args = process.argv.slice(2);
const reqIdx = args.indexOf('--require-coverage');
const minCoverage = reqIdx >= 0 ? Number(args[reqIdx + 1]) : null;

const rows = [];
let failed = false;
for (const [name, relPath] of REFS) {
  const file = path.join(REPO_ROOT, relPath);
  if (!fs.existsSync(file)) {
    rows.push({ name, total: 0, covered: 0, pct: 0, missing: ['<file not found>'] });
    continue;
  }
  const ref = loadRef(file);
  const upstreamKeys = Object.keys(flatten(ref.messages));
  const haveKeys = BUNDLES[name] ?? new Set();
  const covered = upstreamKeys.filter(k => haveKeys.has(k));
  const missing = upstreamKeys.filter(k => !haveKeys.has(k));
  const pct = upstreamKeys.length === 0 ? 100 : Math.round((covered.length / upstreamKeys.length) * 100);
  rows.push({ name, total: upstreamKeys.length, covered: covered.length, pct, missing });
  if (minCoverage !== null && pct < minCoverage) failed = true;
}

const totalUpstream = rows.reduce((a, r) => a + r.total, 0);
const totalCovered = rows.reduce((a, r) => a + r.covered, 0);
const overall = Math.round((totalCovered / totalUpstream) * 100);

console.log('# Wien CD German Translation Coverage Report\n');
console.log('| Plugin | Keys | Translated | Coverage |');
console.log('|---|---:|---:|---:|');
for (const r of rows) {
  console.log(`| \`@backstage/plugin-${r.name}\` | ${r.total} | ${r.covered} | ${r.pct}% |`);
}
console.log(`| **Total** | **${totalUpstream}** | **${totalCovered}** | **${overall}%** |`);
console.log();

if (process.argv.includes('--verbose')) {
  console.log('## Missing keys per plugin\n');
  for (const r of rows) {
    if (r.missing.length === 0) continue;
    console.log(`### \`${r.name}\` (${r.missing.length} missing)\n`);
    for (const k of r.missing) console.log(`  - ${k}`);
    console.log();
  }
}

if (minCoverage !== null) {
  if (failed) {
    console.error(`\n❌ At least one plugin is below the required coverage of ${minCoverage}%.`);
    process.exit(1);
  } else {
    console.log(`\n✅ All plugins meet the required coverage of ${minCoverage}%.`);
  }
}
