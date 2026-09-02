import { events, renderEvent } from '../content/timeline.mjs';
import { pagenav } from '../layout.mjs';

const all = events.map((e) => renderEvent(e, true)).join('\n\n');

export default {
  slug: 'timeline',
  title: 'Full timeline: January to August 2026',
  description:
    'Month-by-month record of a VakilSearch (Zolvit) succession certificate engagement, January to August 2026, each entry tied to a document.',
  body: `
<header class="cover compact">
  <div class="wrap cover-inner">
    <span class="case-tag">CASE REF #5509082 &nbsp;·&nbsp; THE FULL RECORD</span>
    <h1 class="title wide">The complete chronology.</h1>
    <p class="subtitle">Ten months in order, from the hour-long quote to the refund that hasn't come. Every entry names the exhibit it rests on.</p>
  </div>
</header>

<main class="wrap" id="main">

  <section id="how-to-read">
    <div class="kicker">How to read this</div>
    <h2>Ground rules we set ourselves</h2>
    <p>Writing publicly about a company you are in a live dispute with only works if the account is
      disciplined. Three rules govern every entry below:</p>
    <ul>
      <li><strong>Dates come from records, not memory.</strong> Every date is taken from a bank record,
        a document VakilSearch issued, or a timestamped message.</li>
      <li><strong>Quotes are verbatim.</strong> Where we quote a VakilSearch staff member, the words are
        theirs, copied from the message. We have not paraphrased inside quotation marks.</li>
      <li><strong>We describe conduct, not motive.</strong> We say what happened and what we were told.
        We do not assert what anyone intended, and we do not characterise any of it as a crime — that is
        a question for the forum where our complaint is pending, not for a web page.</li>
    </ul>
    <div class="callout note">
      <h3>Names of individual staff are withheld</h3>
      <p>Several individual employees appear in this record. We have deliberately not published their
        names. Our dispute is with the company that assigned them, took the money, and set the process
        they were working inside — not with junior staff, several of whom were plainly doing their best
        with a file that had been handed around.</p>
    </div>
  </section>

  <section id="record">
    <div class="kicker">January – August 2026</div>
    <h2>The record</h2>

    <div class="timeline">

${all}

    </div>
  </section>

  <section id="what-we-are-not-saying">
    <div class="kicker">Precision</div>
    <h2>What we are not claiming</h2>
    <p>It matters to us that this page is not read as more than it is. So, explicitly:</p>
    <ul>
      <li>We are <strong>not</strong> saying a court has found against VakilSearch. Our complaint is
        pending and undecided.</li>
      <li>We are <strong>not</strong> saying every VakilSearch customer has this experience. We can only
        speak to our own file, reference #5509082.</li>
      <li>We are <strong>not</strong> attributing intent to any individual. We describe what was said to
        us and what did or didn't arrive.</li>
      <li>We are <strong>not</strong> publishing the underlying chat exports, bank details or staff names.
        Our reasons are set out on the <a href="/evidence/">evidence page</a>.</li>
    </ul>
    <p>What we <em>are</em> saying is narrow and, we believe, fully documented: we paid ₹65,000 upfront
      on 21 January 2026 for a defined service; ten months later that service had not been delivered;
      and the refund we requested on 27 July 2026 has not been paid.</p>
  </section>

</main>

${pagenav(
  { href: '/', label: 'Case file summary' },
  { href: '/evidence/', label: 'The evidence register' }
)}
`,
};
