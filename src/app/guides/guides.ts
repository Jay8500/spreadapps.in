/**
 * Plain-English guides on spreadapps.in — each one explains an everyday task fully and links to the free
 * Spread Apps tool that does it. Written by Lakkoju Jaya Krishna; facts checked on the date in `updated`.
 */
export interface GuideSection {
  h: string;
  p?: string[];
  list?: string[];
  steps?: string[];
  table?: { head: string[]; rows: string[][] };
  /** Paragraphs shown after the list / steps / table. */
  after?: string[];
}
export interface Guide {
  slug: string;
  title: string;
  description: string;
  emoji: string;
  updated: string;
  minutes: number;
  intro: string;
  sections: GuideSection[];
  faqs: { q: string; a: string }[];
  tool: { name: string; url: string };
}

import { MORE_GUIDES } from './guides-more';

const TOOLS = 'https://tools.spreadapps.in/';

const FIRST: Guide[] = [
  {
    slug: 'resize-photo-to-kb-for-exam-forms',
    emoji: '📸',
    title: 'How to Resize a Photo to 20 KB or 50 KB for Exam and Job Forms',
    description: 'Why exam portals reject photos, the difference between KB, pixels and centimetres, and a step-by-step way to get the exact size on your phone without losing a clear face.',
    updated: '2026-11-26',
    minutes: 6,
    intro:
      'Almost every government job and exam form in India — SSC, UPSC, IBPS, RRB, TSPSC, APPSC, NEET, JEE — asks you to upload a photo and signature within a strict size. Most rejections are not about the picture itself but about three numbers: the file size in KB, the width and height in pixels, and the file type. This guide explains each one and how to get them right the first time.',
    sections: [
      {
        h: 'KB, pixels and centimetres are three different things',
        p: [
          'File size (KB) is how much storage the image uses. Portals count 1 KB as 1,024 bytes, so a "50 KB" limit means at most 51,200 bytes. Pixels are the width × height of the picture, for example 350 × 450. Centimetres (like "3.5 cm × 4.5 cm") describe the printed passport-photo shape; on a website it simply tells you the ratio of width to height.',
          'A photo from a modern phone is usually 3–5 MB and around 3000 × 4000 pixels. To reach 20–50 KB it must be cropped to the right shape, made smaller in pixels and saved as a compressed JPG — in that order. Compressing alone makes the face blurry; resizing alone may still leave the file too big.',
        ],
      },
      {
        h: 'Typical limits on Indian exam forms',
        p: ['Always read the latest notification — limits change between years. These are the common patterns we see:'],
        table: {
          head: ['Document', 'Usual file size', 'Usual format'],
          rows: [
            ['Passport photo', '20 KB to 50 KB (some allow up to 100–300 KB)', 'JPG / JPEG'],
            ['Signature', '10 KB to 20 KB', 'JPG / JPEG'],
            ['Left thumb impression', '20 KB to 50 KB', 'JPG / JPEG'],
            ['Handwritten declaration', '50 KB to 100 KB', 'JPG / JPEG'],
          ],
        },
      },
      {
        h: 'Step-by-step: get the exact size on your phone',
        steps: [
          'Take the photo against a plain white or light wall in daylight. Face the camera, keep both ears visible, no cap or dark glasses.',
          'Crop to the shape the form asks for (usually 3.5 : 4.5, taller than wide) with your face filling about 70–80% of the height.',
          'Resize to the pixel size in the notification — for example 350 × 450 for many SSC forms or 200 × 230 for IBPS.',
          'Save as JPG and lower the quality step by step until the file is just under the maximum KB but above the minimum.',
          'Open the final file and zoom in: the eyes and outline of the face must still be sharp.',
        ],
      },
      {
        h: 'Why photos still get rejected',
        list: [
          'File is below the minimum KB — some portals reject files that are too small, not just too big.',
          'Wrong format: PNG, HEIC (iPhone) or a screenshot instead of JPG.',
          'Grey or patterned background, shadows on the face, or a selfie taken too close.',
          'Signature written in CAPITAL letters or on lined paper — most notifications say this is not accepted.',
          'For UPSC: the name and the date the photo was taken must be printed at the bottom, and the photo must be recent.',
        ],
      },
      {
        h: 'Keep your photo private',
        p: [
          'Your photo and signature are personal documents. Prefer tools that resize the image on your own phone instead of uploading it to an unknown server. The Spread Apps photo resizer works entirely inside your browser — nothing is uploaded.',
        ],
      },
    ],
    faqs: [
      { q: 'Can I reach 20 KB without making the photo blurry?', a: 'Yes, if you first reduce the pixel size to what the form asks for. A 350 × 450 JPG of a face usually fits in 20–40 KB at good quality.' },
      { q: 'My iPhone photo will not upload. Why?', a: 'iPhones save photos as HEIC. Change Settings → Camera → Formats to "Most Compatible", or convert the photo to JPG before resizing.' },
      { q: 'Is a photo taken on a phone accepted?', a: 'Yes, as long as it meets the size, background and clarity rules. A clean phone photo in daylight is usually better than an old scanned print.' },
    ],
    tool: { name: 'Resize image to KB (with SSC, UPSC, IBPS, TSPSC and APPSC presets)', url: TOOLS + 'resize-image-to-kb' },
  },
  {
    slug: 'ifsc-code-explained',
    emoji: '🏦',
    title: 'IFSC Code Explained: How to Find It and How NEFT, RTGS and IMPS Use It',
    description: 'What the 11 characters of an IFSC mean, where to find your branch code, the difference between IFSC and MICR, and when to use NEFT, RTGS or IMPS.',
    updated: '2026-11-26',
    minutes: 5,
    intro:
      'Whenever you add a new payee in your bank app, fill a salary form or set up an EMI, you are asked for the IFSC. It is the address of a bank branch inside India’s payment network. Getting even one character wrong can send money to the wrong branch or make a transfer fail, so it helps to understand what the code means.',
    sections: [
      {
        h: 'What the 11 characters mean',
        p: ['IFSC stands for Indian Financial System Code. It is always 11 characters long:'],
        list: [
          'First 4 letters — the bank (for example SBIN is State Bank of India, HDFC is HDFC Bank, ICIC is ICICI Bank).',
          '5th character — always the digit 0, kept for future use.',
          'Last 6 characters — the branch (letters or digits).',
        ],
      },
      {
        h: 'Where to find your IFSC',
        list: [
          'On your cheque leaf, near the branch address at the top.',
          'On the first page of your passbook.',
          'In your bank’s mobile app under account details.',
          'By searching the bank and the area name, for example “sbi ameerpet” — useful when you are sending money to someone else and only know their branch.',
        ],
      },
      {
        h: 'IFSC vs MICR',
        p: [
          'MICR is a 9-digit number printed at the bottom of a cheque. It is used to clear cheques: the first three digits identify the city, the next three the bank and the last three the branch. Online transfers (NEFT, RTGS, IMPS) use the IFSC, not the MICR.',
        ],
      },
      {
        h: 'NEFT, RTGS and IMPS — which one to use',
        table: {
          head: ['Mode', 'Speed', 'Amount', 'Good for'],
          rows: [
            ['NEFT', 'In batches through the day, 24×7', 'No minimum', 'Everyday transfers, rent, fees'],
            ['RTGS', 'Instant, 24×7', 'Minimum ₹2 lakh', 'Large payments such as a property advance'],
            ['IMPS', 'Instant, 24×7', 'Up to ₹5 lakh per transfer (bank limits may be lower)', 'Urgent transfers of small and medium amounts'],
          ],
        },
        after: ['UPI also runs on top of IMPS, but it uses the UPI ID or mobile number instead of an account number and IFSC.'],
      },
      {
        h: 'Avoid the common mistakes',
        list: [
          'Confusing the letter O with the digit 0 — the 5th character is always the digit zero.',
          'Using the IFSC of your own branch when adding a payee — it must be the receiver’s branch.',
          'Branches that were merged (for example after bank mergers) may have a new IFSC; check before sending large amounts.',
        ],
      },
    ],
    faqs: [
      { q: 'Is the IFSC the same for all branches of a bank?', a: 'No. Every branch has its own IFSC. Only the first four letters are common to the bank.' },
      { q: 'Do I need the IFSC for UPI?', a: 'Not when you pay to a UPI ID or mobile number. You need it only if you pay to an account number.' },
    ],
    tool: { name: 'IFSC code finder — search by bank and branch name', url: TOOLS + 'ifsc-code-finder' },
  },
  {
    slug: 'how-to-check-pf-balance',
    emoji: '💰',
    title: 'How to Check Your PF Balance: Missed Call, SMS, UMANG and Passbook',
    description: 'Four official ways to see your EPF balance, what you need before they work, and how your monthly PF contribution is split between EPF and pension.',
    updated: '2026-11-26',
    minutes: 5,
    intro:
      'Every salaried employee covered by EPFO has 12% of basic pay (plus DA) going into a Provident Fund every month, and the employer adds the same amount. Checking the balance takes a minute once two things are in place: an activated UAN and your KYC linked to it.',
    sections: [
      {
        h: 'Before you start',
        list: [
          'Your UAN (Universal Account Number) is printed on your payslip. Activate it once on the EPFO member portal.',
          'Your mobile number must be registered with the UAN.',
          'At least one KYC — bank account, Aadhaar or PAN — must be linked and approved by your employer.',
        ],
      },
      {
        h: 'The four official ways',
        table: {
          head: ['Method', 'How', 'What you get'],
          rows: [
            ['Missed call', 'Call 9966044425 from your UAN-registered mobile', 'An SMS with your last contribution and balance'],
            ['SMS', 'Send EPFOHO UAN ENG to 7738299899 (TEL instead of ENG for Telugu)', 'Balance by SMS in the language you choose'],
            ['UMANG app', 'EPFO → View Passbook, log in with UAN and OTP', 'Full passbook on your phone'],
            ['EPFO passbook portal', 'Log in with UAN and password', 'Month-by-month passbook you can download'],
          ],
        },
        p: ['These are free services from EPFO. Nobody from EPFO will ever ask for your password or OTP on a call.'],
      },
      {
        h: 'How your monthly contribution is split',
        p: [
          'You contribute 12% of basic + DA, and all of it goes to your EPF account. Your employer also contributes 12%, but it is split: 8.33% goes to the Employees’ Pension Scheme (EPS) and the rest (3.67%) to EPF. The EPS share is calculated on a wage of at most ₹15,000, so it is capped at ₹1,250 a month; anything above that goes to EPF.',
          'Example: with a basic of ₹25,000, you put in ₹3,000. Your employer puts in ₹3,000 as well — ₹1,250 to pension and ₹1,750 to EPF. Your EPF grows by ₹4,750 a month plus interest.',
        ],
      },
      {
        h: 'If the balance looks wrong',
        list: [
          'Contributions usually appear after the employer files the monthly return, so the latest month may be missing for a few weeks.',
          'Interest is credited once a year, so the balance will look lower before that.',
          'If you changed jobs, make sure the old PF was transferred to the same UAN.',
        ],
      },
    ],
    faqs: [
      { q: 'The missed call did not work. Why?', a: 'The call must come from the mobile number registered with your UAN, and the UAN must be activated with at least one KYC approved.' },
      { q: 'Can I check PF balance without UAN?', a: 'You need the UAN. Ask your employer or HR if it is not on your payslip.' },
    ],
    tool: { name: 'PF balance check and monthly PF calculator', url: TOOLS + 'pf-balance-check' },
  },
  {
    slug: 'how-emi-is-calculated',
    emoji: '🏠',
    title: 'How Loan EMI Is Calculated — With a Worked Home Loan Example',
    description: 'The EMI formula in plain words, why most of your early EMIs go to interest, how tenure changes total interest, and how much one prepayment can save.',
    updated: '2026-11-26',
    minutes: 6,
    intro:
      'An EMI (Equated Monthly Instalment) is the fixed amount you pay every month until a loan is repaid. It looks simple, but the split between interest and principal changes every month, and small choices — a shorter tenure, one prepayment — can save lakhs. Here is how it works, with real numbers.',
    sections: [
      {
        h: 'The formula',
        p: [
          'EMI = P × r × (1 + r)ⁿ ÷ ((1 + r)ⁿ − 1), where P is the loan amount, r is the monthly interest rate (yearly rate ÷ 12 ÷ 100) and n is the number of months.',
          'For a ₹20 lakh home loan at 8.5% for 20 years: r = 8.5 ÷ 1200 = 0.00708 and n = 240. The EMI comes to about ₹17,356.',
        ],
      },
      {
        h: 'Where your money goes',
        p: [
          'Each month the bank first charges interest on the loan still outstanding, and the rest of the EMI reduces the principal. In the first month of the example above, interest is about ₹14,167 and only ₹3,190 reduces the loan. As the balance falls, the interest part shrinks and the principal part grows.',
          'Over 20 years you pay about ₹41.66 lakh in total — ₹20 lakh principal and about ₹21.66 lakh interest.',
        ],
      },
      {
        h: 'Tenure changes the total cost a lot',
        table: {
          head: ['₹20 lakh at 8.5%', 'Monthly EMI', 'Total interest'],
          rows: [
            ['15 years', '₹19,695', '₹15.45 lakh'],
            ['20 years', '₹17,356', '₹21.66 lakh'],
          ],
        },
        after: ['Paying about ₹2,300 more each month saves over ₹6 lakh in interest and finishes the loan five years earlier.'],
      },
      {
        h: 'The power of one prepayment',
        p: [
          'If you pay an extra ₹1 lakh after the first year and keep the same EMI, the loan above closes in about 214 months instead of 240, and total interest drops by roughly ₹3.5 lakh. Prepayments work best early in the loan, when most of the EMI is interest. Floating-rate home loans for individuals usually have no prepayment charge — confirm with your lender.',
        ],
      },
      {
        h: 'Other loans',
        table: {
          head: ['Loan', 'Example', 'EMI', 'Total interest'],
          rows: [
            ['Car loan', '₹8 lakh, 9.5%, 5 years', '₹16,801', '₹2.08 lakh'],
            ['Personal loan', '₹3 lakh, 12%, 3 years', '₹9,964', '₹58,715'],
          ],
        },
        after: ['Personal loans cost more because they have no security. Compare the total interest, not just the EMI, before you sign.'],
      },
    ],
    faqs: [
      { q: 'Does a lower EMI mean a cheaper loan?', a: 'Not always. A longer tenure lowers the EMI but increases the total interest you pay.' },
      { q: 'What happens to EMI when the interest rate rises?', a: 'For floating-rate loans, banks usually increase the tenure first and keep the EMI the same; you can ask them to raise the EMI instead to avoid a much longer loan.' },
    ],
    tool: { name: 'EMI calculator for home, car and personal loans', url: TOOLS + 'emi-calculator' },
  },
  {
    slug: 'hra-rent-receipts-guide',
    emoji: '🧾',
    title: 'HRA Exemption and Rent Receipts: Rules, Formula and a Worked Example',
    description: 'How much of your HRA is tax-free, what a valid rent receipt needs, when you need your landlord’s PAN, and the mistakes that get claims rejected.',
    updated: '2026-11-26',
    minutes: 6,
    intro:
      'If your salary includes House Rent Allowance and you live in a rented house, part of that HRA can be tax-free under the old tax regime. To claim it, your employer will ask for rent receipts. Here is how the exemption is worked out and what makes a receipt valid.',
    sections: [
      {
        h: 'Who can claim',
        list: [
          'You receive HRA as part of your salary.',
          'You actually pay rent for the house you live in (you cannot claim for a house you own and live in).',
          'You choose the old tax regime — the new regime does not allow HRA exemption.',
        ],
      },
      {
        h: 'The formula — the lowest of three amounts is tax-free',
        list: [
          'The HRA you actually received.',
          'Rent paid minus 10% of basic salary + DA.',
          '50% of basic + DA if you live in Delhi, Mumbai, Kolkata or Chennai; 40% everywhere else (including Hyderabad and Bengaluru).',
        ],
      },
      {
        h: 'Worked example (Hyderabad)',
        p: ['Basic salary ₹40,000 a month (₹4.8 lakh a year), HRA ₹20,000 a month (₹2.4 lakh), rent ₹18,000 a month (₹2.16 lakh).'],
        table: {
          head: ['Rule', 'Amount for the year'],
          rows: [
            ['HRA received', '₹2,40,000'],
            ['Rent − 10% of basic (₹2,16,000 − ₹48,000)', '₹1,68,000'],
            ['40% of basic (non-metro)', '₹1,92,000'],
          ],
        },
        after: ['The lowest is ₹1,68,000, so that much HRA is tax-free and the remaining ₹72,000 is taxable.'],
      },
      {
        h: 'What a valid rent receipt contains',
        list: [
          'Tenant’s name and the landlord’s name.',
          'Address of the rented house.',
          'Rent amount in figures and words, and the month or period it covers.',
          'How it was paid (bank transfer, UPI, cheque or cash) and the date.',
          'Landlord’s signature. For cash payments above ₹5,000, a revenue stamp is commonly asked for.',
          'Landlord’s PAN if the total rent for the year is more than ₹1 lakh.',
        ],
      },
      {
        h: 'Mistakes to avoid',
        list: [
          'Paying rent to your spouse is generally not accepted. Paying rent to a parent is allowed if it is genuine — pay by bank transfer and the parent should show it as income.',
          'Submitting receipts for months you were not in that house.',
          'Missing landlord PAN when annual rent crosses ₹1 lakh — the employer may not allow the claim.',
        ],
      },
    ],
    faqs: [
      { q: 'Can I claim HRA if I pay rent in cash?', a: 'Yes, with proper receipts, but bank or UPI payments are easier to prove if questioned.' },
      { q: 'I forgot to submit receipts to my employer. Is it lost?', a: 'No. You can still claim the exemption while filing your income tax return under the old regime; keep the receipts and rent agreement safe.' },
    ],
    tool: { name: 'Rent receipt generator (all months at once, as PDF)', url: TOOLS + 'rent-receipt-generator' },
  },
  {
    slug: 'gold-22k-vs-24k-jewellery-price',
    emoji: '🥇',
    title: 'Gold 22K vs 24K: How Jewellery Price Is Calculated in India',
    description: 'Purity, hallmark HUID, making charges and GST explained, with a worked bill for 10 grams of 22-carat jewellery and tips for old-gold exchange.',
    updated: '2026-11-26',
    minutes: 5,
    intro:
      'The “gold rate today” you see in news is only the starting point. The final bill for a chain or bangles adds purity, making charges and GST. Knowing how each part works helps you compare jewellers and avoid paying extra.',
    sections: [
      {
        h: 'Carat and purity',
        table: {
          head: ['Carat', 'Purity', 'Common use'],
          rows: [
            ['24K', '99.9% (999)', 'Coins and bars — too soft for most jewellery'],
            ['22K', '91.6% (916)', 'Most Indian jewellery'],
            ['18K', '75% (750)', 'Stone-studded and lightweight designs'],
          ],
        },
      },
      {
        h: 'Check the hallmark',
        p: [
          'Gold jewellery sold in India must carry a BIS hallmark with a 6-character HUID (Hallmark Unique ID). The hallmark shows the BIS logo, the purity grade (for example 22K916) and the HUID. You can verify the HUID in the official BIS CARE app before you buy.',
        ],
      },
      {
        h: 'How the bill is calculated',
        steps: [
          'Gold value = weight in grams × today’s rate for that purity.',
          'Making charges = a percentage of the gold value (often 8–25%) or a fixed amount per gram.',
          'GST of 3% is added on the total of gold value and making charges.',
        ],
        after: ['Example: 10 g of 22K at ₹11,750 a gram = ₹1,17,500. Making at 12% = ₹14,100. GST 3% on ₹1,31,600 = ₹3,948. Total ≈ ₹1,35,548.'],
      },
      {
        h: 'Tips before you pay',
        list: [
          'Ask for the making charge as a percentage and compare it across shops — it varies more than the gold rate.',
          'Stone weight should not be charged at the gold rate; ask for net gold weight on the bill.',
          'For old-gold exchange, the shop tests purity and may deduct a small percentage; ask for the deduction in writing.',
          'Keep the bill with the HUID — it helps when you sell or exchange later.',
        ],
      },
    ],
    faqs: [
      { q: 'Why is the shop rate higher than the rate on TV?', a: 'TV and websites usually show the base rate before making charges and GST, and city rates differ slightly because of local taxes and transport.' },
      { q: 'Is 24K jewellery better?', a: 'It is purer but very soft, so it bends and scratches easily. That is why most jewellery is 22K.' },
    ],
    tool: { name: 'Gold & silver price calculator with live rates and a price-drop alert', url: TOOLS + 'gold-price-calculator' },
  },
  {
    slug: 'vegetable-mandi-prices-per-kg',
    emoji: '🍅',
    title: 'Reading Mandi and Rythu Bazar Prices: Quintal to Kg, Modal Price and More',
    description: 'How government market price data works, what min, max and modal prices mean, how to convert per-quintal prices to per-kg, and why shop prices are higher.',
    updated: '2026-11-26',
    minutes: 4,
    intro:
      'Government websites publish daily prices from wholesale markets (mandis) across India. They are a great way to know if you are paying a fair price for tomatoes or onions — once you know how to read them.',
    sections: [
      {
        h: 'Where the numbers come from',
        p: [
          'Agricultural markets report their daily arrivals and prices to the government’s Agmarknet system, which is published as open data. In Telangana and Andhra Pradesh, Rythu Bazars — markets where farmers sell directly to buyers — are among the cheapest places to buy, and their prices are close to these wholesale figures.',
        ],
      },
      {
        h: 'Min, max and modal price',
        list: [
          'Minimum price — the lowest price traded that day in that market.',
          'Maximum price — the highest price, usually for the best quality.',
          'Modal price — the price at which most of the produce was sold. This is the best single number to compare.',
        ],
      },
      {
        h: 'Converting quintal to kilogram',
        p: [
          'Mandi prices are in rupees per quintal. One quintal is 100 kg, so divide by 100 to get the price per kg. A modal price of ₹2,000 per quintal means about ₹20 per kg at the market.',
        ],
      },
      {
        h: 'Why your shop charges more',
        list: [
          'Transport from the market to your area.',
          'Wastage — some vegetables spoil before they are sold.',
          'Sorting, small packets and the shopkeeper’s margin.',
        ],
        after: ['A retail price of roughly 1.5 to 2 times the wholesale modal price is common for perishable vegetables. Much more than that is a sign to look around.'],
      },
    ],
    faqs: [
      { q: 'Why does the price for my district show “no data” some days?', a: 'Markets report only on the days they trade and receive produce, so holidays and off-season days can be missing.' },
      { q: 'Are these prices the same in every shop?', a: 'No. They are wholesale market prices; retail prices add transport, wastage and margin.' },
    ],
    tool: { name: 'Vegetable and grocery prices today for your district', url: TOOLS + 'vegetable-prices-today' },
  },
  {
    slug: 'upi-qr-code-safety',
    emoji: '📱',
    title: 'UPI QR Codes: How They Work and How to Stay Safe From QR Scams',
    description: 'What is inside a UPI QR code, how to make one for your shop, and the one rule that stops most UPI frauds: you never need a PIN to receive money.',
    updated: '2026-11-26',
    minutes: 5,
    intro:
      'UPI QR codes are everywhere — from tea stalls to hospitals. They make payments instant, but scammers also use them. Understanding what a QR code contains helps you use it confidently and spot tricks.',
    sections: [
      {
        h: 'What is inside a UPI QR code',
        p: [
          'A UPI QR code is just a link that starts with upi://pay. It contains the receiver’s UPI ID (for example name@okbank), their name, and optionally an amount and a note. When you scan it, your UPI app fills these in and asks you to confirm and enter your PIN.',
          'Because the code holds the UPI ID, anyone can make a QR for their own UPI ID for free — no bank visit needed. Small shops often print one and stick it at the counter.',
        ],
      },
      {
        h: 'The golden rule',
        p: [
          'You never need to scan a QR code or enter your UPI PIN to receive money. Your PIN is only for sending money out. If anyone asks you to scan a code or enter a PIN “to receive a refund, prize or payment”, it is a scam.',
        ],
      },
      {
        h: 'Common QR and UPI scams',
        list: [
          'Fake buyers on selling sites send a QR saying “scan to get the advance” — scanning sends money from you.',
          'A sticker pasted over a shop’s real QR, so payments go to someone else. Shop owners should check their QR daily.',
          '“Collect requests” that look like payments — they are requests to pull money from you.',
          'Calls claiming to be from your bank asking for an OTP or PIN. Banks never ask for these.',
        ],
      },
      {
        h: 'Safe habits',
        list: [
          'Before entering your PIN, read the name the app shows for the receiver.',
          'Set a daily UPI limit in your app if you rarely make large payments.',
          'Report fraud quickly on the national cyber crime helpline 1930 or cybercrime.gov.in, and inform your bank.',
        ],
      },
    ],
    faqs: [
      { q: 'Is it safe to show my UPI QR code to customers?', a: 'Yes. A QR code only lets people send money to you. Never share your PIN or OTP.' },
      { q: 'Can I put a fixed amount in my QR code?', a: 'Yes. A QR can carry an amount, which is useful for fixed fees; the payer still confirms it in their app.' },
    ],
    tool: { name: 'UPI QR code generator for your shop or business', url: TOOLS + 'upi-qr-code-generator' },
  },
];

export const GUIDES: Guide[] = [...FIRST, ...MORE_GUIDES];

export const guideBySlug = (slug: string) => GUIDES.find((g) => g.slug === slug);
