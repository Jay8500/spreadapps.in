import { Component } from '@angular/core';

interface Service {
  name: string;
  description: string;
  icon: 'world' | 'db' | 'code' | 'headset';
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  services: Service[] = [
    {
      name: 'Domain & hosting',
      description: 'DNS, subdomains, SSL, Netlify deployment.',
      icon: 'world',
    },
    {
      name: 'Database setup',
      description: 'Schema design, PostgreSQL/Supabase, multi-tenant isolation.',
      icon: 'db',
    },
    {
      name: 'End-to-end build',
      description: 'Wireframe to production, handled solely by me.',
      icon: 'code',
    },
    {
      name: 'Ongoing support',
      description: 'Bug fixes, small features, uptime monitoring.',
      icon: 'headset',
    },
  ];
}
