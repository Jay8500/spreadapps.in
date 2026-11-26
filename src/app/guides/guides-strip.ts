import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GUIDES } from './guides';

/** Portfolio home: the free guides and the tools site, so visitors find the useful parts of Spread Apps. */
@Component({
  selector: 'app-guides-strip',
  imports: [RouterLink],
  template: `
    <section id="guides" class="gs">
      <div class="gs-in">
        <p class="gs-kick">Free for everyone</p>
        <h2>Spread Apps Tools & Guides</h2>
        <p class="gs-lead">I build <a href="https://tools.spreadapps.in/?utm_source=spreadapps.in" target="_blank" rel="noopener">Spread Apps Tools</a> — 70+ free tools for India that run in the browser, from exam photo resizing and PDF tools to EMI, PF and gold price calculators. These guides explain the everyday tasks behind them in plain English.</p>
        <div class="g-list">
          @for (g of guides; track g.slug) {
            <a class="g-card" [routerLink]="['/guides', g.slug]"><span class="g-emoji" aria-hidden="true">{{ g.emoji }}</span><span><b>{{ g.title }}</b><em>{{ g.minutes }} min read</em></span></a>
          }
        </div>
        <p class="gs-all"><a routerLink="/guides">All guides →</a></p>
      </div>
    </section>
  `,
})
export class GuidesStrip {
  protected readonly guides = GUIDES;
}
