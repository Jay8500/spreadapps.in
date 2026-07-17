import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './features/nav/nav';
import { MobileNav } from './features/mobile-nav/mobile-nav';
import { Hero } from './features/hero/hero';
import { Manifesto } from './features/manifesto/manifesto';
import { Skills } from './features/skills/skills';
import { Experience } from './features/experience/experience';
import { OwnedProjects } from './features/owned-projects/owned-projects';
import { FreelanceWork } from './features/freelance-work/freelance-work';
import { Ecosystem } from './features/ecosystem/ecosystem';
import { Services } from './features/services/services';
import { Team } from './features/team/team';
import { Quote } from './features/quote/quote';
import { Footer } from './features/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // RouterOutlet,
    Nav,
    MobileNav,
    Hero,
    Manifesto,
    Skills,
    Experience,
    OwnedProjects,
    FreelanceWork,
    Ecosystem,
    Services,
    Team,
    Quote,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'spreadapps-portfolio';
}
