import { pagenav } from '../layout.mjs';

/* Newest first. Add an entry here whenever anything material changes —
   a refund, a hearing date, a correction, a response from VakilSearch. */
const entries = [
  {
    date: '2 September 2026',
    status: 'open',
    statusLabel: 'Unresolved',
    title: 'Updates and corrections',
    body: `<p>Published this account at vakilsearch.reviews. As at today: ₹65,000 paid on 21 January 2026,
      no succession certificate delivered, no refund received against a request made on 27 July 2026, and
      a consumer complaint pending before the District Consumer Disputes Redressal Commission, Thane.</p>
      <p>We notified no one in advance of publication. Anyone at VakilSearch or Zolvit who believes a
      statement here is factually wrong can write to us and we will correct it — see the
      <a href="/about/#corrections">corrections policy</a>.</p>`,
  },
  {
    date: '18 August 2026',
    status: 'open',
    statusLabel: 'Unresolved',
    title: 'Power of Attorney draft received — ten months late',
    body: `<p>A Power of Attorney draft was produced, two months after the visit it had been arranged for
      and three months after the Kerala property sale had made it moot. No succession certificate, and no
      response on the refund.</p>`,
  },
  {
    date: '27 July 2026',
    status: 'open',
    statusLabel: 'Refund requested',
    title: 'Formal cancellation and refund request sent',
    body: `<p>We asked VakilSearch, in writing, to cancel the engagement and refund the ₹65,000 in full.
      Each person we raised it with redirected us elsewhere; no one gave a decision or a date.</p>`,
  },
];

const log = entries.map((e) => `  <li>
    <span class="log-date">${e.date} &nbsp;·&nbsp; <span class="pill ${e.status}">${e.statusLabel}</span></span>
    <h3>${e.title}</h3>
    ${e.body.replace(/\s+/g, ' ').trim()}
  </li>`).join('\n');

export default {
  slug: 'updates',
  title: 'Updates and corrections',
  description:
    'A dated log of every development and every correction to this account of a VakilSearch / Zolvit engagement, newest first.',
  body: `
<header class="cover compact">
  <div class="wrap cover-inner">
    <span class="case-tag">STATUS LOG &nbsp;·&nbsp; NEWEST FIRST</span>
    <h1 class="title wide">Every change, dated.</h1>
    <p class="subtitle">A public account is only worth anything if it stays current. Developments and corrections both land here.</p>
  </div>
</header>

<main class="wrap" id="main">

  <section id="commitment">
    <div class="callout">
      <h3>What gets logged here</h3>
      <p>Any material development in the matter — a refund, a response from VakilSearch, a hearing, a
        decision — and any correction we make to a factual statement anywhere on this site, whether we
        found the error ourselves or someone else pointed it out. Corrections are logged even when they
        are small, and the original wording is described rather than quietly overwritten.</p>
    </div>
  </section>

  <section id="log">
    <div class="kicker">Log</div>
    <h2>Developments and corrections</h2>
    <ul class="log">
${log}
    </ul>
  </section>

  <section id="pre-history">
    <div class="kicker">Before this log began</div>
    <h2>Earlier events</h2>
    <p>Everything before 27 July 2026 — the January quote and payment, the disclosure that court fees were
      extra, the three months of silence, the May property sale and the June visit from Canada — is set
      out in dated form on the <a href="/timeline/">full timeline</a>.</p>
  </section>

</main>

${pagenav(
  { href: '/before-you-pay/', label: 'Before you pay anyone' },
  { href: '/about/', label: 'About this site' }
)}
`,
};
