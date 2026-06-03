import { chromium } from '@playwright/test';
import { mkdirSync } from 'fs';
import { join } from 'path';

const outDir = join(process.cwd(), '..', 'docs', 'assets');
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(1500);

const switcher = page.locator('[aria-label*="instance" i], [aria-label*="Instanz" i]').first();
await switcher.waitFor({ state: 'visible', timeout: 15000 });

const box = await switcher.boundingBox();
if (box) {
  await page.screenshot({
    path: join(outDir, 'instance-switcher-after.png'),
    clip: {
      x: Math.max(0, box.x - 24),
      y: Math.max(0, box.y - 16),
      width: Math.min(1440, box.width + 48),
      height: box.height + 32,
    },
  });
}

await page.screenshot({
  path: join(outDir, 'instance-switcher-page-after.png'),
  fullPage: false,
});

console.log('Saved screenshots to', outDir);
await browser.close();
