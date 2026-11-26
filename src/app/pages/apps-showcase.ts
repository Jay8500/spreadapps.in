import { Component } from '@angular/core';

interface App {
  name: string;
  tag: string;
  line: string;
  points: string[];
  shot?: string;
  url?: string;
  cta?: string;
  color: string;
}

/**
 * Top of spreadapps.in: the apps Spread Apps has built, shown first and big. The personal portfolio follows below.
 * (Setu and Connect are not shown yet; AI-Lab and the hospital SaaS stay hidden while their owner is employed.)
 */
@Component({
  selector: 'app-apps-showcase',
  template: `
    <section id="apps" class="as">
      <div class="as-in">
        <p class="as-kick">Spread Apps™ · made in Hyderabad</p>
        <h1>Useful apps for everyday India — free, fast and private.</h1>
        <p class="as-lead">We build web and mobile apps that solve small daily problems well: exam photos, PDFs, prices, money maths, games to play with friends, and tools for developers. Everything runs in your browser where possible, so your files never leave your phone.</p>
        <div class="as-stats">
          @for (s of stats; track s.k) { <div><b>{{ s.v }}</b><span>{{ s.k }}</span></div> }
        </div>

        <div class="as-grid">
          @for (a of apps; track a.name) {
            <article class="as-card" [style.--c]="a.color">
              @if (a.shot) { <img [src]="a.shot" [alt]="a.name + ' screenshot'" width="180" height="380" loading="lazy" /> }
              <div class="as-body">
                <p class="as-tag">{{ a.tag }}</p>
                <h2>{{ a.name }}</h2>
                <p>{{ a.line }}</p>
                <ul>@for (p of a.points; track $index) { <li>{{ p }}</li> }</ul>
                @if (a.url) { <a class="as-cta" [href]="a.url" target="_blank" rel="noopener">{{ a.cta ?? 'Open' }} ↗</a> }
              </div>
            </article>
          }
        </div>
        <p class="as-more">Built by Lakkoju Jaya Krishna — <a href="#portfolio">see the portfolio below ↓</a></p>
      </div>
    </section>
  `,
  styles: `
    .as { padding: 40px 18px 24px; background: radial-gradient(circle at 85% 0, #CCFBF1, transparent 45%), linear-gradient(180deg, #F0FDFA, #fff 60%); }
    .as-in { max-width: 1080px; margin: 0 auto; }
    .as-kick { font-size: 12px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: #0D9488; margin-bottom: 8px; }
    h1 { font-size: clamp(28px, 5vw, 46px); max-width: 820px; margin-bottom: 12px; }
    .as-lead { max-width: 760px; font-size: 17px; color: #475569; }
    .as-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin: 22px 0 26px; max-width: 760px; }
    .as-stats div { background: #fff; border: 1px solid #CCFBF1; border-radius: 14px; padding: 10px; text-align: center; }
    .as-stats b { display: block; font: 800 22px 'Plus Jakarta Sans', sans-serif; color: #0D9488; }
    .as-stats span { font-size: 12px; color: #475569; }
    @media (max-width: 560px) { .as-stats { grid-template-columns: repeat(2, 1fr); } }
    .as-grid { display: grid; gap: 16px; }
    @media (min-width: 860px) { .as-grid { grid-template-columns: 1fr 1fr; } }
    .as-card { display: flex; gap: 16px; padding: 16px; border-radius: 20px; background: #fff; border: 1px solid #E2E8F0; border-top: 4px solid var(--c); box-shadow: 0 10px 30px -20px rgb(15 23 42 / .35); }
    .as-card img { width: 120px; height: auto; align-self: flex-start; border-radius: 14px; border: 1px solid #E2E8F0; flex-shrink: 0; }
    @media (max-width: 480px) { .as-card { flex-direction: column; } .as-card img { width: 100%; max-height: 260px; object-fit: cover; object-position: top; } }
    .as-tag { font-size: 11px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: var(--c); margin-bottom: 4px; }
    .as-body h2 { font-size: 20px; margin-bottom: 6px; }
    .as-body p { color: #334155; font-size: 15px; }
    .as-body ul { margin: 8px 0 10px; padding-left: 18px; font-size: 14px; color: #475569; }
    .as-body li { margin-bottom: 3px; }
    .as-cta { display: inline-block; padding: 8px 14px; border-radius: 10px; background: var(--c); color: #fff; font-weight: 700; font-size: 14px; text-decoration: none; }
    .as-more { margin-top: 18px; font-size: 14px; color: #64748B; }
    .as-more a { color: #0D9488; font-weight: 600; }
  `,
})
export class AppsShowcase {
  protected readonly stats = [
    { v: '70+', k: 'free tools' },
    { v: '16', k: 'how-to guides' },
    { v: '55+', k: 'YouTube shorts' },
    { v: '7', k: 'Indian languages' },
  ];
  protected readonly apps: App[] = [
    {
      name: 'Spread Apps Tools',
      tag: 'Live · free web app',
      line: '70+ free tools for India in one place — installable like an app and usable offline.',
      points: [
        'Exam photo & signature resizer with presets for SSC, UPSC, IBPS, TSPSC, APPSC and more',
        'PDF merge, split, compress · EMI, salary, tax, PF and gold calculators',
        'Live gold, petrol and vegetable prices, weather and Telugu panchangam',
        'Price, job, festival and walk reminders as phone notifications',
      ],
      shot: 'spreadapps-tools/1.jpg',
      url: 'https://tools.spreadapps.in/?utm_source=spreadapps.in',
      cta: 'Open Tools',
      color: '#0D9488',
    },
    {
      name: 'Games with friends',
      tag: 'Live · inside Tools',
      line: 'Chess, Sudoku, Tic-Tac-Toe and Rock Paper Scissors — play the computer, pass one phone, or send a link and play online.',
      points: ['Chess coach that explains moves in 7 Indian languages', 'Real-time online rooms — no sign-up, just a link or QR', 'Daily Sudoku with notes, hints and streaks'],
      url: 'https://tools.spreadapps.in/games?utm_source=spreadapps.in',
      cta: 'Play',
      color: '#6366F1',
    },
    {
      name: 'Circles',
      tag: 'Own product · mobile app',
      line: 'Project management for freelancers and small teams — every project, one circle.',
      points: ['Projects, tasks and team comments in one place', 'Push notifications, camera and QR scanning', 'Built with Ionic, Capacitor and Supabase'],
      shot: 'circles/1.jpg',
      url: 'https://circles.spreadapps.in/?utm_source=spreadapps.in',
      cta: 'See Circles',
      color: '#7C6FF5',
    },
    {
      name: 'Spread Engine',
      tag: 'Live on npm · developer tool',
      line: 'One command — npm create spread-app — gives a ready Angular app with Tailwind and a deploy setup.',
      points: ['Zero-dependency CLI that works on Windows, macOS and Linux', 'Presets for common app types and your brand colours', 'Free and open; Pro kits planned'],
      url: 'https://engine.spreadapps.in/?utm_source=spreadapps.in',
      cta: 'See Engine',
      color: '#F43F5E',
    },
    {
      name: 'OTT Money Saver',
      tag: 'Client project · mobile app',
      line: 'A subscription tracker built for a client, so families know what they pay for streaming apps and when.',
      points: ['Ionic + Capacitor Android app with push reminders', 'Fast, offline-friendly lists of plans and renewals'],
      shot: 'ott-money-saver/1.jpg',
      color: '#F59E0B',
    },
    {
      name: 'AI Data Assistant',
      tag: 'Client project · AI',
      line: 'Ask a business database questions in plain English — even casual Hinglish — and get the answer with an explanation.',
      points: ['Google Gemini turns a question into one safe SQL query', 'Reads the real schema, so it never invents tables', 'Queries are shown first and run only when you choose'],
      color: '#0EA5E9',
    },
    {
      name: 'Accounts Manager',
      tag: 'PWA · small business',
      line: 'A simple app for subscription resellers to track customers, plans and payments — their own Google Sheet is the database.',
      points: ['No server to run: data stays in the seller’s Google account', 'Installable PWA that works on any phone'],
      color: '#22C55E',
    },
  ];
}
