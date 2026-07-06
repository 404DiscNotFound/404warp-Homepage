import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

const inMemoryRateLimit = new Map();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_MAP_MAX = 10_000;

// Periodically purge expired entries to prevent unbounded memory growth
setInterval(() => {
  const now = Date.now();
  for (const [key, hits] of inMemoryRateLimit) {
    const fresh = hits.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
    if (fresh.length === 0) {
      inMemoryRateLimit.delete(key);
    } else {
      inMemoryRateLimit.set(key, fresh);
    }
  }
}, RATE_LIMIT_WINDOW_MS);

// Escape HTML special chars and strip control chars to prevent email content injection
function sanitize(val, max = 1000) {
  return String(val || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
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
    const message = sanitize(body.message, 5000);

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