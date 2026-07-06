import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

const inMemoryRateLimit = new Map();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 3;

// Strip HTML tags and control chars to prevent email content injection
function sanitize(val, max = 1000) {
  return String(val || '')
    .replace(/<[^>]*>/g, '')
    .replace(/[\r\n]+/g, ' ')
    .slice(0, max)
    .trim();
}

Deno.serve(async (req, connInfo) => {
  try {
    const base44 = createClientFromRequest(req);

    // Use real connection IP from Deno network info, not client-controlled headers
    const ip = connInfo?.remoteAddr?.hostname || 'unknown';
    const now = Date.now();
    const hits = (inMemoryRateLimit.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
    if (hits.length >= RATE_LIMIT_MAX) {
      return Response.json({ error: 'Too many requests' }, { status: 429 });
    }
    hits.push(now);
    inMemoryRateLimit.set(ip, hits);

    const body = await req.json().catch(() => ({}));
    const name = sanitize(body.name, 100);
    const email = sanitize(body.email, 200);
    const subject = sanitize(body.subject, 200);
    const message = String(body.message || '').replace(/<[^>]*>/g, '').slice(0, 5000).trim();

    if (!name || !email || !subject || !message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await base44.asServiceRole.integrations.Core.SendEmail({
      to: '404discnotfound@gmail.com',
      subject: `[404Warp Contact] ${subject || 'No subject'}`,
      body: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});