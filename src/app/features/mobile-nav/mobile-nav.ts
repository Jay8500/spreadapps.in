import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [],
  templateUrl: './mobile-nav.html',
  styleUrl: './mobile-nav.css',
})
export class MobileNav {
  isOpen = false;

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }
}
