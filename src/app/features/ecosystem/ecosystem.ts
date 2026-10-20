import { Component } from '@angular/core';

interface EcoChild {
  name: string;
  status: string;
  barStyle: string;
  future?: boolean;
  /** Not shown on the site (kept for later) */
  hidden?: boolean;
}

@Component({
  selector: 'app-ecosystem',
  standalone: true,
  imports: [],
  templateUrl: './ecosystem.html',
  styleUrl: './ecosystem.css',
})
export class Ecosystem {
  private readonly all: EcoChild[] = [
    {
      name: 'Circles',
      status: 'Own product',
      barStyle: 'linear-gradient(90deg,#7C6FF5,#F0A8DC,#F2896B,#22B8A0)',
    },
    // Hidden while employed elsewhere — set hidden: false to show it again
    { name: 'Hospital MS', status: 'Multi-tenant', barStyle: '#0F766E', hidden: true },
    // Hidden while employed elsewhere — set hidden: false to show again
    { name: 'AI-Lab', status: 'Lab SaaS', barStyle: 'linear-gradient(90deg,#6366F1,#8B5CF6,#10B981)', hidden: true },
    { name: 'Tools', status: 'Free tools', barStyle: 'linear-gradient(90deg,#0D9488,#14B8A6,#5EEAD4)' },
    { name: 'Setu', status: 'Coming soon', barStyle: 'linear-gradient(90deg,#0D9488,#2DD4BF,#F43F5E)', future: true },
    { name: 'Engine', status: 'Coming soon', barStyle: 'linear-gradient(90deg,#0D9488,#5EEAD4,#F43F5E)', future: true },
  ];

  protected readonly children = this.all.filter((c) => !c.hidden);
}
