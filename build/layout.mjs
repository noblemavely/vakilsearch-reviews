import { site, nav } from './site.config.mjs';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
  .replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function navHtml(current) {
  const links = nav.map((item) => {
    const active = item.href === current ? ' aria-current="page"' : '';
    return `      <a href="${item.href}"${active}>${esc(item.label)}</a>`;
  }).join('\n');

  return `<nav class="sitenav" aria-label="Primary">
  <div class="wrap-wide sitenav-inner">
    <a class="sitenav-brand" href="/">CASE FILE <b>#${site.caseRef}</b></a>
    <button class="navtoggle" type="button" aria-controls="navlinks" hidden>Menu</button>
    <div class="sitenav-links" id="navlinks">
${links}
    </div>
  </div>
</nav>`;
}

function footerHtml() {
  const links = nav.map((i) => `      <li><a href="${i.href}">${esc(i.label)}</a></li>`).join('\n');
  return `<footer class="sitefoot wrap">
  <hr class="rule">
  <ul class="foot-links">
${links}
  </ul>
  <p>This site reflects one family's direct, first-hand experience engaging VakilSearch
  (Vakilsearch Legal Solutions Pvt Ltd, which also operates under the brand name Zolvit)
  between January and August 2026, under their reference <span class="mono">#${site.caseRef}</span>.
  All dates, figures and quotations are drawn from our own payment records, documents issued
  to us by VakilSearch, and our correspondence with their staff, all of which we retain in full.</p>
  <p>A formal consumer complaint on these facts is <strong>pending</strong> before the District
  Consumer Disputes Redressal Commission, Thane. Nothing here has been adjudicated. This is an
  account of what we experienced and can document &mdash; not a finding of wrongdoing by any court.
  We will update these pages if and when the matter is resolved, and we will correct any factual
  error brought to our attention. See our
  <a href="/about/#corrections">corrections policy and right of reply</a>.</p>
  <p>Not affiliated with, endorsed by, or operated by Vakilsearch Legal Solutions Pvt Ltd.
  Company and brand names are used for identification only.
  Last updated ${site.lastUpdatedHuman}.</p>
</footer>`;
}

/**
 * Render a complete HTML page.
 *
 * @param {object} page
 * @param {string} page.slug        Output path, e.g. '' for the homepage or 'timeline'
 * @param {string} page.title       <title> text (site name is appended)
 * @param {string} page.description Meta description
 * @param {string} page.body        Everything between <nav> and <footer>
 * @param {string} [page.ogTitle]   Override for og:title
 * @param {object} [page.jsonLd]    Extra JSON-LD graph node
 */
export function render(page) {
  const path = page.path || (page.slug === '' ? '/' : `/${page.slug}/`);
  const canonical = site.origin + path;
  const robots = page.noindex
    ? 'noindex, follow'
    : 'index, follow, max-image-preview:large';
  const fullTitle = page.slug === ''
    ? `${page.title}`
    : `${page.title} — ${site.name}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${site.origin}/#website`,
        url: `${site.origin}/`,
        name: `${site.name} — ${site.tagline}`,
        inLanguage: 'en',
      },
      {
        '@type': 'Article',
        '@id': `${canonical}#article`,
        isPartOf: { '@id': `${site.origin}/#website` },
        headline: page.ogTitle || page.title,
        description: page.description,
        url: canonical,
        dateModified: site.lastUpdated,
        inLanguage: 'en',
        author: { '@type': 'Person', name: 'Noble Mavely' },
      },
      ...(page.jsonLd ? [page.jsonLd] : []),
    ],
  };

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(page.description)}">
${page.noindex ? '' : `<link rel="canonical" href="${canonical}">\n`}<meta name="robots" content="${robots}">

<meta property="og:type" content="article">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:title" content="${esc(page.ogTitle || page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${site.origin}/assets/img/og-image.svg">
<meta property="og:locale" content="en_IN">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(page.ogTitle || page.title)}">
<meta name="twitter:description" content="${esc(page.description)}">
<meta name="twitter:image" content="${site.origin}/assets/img/og-image.svg">

<link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="/assets/css/site.css">
<script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
</script>
</head>
<body>

<a class="skip-link" href="#main">Skip to content</a>

${navHtml(path)}

${page.body}

${footerHtml()}

<script src="/assets/js/site.js" defer></script>
</body>
</html>
`;
}

/** Prev/next navigation between pages. */
export function pagenav(prev, next) {
  const cell = (item, dir, cls) => item
    ? `  <a href="${item.href}" class="${cls}"><span class="dir">${dir}</span><span class="lbl">${esc(item.label)}</span></a>`
    : '  <span></span>';
  return `<nav class="wrap pagenav" aria-label="Page">
${cell(prev, 'Previous', 'prev')}
${cell(next, 'Next', 'next')}
</nav>`;
}

export { esc };
