import { pagenav } from '../layout.mjs';

export default {
  slug: 'succession-certificate-cost',
  title: 'What a succession certificate costs',
  description:
    "What a succession certificate really costs in India, from one family's bill: a Rs 65,000 all-inclusive fee, then Rs 75,000+ in court fees nobody mentioned.",
  body: `
<header class="cover compact">
  <div class="wrap cover-inner">
    <span class="case-tag">COSTS &nbsp;·&nbsp; FROM ONE FAMILY'S ACTUAL BILL</span>
    <h1 class="title wide">The number you are quoted is not the number you pay.</h1>
    <p class="subtitle">What a succession certificate cost us in 2026 — and which part of the bill nobody put in writing until after the money had gone.</p>
  </div>
</header>

<main class="wrap" id="main">

  <section id="intro">
    <p class="lede">If you are searching for what a succession certificate costs in India, you will
      mostly find professional fees — the amount a firm charges to handle it. That is usually the
      smaller half of the bill. This page sets out what we were actually charged, where the rest came
      from, and the questions that would have surfaced it before we paid.</p>
    <div class="callout warn">
      <h3>This is one family's bill, not a price list</h3>
      <p>Costs vary enormously by state, by the value of the estate, by which court has jurisdiction
        and by whether anyone contests. We are describing what happened to us, with dates and
        documents behind it. Treat it as a worked example of the <em>shape</em> of the cost, and check
        the specifics for your own matter with an advocate you have engaged directly.</p>
    </div>
  </section>

  <section id="what-we-paid">
    <div class="kicker">The bill</div>
    <h2>What we were quoted, and what actually appeared</h2>
    <div class="table-scroll">
    <table class="ledger">
      <thead>
        <tr><th scope="col">Component</th><th scope="col">When we learned of it</th><th scope="col" class="amt">Amount</th></tr>
      </thead>
      <tbody>
        <tr><td>Professional fee, described as fixed and all-inclusive</td><td>Before payment, on calls</td><td class="amt">₹65,000</td></tr>
        <tr><td>Court fees, described as separate and to be quantified later</td><td>In the case brief issued the same day we paid</td><td class="amt">₹75,000+ (estimate)</td></tr>
        <tr><td>Certificate actually delivered</td><td>—</td><td class="amt">None</td></tr>
        <tr class="total"><td>Paid, and not refunded as at the last update</td><td></td><td class="amt">₹65,000</td></tr>
      </tbody>
    </table>
    </div>
    <p>The ₹65,000 was presented to us as a discounted rate that would hold for one hour. The court
      fee estimate appeared in VakilSearch's own Case Brief, issued on 21 January 2026 — the same day
      the money left our account, and after the calls in which the fee had been described as covering
      the matter end to end.</p>
  </section>

  <section id="why-court-fees">
    <div class="kicker">The part that surprises people</div>
    <h2>Why court fees are usually the bigger number</h2>
    <p>A succession certificate is granted by a court, and courts charge a fee calculated on the value
      of the assets the certificate will cover — not a flat rate. The higher the value of the estate,
      the higher the fee. Because it scales with the estate, it can comfortably exceed whatever a firm
      charges to prepare and file the petition.</p>
    <p>Two consequences worth internalising before you engage anyone:</p>
    <ul>
      <li><strong>A quote that does not name a court fee figure is not a quote for the job.</strong>
        It is a quote for part of the job. Ask for the estimate in writing, with the valuation it is
        based on.</li>
      <li><strong>The exact calculation varies by state and by which law applies</strong> to the
        estate. Anyone who tells you a single national number without asking about the assets or where
        the petition will be filed is guessing.</li>
    </ul>
    <div class="callout note">
      <h3>The cheaper route may not be the one you need</h3>
      <p>A succession certificate and a legal heirship certificate are different instruments, obtained
        differently, costing differently, and accepted for different purposes. Which one you actually
        need depends on the assets involved and who is asking for it — a bank, a registrar, a buyer.
        Establish that first; paying for the wrong instrument quickly is worse than paying for the
        right one slowly.</p>
    </div>
  </section>

  <section id="not-quoted">
    <div class="kicker">The rest of the iceberg</div>
    <h2>What else was not in the quoted figure</h2>
    <ul>
      <li><strong>Notarisation, stamping and registration</strong> of supporting documents.</li>
      <li><strong>Attestation from abroad.</strong> Where an heir lives overseas, a Power of Attorney
        normally has to be executed in person during a visit, or attested through an embassy or
        consulate. The embassy route is slower and carries its own fees. In our case a relative flew
        in from Canada for two weeks specifically so the in-person route could be used, and the
        document was not prepared during her stay.</li>
      <li><strong>Valuation and certified copies</strong> of title and estate documents.</li>
      <li><strong>Your own time, over months.</strong> Not a line item, but the real one. Every status
        update we received across ten months was produced by us chasing it.</li>
      <li><strong>The cost of the deadline you miss.</strong> Our documentation was needed for a live
        property sale. The sale went ahead without it, which means that portion of what we paid for
        can never be delivered — it is not late, it is moot.</li>
    </ul>
  </section>

  <section id="ask">
    <div class="kicker">Before you transfer anything</div>
    <h2>The questions that would have caught this</h2>
    <p>Three of these, asked by email in January 2026, would have changed our year:</p>
    <ol>
      <li><strong>"Is this fee final, and what is explicitly excluded?"</strong> Ask them to list the
        exclusions rather than confirm it is all-inclusive. They will say yes to the second question.</li>
      <li><strong>"What is your court fee estimate, and on what valuation?"</strong> In writing,
        before payment.</li>
      <li><strong>"Which legal entity am I paying, and will the invoice come from that entity?"</strong>
        We were directed to a third party's bank account for a stated "GST waiver", and the invoice
        came from that entity rather than the firm we thought we had engaged.</li>
    </ol>
    <p>The full list is on <a href="/before-you-pay/">the before-you-pay page</a>, and the
      chronology of what happened in our case is on <a href="/timeline/">the timeline</a>.</p>
  </section>

  <section id="disclaimer">
    <div class="callout">
      <h3>Not legal or financial advice</h3>
      <p>We are a family that engaged a legal services firm and documented what followed. We are not
        lawyers and this page is not advice about your matter. Figures here are what appeared on our
        own invoice and in documents issued to us, not a schedule of fees. Verify anything that
        affects a decision with an advocate you have engaged directly, or with the court concerned.</p>
    </div>
  </section>

</main>

${pagenav(
  { href: '/guides/', label: 'All guides' },
  { href: '/consumer-complaint/', label: 'Filing a consumer complaint' }
)}
`,
};
