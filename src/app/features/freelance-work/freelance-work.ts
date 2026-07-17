import { Component, HostListener } from '@angular/core';

interface ClientProject {
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
  selector: 'app-freelance-work',
  standalone: true,
  imports: [],
  templateUrl: './freelance-work.html',
  styleUrl: './freelance-work.css',
})
export class FreelanceWork {
  projects: ClientProject[] = [
    {
      name: 'OTT Money Saver',
      status: 'Client project · not a Spread Apps product',
      description:
        'Ionic + Firebase subscription tracker built for a client — performance-optimized OTT screen-sharing and wallet system.',
      path: 'github.com/Jay8500/ottms',
      codeUrl: 'https://github.com/Jay8500/ottms',
      barStyle: 'linear-gradient(90deg,#F6C443,#1E5AA8)',
      screenshotFolder: 'ott-money-saver',
      screenshotCount: 14,
    },
  ];

  // Lightbox state: the active gallery + which image within it is open.
  lightboxImages: string[] = [];
  lightboxIndex = 0;

  get lightboxSrc(): string | null {
    return this.lightboxImages[this.lightboxIndex] ?? null;
  }

  screenshots(p: ClientProject): string[] {
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
