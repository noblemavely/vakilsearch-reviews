#!/usr/bin/env node
/* Renders every page in build/pages/ into public/, plus sitemap.xml and robots.txt.
   The generated output is committed, so Cloudflare Pages can serve public/ with no
   build step at all. Run `npm run build` after editing any content. */

import { mkdir, writeFile, readdir } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { render } from './layout.mjs';
import { site } from './site.config.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'public');

async function loadPages() {
  const dir = join(root, 'build', 'pages');
  const files = (await readdir(dir)).filter((f) => f.endsWith('.mjs')).sort();
  const pages = [];
  for (const f of files) {
    const mod = await import(pathToFileURL(join(dir, f)).href);
    pages.push(mod.default);
  }
  return pages;
}

async function writePage(page) {
  const outPath = page.slug === ''
    ? join(outDir, 'index.html')
    : join(outDir, page.slug, 'index.html');
  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, render(page), 'utf8');
  return outPath;
}

function sitemap(pages) {
  const urls = pages.map((p) => {
    const loc = p.slug === '' ? `${site.origin}/` : `${site.origin}/${p.slug}/`;
    const priority = p.slug === '' ? '1.0' : '0.8';
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${site.lastUpdated}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function robots() {
  return `# vakilsearch.reviews
User-agent: *
Allow: /

Sitemap: ${site.origin}/sitemap.xml
`;
}

function notFound() {
  return render({
    slug: '404',
    path: '/404.html',
    noindex: true,
    title: 'Page not found',
    description: 'That page does not exist on vakilsearch.reviews.',
    body: `
<header class="cover compact">
  <div class="wrap cover-inner">
    <span class="case-tag">404 &nbsp;·&nbsp; NOT IN THE FILE</span>
    <h1 class="title wide">That page isn't here.</h1>
    <p class="subtitle">The link may be old, or mistyped. Everything on this site is reachable from the case file.</p>
  </div>
</header>

<main class="wrap" id="main">
  <section>
    <div class="kicker">Try these</div>
    <h2>Where you probably meant to go</h2>
    <div class="grid-3">
      <a class="card link" href="/"><h3>The case file</h3><p>The summary account, with the key dates and figures.</p><span class="go">Start here →</span></a>
      <a class="card link" href="/timeline/"><h3>Full timeline</h3><p>Every entry, January to August 2026, with its exhibit.</p><span class="go">Read →</span></a>
      <a class="card link" href="/updates/"><h3>Updates</h3><p>The current status, and every correction, dated.</p><span class="go">Latest →</span></a>
    </div>
  </section>
</main>
`,
  });
}

const pages = await loadPages();
for (const page of pages) {
  const p = await writePage(page);
  console.log('wrote', p.replace(root + '/', ''));
}

await writeFile(join(outDir, '404.html'), notFound(), 'utf8');
await writeFile(join(outDir, 'sitemap.xml'), sitemap(pages), 'utf8');
await writeFile(join(outDir, 'robots.txt'), robots(), 'utf8');
console.log('wrote public/404.html, public/sitemap.xml, public/robots.txt');
console.log(`\n${pages.length + 1} pages built for ${site.origin}`);
