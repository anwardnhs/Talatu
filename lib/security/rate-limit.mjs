import { createHash } from 'node:crypto';
import { isIP } from 'node:net';

// This is an origin-process burst guard, not a distributed firewall.
export function createBurstLimiter({ limit = 60, windowMs = 60_000, maxKeys = 5000, now = Date.now } = {}) {
  const entries = new Map();
  return (key) => {
    const time = now();
    for (const [id, value] of entries) if (value.reset <= time) entries.delete(id);
    let entry = entries.get(key);
    if (!entry) {
      if (entries.size >= maxKeys) return { allowed: false, retryAfter: Math.ceil(windowMs / 1000) };
      entry = { count: 0, reset: time + windowMs };
      entries.set(key, entry);
    }
    entry.count++;
    return { allowed: entry.count <= limit, retryAfter: Math.max(1, Math.ceil((entry.reset - time) / 1000)) };
  };
}

export function requestBucket(headers, onVercel = process.env.VERCEL === '1') {
  // Vercel overwrites this header. Never trust arbitrary X-Forwarded-For headers.
  const ip = onVercel ? headers.get('x-vercel-forwarded-for')?.trim() : null;
  const identity = ip && isIP(ip) ? ip : 'shared-origin';
  return createHash('sha256').update(identity).digest('hex');
}

export const investorBurstLimit = createBurstLimiter();
