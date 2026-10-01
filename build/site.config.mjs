/* Global site configuration. Edit here, rebuild, and every page updates. */

export const site = {
  domain: 'vakilsearch.reviews',
  origin: 'https://vakilsearch.reviews',
  // Appended to every page title except the homepage, and used as og:site_name.
  name: 'VakilSearch Reviews',
  tagline: 'A documented experience with VakilSearch / Zolvit',
  caseRef: '5509082',
  contactEmail: 'noble@mavely.in',
  // Date this build represents. Shown in footers and used for sitemap lastmod.
  datePublished: '2026-09-02',
  lastUpdated: '2026-10-01',
  lastUpdatedHuman: '1 October 2026',
  // When the facts about the dispute itself — refund, complaint stage — were
  // last checked. Kept separate from lastUpdated on purpose: adding a guide
  // should not silently re-assert that the status claims are current as of today.
  statusConfirmed: '2026-09-02',
  statusConfirmedHuman: '2 September 2026',
};

export const nav = [
  { href: '/',           label: 'Case file' },
  { href: '/timeline/',  label: 'Timeline' },
  { href: '/evidence/',  label: 'Evidence' },
  { href: '/complaint/', label: 'Complaint' },
  { href: '/faq/',       label: 'FAQ' },
  { href: '/guides/',    label: 'Guides' },
  { href: '/updates/',   label: 'Updates' },
  { href: '/about/',     label: 'About' },
];

/* The guides hub lists these. They are kept out of the top nav to hold it to
   eight items, but every one is linked from /guides/ and from the homepage. */
export const guides = [
  { href: '/before-you-pay/', label: 'Before you pay anyone',
    blurb: 'Nine questions to ask any legal services firm before you transfer money.' },
  { href: '/succession-certificate-cost/', label: 'What a succession certificate cost us',
    blurb: 'The real bill: professional fees, court fees, and what nobody quotes upfront.' },
  { href: '/consumer-complaint/', label: 'How we filed a consumer complaint',
    blurb: 'The route we took after a refund was refused, and what it required.' },
];
