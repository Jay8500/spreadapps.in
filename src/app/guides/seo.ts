import { DOCUMENT, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

/** Title, description, canonical link and optional JSON-LD for a page. */
export function setSeo(o: { title: string; description: string; path: string; jsonLd?: object }) {
  const doc = inject(DOCUMENT);
  inject(Title).setTitle(o.title);
  const meta = inject(Meta);
  meta.updateTag({ name: 'description', content: o.description });
  meta.updateTag({ property: 'og:title', content: o.title });
  meta.updateTag({ property: 'og:description', content: o.description });
  meta.updateTag({ property: 'og:url', content: 'https://spreadapps.in/' + o.path });
  let link = doc.head.querySelector<HTMLLinkElement>('link[rel=canonical]');
  if (!link) {
    link = doc.createElement('link');
    link.rel = 'canonical';
    doc.head.appendChild(link);
  }
  link.href = 'https://spreadapps.in/' + o.path;
  doc.head.querySelectorAll('script[data-seo]').forEach((s) => s.remove());
  if (o.jsonLd) {
    const s = doc.createElement('script');
    s.type = 'application/ld+json';
    s.setAttribute('data-seo', '');
    s.textContent = JSON.stringify(o.jsonLd);
    doc.head.appendChild(s);
  }
}
