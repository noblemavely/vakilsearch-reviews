/* The chronological record. This is the spine of the site: the homepage shows
   the flagged entries, /timeline/ shows all of them in full.
   Every entry must be traceable to an exhibit in /evidence/. */

export const events = [
  {
    id: 'quote',
    date: '17–21 JAN 2026',
    flag: false,
    key: true,
    title: 'Quoted a "final", all-inclusive fee — then given one hour to pay it',
    lead: `A VakilSearch representative quoted ₹65,000 as a discounted, final professional fee for an
      end-to-end succession/legal heirship certificate covering a jointly-owned flat in Thane and an
      ancestral property in Kerala. We were told the special rate would hold for one hour before
      reverting to a higher price.`,
    detail: `We were also directed away from VakilSearch's own payment gateway and asked to transfer the
      money to a bank account held by a separate entity, <strong>Trishula Consultancy LLP</strong>, on the
      stated basis that paying that way would allow a "GST waiver". We paid ₹65,000 on 21 January 2026.`,
    quote: 'As discussed, I have secured the ₹65,000 special quote for you. The accounts team can hold this rate for the next 1 hour to finalize today\'s slot.',
    quoteCite: 'VakilSearch representative, January 2026',
    exhibits: ['EXH. 1', 'EXH. 3'],
  },
  {
    id: 'court-fees',
    date: '21 JAN 2026',
    flag: true,
    key: true,
    title: 'The "all-inclusive" fee turned out not to be all-inclusive',
    lead: `On the same day we paid, VakilSearch's own Case Brief disclosed that court fees — separately
      estimated at over ₹75,000 — were not included in the ₹65,000 and would be quantified later.`,
    detail: `This directly contradicted what we had been told on calls before payment, when the figure was
      described to us as fixed and covering the matter end to end. The document that corrected it arrived
      after the money had already left our account.`,
    exhibits: ['EXH. 2'],
  },
  {
    id: 'status-suggestion',
    date: 'LATE JAN 2026',
    flag: true,
    key: true,
    title: 'Told our mother could be presented to the court as a "widower"',
    lead: `When we pushed back on the surprise court fee, the advocate who had negotiated our rate told us
      the cost could be brought down by presenting my mother to the court as a "widower", in order to access
      a lower, capped fee category.`,
    detail: `We did not act on that suggestion. Separately, a different member of VakilSearch's own team,
      during an in-person visit, told us the concession did not apply to our case at all — leaving us with
      two contradictory answers from the same company about the cost of our own matter within days of paying.`,
    exhibits: ['EXH. 4'],
  },
  {
    id: 're-explain',
    date: '07 FEB – 28 FEB 2026',
    flag: false,
    key: false,
    title: 'Basic case details had to be re-explained from scratch',
    lead: `A newly assigned "Legal Executive" asked us to re-confirm the location and ownership of both
      properties — information we had already given at the point of sale in January.`,
    detail: `On 28 February, the assigned advocate arrived at our home for a meeting scheduled at 5:00 PM
      at 8:45 PM, with no advance notice of the delay.`,
    exhibits: ['EXH. 4'],
  },
  {
    id: 'silence',
    date: '28 FEB – 05 JUN 2026',
    flag: true,
    key: true,
    title: 'Three months of silence',
    lead: `We had flagged from day one that the Kerala property was part of a live, time-sensitive sale
      discussion. Between the end of February and early June we heard nothing from VakilSearch.`,
    detail: `No status update, no draft document, no call. Nothing in this period was initiated by them.`,
    exhibits: ['EXH. 4', 'EXH. 5'],
  },
  {
    id: 'kerala-sold',
    date: 'MAY 2026',
    flag: true,
    key: true,
    title: 'The Kerala property was sold without the documents we had paid for',
    lead: `Because no succession documentation was ever prepared, the ancestral Kerala property — a
      specific, named part of the service we engaged and paid for — was sold by the family without it.`,
    detail: `That portion of what we paid for became permanently impossible to use. It cannot be delivered
      late; the transaction it was needed for has already happened.`,
    exhibits: ['EXH. 4'],
  },
  {
    id: 'poa-visit',
    date: '05 – 19 JUN 2026',
    flag: true,
    key: true,
    title: 'My sister flew in from Canada. Nothing was ready.',
    lead: `My sister, one of three legal heirs, travelled from Canada and stayed two weeks specifically so
      a Power of Attorney could be executed in person — avoiding the far slower embassy attestation route.`,
    detail: `VakilSearch did not prepare the document at any point during her stay. After she had flown
      back, their team suggested she use the embassy route after all — the exact outcome the trip had been
      arranged to avoid, and the reason its timing had been coordinated with them in advance.`,
    exhibits: ['EXH. 4'],
  },
  {
    id: 'refund-request',
    date: '27 JUL 2026',
    flag: false,
    key: true,
    title: 'We asked to cancel and be refunded. No one owned the request.',
    lead: `After another unanswered status request, we formally asked to cancel the engagement and receive
      a full refund, citing the lack of ownership on their side.`,
    detail: `Each person we raised it with redirected us to someone else. No single person at VakilSearch
      took responsibility for the refund decision or gave us a timeline for one.`,
    quote: 'Why does the work happen only when we follow up? Nothing after that.',
    quoteCite: 'From our follow-up messages, August 2026',
    exhibits: ['EXH. 4', 'EXH. 5'],
  },
  {
    id: 'resend',
    date: 'AUG 2026',
    flag: true,
    key: true,
    title: 'Asked to resend documents we had sent six months earlier',
    lead: `In August their team asked us to resend documents that had already been shared with them in
      February — indicating our file had not been tracked or retained on their side.`,
    detail: `A Power of Attorney draft was finally produced on 18 August 2026: ten months after payment,
      two months after the visit it was meant for, and three months after the Kerala property sale had
      already made it moot.`,
    exhibits: ['EXH. 4', 'EXH. 5'],
  },
  {
    id: 'unresolved',
    date: '18 AUG 2026 – ONGOING',
    flag: true,
    key: true,
    title: 'Refund still unresolved; complaint filed',
    lead: `As of the last update to this site, VakilSearch has not refunded the ₹65,000 paid, and has not
      delivered the succession certificate we engaged them for.`,
    detail: `We have filed a formal consumer complaint on these facts with the District Consumer Disputes
      Redressal Commission, Thane. It is pending. See <a href="/complaint/">the complaint page</a> for
      where that stands.`,
    exhibits: ['EXH. 1', 'EXH. 2', 'EXH. 3', 'EXH. 4', 'EXH. 5'],
  },
];

/** Render one timeline entry. `full` includes the detail paragraph and exhibit refs. */
export function renderEvent(e, full) {
  const parts = [];
  parts.push(`      <div class="tl-item${e.flag ? ' flag' : ''}" id="${e.id}">`);
  parts.push(`        <div class="timeline-date">${e.date}</div>`);
  parts.push(`        <h3>${e.title}</h3>`);
  parts.push(`        <p>${e.lead.replace(/\s+/g, ' ').trim()}</p>`);
  if (full && e.detail) {
    parts.push(`        <p>${e.detail.replace(/\s+/g, ' ').trim()}</p>`);
  }
  if (e.quote) {
    parts.push(`        <div class="quote">&ldquo;${e.quote}&rdquo;` +
      (e.quoteCite ? `<cite>${e.quoteCite}</cite>` : '') + `</div>`);
  }
  if (full && e.exhibits && e.exhibits.length) {
    parts.push(`        <a class="tl-evidence" href="/evidence/">Supported by ${e.exhibits.join(', ')}</a>`);
  }
  parts.push(`      </div>`);
  return parts.join('\n');
}
