import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GUIDES } from './guides';
import { setSeo } from './seo';
import { SiteFrame } from './site-frame';

@Component({
  selector: 'app-guides-page',
  imports: [SiteFrame, RouterLink],
  template: `
    <app-site-frame>
      <div class="art">
        <h1>Guides</h1>
        <p class="lead">Plain-English guides to everyday tasks in India — exam photos, bank codes, PF, loans, tax, gold and safe payments. Each guide explains the rules with real examples and links to a free tool that does the job.</p>
        <div class="g-list">
          @for (g of guides; track g.slug) {
            <a class="g-card" [routerLink]="['/guides', g.slug]">
              <span class="g-emoji" aria-hidden="true">{{ g.emoji }}</span>
              <span><b>{{ g.title }}</b><small>{{ g.description }}</small><em>{{ g.minutes }} min read</em></span>
            </a>
          }
        </div>
      </div>
    </app-site-frame>
  `,
})
export class GuidesPage {
  protected readonly guides = GUIDES;
  constructor() {
    setSeo({
      title: 'Guides — Exam Photos, IFSC, PF, EMI, HRA, Gold & UPI Explained | Spread Apps',
      description: 'Free plain-English guides for India: resize photos for exam forms, IFSC codes, PF balance, how EMI works, HRA and rent receipts, gold jewellery price and UPI QR safety.',
      path: 'guides',
    });
  }
}
