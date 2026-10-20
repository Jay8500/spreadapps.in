import { Component, inject } from '@angular/core';
import { ContactService } from '../../core/services/contact';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  protected readonly contact = inject(ContactService);
}
