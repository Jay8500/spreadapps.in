import type { Guide } from './guides';

const TOOLS = 'https://tools.spreadapps.in/';

/** Third set of guides (added 26 Nov 2026). Tax examples come from the same formulas as the Spread Apps tax calculator. */
export const THIRD_GUIDES: Guide[] = [
  {
    slug: 'old-vs-new-tax-regime',
    emoji: '🧮',
    title: 'Old vs New Tax Regime (FY 2026-27): Which Saves You More?',
    description: 'Slabs of both regimes side by side, the ₹12 lakh rebate, which deductions only the old regime allows, and worked examples for ₹10, ₹15 and ₹25 lakh salaries.',
    updated: '2026-11-26',
    minutes: 7,
    intro:
      'Every salaried person in India has to choose a tax regime each year. The new regime is the default and has lower rates; the old regime has higher rates but lets you subtract deductions such as HRA, 80C and home-loan interest. The right choice depends on how many deductions you actually have.',
    sections: [
      {
        h: 'New regime slabs (default)',
        table: {
          head: ['Taxable income', 'Rate'],
          rows: [
            ['Up to ₹4 lakh', 'Nil'],
            ['₹4 – 8 lakh', '5%'],
            ['₹8 – 12 lakh', '10%'],
            ['₹12 – 16 lakh', '15%'],
            ['₹16 – 20 lakh', '20%'],
            ['₹20 – 24 lakh', '25%'],
            ['Above ₹24 lakh', '30%'],
          ],
        },
        after: [
          'Salaried people get a ₹75,000 standard deduction. If taxable income is up to ₹12 lakh, a rebate cancels the whole tax — so a salary of up to about ₹12.75 lakh pays no income tax.',
        ],
      },
      {
        h: 'Old regime slabs (for those below 60)',
        table: {
          head: ['Taxable income', 'Rate'],
          rows: [
            ['Up to ₹2.5 lakh', 'Nil'],
            ['₹2.5 – 5 lakh', '5%'],
            ['₹5 – 10 lakh', '20%'],
            ['Above ₹10 lakh', '30%'],
          ],
        },
        after: ['Standard deduction is ₹50,000, and the rebate makes tax zero only up to ₹5 lakh of taxable income. A 4% health and education cess is added to the tax in both regimes.'],
      },
      {
        h: 'Deductions you get only in the old regime',
        list: [
          'Section 80C up to ₹1.5 lakh — your PF, PPF, ELSS mutual funds, life insurance, children’s tuition fees, home-loan principal.',
          'Section 80D — health insurance premium for you and your parents.',
          'HRA exemption for rent paid.',
          'Home-loan interest on a self-occupied house, up to ₹2 lakh a year.',
          'Extra NPS contribution up to ₹50,000 under 80CCD(1B), and professional tax.',
        ],
      },
      {
        h: 'Worked examples (salaried, below 60, professional tax ₹2,400)',
        table: {
          head: ['Salary and deductions', 'New regime tax', 'Old regime tax'],
          rows: [
            ['₹10 lakh, no deductions', '₹0', '₹1,06,101'],
            ['₹15 lakh, no deductions', '₹97,500', '₹2,56,651'],
            ['₹15 lakh + 80C ₹1.5L, 80D ₹25k, HRA ₹1.68L', '₹97,500', '₹1,49,635'],
            ['₹15 lakh + the above + home-loan interest ₹2L', '₹97,500', '₹97,157'],
            ['₹25 lakh, no deductions', '₹3,19,800', '₹5,68,651'],
          ],
        },
        after: [
          'For most people the new regime wins. The old regime becomes better only when deductions are large — typically HRA plus full 80C plus a home loan. At ₹15 lakh, the two meet at roughly ₹5.4 lakh of total deductions.',
        ],
      },
      {
        h: 'How to decide in five minutes',
        steps: [
          'Add up every deduction you really have this year (rent, 80C, 80D, home-loan interest, NPS).',
          'Calculate tax under both regimes with the same salary.',
          'Choose the lower one and tell your employer at the start of the year so TDS is right.',
          'You can still switch while filing your return if you are salaried; people with business income have stricter rules.',
        ],
      },
    ],
    faqs: [
      { q: 'Is there really no tax up to ₹12 lakh?', a: 'Under the new regime, yes for normal salary income: the rebate covers taxable income up to ₹12 lakh, and salaried people also get the ₹75,000 standard deduction on top.' },
      { q: 'Can I switch regimes every year?', a: 'Salaried employees can choose every year. Those with business or professional income can switch back to the new regime only once.' },
    ],
    tool: { name: 'Income tax calculator — old vs new regime side by side', url: TOOLS + 'income-tax-calculator' },
  },
  {
    slug: 'link-aadhaar-with-pan',
    emoji: '🪪',
    title: 'Aadhaar–PAN Link: How to Check Status, Link It and What Happens if You Don’t',
    description: 'Who must link Aadhaar with PAN, how to check the status in a minute, the ₹1,000 late fee, what an inoperative PAN stops and how to fix name or date-of-birth mismatches.',
    updated: '2026-11-26',
    minutes: 5,
    intro:
      'If your PAN is not linked to your Aadhaar, it becomes “inoperative”. You can still hold it, but filing returns, getting refunds and many bank and investment tasks become difficult. Checking takes a minute, and linking is simple once the details match.',
    sections: [
      {
        h: 'Who has to link',
        p: [
          'Every PAN holder who has an Aadhaar number and is not in an exempt group must link the two. Exempt groups include residents of Assam, Jammu & Kashmir and Meghalaya, non-residents, people aged 80 or above and non-citizens.',
        ],
      },
      {
        h: 'Check your link status',
        steps: [
          'Open the Income Tax e-filing website (incometax.gov.in).',
          'Choose “Link Aadhaar Status” under Quick Links — no login needed.',
          'Enter your PAN and Aadhaar number and view the result.',
        ],
      },
      {
        h: 'How to link',
        steps: [
          'If you missed the free deadline (30 June 2023), first pay the ₹1,000 fee through the e-Pay Tax option on the same website.',
          'Then choose “Link Aadhaar” under Quick Links, enter PAN, Aadhaar and your name as on Aadhaar, and confirm with the OTP sent to your Aadhaar-linked mobile.',
          'The status usually updates in a few days; your PAN becomes operative again about 30 days after linking.',
        ],
      },
      {
        h: 'What an inoperative PAN affects',
        list: [
          'You cannot get income tax refunds, and interest is not paid on refunds for that period.',
          'Tax may be deducted at a higher rate (TDS and TCS).',
          'Banks, mutual funds and brokers may stop or hold transactions that need a valid PAN.',
        ],
      },
      {
        h: 'Fixing mismatches',
        p: [
          'Linking fails if your name, date of birth or gender differ between PAN and Aadhaar. Correct the wrong one first — Aadhaar through the UIDAI website or an Aadhaar centre, PAN through the official PAN correction service — then link again.',
        ],
      },
    ],
    faqs: [
      { q: 'Do I need to pay ₹1,000 if my PAN was already linked before the deadline?', a: 'No. The fee applies only to linking after the deadline.' },
      { q: 'Can someone link it for me?', a: 'Use only the official website. Never share the Aadhaar OTP with an agent or caller.' },
    ],
    tool: { name: 'All free Spread Apps tools for everyday paperwork', url: TOOLS },
  },
  {
    slug: 'irctc-tatkal-booking-tips',
    emoji: '🚆',
    title: 'IRCTC Tatkal Booking: Timings, Rules and Tips to Get a Confirmed Ticket',
    description: 'When Tatkal opens for AC and sleeper, the Aadhaar requirement, how many passengers are allowed, refunds, and a simple checklist for booking in the first minute.',
    updated: '2026-11-26',
    minutes: 5,
    intro:
      'Tatkal is Indian Railways’ quota for last-minute travel. Seats open one day before the journey and often sell out within minutes, so preparation decides whether you get a confirmed berth.',
    sections: [
      {
        h: 'When Tatkal opens',
        table: {
          head: ['Class', 'Booking opens'],
          rows: [
            ['AC classes (1A, 2A, 3A, CC, EC)', '10:00 AM, one day before the journey'],
            ['Non-AC (Sleeper, 2S)', '11:00 AM, one day before the journey'],
          ],
        },
        after: ['“One day before” is counted from the train’s starting station, not your boarding station. Authorised agents cannot book in the first minutes after opening.'],
      },
      {
        h: 'Rules to know',
        list: [
          'Your IRCTC account must be Aadhaar-verified to book Tatkal online, and an OTP may be sent to your Aadhaar-linked mobile.',
          'At most four passengers can be booked on one Tatkal ticket.',
          'Tatkal charges are added to the base fare as a percentage, with a minimum and maximum for each class.',
          'Confirmed Tatkal tickets are not refunded on cancellation; waitlisted Tatkal tickets are refunded as per rules.',
          'A valid photo ID of the passengers must be carried during the journey.',
        ],
      },
      {
        h: 'Checklist for the first minute',
        steps: [
          'The night before, complete Aadhaar verification and check your login works.',
          'Save passengers in your Master List so you only tick names.',
          'Keep UPI or a wallet ready — card OTPs take longer.',
          'Log in 5–10 minutes early; sessions can expire, so refresh before opening time.',
          'Keep a second train or class in mind in case the first fills up.',
        ],
      },
      {
        h: 'Plan the journey as well',
        p: [
          'Check how long the journey takes and where the train stops before you book, especially for long routes across states. Road and rail times often differ a lot for the same pair of cities.',
        ],
      },
    ],
    faqs: [
      { q: 'Can I book Tatkal without Aadhaar on IRCTC?', a: 'Online Tatkal booking needs an Aadhaar-verified IRCTC account. Check the latest IRCTC notice, as rules are updated from time to time.' },
      { q: 'Is Premium Tatkal the same?', a: 'No. Premium Tatkal uses dynamic fares that rise as seats fill, and has its own refund rules.' },
    ],
    tool: { name: 'Travel planner — distance, route and time by road, rail and air', url: TOOLS + 'travel-planner' },
  },
];
