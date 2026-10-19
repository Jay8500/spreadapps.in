import { Component } from '@angular/core';

interface ExperienceItem {
  year: string;
  role: string;
  description: string;
  tags?: string[];
  open: boolean;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  items: ExperienceItem[] = [
    {
      year: '2020 — PRESENT',
      role: 'Technical Lead, Suvarna Technosoft',
      description:
        'Full-time role. Contributed programming expertise across Edukares, NFC, HrView, and HQMS — leading implementation across the product lifecycle.',
      open: false,
    },
    {
      year: '2026 — PRESENT',
      role: 'Independent Developer, Spread Apps',
      description:
        'Independent, self-directed projects and freelance client work, built and deployed end to end — from database design to production.',
      tags: ['Circles', 'AI-Lab', 'Spread Apps Tools', 'OTT money saver'],
      open: false,
    },
  ];

  toggle(item: ExperienceItem) {
    item.open = !item.open;
  }
}
