import { Component } from '@angular/core';
import { setSeo } from '../guides/seo';
import { Nav } from '../features/nav/nav';
import { MobileNav } from '../features/mobile-nav/mobile-nav';
import { Hero } from '../features/hero/hero';
import { Manifesto } from '../features/manifesto/manifesto';
import { Skills } from '../features/skills/skills';
import { Experience } from '../features/experience/experience';
import { OwnedProjects } from '../features/owned-projects/owned-projects';
import { FreelanceWork } from '../features/freelance-work/freelance-work';
import { Ecosystem } from '../features/ecosystem/ecosystem';
import { Services } from '../features/services/services';
import { Team } from '../features/team/team';
import { Quote } from '../features/quote/quote';
import { Footer } from '../features/footer/footer';
import { GuidesStrip } from '../guides/guides-strip';

/** spreadapps.in home: the portfolio, plus the free guides and tools. */
@Component({
  selector: 'app-home',
  imports: [Nav, MobileNav, Hero, Manifesto, Skills, Experience, OwnedProjects, FreelanceWork, Ecosystem, Services, Team, Quote, Footer, GuidesStrip],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor() {
    setSeo({
      title: 'Jaya Krishna Lakkoju | Spread Apps — Full Stack Engineer, Free Tools & Guides',
      description: 'Portfolio of Lakkoju Jaya Krishna, full stack engineer and builder of Spread Apps — free tools for India and plain-English guides on exam photos, IFSC, PF, EMI, HRA, gold prices and UPI safety.',
      path: '',
    });
  }
}
