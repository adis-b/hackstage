#!/usr/bin/env node
/**
 * Capture README screenshots for each @wien plugin feature.
 * Requires `yarn start` on http://localhost:3000.
 */
import { chromium } from '@playwright/test';
import { mkdirSync } from 'fs';
import { join } from 'path';

const outDir = join(process.cwd(), '..', 'docs', 'assets');
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();

async function screenshot(name, options = {}) {
  const path = join(outDir, name);
  await page.screenshot({ path, ...options });
  console.log('Saved', path);
}

async function ensureSignedIn() {
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });

  for (let attempt = 0; attempt < 3; attempt += 1) {
    const weiter = page.locator('button').filter({ hasText: /^Weiter$|^Enter$/ });
    if ((await weiter.count()) > 0) {
      await weiter.first().click();
      await page.waitForTimeout(2500);
    }

    if (await page.getByText('Katalog', { exact: true }).first().isVisible().catch(() => false)) {
      break;
    }

    await page.waitForTimeout(1500);
  }

  await page.getByText('Katalog', { exact: true }).first().waitFor({
    state: 'visible',
    timeout: 20000,
  });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1000);
}

await ensureSignedIn();

// @wien/backstage-cd-plugin — Wien Rot header, dark sidebar, typography
await screenshot('plugin-cd-theme.png');

const header = page.locator('[class*="BackstageHeader-header"]').first();
if (await header.count()) {
  const box = await header.boundingBox();
  if (box) {
    await screenshot('plugin-cd-header.png', {
      clip: {
        x: 0,
        y: Math.max(0, box.y),
        width: 1440,
        height: Math.min(900, box.height + 48),
      },
    });
  }
}

// @wien/backstage-i18n-de-plugin — grouped German sidebar
await screenshot('plugin-i18n-sidebar-de.png', {
  clip: { x: 0, y: 0, width: 260, height: 900 },
});

await screenshot('plugin-i18n-catalog-de.png');

// @wien/backstage-instanceswitcher-plugin
const switcher = page.locator('[aria-label*="Instanz" i], [aria-label*="instance" i]').first();
await switcher.waitFor({ state: 'visible', timeout: 10000 });
const switcherBox = await switcher.boundingBox();
if (switcherBox) {
  await screenshot('plugin-instance-switcher.png', {
    clip: {
      x: Math.max(0, switcherBox.x - 40),
      y: Math.max(0, switcherBox.y - 24),
      width: Math.min(1440 - switcherBox.x + 40, switcherBox.width + 80),
      height: switcherBox.height + 48,
    },
  });
}

await switcher.click();
await page.waitForTimeout(600);
await screenshot('plugin-instance-switcher-menu.png', {
  clip: { x: 880, y: 0, width: 560, height: 240 },
});

// TechDocs translated empty state
await page.goto('http://localhost:3000/docs', { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);
await screenshot('plugin-i18n-techdocs-de.png');

// Settings appearance (language + theme)
await page.goto('http://localhost:3000/settings', { waitUntil: 'networkidle' });
const appearanceTab = page.getByRole('tab', { name: /Darstellung|Appearance/i });
if (await appearanceTab.isVisible().catch(() => false)) {
  await appearanceTab.click();
  await page.waitForTimeout(800);
}
await screenshot('plugin-i18n-settings-de.png');

// Overview hero for root README (same catalog view as plugin-cd-theme)
await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
await page.getByText('Stadt Wien Katalog').waitFor({ state: 'visible', timeout: 10000 });
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(800);
await screenshot('wien_cd_de.png');

console.log('All screenshots saved to', outDir);
await browser.close();
