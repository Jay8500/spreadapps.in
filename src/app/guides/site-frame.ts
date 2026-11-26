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
