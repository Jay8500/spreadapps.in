import { RenderMode, ServerRoute } from '@angular/ssr';
import { GUIDES } from './guides/guides';

/** Every page is turned into plain HTML at build time, so search engines and AdSense see the full text. */
export const serverRoutes: ServerRoute[] = [
  { path: 'guides/:slug', renderMode: RenderMode.Prerender, getPrerenderParams: async () => GUIDES.map((g) => ({ slug: g.slug })) },
  { path: '**', renderMode: RenderMode.Prerender },
];
