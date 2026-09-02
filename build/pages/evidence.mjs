import { pagenav } from '../layout.mjs';

export default {
  slug: 'evidence',
  title: 'Evidence register',
  description:
    'The documents behind this account: payment confirmation, VakilSearch\'s own case brief, the third-party invoice, and correspondence — what each one shows, and what we have deliberately chosen not to publish.',
  body: `
<header class="cover compact">
  <div class="wrap cover-inner">
    <span class="case-tag">CASE REF #5509082 &nbsp;·&nbsp; EXHIBITS 1–5</span>
    <h1 class="title wide">What this account rests on.</h1>
    <p class="subtitle">Every claim on this site traces back to one of five exhibits. Here is what each one is, what it establishes, and why some of it stays offline.</p>
  </div>
</header>

<main class="wrap" id="main">

  <section id="register">
    <div class="kicker">The register</div>
    <h2>Exhibits</h2>

    <ul class="exhibit-list">
      <li>
        <span class="exhibit-num">EXH. 1</span>
        <div>
          <strong>Payment confirmation — ₹65,000, 21 January 2026</strong>
          <span>ICICI Bank transfer confirmation for the full upfront fee. Establishes the amount, the
            date, and that the money left our account before any document had been produced.</span>
        </div>
      </li>
      <li>
        <span class="exhibit-num">EXH. 2</span>
        <div>
          <strong>Case Brief &amp; Suggested SOP — issued 21 January 2026</strong>
          <span>Produced on VakilSearch letterhead on the same day as payment. Establishes the scope they
            recorded for the engagement, and — critically — that court fees were treated as outside the
            ₹65,000, after we had been told on calls that the fee was all-inclusive.</span>
        </div>
      </li>
      <li>
        <span class="exhibit-num">EXH. 3</span>
        <div>
          <strong>Invoice from Trishula Consultancy LLP</strong>
          <span>The invoice raised against our ₹65,000 payment, issued by an entity other than
            Vakilsearch Legal Solutions Pvt Ltd. Establishes that the money was received and receipted by
            a third party, after we were directed off VakilSearch's own payment gateway on the stated
            basis of a "GST waiver".</span>
        </div>
      </li>
      <li>
        <span class="exhibit-num">EXH. 4</span>
        <div>
          <strong>WhatsApp records, January – August 2026</strong>
          <span>Full chat exports with four separate VakilSearch staff members. Establishes the one-hour
            pricing window, the suggestion about how our mother could be described to the court, the
            February–June gap, the coordination around the June visit, and the August request that we
            resend documents already supplied in February.</span>
        </div>
      </li>
      <li>
        <span class="exhibit-num">EXH. 5</span>
        <div>
          <strong>Email correspondence, January – August 2026</strong>
          <span>Support thread with @vakilsearch.com addresses, including the 27 July 2026 cancellation
            and refund request and the responses to it.</span>
        </div>
      </li>
    </ul>
  </section>

  <section id="withheld">
    <div class="kicker">Deliberate omissions</div>
    <h2>What we have not published, and why</h2>
    <p>We hold all five exhibits in full and have produced them to the Commission. We have not put the
      underlying files on this website. That is a decision, not an oversight:</p>

    <div class="grid-2">
      <div class="card">
        <h3>No chat screenshots</h3>
        <p>The WhatsApp exports contain the personal mobile numbers of individual employees. Publishing
          them would expose people who are not the subject of this dispute to contact we cannot control.</p>
      </div>
      <div class="card">
        <h3>No bank or payment images</h3>
        <p>The payment records carry account numbers and transaction identifiers belonging to our family
          and to third parties. There is no version of publishing them that is safe.</p>
      </div>
      <div class="card">
        <h3>No individual staff names</h3>
        <p>Our complaint is against the company. Naming the junior staff who were rotated onto a badly
          managed file would target the wrong people.</p>
      </div>
      <div class="card">
        <h3>No documents relating to our father's estate</h3>
        <p>The underlying matter is a family death and an inheritance. The details of the estate itself
          are nobody else's business and are not needed to understand what went wrong.</p>
      </div>
    </div>

    <div class="callout">
      <h3>Available on legitimate request</h3>
      <p>The complete exhibits have been filed with the District Consumer Disputes Redressal Commission,
        Thane. We will also produce them, in unredacted form, to VakilSearch or Zolvit, to their legal
        representatives, to a consumer regulator, or to a journalist verifying this account. Write to
        <a href="mailto:noble@mavely.in?subject=Case%205509082%20—%20evidence%20request">noble@mavely.in</a>.</p>
    </div>
  </section>

  <section id="standard">
    <div class="kicker">Standard applied</div>
    <h2>The test each claim had to pass</h2>
    <p>Before a sentence went onto this site, it had to be one of three things:</p>
    <ol>
      <li><strong>A fact in a document</strong> — a date, an amount, a name of an entity, a line in a
        brief. Reproduced as it appears.</li>
      <li><strong>A verbatim quotation</strong> — words a VakilSearch staff member actually sent us,
        copied exactly and marked as a quote.</li>
      <li><strong>A description of an absence</strong> — that no update arrived between two dates, that a
        document was not produced, that no refund has been received. These are the easiest claims for
        VakilSearch to rebut if we are wrong, and we would publish the rebuttal.</li>
    </ol>
    <p>Anything that was only an inference about someone's motives did not make it onto the page. That is
      why this site describes a ten-month failure to deliver and does not use words like "fraud" or
      "scam" — those are conclusions for the Commission, not for us.</p>
  </section>

</main>

${pagenav(
  { href: '/timeline/', label: 'Full timeline' },
  { href: '/complaint/', label: 'The complaint' }
)}
`,
};
