import { Component } from '@angular/core';

interface TeamMember {
  initials: string;
  name: string;
  role: string;
  open?: boolean;
  photo?: string;
}

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [],
  templateUrl: './team.html',
  styleUrl: './team.css',
})
export class Team {
  members: TeamMember[] = [
    {
      initials: 'JK',
      name: 'Jaya Krishna Lakkoju',
      role: 'Founder · SpreadApps',
      photo: 'profile-photo.jpg',
    },
    { initials: '+', name: 'Open roles', role: 'Future collaborators', open: true },
  ];
}
