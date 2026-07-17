import { Component } from '@angular/core';

interface FreelanceProject {
  name: string;
  status: string;
  description: string;
  path: string;
  codeUrl: string;
  barStyle: string;
}

@Component({
  selector: 'app-freelance-work',
  standalone: true,
  imports: [],
  templateUrl: './freelance-work.html',
  styleUrl: './freelance-work.css',
})
export class FreelanceWork {
  projects: FreelanceProject[] = [
    {
      name: 'OTT money saver',
      status: 'Client project · not a Spread Apps product',
      description:
        'Performance-optimized mobile app helping users track and cut subscription spend. Built as a freelance engagement.',
      path: 'Ionic + Firebase',
      codeUrl: 'https://github.com/Jay8500/ottms',
      barStyle: 'linear-gradient(90deg,#F6C443,#1E5AA8)',
    },
  ];
}
