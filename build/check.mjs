#!/usr/bin/env node
/* Static sanity check over public/: every internal link resolves, every page has
   a title, description and canonical, and no page accidentally pulls in a
   third-party asset (the site is deliberately dependency-free). */

import { readdir, readFile, stat } from 'node:fs/promises';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const pub = join(root, 'public');
const errors = [];
const warnings = [];

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...await walk(p));
    else out.push(p);
  }
  return out;
}

const exists = async (p) => stat(p).then(() => true, () => false);

async function resolveTarget(href) {
  // Strip query and fragment; only paths matter for existence.
  const path = href.split('#')[0].split('?')[0];
  if (path === '') return true;                       // pure fragment link
  const rel = path.replace(/^\//, '');
  if (path.endsWith('/')) return exists(join(pub, rel, 'index.html'));
  return exists(join(pub, rel));
}

const files = (await walk(pub)).filter((f) => f.endsWith('.html'));

for (const file of files) {
  const rel = file.replace(pub + '/', '');
  const html = await readFile(file, 'utf8');

  if (!/<title>[^<]{5,}<\/title>/.test(html)) errors.push(`${rel}: missing or empty <title>`);
  if (!/<meta name="description" content="[^"]{40,}"/.test(html)) {
    errors.push(`${rel}: missing or too-short meta description`);
  }
  if (!rel.startsWith('404') && !/<link rel="canonical"/.test(html)) {
    errors.push(`${rel}: missing canonical link`);
  }
  if (!/<h1/.test(html)) errors.push(`${rel}: no <h1>`);
  if (/<img(?![^>]*\salt=)/.test(html)) warnings.push(`${rel}: <img> without alt text`);

  // No third-party origins anywhere — the CSP in _headers forbids them.
  for (const m of html.matchAll(/(?:src|href)="(https?:\/\/[^"]+)"/g)) {
    if (!m[1].startsWith('https://vakilsearch.reviews')) {
      errors.push(`${rel}: external resource ${m[1]}`);
    }
  }

  // Internal links must resolve to a real file.
  for (const m of html.matchAll(/href="(\/[^"]*)"/g)) {
    if (!(await resolveTarget(m[1]))) errors.push(`${rel}: broken internal link ${m[1]}`);
  }

  // Fragment links must point at an id that exists on the target page.
  for (const m of html.matchAll(/href="([^"]*#[^"]+)"/g)) {
    const [path, frag] = m[1].split('#');
    let targetHtml = html;
    if (path && path !== '') {
      const relTarget = path.replace(/^\//, '');
      const candidate = path.endsWith('/') ? join(pub, relTarget, 'index.html') : join(pub, relTarget);
      if (!(await exists(candidate))) continue; // already reported as a broken link
      targetHtml = await readFile(candidate, 'utf8');
    }
    if (!new RegExp(`id="${frag}"`).test(targetHtml)) {
      errors.push(`${rel}: link to #${frag} in "${m[1]}" has no matching id`);
    }
  }
}

for (const required of ['sitemap.xml', 'robots.txt', '_headers', '_redirects', '404.html']) {
  if (!(await exists(join(pub, required)))) errors.push(`public/${required} is missing`);
}

warnings.forEach((w) => console.warn('warn:', w));
if (errors.length) {
  errors.forEach((e) => console.error('error:', e));
  console.error(`\n${errors.length} problem(s) found in ${files.length} pages.`);
  process.exit(1);
}
console.log(`ok — ${files.length} pages checked, no problems found.`);
