import { Component, inject, signal } from '@angular/core';
import { ContactService } from '../../core/services/contact';

type State = 'idle' | 'sending' | 'sent' | 'error';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [],
  templateUrl: './quote.html',
  styleUrl: './quote.css',
})
export class Quote {
  protected readonly contact = inject(ContactService);
  protected readonly topics = ['New app or website', 'Collaboration', 'Product feedback', 'Other'];
  protected readonly topic = signal(this.topics[0]);
  protected readonly name = signal('');
  protected readonly email = signal('');
  protected readonly phone = signal('');
  protected readonly message = signal('');
  protected readonly honey = signal('');
  protected readonly touched = signal(false);
  protected readonly state = signal<State>('idle');
  protected readonly errorText = signal('');

  openWhatsapp() {
    window.open('https://wa.me/918500913198', '_blank');
  }

  requestQuote() {
    this.contact.open();
  }

  protected val(e: Event) {
    return (e.target as HTMLInputElement).value;
  }

  protected nameError() {
    return this.name().trim().length < 2 ? 'Please enter your name' : '';
  }
  protected emailError() {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(this.email().trim()) ? '' : 'Please enter a valid email';
  }
  protected phoneError() {
    const p = this.phone().replace(/[\s-]/g, '');
    return !p || /^(\+91)?[6-9]\d{9}$/.test(p) ? '' : 'Enter a 10-digit mobile number (optional)';
  }
  protected messageError() {
    return this.message().trim().length < 10 ? 'Tell me a little more (at least 10 characters)' : '';
  }

  async send(e: Event) {
    e.preventDefault();
    this.touched.set(true);
    if (this.nameError() || this.emailError() || this.phoneError() || this.messageError()) return;
    this.state.set('sending');
    try {
      const r = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          name: this.name(),
          email: this.email(),
          phone: this.phone(),
          topic: this.topic(),
          message: this.message(),
          website: this.honey(),
        }),
      });
      if (!r.ok) throw new Error(String(r.status));
      this.state.set('sent');
    } catch {
      this.errorText.set('Couldn’t send right now. Please message me on WhatsApp instead.');
      this.state.set('error');
    }
  }

  reset() {
    this.name.set('');
    this.email.set('');
    this.phone.set('');
    this.message.set('');
    this.touched.set(false);
    this.state.set('idle');
    this.contact.formOpen.set(false);
  }
}
