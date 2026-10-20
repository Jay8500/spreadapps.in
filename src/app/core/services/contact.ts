import { Injectable, signal } from '@angular/core';

/** Opens the contact form in the "Have a project in mind?" card from anywhere (nav, hero, mobile menu). */
@Injectable({ providedIn: 'root' })
export class ContactService {
  readonly formOpen = signal(false);

  open() {
    this.formOpen.set(true);
    // Wait for the form to render, then bring it into view
    setTimeout(() => {
      document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      (document.getElementById('c-name') as HTMLInputElement | null)?.focus({ preventScroll: true });
    }, 60);
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
