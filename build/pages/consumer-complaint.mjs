import { pagenav } from '../layout.mjs';
import { site } from '../site.config.mjs';

export default {
  slug: 'consumer-complaint',
  title: 'Filing a consumer complaint in India',
  description:
    'The route one family took after a legal services firm refused a refund: the written demand, the consumer commission, and what filing actually required.',
  body: `
<header class="cover compact">
  <div class="wrap cover-inner">
    <span class="case-tag">PROCESS &nbsp;·&nbsp; WHAT WE DID AFTER THE REFUND WAS REFUSED</span>
    <h1 class="title wide">When a company stops answering, you still have a route.</h1>
    <p class="subtitle">What filing a consumer complaint in India actually involved for us — and the preparation that mattered more than the filing itself.</p>
  </div>
</header>

<main class="wrap" id="main">

  <section id="intro">
    <p class="lede">We paid ₹65,000 upfront for a service that was not delivered, asked for a refund
      on 27 July 2026, and got no decision from anyone. This page is what we did next. It is written
      for the person who has just realised that following up politely is no longer working.</p>
    <div class="callout warn">
      <h3>The thing most people get wrong</h3>
      <p>The filing is not the hard part. The hard part is the <strong>paper trail you either have or
        do not have</strong> by the time you need it. Almost everything useful we had, we had by
        accident of habit — full chat exports, emails rather than calls, a payment confirmation.
        If you are still in the "being patient" phase, start building that now.</p>
    </div>
  </section>

  <section id="before">
    <div class="kicker">Step one</div>
    <h2>A written demand, not a request</h2>
    <p>Before any forum will be interested, you want a clear, dated, written demand on the record —
      and the company's response or silence in reply to it. Ours set out, in one email: the amount,
      the date it was paid, what had been promised, what had not been delivered, that we were
      cancelling, and a deadline for their response.</p>
    <p>The difference between a request and a demand matters. "Could you please update me" produces
      another month of nothing. "We are cancelling and requiring a refund of ₹65,000 paid on 21
      January 2026; please confirm by [date]" produces either a refund, a position you can act on, or
      a silence that is itself evidence.</p>
  </section>

  <section id="where">
    <div class="kicker">Step two</div>
    <h2>Where a complaint goes</h2>
    <p>Consumer disputes in India are heard by Consumer Disputes Redressal Commissions under the
      Consumer Protection Act, 2019. They sit at district, state and national level, and which one
      hears your matter depends on the value involved. Ours went to the <strong>District Consumer
      Disputes Redressal Commission, Thane</strong>.</p>
    <ul>
      <li><strong>You can usually file where you live</strong>, not only where the company is based —
        a significant practical change under the 2019 Act, and one that saves a great deal of travel.</li>
      <li><strong>You do not need a lawyer.</strong> Consumers are expressly permitted to appear in
        person. Many people do engage one; it is a cost-benefit call against the sum in dispute.</li>
      <li><strong>Filing can be done online</strong> through the government's <a href="https://edaakhil.nic.in/" rel="noopener nofollow">e-Daakhil portal</a>,
        rather than in person.</li>
      <li><strong>The National Consumer Helpline (1915)</strong> and its
        <a href="https://consumerhelpline.gov.in/" rel="noopener nofollow">portal</a> are a lower-stakes
        first step. Some disputes get resolved there without a formal complaint at all.</li>
    </ul>
    <p>Fees are modest and scale with the value claimed, and there are time limits running from when
      the problem arose — so the cost of waiting is not only emotional.</p>
  </section>

  <section id="documents">
    <div class="kicker">Step three</div>
    <h2>What we assembled</h2>
    <p>These are the five exhibits behind our complaint. The same five are what this entire website
      rests on, which is not a coincidence — if a document is good enough to put before a commission,
      it is good enough to publish a claim from.</p>
    <ul class="exhibit-list">
      <li><span class="exhibit-num">1</span><div><strong>Proof of payment</strong><span>The bank confirmation: amount, date, destination account.</span></div></li>
      <li><span class="exhibit-num">2</span><div><strong>What they said they would do</strong><span>The case brief issued on the firm's own letterhead, recording the scope.</span></div></li>
      <li><span class="exhibit-num">3</span><div><strong>The invoice</strong><span>In our case issued by a third-party entity, which is itself part of the complaint.</span></div></li>
      <li><span class="exhibit-num">4</span><div><strong>Full chat exports</strong><span>Not screenshots. Export the whole conversation — a selective screenshot is easy to dismiss, a complete export is not.</span></div></li>
      <li><span class="exhibit-num">5</span><div><strong>The email thread</strong><span>Including the written refund demand and whatever came back.</span></div></li>
    </ul>
    <p>Our <a href="/evidence/">evidence page</a> sets out what each one establishes, and what we
      decided not to publish.</p>
  </section>

  <section id="expectations">
    <div class="kicker">Honest expectations</div>
    <h2>What this does and does not get you</h2>
    <p>A complaint is not fast. Commissions carry heavy lists and matters are measured in months. If
      you need the underlying thing — a document, a deadline met — a complaint will not produce it in
      time. It is a route to money and to a finding, not to the service you originally bought.</p>
    <p>That was true for us. By the time we filed, the property our documentation was needed for had
      already been sold without it. Nothing a commission orders will change that. We filed because
      the ₹65,000 is still ours, not because filing undoes the ten months.</p>
    <p>Our own complaint is <strong>pending and undecided</strong> as at
      ${site.statusConfirmedHuman}. We are not writing from the far side of a win. Where it stands is
      on <a href="/complaint/">the complaint page</a>, and any development is logged on
      <a href="/updates/">the updates page</a>.</p>
  </section>

  <section id="disclaimer">
    <div class="callout">
      <h3>Not legal advice</h3>
      <p>We are a family that filed a consumer complaint about our own matter, describing what that
        involved. We are not lawyers. Procedure, fees, limitation periods and jurisdiction change and
        vary by state and by the value in dispute. Check the current position on the official portals
        linked above, or with an advocate, before relying on anything here for your own case.</p>
    </div>
  </section>

</main>

${pagenav(
  { href: '/succession-certificate-cost/', label: 'What it cost us' },
  { href: '/', label: 'Back to the case file' }
)}
`,
};
