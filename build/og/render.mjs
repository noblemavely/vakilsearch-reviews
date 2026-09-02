#!/usr/bin/env node
/* Renders build/og/card.html to public/assets/img/og-image.png at 1200x630,
   the size every social platform expects. Run `npm run og` after editing the
   card, and commit the PNG. */
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const html = readFileSync(resolve(root, 'build/og/card.html'), 'utf8');
const out = resolve(root, 'public/assets/img/og-image.png');

const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || '/opt/pw-browsers/chromium',
});
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: 'load' });
await page.waitForTimeout(300);
await page.screenshot({ path: out });
await browser.close();
console.log('wrote', out.replace(root + '/', ''));
