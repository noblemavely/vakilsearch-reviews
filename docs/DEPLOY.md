# Deploying vakilsearch.reviews to Cloudflare Pages

The site is plain static files in `public/`, committed to the repository. Any of the
three routes below will put it live; the Git integration (Route A) is the one to
prefer, because every future push deploys itself.

---

## Route A — connect the repo to Cloudflare Pages (recommended, no API token)

1. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to Git**.
2. Authorise GitHub and select **`noblemavely/vakilsearch-reviews`**.
3. Configure the build:

   | Setting | Value |
   | --- | --- |
   | Project name | `vakilsearch-reviews` |
   | Production branch | `main` |
   | Framework preset | None |
   | Build command | `npm run build` |
   | Build output directory | `public` |

   The build command is optional — `public/` is committed, so leaving the build
   command empty and pointing the output directory at `public` also works.

4. **Save and Deploy.** The first build publishes to `vakilsearch-reviews.pages.dev`.
5. Add the custom domain — see [Custom domain](#custom-domain) below.

## Route B — deploy from a checkout with Wrangler

```bash
npm install -g wrangler     # if not already installed
wrangler login              # opens a browser for OAuth
npm run build && npm run check
wrangler pages deploy       # reads wrangler.toml: project vakilsearch-reviews, output public/
```

If the project does not exist yet, create it first:

```bash
wrangler pages project create vakilsearch-reviews --production-branch main
```

## Route C — deploy from GitHub Actions

`.github/workflows/deploy.yml` builds, verifies, and deploys on every push to `main`.
It needs two repository secrets (**Settings → Secrets and variables → Actions**):

| Secret | Where it comes from |
| --- | --- |
| `CLOUDFLARE_API_TOKEN` | Cloudflare dashboard → My Profile → API Tokens → Create Token → template **Edit Cloudflare Workers**, or a custom token with the `Cloudflare Pages: Edit` permission on your account |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare dashboard → Workers & Pages → the Account ID shown in the right-hand sidebar |

Without those secrets the workflow still builds and runs the checks; it just skips
the deploy step.

---

## Custom domain

`vakilsearch.reviews` is a `.reviews` domain, which Cloudflare Registrar does not
currently sell — so it is probably registered elsewhere. Either way the setup is:

### If the domain is already on Cloudflare (nameservers pointed at Cloudflare)

1. **Workers & Pages → vakilsearch-reviews → Custom domains → Set up a custom domain**.
2. Enter `vakilsearch.reviews`. Cloudflare creates the `CNAME` record itself and
   issues the certificate. Repeat for `www.vakilsearch.reviews`.

### If the domain is at another registrar and not yet on Cloudflare

1. Add the site in Cloudflare (**Add a site**), choose the Free plan, and let it scan
   the existing DNS.
2. At the registrar, replace the nameservers with the two Cloudflare gives you.
   Propagation is usually well under an hour.
3. Then follow the steps above under *If the domain is already on Cloudflare*.

### If you would rather not move nameservers

Point DNS at Pages directly at your existing DNS host:

| Name | Type | Value |
| --- | --- | --- |
| `www` | `CNAME` | `vakilsearch-reviews.pages.dev` |
| `@` | `CNAME` (or ALIAS/ANAME) | `vakilsearch-reviews.pages.dev` |

Apex `CNAME` support varies by provider; if yours does not offer ALIAS/ANAME
flattening, moving nameservers to Cloudflare is the simpler path.

### Redirect www to the apex

Pages `_redirects` cannot match on hostname. Add a Cloudflare **Redirect Rule**
(Rules → Redirect Rules → Create rule):

- **If** — Hostname equals `www.vakilsearch.reviews`
- **Then** — Dynamic redirect, status `301`, expression:
  `concat("https://vakilsearch.reviews", http.request.uri.path)`
- Preserve query string: on

---

## After the first deploy — verify

```bash
curl -sI https://vakilsearch.reviews/ | head -20            # 200, HSTS + CSP present
curl -s  https://vakilsearch.reviews/sitemap.xml | head     # 7 URLs
curl -sI https://vakilsearch.reviews/no-such-page | head -1 # 404
curl -sI https://www.vakilsearch.reviews/ | head -3         # 301 to the apex
```

Then, in Google Search Console, add `vakilsearch.reviews` as a domain property and
submit `https://vakilsearch.reviews/sitemap.xml`. Search visibility is the point of
this site, and indexing a new domain takes days to weeks regardless.

## Rollback

Every Pages deployment is retained. **Workers & Pages → vakilsearch-reviews →
Deployments → … → Rollback** restores any previous version immediately, which is the
fastest way to take a statement down if a correction is needed urgently.
