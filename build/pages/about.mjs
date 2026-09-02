import { pagenav } from '../layout.mjs';

export default {
  slug: 'about',
  title: 'About this site',
  description:
    'Who publishes vakilsearch.reviews, why, the standard applied to every claim, our corrections policy, and a standing right of reply for VakilSearch and Zolvit.',
  body: `
<header class="cover compact">
  <div class="wrap cover-inner">
    <span class="case-tag">ABOUT &nbsp;·&nbsp; CORRECTIONS &nbsp;·&nbsp; RIGHT OF REPLY</span>
    <h1 class="title wide">Who is publishing this, and on what basis.</h1>
    <p class="subtitle">One family, one file, one reference number — and a standing commitment to correct anything we have got wrong.</p>
  </div>
</header>

<main class="wrap" id="main">

  <section id="who">
    <div class="kicker">Who</div>
    <h2>Who we are</h2>
    <p>This site is published by Noble Mavely on behalf of our family, in a personal capacity. We are not
      a consumer organisation, a competitor, a law firm, or a review platform. We are one household that
      engaged VakilSearch in January 2026 to obtain a succession certificate after my father's death, and
      is still, months later, without the certificate and without the money.</p>
    <p>This site is not affiliated with, endorsed by, or connected to Vakilsearch Legal Solutions Pvt Ltd
      or the Zolvit brand in any way. Their names appear here for identification, because the account is
      about them.</p>
  </section>

  <section id="why">
    <div class="kicker">Why</div>
    <h2>Why publish this at all</h2>
    <p>In January 2026 we did what most people do: searched, read the marketing, took a call, and paid.
      What we could not find anywhere was a specific, dated, document-backed account from a customer of a
      matter like ours. This is that account, put where the next person searching will find it.</p>
    <p>We are also pursuing a refund through the consumer forum. The two are separate: the complaint is
      about our money; this site is about the information that was missing when we needed it.</p>
  </section>

  <section id="standard">
    <div class="kicker">Standard</div>
    <h2>The rules this account follows</h2>
    <ul>
      <li><strong>Documents over recollection.</strong> Every date and figure comes from a bank record, a
        document VakilSearch issued, or a timestamped message.</li>
      <li><strong>Verbatim quotes only.</strong> Anything in quotation marks is exactly what was written
        to us.</li>
      <li><strong>No legal conclusions.</strong> We describe conduct and outcomes. We do not call anything
        fraud, cheating, or a scam. Our complaint is pending and undecided, and that is where such
        questions belong.</li>
      <li><strong>No individuals named.</strong> The dispute is with the company, not with the staff it
        rotated through our file.</li>
      <li><strong>No private data published.</strong> No chat screenshots, bank details, phone numbers, or
        documents relating to our father's estate. See the <a href="/evidence/">evidence page</a>.</li>
      <li><strong>Kept current.</strong> Every development is logged, dated, on the
        <a href="/updates/">updates page</a> — including any that goes against us.</li>
    </ul>
  </section>

  <section id="corrections">
    <div class="kicker">Corrections</div>
    <h2>Corrections policy</h2>
    <p>If any statement on this site is factually wrong, we want to know and we will fix it. That applies
      to anyone — VakilSearch, Zolvit, Trishula Consultancy LLP, a member of staff, or a reader who spots
      an inconsistency.</p>
    <p>Write to <a href="mailto:noble@mavely.in?subject=Case%205509082%20—%20correction">noble@mavely.in</a>
      identifying the specific statement and what is wrong with it. Our commitment:</p>
    <ul>
      <li>We will acknowledge within <strong>three working days</strong>.</li>
      <li>Where a statement is shown to be wrong, we will <strong>correct it</strong>, and log the
        correction with its date on the <a href="/updates/">updates page</a> rather than changing the text
        silently.</li>
      <li>Where a statement is disputed but we believe our documents support it, we will say so, and
        publish the disagreement alongside it.</li>
      <li>Where the matter resolves — by refund, settlement, or a decision of the Commission — we will
        update this site prominently to reflect that, <strong>including if the outcome does not favour
        us</strong>.</li>
    </ul>
  </section>

  <section id="reply">
    <div class="kicker">Right of reply</div>
    <h2>A standing offer to VakilSearch and Zolvit</h2>
    <div class="callout note">
      <h3>Your response will be published, unedited</h3>
      <p>If Vakilsearch Legal Solutions Pvt Ltd, or anyone authorised to speak for it, sends us a response
        to this account, we will publish it on this site in full and unedited, at reasonable length, with
        a link to it from the homepage. We will not annotate it line by line or bury it. If you would
        prefer a specific factual correction over a published statement, the corrections policy above
        applies instead.</p>
      <p>Email <a href="mailto:noble@mavely.in?subject=Case%205509082%20—%20response%20from%20VakilSearch">noble@mavely.in</a>.
        We will also, on request, provide the complete unredacted exhibits.</p>
    </div>
  </section>

  <section id="contact">
    <div class="kicker">Contact</div>
    <h2>Getting in touch</h2>
    <p>One address, read by us:
      <a href="mailto:noble@mavely.in?subject=Case%20File%205509082">noble@mavely.in</a>.</p>
    <p>If you are a customer with a similar experience, we are glad to hear from you, but please note we
      cannot give legal advice, cannot take on your matter, and will not publish your details. If you are
      a journalist or a regulator verifying this account, say so and we will send the underlying
      documents.</p>
    <p><a class="btn" href="mailto:noble@mavely.in?subject=Case%20File%205509082">Email us →</a></p>
  </section>

  <section id="technical">
    <div class="kicker">Colophon</div>
    <h2>About the site itself</h2>
    <p>A static site, hand-built, no trackers, no analytics, no cookies, no third-party scripts and no
      advertising. Nothing about your visit is recorded by us. It carries no affiliate links and is not
      monetised in any way.</p>
  </section>

</main>

${pagenav({ href: '/updates/', label: 'Updates log' }, { href: '/', label: 'Back to the case file' })}
`,
};
