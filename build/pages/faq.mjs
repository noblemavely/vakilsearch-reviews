import { pagenav } from '../layout.mjs';
import { site } from '../site.config.mjs';

/* Questions people actually search, answered to the same standard as the rest
   of the site: what we can document, no legal conclusions, no claims about
   anyone else's experience. Several of these are questions we were searching
   ourselves in January 2026 and could not find an honest answer to. */
const faqs = [
  {
    q: 'Is VakilSearch a real company?',
    a: `Yes. VakilSearch is the brand name of Vakilsearch Legal Solutions Pvt Ltd, a registered
      Indian company that has operated since the early 2010s and also trades as Zolvit. Nothing on
      this site suggests otherwise. Our dispute is about a service we paid for and did not receive,
      not about whether the company exists.`,
  },
  {
    q: 'Is Zolvit the same as VakilSearch?',
    a: `They are the same business operating under two brand names. Our engagement was sold to us as
      VakilSearch; correspondence and materials we received referenced both. If you are comparing
      reviews of the two, you are reading about one company.`,
  },
  {
    q: 'Is VakilSearch a scam?',
    a: `We do not make that claim, and we have deliberately kept that word off this site. A consumer
      complaint arising from our engagement is pending before the District Consumer Disputes
      Redressal Commission, Thane, and it has not been decided. Characterising conduct as fraud or
      cheating is a conclusion for that forum, not for a customer's web page.
      What we can say is narrow and documented: we paid ₹65,000 upfront on 21 January 2026 for a
      defined service, it had not been delivered ten months later, and the refund we requested on
      27 July 2026 had not been paid as of ${site.statusConfirmedHuman}.`,
  },
  {
    q: 'Does VakilSearch give refunds?',
    a: `We can only speak to our own file. We requested cancellation and a full refund in writing on
      27 July 2026. As of ${site.statusConfirmedHuman} no refund had been received, and no one we
      spoke to took ownership of the decision or gave us a date. Other customers may have had a
      different experience; we have no visibility into that. If you are weighing a payment now, ask
      for the refund position in writing <em>before</em> you transfer anything.`,
  },
  {
    q: 'How much does a succession certificate cost in India?',
    a: `Far more than the professional fee you are usually quoted, because court fees are typically
      the larger number and are charged separately. We were quoted ₹65,000 as a fixed, all-inclusive
      professional fee; VakilSearch's own case brief, issued the day we paid, put court fees at over
      ₹75,000 on top. We have set out the full breakdown and what drives it on
      <a href="/succession-certificate-cost/">the cost page</a>.`,
  },
  {
    q: 'How long should a succession certificate take?',
    a: `We cannot tell you what is normal — that depends on the court, the state, the value and
      complexity of the estate, and whether anyone objects. What we can tell you is that ten months
      after paying in full, no petition had produced a certificate for us, and the property the
      documentation was needed for had already been sold without it.`,
  },
  {
    q: 'Who is Trishula Consultancy LLP?',
    a: `It is the entity whose bank account we were directed to pay, instead of VakilSearch's own
      payment gateway, on the stated basis that it would allow a "GST waiver". The invoice for our
      ₹65,000 was issued by that entity rather than by Vakilsearch Legal Solutions Pvt Ltd. We make
      no claim about the relationship between the two companies. We raise it because being able to
      show who you contracted with matters a great deal if you later need a remedy.`,
  },
  {
    q: 'Is this site run by VakilSearch, or by a competitor?',
    a: `Neither. It is published by one customer, Noble Mavely, about one engagement, in a personal
      capacity. It is not affiliated with, endorsed by or connected to Vakilsearch Legal Solutions
      Pvt Ltd. It is not operated by a competitor, a review platform or a consumer organisation, it
      carries no advertising or affiliate links, and it is not monetised in any way.`,
  },
  {
    q: 'What should I do if the same thing is happening to me?',
    a: `Get everything into email, send a formal written refund demand rather than a request, and set
      yourself a date past which you stop waiting. If that fails, a consumer complaint in India can be
      filed without a lawyer. We have written up
      <a href="/consumer-complaint/">the route we took</a>, and
      <a href="/before-you-pay/">the questions we wish we had asked first</a>.`,
  },
  {
    q: 'Will you take this site down if you are refunded?',
    a: `We will update it, prominently and promptly, and say so — including if the outcome does not
      favour us. That commitment is written into our
      <a href="/about/#corrections">corrections policy</a>, and every development is logged with its
      date on <a href="/updates/">the updates page</a>. Leaving stale "unresolved" language up after a
      resolution would make this exactly the kind of unreliable account it exists to be an
      alternative to.`,
  },
];

const stripTags = (s) => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

const body = faqs.map((f, i) => `      <div class="faq-item" id="q${i + 1}">
        <h3>${f.q}</h3>
        <p>${f.a.replace(/\s+/g, ' ').trim()}</p>
      </div>`).join('\n\n');

export default {
  slug: 'faq',
  title: 'VakilSearch and Zolvit FAQ',
  description:
    'Straight answers about VakilSearch and Zolvit — refunds, costs, how long a succession certificate takes, and who publishes this site.',
  jsonLd: {
    '@type': 'FAQPage',
    '@id': `${site.origin}/faq/#faq`,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: stripTags(f.a) },
    })),
  },
  body: `
<header class="cover compact">
  <div class="wrap cover-inner">
    <span class="case-tag">QUESTIONS WE WERE ASKING IN JANUARY 2026</span>
    <h1 class="title wide">VakilSearch and Zolvit: questions and answers.</h1>
    <p class="subtitle">What we could document, what we cannot speak to, and what we deliberately will not claim.</p>
  </div>
</header>

<main class="wrap" id="main">

  <section id="faq">
    <div class="kicker">Answers</div>
    <h2>Common questions</h2>
    <p class="lede">Several of these are questions we typed into a search box before paying, and found
      no honest answer to. Where we can only speak to our own file, we say so rather than generalising.</p>

${body}
  </section>

  <section id="scope">
    <div class="kicker">The limits of this page</div>
    <h2>What this page is not</h2>
    <p>It is not legal advice, and we are not qualified to give any. It is not a survey of
      VakilSearch's customers — we have one data point, our own, reference #${site.caseRef}. And it is
      not a finding of wrongdoing: our complaint is pending and undecided.</p>
    <p>If you are from VakilSearch or Zolvit and an answer here is factually wrong, our
      <a href="/about/#corrections">corrections policy</a> and
      <a href="/about/#reply">standing right of reply</a> both apply to it.</p>
  </section>

</main>

${pagenav(
  { href: '/complaint/', label: 'The complaint' },
  { href: '/guides/', label: 'Guides' }
)}
`,
};
