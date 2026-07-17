import { Component } from '@angular/core';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [],
  templateUrl: './quote.html',
  styleUrl: './quote.css',
})
export class Quote {
  openWhatsapp() {
    window.open('https://wa.me/918500913198', '_blank');
  }

  requestQuote() {
    // TODO: Wire this to Supabase once the `quotes` table is set up
    // (either in a new project, or added to an existing Supabase project — see chat notes)
    // For now, WhatsApp is the working contact path.
    console.log('Request a quote clicked — Supabase backend pending');
  }
}
