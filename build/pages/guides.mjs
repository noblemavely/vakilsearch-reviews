import { pagenav } from '../layout.mjs';
import { guides } from '../site.config.mjs';

const cards = guides.map((g) => `      <a class="card link" href="${g.href}">
        <h3>${g.label}</h3>
        <p>${g.blurb}</p>
        <span class="go">Read →</span>
      </a>`).join('\n');

export default {
  slug: 'guides',
  title: 'Guides for anyone paying a legal fee',
  description:
    'Practical guides from one family\'s experience: what a succession certificate costs, what to ask before paying, and how to file a consumer complaint.',
  body: `
<header class="cover compact">
  <div class="wrap cover-inner">
    <span class="case-tag">PRACTICAL &nbsp;·&nbsp; WHAT WE LEARNED THE EXPENSIVE WAY</span>
    <h1 class="title wide">The things we wish someone had written down.</h1>
    <p class="subtitle">Three guides drawn from a ten-month engagement that did not deliver: what it costs, what to ask first, and what to do when asking stops working.</p>
  </div>
</header>

<main class="wrap" id="main">

  <section id="guides">
    <div class="kicker">Guides</div>
    <h2>Start here</h2>
    <p class="lede">None of this is legal advice and none of it is theory. Each page is an account of
      something we actually did, or wish we had done, with the dates and figures from our own file
      behind it.</p>
    <div class="grid-3">
${cards}
    </div>
  </section>

  <section id="order">
    <div class="kicker">Depending on where you are</div>
    <h2>Which one you need</h2>
    <div class="grid-2">
      <div class="card">
        <h3>Still deciding who to hire</h3>
        <p>Read <a href="/before-you-pay/">the nine questions</a> first, then
          <a href="/succession-certificate-cost/">the cost breakdown</a> so the number you are quoted
          can be checked against the number you will actually pay.</p>
      </div>
      <div class="card">
        <h3>Already paid, nothing is happening</h3>
        <p>Move everything to email, set yourself a date past which you stop waiting, and read
          <a href="/consumer-complaint/">how we filed</a> — particularly the part about the written
          demand, which comes before any forum will be interested.</p>
      </div>
      <div class="card">
        <h3>Researching this company specifically</h3>
        <p>The <a href="/">case file</a> is the short version, <a href="/timeline/">the timeline</a>
          is the full dated record, and <a href="/faq/">the FAQ</a> answers what people usually ask.</p>
      </div>
      <div class="card">
        <h3>Wondering whether this is settled</h3>
        <p>It was not, as at the last check. <a href="/complaint/">The complaint page</a> carries the
          status and <a href="/updates/">the updates log</a> records every change, including any that
          goes against us.</p>
      </div>
    </div>
  </section>

</main>

${pagenav(
  { href: '/faq/', label: 'FAQ' },
  { href: '/before-you-pay/', label: 'Before you pay anyone' }
)}
`,
};
