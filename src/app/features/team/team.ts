import { Component } from '@angular/core';

interface TeamMember {
  initials: string;
  name: string;
  role: string;
  open?: boolean;
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
    { initials: 'JK', name: 'Jaya Krishna Lakkoju', role: 'Founder · solo' },
    { initials: '+', name: 'Open roles', role: 'Future collaborators', open: true },
  ];
}
