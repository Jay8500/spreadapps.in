import { Component, inject } from '@angular/core';
import { ContactService } from '../../core/services/contact';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  protected readonly contact = inject(ContactService);
}
