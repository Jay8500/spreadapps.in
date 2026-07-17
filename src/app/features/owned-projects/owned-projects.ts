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
      // screenshotFolder/screenshotCount pending — needs a demo tenant with fake data first
    },
  ];

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
