import { Routes } from '@angular/router';
import { Home } from './pages/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'guides', loadComponent: () => import('./guides/guides-page').then((m) => m.GuidesPage) },
  { path: 'guides/:slug', loadComponent: () => import('./guides/guide-page').then((m) => m.GuidePage) },
  { path: 'privacy', loadComponent: () => import('./pages/legal').then((m) => m.Privacy) },
  { path: 'terms', loadComponent: () => import('./pages/legal').then((m) => m.Terms) },
  { path: '**', redirectTo: '' },
];
