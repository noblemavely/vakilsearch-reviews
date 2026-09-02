# vakilsearch.reviews

A static site publishing one family's documented account of a succession-certificate
engagement with VakilSearch / Zolvit (case reference #5509082), alongside the status
of the consumer complaint filed on those facts.

No trackers, no analytics, no cookies, no third-party requests. Eight pages, one
stylesheet, ~1 KB of JavaScript for the mobile menu.

## Layout

```
build/                 Page sources — edit here, never edit public/ directly
  site.config.mjs        Domain, contact email, "last updated" date, nav order
  layout.mjs             <head>, nav, footer, JSON-LD — shared by every page
  content/timeline.mjs   The chronology (homepage + /timeline/ both read this)
  pages/*.mjs            One module per page
  build.mjs              Renders build/ -> public/, plus sitemap.xml and robots.txt
  check.mjs              Link, metadata and third-party-asset checks
public/                Generated output — this is what Cloudflare Pages serves
  _headers               Security headers and cache policy
  _redirects             Path-level redirects
```

`public/` is committed so the site can be served with no build step at all.

## Working on it

```bash
npm run build     # regenerate public/ from build/
npm run check     # verify links, titles, descriptions, canonicals, no external assets
npm run dev       # build, then serve public/ on http://localhost:8080
```

Always run `npm run build` after editing anything under `build/` and commit the
resulting `public/` changes — CI fails if the two are out of sync.

## Common content edits

| Change | File |
| --- | --- |
| Add a timeline entry | `build/content/timeline.mjs` |
| Change the embedded video, its title or blurb | `build/content/video.mjs` |
| Log a development or a correction | `build/pages/updates.mjs` |
| Update complaint status | `build/pages/complaint.mjs` |
| Change the "last updated" date | `build/site.config.mjs` |
| Add or reorder a nav item | `build/site.config.mjs` |

If the complaint resolves or a refund is paid, update `build/pages/complaint.mjs`
and `build/pages/updates.mjs` first — the site's own corrections policy commits to
recording that promptly, including an outcome that does not favour us.

## Deployment

Cloudflare Workers Static Assets, project `vakilsearch-reviews`, custom domain
`vakilsearch.reviews`. A `netlify.toml` is also present so the same `public/` output
can be served from Netlify instead. Full instructions — including the one-time domain
and www-redirect setup — are in [`docs/DEPLOY.md`](docs/DEPLOY.md).
