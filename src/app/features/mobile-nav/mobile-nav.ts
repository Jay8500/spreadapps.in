import { Component, inject } from '@angular/core';
import { ContactService } from '../../core/services/contact';

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [],
  templateUrl: './mobile-nav.html',
  styleUrl: './mobile-nav.css',
})
export class MobileNav {
  protected readonly contact = inject(ContactService);
  isOpen = false;

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }
}
