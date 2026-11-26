import { Component, computed, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DOCUMENT } from '@angular/core';
import { GUIDES, guideBySlug } from './guides';
import { setSeo } from './seo';
import { SiteFrame } from './site-frame';

@Component({
  selector: 'app-guide-page',
  imports: [SiteFrame, RouterLink],
  template: `
    @if (g(); as g) {
      <app-site-frame>
        <article class="art">
          <nav class="crumbs" aria-label="Breadcrumb"><a routerLink="/">Home</a> › <a routerLink="/guides">Guides</a></nav>
          <h1>{{ g.emoji }} {{ g.title }}</h1>
          <p class="by">By <a routerLink="/">Lakkoju Jaya Krishna</a> · Updated {{ date(g.updated) }} · {{ g.minutes }} min read</p>
          <p class="lead">{{ g.intro }}</p>
          <a class="tool-cta" [href]="g.tool.url + '?utm_source=spreadapps.in&utm_medium=guide'" target="_blank" rel="noopener">🛠️ Free tool: {{ g.tool.name }} ↗</a>

          @for (s of g.sections; track s.h) {
            <h2>{{ s.h }}</h2>
            @for (p of s.p ?? []; track $index) { <p>{{ p }}</p> }
            @if (s.list) { <ul>@for (i of s.list; track $index) { <li>{{ i }}</li> }</ul> }
            @if (s.steps) { <ol>@for (i of s.steps; track $index) { <li>{{ i }}</li> }</ol> }
            @if (s.table; as t) {
              <div class="tbl"><table>
                <thead><tr>@for (h of t.head; track $index) { <th>{{ h }}</th> }</tr></thead>
                <tbody>@for (r of t.rows; track $index) { <tr>@for (c of r; track $index) { <td>{{ c }}</td> }</tr> }</tbody>
              </table></div>
            }
            @for (p of s.after ?? []; track $index) { <p>{{ p }}</p> }
          }

          <h2>Frequently asked questions</h2>
          @for (f of g.faqs; track f.q) { <h3>{{ f.q }}</h3><p>{{ f.a }}</p> }

          <a class="tool-cta" [href]="g.tool.url + '?utm_source=spreadapps.in&utm_medium=guide'" target="_blank" rel="noopener">🛠️ Try it free: {{ g.tool.name }} ↗</a>
          <p class="note">This guide is general information, not legal, tax or financial advice. Rules and limits change — always confirm with the official notification, your bank or a qualified adviser.</p>

          <h2>More guides</h2>
          <ul class="more">@for (o of others(); track o.slug) { <li><a [routerLink]="['/guides', o.slug]">{{ o.emoji }} {{ o.title }}</a></li> }</ul>
        </article>
      </app-site-frame>
    }
  `,
})
export class GuidePage {
  readonly slug = input<string>('');
  protected readonly g = computed(() => guideBySlug(this.slug() || this.fromUrl()));
  protected readonly others = computed(() => GUIDES.filter((x) => x.slug !== this.g()?.slug).slice(0, 5));
  private readonly router = inject(Router);
  private readonly fromUrl = () => this.router.url.split('?')[0].split('/').pop() ?? '';

  constructor() {
    const g = guideBySlug(this.fromUrl());
    if (!g) return;
    setSeo({
      title: g.title + ' | Spread Apps Guides',
      description: g.description,
      path: 'guides/' + g.slug,
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          { '@type': 'Article', headline: g.title, description: g.description, dateModified: g.updated, author: { '@type': 'Person', name: 'Lakkoju Jaya Krishna', url: 'https://spreadapps.in/' }, publisher: { '@type': 'Organization', name: 'Spread Apps', url: 'https://spreadapps.in/' } },
          { '@type': 'FAQPage', mainEntity: g.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
        ],
      },
    });
  }

  protected date(iso: string) {
    return new Date(iso + 'T00:00:00').toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
  }
}
