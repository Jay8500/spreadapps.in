import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/** Header + footer for the guide and policy pages (the home page keeps the portfolio nav). */
@Component({
  selector: 'app-site-frame',
  imports: [RouterLink],
  template: `
    <header class="sf-head">
      <div class="sf-in">
        <a routerLink="/" class="sf-brand" aria-label="Spread Apps home">
          <svg width="24" height="24" viewBox="0 0 200 200" aria-hidden="true"><circle cx="70" cy="140" r="16" fill="#5EEAD4" /><circle cx="102" cy="106" r="21" fill="#2DD4BF" /><circle cx="140" cy="66" r="28" fill="#0D9488" /></svg>
          Spread Apps
        </a>
        <nav class="sf-nav" aria-label="Main">
          <a routerLink="/guides">Guides</a>
          <a href="https://tools.spreadapps.in/?utm_source=spreadapps.in" target="_blank" rel="noopener">Free tools ↗</a>
          <a routerLink="/">About</a>
        </nav>
      </div>
    </header>
    <main class="sf-main"><ng-content /></main>
    <aside class="author" aria-labelledby="author-h">
      <img src="profile-photo.jpg" alt="Lakkoju Jaya Krishna" width="88" height="88" loading="lazy" />
      <div>
        <p class="author-k">About the author</p>
        <h2 id="author-h">Lakkoju Jaya Krishna</h2>
        <p>Full stack engineer from Hyderabad with 7 years of building Angular, Node.js and PostgreSQL products — including a hospital quality platform used for NABH accreditation. Under <b>Spread Apps™</b> he builds free, private tools for everyday India and writes these guides from the questions people ask while using them.</p>
        <ul class="author-built">
          <li>🛠️ <a href="https://tools.spreadapps.in/?utm_source=spreadapps.in" target="_blank" rel="noopener">Spread Apps Tools</a> — 70+ free tools, offline PWA with notifications</li>
          <li>♟️ Chess, Tic-Tac-Toe and Rock Paper Scissors with real-time online play</li>
          <li>⚙️ <a href="https://engine.spreadapps.in/" target="_blank" rel="noopener">Spread Engine</a> — open npm starter, <code>create-spread-app</code></li>
          <li>▶️ <a href="https://www.youtube.com/@SpreadApps" target="_blank" rel="noopener">YouTube @SpreadApps</a> — one-minute tool walkthroughs</li>
        </ul>
        <p class="author-links"><a routerLink="/">Portfolio</a> · <a href="https://linkedin.com/in/jaya-krishna-lakkoju" target="_blank" rel="noopener">LinkedIn</a> · <a href="https://github.com/Jay8500" target="_blank" rel="noopener">GitHub</a></p>
      </div>
    </aside>
    <footer class="sf-foot">
      <div class="sf-in">
        <span>© {{ year }} Spread Apps™ · Lakkoju Jaya Krishna · Hyderabad, India</span>
        <nav aria-label="Footer">
          <a routerLink="/guides">Guides</a>
          <a routerLink="/privacy">Privacy</a>
          <a routerLink="/terms">Terms</a>
          <a href="https://wa.me/918500913198">Contact</a>
        </nav>
      </div>
    </footer>
  `,
})
export class SiteFrame {
  protected readonly year = new Date().getFullYear();
}
