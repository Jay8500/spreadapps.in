import { Component, HostListener } from '@angular/core';

interface Project {
  name: string;
  status: string;
  description: string;
  path: string;
  codeUrl: string;
  barStyle: string;
  screenshotFolder?: string;
  screenshotCount?: number;
  /** Not shown on the site (kept for later) */
  hidden?: boolean;
}

@Component({
  selector: 'app-owned-projects',
  standalone: true,
  imports: [],
  templateUrl: './owned-projects.html',
  styleUrl: './owned-projects.css',
})
export class OwnedProjects {
  private readonly all: Project[] = [
    {
      name: 'Circles',
      status: 'Live · own product',
      description: 'Project management mobile app — every project, one circle.',
      path: 'circles.spreadapps.in',
      codeUrl: 'https://github.com/Jay8500/circles',
      barStyle: 'linear-gradient(90deg,#7C6FF5,#F0A8DC,#F2896B,#22B8A0)',
      screenshotFolder: 'circles',
      screenshotCount: 9,
    },
    {
      name: 'Hospital management system',
      status: 'Live · multi-tenant SaaS',
      description:
        'Multi-tenant SaaS serving multiple hospital clients from one codebase, via sub-domain architecture.',
      path: 'care-clinic.spreadapps.in',
      codeUrl: 'https://github.com/Jay8500/hms-admin',
      barStyle: '#0F766E',
      // Hidden while employed elsewhere — set to false (or delete this line) to show it again
      hidden: true,
      // screenshotFolder/screenshotCount pending — needs a demo tenant with fake data first
    },
    {
      name: 'SpreadApps AI-Lab',
      status: 'Live · multi-tenant lab SaaS',
      description:
        'Diagnostic lab platform — patient tokens, live sample tracking, result entry with ranges, instant PDF reports on WhatsApp and a branded portal for every lab on its own sub-domain.',
      path: 'ailab.spreadapps.in',
      codeUrl: 'https://github.com/Jay8500/ai-lab',
      barStyle: 'linear-gradient(90deg,#6366F1,#8B5CF6,#10B981)',
      screenshotFolder: 'ai-lab',
      screenshotCount: 5,
    },
    {
      name: 'SpreadApps Tools',
      status: 'Live · free tools for India',
      description:
        '95+ free tools for Telangana & AP — exam photo resizer, money calculators, PDF tools, metro fare, fuel prices with daily auto-update, holidays, recharge & OTT prices. Installable, works offline, files never leave the phone.',
      path: 'tools.spreadapps.in',
      codeUrl: 'https://github.com/Jay8500/online-tools',
      barStyle: 'linear-gradient(90deg,#0D9488,#14B8A6,#5EEAD4)',
      screenshotFolder: 'spreadapps-tools',
      screenshotCount: 8,
    },
  ];

  protected readonly projects = this.all.filter((p) => !p.hidden);

  // Lightbox state: the active gallery + which image within it is open.
  lightboxImages: string[] = [];
  lightboxIndex = 0;

  get lightboxSrc(): string | null {
    return this.lightboxImages[this.lightboxIndex] ?? null;
  }

  screenshots(p: Project): string[] {
    if (!p.screenshotFolder || !p.screenshotCount) return [];
    return Array.from(
      { length: p.screenshotCount },
      (_, i) => `${p.screenshotFolder}/${i + 1}.jpg`,
    );
  }

  openLightbox(images: string[], index: number): void {
    this.lightboxImages = images;
    this.lightboxIndex = index;
  }

  closeLightbox(): void {
    this.lightboxImages = [];
  }

  prev(event?: Event): void {
    event?.stopPropagation();
    if (!this.lightboxImages.length) return;
    this.lightboxIndex =
      (this.lightboxIndex - 1 + this.lightboxImages.length) % this.lightboxImages.length;
  }

  next(event?: Event): void {
    event?.stopPropagation();
    if (!this.lightboxImages.length) return;
    this.lightboxIndex = (this.lightboxIndex + 1) % this.lightboxImages.length;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeLightbox();
  }

  @HostListener('document:keydown.arrowleft')
  onArrowLeft(): void {
    if (this.lightboxSrc) this.prev();
  }

  @HostListener('document:keydown.arrowright')
  onArrowRight(): void {
    if (this.lightboxSrc) this.next();
  }
}
