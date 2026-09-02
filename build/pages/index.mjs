import { events, renderEvent } from '../content/timeline.mjs';
import { video, renderVideo } from '../content/video.mjs';
import { pagenav } from '../layout.mjs';

const keyEvents = events.filter((e) => e.key).map((e) => renderEvent(e, false)).join('\n\n');

export default {
  slug: '',
  title: 'VakilSearch Review',
  ogTitle: 'Ten months, one refund request, no succession certificate.',
  description:
    'A dated, document-backed account of a ₹65,000 succession certificate engagement with VakilSearch (Zolvit) that ran ten months without delivery. Consumer complaint pending before the District Consumer Disputes Redressal Commission, Thane.',
  body: `
<header class="cover">
  <div class="wrap cover-inner">
    <span class="case-tag">CASE REF #5509082 &nbsp;·&nbsp; COMPLAINT FILED WITH DISTRICT CONSUMER DISPUTES REDRESSAL COMMISSION, THANE</span>
    <h1 class="title">Ten months, one refund request, no succession certificate.</h1>
    <p class="subtitle">A documented account of our family's engagement with VakilSearch (Zolvit) for a succession certificate following my father's death — told in dates, receipts, and their own team's words.</p>
    <div class="cover-meta">
      <div><div class="k">Paid upfront</div><div class="v red">₹65,000</div></div>
      <div><div class="k">Engaged</div><div class="v">21 Jan 2026</div></div>
      <div><div class="k">Certificate delivered</div><div class="v red">None</div></div>
      <div><div class="k">Refund status</div><div class="v red">Refused</div></div>
    </div>
  </div>
</header>

<main class="wrap" id="main">

  <section id="summary">
    <div class="kicker">Summary</div>
    <h2>What we hired them for, and what we got</h2>
    <p class="lede">In January 2026, following my father's death, I engaged VakilSearch to obtain a
      Succession / Legal Heirship Certificate covering a jointly-owned flat in Thane and an ancestral
      property in Kerala — an "end-to-end" service, quoted as fixed and all-inclusive, for ₹65,000 paid
      upfront. What followed was ten months of stalled communication, a fee that turned out not to be
      fixed, a payment routed to an unrelated company, a missed window that cost us the use of a family
      property, and a refund we are still waiting on.</p>
    <p>Everything on this site is drawn directly from our payment receipt, VakilSearch's own case brief
      and invoice, and WhatsApp and email correspondence with their staff. Where we quote them, it is
      verbatim. Where something is our characterisation rather than a document, we say so.</p>
    <p>A formal consumer complaint on these facts is pending. Nothing here has been decided by any court,
      and we have deliberately kept this page to what we can evidence.</p>
  </section>

  <section id="video">
    <div class="kicker">In our own words</div>
    <h2>${video.title}</h2>
    <p>${video.blurb.replace(/\s+/g, ' ').trim()}</p>
    ${renderVideo()}
  </section>

  <section id="stats" aria-label="Key figures">
    <div class="stats">
      <div class="stat"><span class="stat-num">10</span><span class="stat-label">months from payment to publication, with no certificate delivered</span></div>
      <div class="stat"><span class="stat-num">3+</span><span class="stat-label">different advocates or points of contact rotated onto the file</span></div>
      <div class="stat"><span class="stat-num">3</span><span class="stat-label">months of complete silence, Feb–Jun 2026, despite a flagged deadline</span></div>
      <div class="stat"><span class="stat-num">₹0</span><span class="stat-label">refunded, against ₹65,000 paid and a refund requested in July</span></div>
    </div>
  </section>

  <section id="timeline">
    <div class="kicker">The record</div>
    <h2>How it unfolded</h2>
    <p>The turning points are below. The
      <a href="/timeline/">full chronology</a> carries every entry, with the exhibit each one rests on.</p>

    <div class="timeline">

${keyEvents}

    </div>

    <p style="margin-top:26px;"><a class="btn" href="/timeline/">Read the full timeline →</a></p>
  </section>

  <section id="ledger">
    <div class="kicker">The numbers</div>
    <h2>What was represented vs. what happened</h2>
    <div class="table-scroll">
    <table class="ledger">
      <thead>
        <tr><th scope="col">Item</th><th scope="col">Represented to us</th><th scope="col" class="amt">What actually happened</th></tr>
      </thead>
      <tbody>
        <tr><td>Total cost</td><td>₹65,000, fixed and all-inclusive</td><td class="amt">Court fees of ₹75,000+ disclosed after payment</td></tr>
        <tr><td>Payment destination</td><td>VakilSearch, routed off-gateway for a "GST waiver"</td><td class="amt">Third-party LLP, unrelated invoicing entity</td></tr>
        <tr><td>Timeline</td><td>Not specified in writing, treated as urgent</td><td class="amt">10 months, no certificate delivered</td></tr>
        <tr><td>Kerala property</td><td>In scope, flagged as time-sensitive</td><td class="amt">Sold without documentation, May 2026</td></tr>
        <tr><td>Power of Attorney</td><td>To be executed during a two-week visit from Canada</td><td class="amt">Draft produced 18 Aug 2026, after she had left</td></tr>
        <tr class="total"><td>Refund requested 27 Jul 2026</td><td></td><td class="amt">₹0 refunded to date</td></tr>
      </tbody>
    </table>
    </div>
  </section>

  <section id="patterns">
    <div class="kicker">What this pattern looked like</div>
    <h2>Not one bad day — a shape</h2>
    <div class="grid-2">
      <div class="card">
        <h3>Every update came only after we chased it</h3>
        <p>Not once across ten months did VakilSearch proactively tell us where things stood. Every status
          update we received was produced by a message, a call, or an escalation from our side.</p>
      </div>
      <div class="card">
        <h3>Personnel changed with no handover</h3>
        <p>At least three different advocates or coordinators were rotated onto the case, each needing us
          to re-explain basic facts about our own family's matter.</p>
      </div>
      <div class="card">
        <h3>Money moved outside their own platform</h3>
        <p>We were asked to pay directly into a separate company's bank account rather than through
          VakilSearch's own payment gateway — a detail that only mattered once we tried to establish who
          we had actually contracted with.</p>
      </div>
      <div class="card">
        <h3>The cost story changed depending on who we asked</h3>
        <p>"All-inclusive", then "court fees are separate", then a suggestion about how our mother could be
          described to reduce them, then "that concession doesn't apply anyway" — four different answers
          about one number.</p>
      </div>
    </div>
  </section>

  <section id="exhibits">
    <div class="kicker">Supporting record</div>
    <h2>What this account rests on</h2>
    <ul class="exhibit-list">
      <li><span class="exhibit-num">EXH. 1</span><div><strong>Payment confirmation</strong><span>ICICI Bank, ₹65,000, 21 Jan 2026</span></div></li>
      <li><span class="exhibit-num">EXH. 2</span><div><strong>Case Brief &amp; Suggested SOP</strong><span>Issued on VakilSearch letterhead the same day as payment, disclosing that court fees were extra</span></div></li>
      <li><span class="exhibit-num">EXH. 3</span><div><strong>Third-party invoice</strong><span>Issued by Trishula Consultancy LLP, not VakilSearch, against the same payment</span></div></li>
      <li><span class="exhibit-num">EXH. 4</span><div><strong>WhatsApp records</strong><span>Chat exports with four separate VakilSearch staff members, Jan–Aug 2026</span></div></li>
      <li><span class="exhibit-num">EXH. 5</span><div><strong>Email correspondence</strong><span>Support thread with @vakilsearch.com addresses, Jan–Aug 2026</span></div></li>
    </ul>
    <p style="margin-top:22px;"><a href="/evidence/">See the full evidence register, and what we have chosen not to publish →</a></p>
  </section>

  <section id="elsewhere">
    <div class="kicker">Also on this site</div>
    <h2>Where to go next</h2>
    <div class="grid-3">
      <a class="card link" href="/complaint/">
        <h3>The complaint</h3>
        <p>What was filed, where, what relief we are asking for, and what stage it is at.</p>
        <span class="go">Status →</span>
      </a>
      <a class="card link" href="/before-you-pay/">
        <h3>Before you pay anyone</h3>
        <p>Nine questions we wish we had asked in January, written for anyone weighing an
          upfront legal-services fee.</p>
        <span class="go">Checklist →</span>
      </a>
      <a class="card link" href="/updates/">
        <h3>Updates</h3>
        <p>Every change to this account, dated. If the matter resolves, it will be recorded here first.</p>
        <span class="go">Log →</span>
      </a>
    </div>
  </section>

</main>

<div class="closing">
  <div class="wrap">
    <div class="kicker">Where this stands</div>
    <h2>This isn't resolved</h2>
    <p>We have filed a formal complaint with the District Consumer Disputes Redressal Commission, Thane,
      and are pursuing a full refund. If you are currently evaluating VakilSearch or Zolvit for a
      time-sensitive legal matter, we would encourage you to ask hard questions about fixed pricing,
      which legal entity you are actually paying, and what happens if a deadline is missed — before you
      pay anything upfront.</p>
    <p>If you are from VakilSearch or Zolvit and believe anything here is factually wrong, we will
      correct it. Our <a href="/about/#corrections">right-of-reply commitment is on the About page</a>.</p>
    <div class="btn-row">
      <a class="btn" href="mailto:noble@mavely.in?subject=Case%20File%205509082">Contact us about this case →</a>
      <a class="btn ghost" href="/before-you-pay/">Read the checklist</a>
    </div>
  </div>
</div>

${pagenav(null, { href: '/timeline/', label: 'The full timeline' })}
`,
};
