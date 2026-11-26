import type { Guide } from './guides';

const TOOLS = 'https://tools.spreadapps.in/';

/** Second set of guides (added 26 Nov 2026). */
export const MORE_GUIDES: Guide[] = [
  {
    slug: 'ctc-vs-in-hand-salary',
    emoji: '💼',
    title: 'CTC vs In-Hand Salary: How to Read Your Offer Letter and Payslip',
    description: 'What goes into CTC, why your monthly credit is lower, how PF, professional tax and income tax are deducted, with worked examples for ₹6, ₹12 and ₹18 lakh CTC.',
    updated: '2026-11-26',
    minutes: 7,
    intro:
      'An offer letter says “CTC ₹12 lakh”, but the salary that reaches your bank every month is much less than ₹1 lakh. That is not a trick — CTC (Cost to Company) is everything the company spends on you in a year, including money that never reaches your account in cash. Knowing the parts helps you compare offers properly and negotiate with confidence.',
    sections: [
      {
        h: 'What CTC usually includes',
        list: [
          'Basic salary — often 40–50% of CTC. Many other parts are calculated from it.',
          'House Rent Allowance (HRA) and other allowances such as special allowance or LTA.',
          'Employer’s PF contribution — 12% of basic, paid into your PF account, not your bank.',
          'Gratuity — about 4.81% of basic in some companies; you receive it only after five years of service.',
          'Insurance premiums, meal cards or other benefits the company pays for.',
          'Variable pay or bonus — paid only if targets are met, often once or twice a year.',
        ],
      },
      {
        h: 'What is deducted from your monthly salary',
        list: [
          'Your own PF contribution — 12% of basic. It is your savings, but it does not come to your hand.',
          'Professional tax — a small state tax; in Telangana it is up to ₹200 a month and at most ₹2,500 a year.',
          'Income tax (TDS) — worked out on your yearly income and spread over the months.',
        ],
      },
      {
        h: 'Worked examples (new tax regime, FY 2026-27)',
        p: ['Assumptions: basic is 50% of CTC, PF on full basic, no gratuity or variable pay inside CTC, professional tax ₹2,400 a year.'],
        table: {
          head: ['CTC a year', 'Gross salary', 'Your PF', 'Income tax', 'In-hand per month'],
          rows: [
            ['₹6,00,000', '₹5,64,000', '₹36,000', '₹0', '≈ ₹43,800'],
            ['₹12,00,000', '₹11,28,000', '₹72,000', '₹0', '≈ ₹87,800'],
            ['₹18,00,000', '₹16,92,000', '₹1,08,000', '≈ ₹1,28,336', '≈ ₹1,21,100'],
          ],
        },
        after: [
          'Why no tax at ₹12 lakh CTC? Under the new regime a salaried person gets a ₹75,000 standard deduction, and income up to ₹12 lakh after that gets a full rebate. Here the taxable income is under ₹12 lakh, so the tax is zero.',
          'Your numbers will differ if the basic share, variable pay, gratuity or the employer’s PF rule is different — ask HR for the salary breakup.',
        ],
      },
      {
        h: 'Questions to ask before you accept an offer',
        steps: [
          'What is the fixed pay and what is variable? Count only fixed pay as guaranteed.',
          'Is gratuity or insurance included inside the CTC figure?',
          'Is employer PF calculated on full basic or on the ₹15,000 wage ceiling? It changes your take-home.',
          'When is variable pay paid, and what percentage was actually paid last year?',
          'What is the joining bonus, and do you have to return it if you leave early?',
        ],
      },
      {
        h: 'Old regime or new regime?',
        p: [
          'The new regime has lower rates and a bigger standard deduction but very few deductions. The old regime allows HRA exemption, 80C (PF, PPF, ELSS, life insurance) up to ₹1.5 lakh, health insurance under 80D and home-loan interest. If your deductions are large — for example high rent plus a home loan — the old regime can still save more. Compare both every year before telling your employer.',
        ],
      },
    ],
    faqs: [
      { q: 'Is PF part of my salary?', a: 'Yes, both your share and the employer’s share are your money, saved in your PF account. They are part of CTC but not of your monthly in-hand pay.' },
      { q: 'Why is my first month’s salary different?', a: 'It is usually paid only for the days you worked, and some companies pay it with the next month’s salary.' },
      { q: 'What is the 4.81% gratuity?', a: 'Gratuity is 15 days of basic for every year of service, which works out to about 4.81% of basic per year. It is paid only after five years with the same employer.' },
    ],
    tool: { name: 'In-hand salary calculator (CTC to monthly take-home)', url: TOOLS + 'salary-calculator' },
  },
  {
    slug: 'choose-best-mobile-recharge-plan',
    emoji: '📶',
    title: 'How to Choose the Cheapest Mobile Recharge Plan: Cost Per Day Explained',
    description: 'Why 28-day plans cost more over a year, how to compare plans by price per day and per GB, when yearly plans make sense and how to avoid paying for data you never use.',
    updated: '2026-11-26',
    minutes: 5,
    intro:
      'Jio, Airtel, Vi and BSNL each offer dozens of prepaid plans, and the most visible one is rarely the cheapest for you. The trick is to compare plans by what they cost per day and what you actually use — not by the headline price.',
    sections: [
      {
        h: 'Step 1: work out the price per day',
        p: ['Divide the price by the number of days. For example (illustrative prices — check the operator app for today’s):'],
        table: {
          head: ['Plan', 'Validity', 'Price per day'],
          rows: [
            ['₹349', '28 days', '≈ ₹12.5'],
            ['₹859', '84 days', '≈ ₹10.2'],
            ['₹3,599', '365 days', '≈ ₹9.9'],
          ],
        },
        after: ['Longer plans are usually cheaper per day. If you are sure you will keep the number for a year, a yearly plan saves both money and the trouble of recharging every month.'],
      },
      {
        h: 'The 28-day trap',
        p: [
          'A “monthly” plan that lasts 28 days needs 13 recharges in a year, not 12 — so you pay for an extra month. Operators also offer 30-day and calendar-month plans; compare all of them by price per day.',
        ],
      },
      {
        h: 'Step 2: match the data to your real use',
        list: [
          'Check how much data you used last month (Settings → Network → Data usage on Android).',
          'If you mostly use Wi-Fi at home and office, a 1–1.5 GB/day plan is usually enough.',
          'If you have a 5G phone in a 5G area, some plans give unlimited 5G data — the daily limit then matters only on 4G.',
          'If you rarely use data (for example an elderly parent’s phone), look for voice-and-SMS plans or long-validity basic plans.',
        ],
      },
      {
        h: 'Step 3: count the extras only if you use them',
        p: [
          'Plans with OTT apps (JioHotstar, Netflix, Amazon Prime) can be good value if you would buy that subscription anyway — subtract its monthly cost before comparing. If you do not watch it, you are paying extra for nothing.',
        ],
      },
      {
        h: 'Stay safe while recharging',
        list: [
          'Recharge only in the operator’s app, a trusted UPI app or the official website.',
          'Ignore messages offering “free recharge” or “3 months free data” — they are common phishing tricks.',
          'Never share the OTP sent to your phone with anyone who calls about a recharge or KYC.',
        ],
      },
    ],
    faqs: [
      { q: 'Are recharge prices the same in every state?', a: 'Jio prices are the same across India. Airtel and Vi can differ slightly by telecom circle, so check the app for your number.' },
      { q: 'Is a yearly plan risky?', a: 'Only if you might change the number or operator soon. Otherwise it is usually the cheapest per day.' },
    ],
    tool: { name: 'Mobile recharge plans compared by cost per day', url: TOOLS + 'mobile-recharge-plans' },
  },
  {
    slug: 'age-limit-calculation-for-govt-exams',
    emoji: '🎂',
    title: 'How to Calculate Your Age for Govt Exam Age Limits (With Relaxations)',
    description: 'How exam notifications count age on a cut-off date, how to check if you are eligible, the usual age relaxation for reserved categories and common mistakes.',
    updated: '2026-11-26',
    minutes: 5,
    intro:
      'Every government job notification has an age limit such as “18 to 32 years as on 01-08-2026”. Being even one day over the upper limit makes an application invalid, so it is worth calculating your exact age on the cut-off date before you pay the fee.',
    sections: [
      {
        h: 'Age is counted on the cut-off date, not today',
        p: [
          'The notification fixes a date — for example 1 January or 1 August of the exam year. Your age is calculated on that date using the date of birth in your SSC (10th class) certificate. Your age on the day you apply does not matter.',
        ],
      },
      {
        h: 'A simple way to check eligibility',
        steps: [
          'Note the lower and upper age limits and the cut-off date from the notification.',
          'Find the earliest allowed date of birth: cut-off date minus (upper limit + 1) years, plus one day.',
          'Find the latest allowed date of birth: cut-off date minus the lower limit in years.',
          'Your date of birth must fall between these two dates (both included).',
        ],
        after: ['Example: age 18 to 32 as on 01-08-2026 means you must be born between 02-08-1993 and 01-08-2008. Many notifications print these dates directly — use them if given.'],
      },
      {
        h: 'Usual age relaxation in central government jobs',
        table: {
          head: ['Category', 'Extra years on the upper limit'],
          rows: [
            ['SC / ST', '5 years'],
            ['OBC (non-creamy layer)', '3 years'],
            ['Persons with disabilities (PwBD)', '10 years (more when combined with SC/ST or OBC)'],
            ['Ex-servicemen', 'Service period plus a few years, as per rules'],
          ],
        },
        after: ['State governments (such as Telangana and Andhra Pradesh) set their own limits and relaxations, which can be quite different. Always follow the notification of the exam you apply for.'],
      },
      {
        h: 'Common mistakes',
        list: [
          'Using age from an Aadhaar card when it differs from the SSC certificate — the certificate is what counts.',
          'Forgetting that the upper limit means “not more than 32 on the cut-off date”, so turning 33 even a day before is not allowed.',
          'Claiming relaxation without a valid caste or disability certificate issued in the format the notification asks for.',
          'For people born on 29 February, birthdays are counted carefully; check the exact days with a calculator.',
        ],
      },
    ],
    faqs: [
      { q: 'Which date of birth is accepted?', a: 'The one in your 10th class (SSC or equivalent) certificate.' },
      { q: 'Can I apply if I cross the upper age limit after the cut-off date?', a: 'Yes. Only your age on the cut-off date matters.' },
    ],
    tool: { name: 'Age calculator (years, months and days on any date)', url: TOOLS + 'age-calculator' },
  },
  {
    slug: 'compress-and-merge-pdf-for-online-forms',
    emoji: '📄',
    title: 'How to Compress and Merge PDFs for Online Forms Without Losing Quality',
    description: 'Why scanned PDFs are so large, how to scan for small files, how compression works, how to join certificates into one PDF and how to keep your documents private.',
    updated: '2026-11-26',
    minutes: 5,
    intro:
      'College admissions, scholarships and job portals often ask you to upload certificates as one PDF under 200 KB, 500 KB or 1 MB. A phone scan of five pages can easily be 10 MB. With the right steps you can bring it under the limit and still keep every word readable.',
    sections: [
      {
        h: 'Why some PDFs are huge',
        p: [
          'A PDF made from a Word file stores text, so it is small. A scanned PDF stores each page as a photo, and a phone photo can be 2–4 MB. Five such pages make a 15 MB file even though it contains very little text.',
        ],
      },
      {
        h: 'Scan smart to start small',
        list: [
          'Use a scanner app or your phone’s document mode, which crops and flattens the page.',
          'Choose black-and-white or greyscale for text certificates — colour triples the size.',
          '150 to 200 DPI is enough to read clearly; 300 DPI or more is only needed for printing.',
          'Scan one document per file, then merge them in the order the form asks.',
        ],
      },
      {
        h: 'How compression works',
        p: [
          'Compression lowers the quality and resolution of the images inside the PDF. Mild compression usually halves the size without visible change; strong compression can make small print hard to read. Always open the compressed file and zoom in on the smallest text, such as marks, roll numbers and seals.',
        ],
      },
      {
        h: 'Merging documents into one PDF',
        steps: [
          'Collect the files: for example 10th memo, 12th memo, degree certificate, caste certificate.',
          'Arrange them in the order the portal lists.',
          'Merge into one PDF, then compress the merged file if it is still above the limit.',
          'Name the file clearly, such as Ravi_Kumar_Certificates.pdf.',
        ],
      },
      {
        h: 'Keep documents private',
        p: [
          'Certificates contain your name, date of birth and sometimes Aadhaar details. Prefer tools that work inside your browser so files never leave your phone, and avoid sending documents through unknown websites or Telegram bots.',
        ],
      },
    ],
    faqs: [
      { q: 'My PDF is password protected and will not merge. Why?', a: 'Protected PDFs must be unlocked by the owner first. Download an unprotected copy or ask the issuer.' },
      { q: 'Can I turn photos of documents into a PDF?', a: 'Yes. Use a JPG-to-PDF tool to combine the photos, then compress if needed.' },
    ],
    tool: { name: 'Compress PDF and Merge PDF (works in your browser)', url: TOOLS + 'compress-pdf' },
  },
  {
    slug: 'why-petrol-price-differs-by-city',
    emoji: '⛽',
    title: 'Why Petrol and Diesel Prices Are Different in Every City',
    description: 'What makes up the price of a litre of petrol in India — base price, freight, central excise, dealer commission and state VAT — and why prices change every morning.',
    updated: '2026-11-26',
    minutes: 4,
    intro:
      'Petrol costs more in Hyderabad than in some other cities, and the price changes almost every day. That is because the price you pay is built from several parts, and two of them — state tax and transport cost — depend on where you buy.',
    sections: [
      {
        h: 'What is inside the price of one litre',
        list: [
          'Base price — what the oil company charges for the refined fuel, which follows international crude oil prices and the rupee–dollar rate.',
          'Freight — the cost of moving fuel from the depot to the pump.',
          'Central excise duty — a fixed amount per litre set by the central government, the same everywhere.',
          'Dealer commission — what the petrol pump owner earns per litre.',
          'State VAT or sales tax — set by each state, often a percentage plus sometimes a fixed amount. This is the biggest reason prices differ between states.',
        ],
      },
      {
        h: 'Why prices change every morning',
        p: [
          'Since June 2017 oil companies revise petrol and diesel prices daily, at 6 AM, based on international prices and exchange rates. In practice the price can stay the same for long periods when companies and the government hold it steady.',
        ],
      },
      {
        h: 'Why two pumps in the same state can differ',
        p: [
          'Freight cost depends on the distance from the nearest depot, so pumps in towns far from a depot can be a little costlier. Different companies (Indian Oil, HP, BPCL and private ones) may also differ by a few paise.',
        ],
      },
      {
        h: 'Tips at the pump',
        list: [
          'Check that the meter shows zero before filling starts.',
          'Ask for a receipt — it helps if you need to complain.',
          'If you doubt the quantity, you can ask for the 5-litre measure check; pumps must keep a certified measure.',
          'Plan a fill-up on the way rather than a special trip; driving to a cheaper pump far away can cost more than you save.',
        ],
      },
    ],
    faqs: [
      { q: 'Why is diesel cheaper than petrol?', a: 'Mainly because taxes on diesel have usually been lower; base prices are similar.' },
      { q: 'Where can I see today’s price?', a: 'Oil company apps and SMS services show it daily, and the Spread Apps fuel page shows it for Hyderabad, Telangana and AP cities.' },
    ],
    tool: { name: 'Petrol & diesel price today', url: TOOLS + 'petrol-diesel-price' },
  },
];
