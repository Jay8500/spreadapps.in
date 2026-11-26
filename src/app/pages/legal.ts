import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { setSeo } from '../guides/seo';
import { SiteFrame } from '../guides/site-frame';

const UPDATED = '26 November 2026';

@Component({
  selector: 'app-privacy',
  imports: [SiteFrame, RouterLink],
  template: `
    <app-site-frame>
      <article class="art">
        <h1>Privacy policy</h1>
        <p class="by">Last updated: {{ updated }}</p>
        <p class="lead">spreadapps.in is run by Lakkoju Jaya Krishna (Spread Apps™), Hyderabad, India. This page explains what this website collects and why. The free tools at tools.spreadapps.in have their own privacy page.</p>

        <h2>What we collect</h2>
        <ul>
          <li><b>Contact form:</b> if you send a message, we receive the name, email or phone and message you type, only to reply to you. We do not sell or share it.</li>
          <li><b>WhatsApp:</b> if you message us on WhatsApp, WhatsApp’s own privacy policy applies to that chat.</li>
          <li><b>Server logs:</b> our host (Netlify) keeps standard logs such as IP address and browser type for security, for a short time.</li>
        </ul>

        <h2>Cookies and advertising</h2>
        <p>We may show ads from Google AdSense. Google and its partners use cookies to show ads based on your visits to this and other websites. You can turn off personalised ads in <a href="https://adssettings.google.com" target="_blank" rel="noopener">Google Ads Settings</a>, and learn more at <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener">How Google uses information from sites that use its services</a>. Visitors in regions that require it are asked for consent before such cookies are used.</p>

        <h2>Children</h2>
        <p>This site is meant for a general audience and does not knowingly collect personal information from children.</p>

        <h2>Your rights</h2>
        <p>You can ask us to see, correct or delete any message you sent us. Write to <a href="mailto:jay.lakkoju@gmail.com">jay.lakkoju&#64;gmail.com</a>; we reply within 7 days. This policy follows India’s Digital Personal Data Protection Act, 2023.</p>

        <h2>Changes</h2>
        <p>If this policy changes, the date at the top changes too. See also our <a routerLink="/terms">terms of use</a>.</p>
      </article>
    </app-site-frame>
  `,
})
export class Privacy {
  protected readonly updated = UPDATED;
  constructor() {
    setSeo({ title: 'Privacy policy | Spread Apps', description: 'What spreadapps.in collects, how cookies and Google AdSense are used, and how to contact us about your data.', path: 'privacy' });
  }
}

@Component({
  selector: 'app-terms',
  imports: [SiteFrame, RouterLink],
  template: `
    <app-site-frame>
      <article class="art">
        <h1>Terms of use</h1>
        <p class="by">Last updated: {{ updated }}</p>
        <p class="lead">By using spreadapps.in you agree to these simple terms.</p>

        <h2>Information, not advice</h2>
        <p>The guides on this site explain everyday topics in plain language. They are general information, not legal, tax, financial or medical advice. Rules, limits and prices change — always check the official notification, your bank or a qualified professional before you act.</p>

        <h2>Accuracy</h2>
        <p>We check facts on the date shown on each guide and correct mistakes quickly when told. If you spot something wrong, please <a href="https://wa.me/918500913198">tell us</a>.</p>

        <h2>Links to other sites</h2>
        <p>We link to official websites and to our own tools at tools.spreadapps.in. We are not responsible for the content of other websites.</p>

        <h2>Names and trademarks</h2>
        <p>Spread Apps™ is our brand. Names of banks, exams, apps and companies are used only to describe them; we are not affiliated with them unless stated.</p>

        <h2>Content</h2>
        <p>The text and graphics on this site are our own. You may share links to any page; please do not copy whole guides without permission.</p>

        <h2>Law</h2>
        <p>These terms are governed by the laws of India, with courts in Hyderabad, Telangana. See also our <a routerLink="/privacy">privacy policy</a>.</p>
      </article>
    </app-site-frame>
  `,
})
export class Terms {
  protected readonly updated = UPDATED;
  constructor() {
    setSeo({ title: 'Terms of use | Spread Apps', description: 'Terms for using spreadapps.in and its free guides.', path: 'terms' });
  }
}
