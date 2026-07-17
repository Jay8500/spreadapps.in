import { Component } from '@angular/core';

interface Project {
  name: string;
  status: string;
  description: string;
  path: string;
  codeUrl: string;
  barStyle: string;
}

@Component({
  selector: 'app-owned-projects',
  standalone: true,
  imports: [],
  templateUrl: './owned-projects.html',
  styleUrl: './owned-projects.css',
})
export class OwnedProjects {
  projects: Project[] = [
    {
      name: 'Circles',
      status: 'Live · own product',
      description: 'Project management mobile app — every project, one circle.',
      path: 'circles.spreadapps.in',
      codeUrl: 'https://github.com/Jay8500/circles',
      barStyle: 'linear-gradient(90deg,#7C6FF5,#F0A8DC,#F2896B,#22B8A0)',
    },
    {
      name: 'Hospital management system',
      status: 'Live · multi-tenant SaaS',
      description:
        'Multi-tenant SaaS serving multiple hospital clients from one codebase, via sub-domain architecture.',
      path: 'care-clinic.spreadapps.in',
      codeUrl: 'https://github.com/Jay8500/hms-admin',
      barStyle: '#0F766E',
    },
  ];
}
