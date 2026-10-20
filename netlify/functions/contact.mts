/**
 * Contact form → email to the owner via Resend (no database).
 *  POST /api/contact { name, email, phone?, topic, message, website (honeypot) }
 * The email's Reply-To is the visitor, so replying in Gmail answers them directly.
 * Env: RESEND_API_KEY, CONTACT_EMAIL_TO (owner inbox). Sender must be on mail.spreadapps.in (the domain verified in Resend).
 */
const TOPICS = ['New app or website', 'Collaboration', 'Product feedback', 'Other'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

declare const Netlify: { env: { get(k: string): string | undefined } };

export default async (req: Request) => {
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405);
  const origin = req.headers.get('origin') ?? '';
  if (origin && !/^https:\/\/((www\.)?spreadapps\.in|[a-z0-9-]+--curious-lollipop-2752b5\.netlify\.app|curious-lollipop-2752b5\.netlify\.app)$/.test(origin)) {
    return json({ error: 'Forbidden' }, 403);
  }
  let b: Record<string, unknown>;
  try {
    b = (await req.json()) as Record<string, unknown>;
  } catch {
    return json({ error: 'Bad request' }, 400);
  }
  const clean = (v: unknown, max: number) => String(v ?? '').replace(/\s+/g, ' ').trim().slice(0, max);
  if (clean(b['website'], 100)) return json({ ok: true }); // bots fill the hidden field
  const name = clean(b['name'], 80);
  const email = clean(b['email'], 120);
  const phone = clean(b['phone'], 20);
  const topic = TOPICS.includes(String(b['topic'])) ? String(b['topic']) : 'Other';
  const message = String(b['message'] ?? '').trim().slice(0, 3000);
  if (name.length < 2 || !EMAIL_RE.test(email) || message.length < 10) return json({ error: 'Please fill name, a valid email and a message.' }, 400);

  const key = Netlify.env.get('RESEND_API_KEY')?.trim();
  const to = Netlify.env.get('CONTACT_EMAIL_TO')?.trim();
  if (!key || !to) return json({ error: 'not-configured' }, 503);

  const time = new Date(Date.now() + 5.5 * 3600_000).toISOString().replace('T', ' ').slice(0, 16);
  const html = `<div style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.55">
    <p style="margin:0 0 12px"><b>${esc(topic)}</b> — new message from spreadapps.in</p>
    <table style="border-collapse:collapse;font-size:14px">
      <tr><td style="color:#666;padding:2px 12px 2px 0">Name</td><td><b>${esc(name)}</b></td></tr>
      <tr><td style="color:#666;padding:2px 12px 2px 0">Email</td><td><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
      ${phone ? `<tr><td style="color:#666;padding:2px 12px 2px 0">Phone</td><td><a href="tel:${esc(phone)}">${esc(phone)}</a></td></tr>` : ''}
      <tr><td style="color:#666;padding:2px 12px 2px 0">Sent</td><td>${time} IST</td></tr>
    </table>
    <div style="margin-top:14px;padding:12px 14px;background:#f4f6f8;border-radius:10px;white-space:pre-wrap">${esc(message)}</div>
    <p style="color:#888;font-size:12px;margin-top:14px">Reply to this email to answer ${esc(name)} directly.</p></div>`;
  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'content-type': 'application/json' },
      body: JSON.stringify({
        from: Netlify.env.get('CONTACT_EMAIL_FROM')?.trim() || 'Spread Apps <hello@mail.spreadapps.in>',
        to: [to],
        reply_to: email,
        subject: `📩 ${topic}: ${name}`,
        html,
      }),
      signal: AbortSignal.timeout(8000),
    });
    if (!r.ok) {
      console.error('resend', r.status, (await r.text()).slice(0, 200));
      return json({ error: 'send-failed' }, 502);
    }
    return json({ ok: true });
  } catch (e) {
    console.error('resend', e);
    return json({ error: 'send-failed' }, 502);
  }
};

function esc(s: string) {
  return s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json', 'Cache-Control': 'no-store' } });
}

export const config = { path: '/api/contact' };
