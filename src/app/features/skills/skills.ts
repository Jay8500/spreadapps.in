import { Component } from '@angular/core';

interface Skill {
  name: string;
  description: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  openIndex: number | null = null;

  skills: Skill[] = [
    {
      name: 'Angular',
      description:
        'Primary framework for building the web apps and admin dashboards — like Spread Apps Tools.',
    },
    {
      name: 'Ionic',
      description:
        'Cross-platform mobile builds from one codebase — used for Circles and OTT Money Saver.',
    },
    {
      name: 'PostgreSQL',
      description:
        'Relational schema design, including multi-tenant data isolation.',
    },
    {
      name: 'Supabase',
      description: 'Backend-as-a-service for auth, storage, and rapid API setup on newer builds.',
    },
    {
      name: 'Firebase',
      description: 'Push notifications, real-time sync, and hosting for mobile-first products.',
    },
    {
      name: 'PrimeNG',
      description:
        'Component library for shipping polished Angular UI fast without sacrificing design.',
    },
  ];

  toggle(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
