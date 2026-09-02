import { pagenav } from '../layout.mjs';

export default {
  slug: 'complaint',
  title: 'Consumer complaint: status',
  description:
    'Status of the consumer complaint against VakilSearch / Zolvit before the District Consumer Commission, Thane. Pending, not yet decided.',
  body: `
<header class="cover compact">
  <div class="wrap cover-inner">
    <span class="case-tag">DISTRICT CONSUMER DISPUTES REDRESSAL COMMISSION, THANE &nbsp;·&nbsp; PENDING</span>
    <h1 class="title wide">The complaint, and where it stands.</h1>
    <p class="subtitle">Filed, not decided. This page exists so nobody reads this site as a verdict — and so the status is never stale.</p>
  </div>
</header>

<main class="wrap" id="main">

  <section id="status">
    <div class="kicker">Current status</div>
    <h2>Where it is right now</h2>
    <p><span class="pill open">Pending — not yet adjudicated</span></p>
    <p>A consumer complaint arising from the facts set out on this site has been filed with the
      <strong>District Consumer Disputes Redressal Commission, Thane</strong>, under the Consumer
      Protection Act, 2019. It has not been heard on its merits and no finding has been made against
      anyone. Every substantive development will be posted on the
      <a href="/updates/">updates page</a> on the day we learn of it.</p>

    <div class="callout warn">
      <h3>Read this before you read anything else on the site</h3>
      <p>Nothing on these pages is a court finding. This is our account of our own experience, supported
        by documents we hold. Where we describe what a VakilSearch staff member said or did, we are
        reporting what happened to us — not asserting a legal conclusion about it. The Commission decides
        that, and it hasn't yet.</p>
    </div>
  </section>

  <section id="grounds">
    <div class="kicker">Substance</div>
    <h2>What the complaint is about</h2>
    <p>In outline, the complaint puts the following before the Commission:</p>
    <ul>
      <li><strong>Deficiency in service.</strong> A defined service — a succession / legal heirship
        certificate covering two named properties — was paid for in full on 21 January 2026 and had not
        been delivered ten months later.</li>
      <li><strong>The representation about the fee.</strong> ₹65,000 was described to us before payment as
        a fixed, all-inclusive professional fee. VakilSearch's own case brief, issued the day we paid,
        treated court fees estimated at over ₹75,000 as separate.</li>
      <li><strong>The payment routing.</strong> We were directed away from VakilSearch's own payment
        gateway to an account held by Trishula Consultancy LLP, and the invoice for our payment was
        issued by that entity rather than by Vakilsearch Legal Solutions Pvt Ltd.</li>
      <li><strong>Consequential loss.</strong> The Kerala property, flagged from the outset as
        time-sensitive, was sold in May 2026 without the succession documentation we had paid for,
        and a two-week trip from Canada arranged specifically to execute a Power of Attorney passed
        without the document being prepared.</li>
      <li><strong>The refund.</strong> A cancellation and full refund were requested on 27 July 2026.
        No refund has been paid.</li>
    </ul>
  </section>

  <section id="relief">
    <div class="kicker">Relief sought</div>
    <h2>What we are asking for</h2>
    <div class="table-scroll">
    <table class="ledger">
      <thead>
        <tr><th scope="col">Head</th><th scope="col">What we have asked the Commission for</th></tr>
      </thead>
      <tbody>
        <tr><td>Refund</td><td>Return of the ₹65,000 paid on 21 January 2026, in full</td></tr>
        <tr><td>Interest</td><td>Interest on that sum from the date of payment</td></tr>
        <tr><td>Compensation</td><td>For the deficiency in service and the consequences of the delay,
          including the costs of a trip arranged around a document that was never prepared</td></tr>
        <tr><td>Costs</td><td>Costs of the proceedings</td></tr>
      </tbody>
    </table>
    </div>
    <p><small>This is a plain-language summary for readers of this site, not the pleading itself. The
      filed complaint governs.</small></p>
  </section>

  <section id="why-public">
    <div class="kicker">The obvious question</div>
    <h2>Why publish while a complaint is pending?</h2>
    <p>Because the two things do different work. The complaint seeks our money back. This site exists so
      that the next person searching for "VakilSearch succession certificate" before wiring ₹65,000 finds
      a dated, sourced account alongside the marketing — the thing we could not find in January 2026.</p>
    <p>We have tried to publish in a way that does not prejudge the proceeding. That is why this site
      states no legal conclusions, publishes no staff names, carries a standing correction commitment,
      and leads with the fact that the matter is undecided. If the Commission's finding contradicts
      anything here, that finding will go on the front page.</p>
    <div class="callout note">
      <h3>If the matter resolves</h3>
      <p>If VakilSearch refunds the payment, or the complaint is decided either way, this site will be
        updated to say so prominently and promptly — including if the outcome does not favour us.
        Leaving stale "unresolved" language up after a resolution would make this page exactly the kind
        of unreliable account it was written to be an alternative to.</p>
    </div>
  </section>

</main>

${pagenav(
  { href: '/evidence/', label: 'Evidence register' },
  { href: '/before-you-pay/', label: 'Before you pay anyone' }
)}
`,
};
