import test from 'node:test';
import assert from 'node:assert/strict';
import { createBurstLimiter, requestBucket } from '../lib/security/rate-limit.mjs';
import { parseInvestorQuery } from '../lib/security/investor-query.mjs';
import { securityHeaders } from '../lib/security/headers.mjs';

test('burst abuse is rejected, resets after window, and isolates visitors', () => {
  let time = 0;
  const check = createBurstLimiter({ limit: 2, windowMs: 1000, now: () => time });
  assert.ok(check('a').allowed); assert.ok(check('a').allowed);
  assert.deepEqual(check('a'), { allowed: false, retryAfter: 1 });
  assert.ok(check('b').allowed);
  time = 1000; assert.ok(check('a').allowed);
});
test('identity storage is bounded and recovers after expiry', () => {
  let time = 0;
  const check = createBurstLimiter({ maxKeys: 1, windowMs: 1000, now: () => time });
  assert.ok(check('a').allowed); assert.equal(check('b').allowed, false);
  time = 1000; assert.ok(check('b').allowed);
});
test('untrusted IP headers cannot rotate limiter buckets', () => {
  assert.equal(requestBucket(new Headers({'x-forwarded-for':'1.2.3.4'}), false), requestBucket(new Headers({'x-forwarded-for':'5.6.7.8'}), false));
  assert.notEqual(requestBucket(new Headers({'x-vercel-forwarded-for':'1.2.3.4'}), true), requestBucket(new Headers({'x-vercel-forwarded-for':'5.6.7.8'}), true));
  assert.equal(requestBucket(new Headers({'x-vercel-forwarded-for':'invalid, 1.2.3.4'}), true), requestBucket(new Headers(), true));
});
test('only valid unambiguous investor queries are accepted', () => {
  const base = 'https://talatu.vercel.app/api/investors';
  assert.deepEqual(parseInvestorQuery(base+'?dataset=financials&format=csv'), { dataset:'financials', format:'csv' });
  for (const query of ['?dataset=financials&dataset=revenue','?format=csv','?dataset=../../.env','?format=xml','?unexpected=yes','?dataset=']) assert.ok(parseInvestorQuery(base+query).error, query);
  assert.equal(parseInvestorQuery(base+'?'+ 'x'.repeat(1025)).status, 414);
});
test('browser policy forbids framing, objects, off-site resources and production eval', () => {
  const headers = Object.fromEntries(securityHeaders.map(h => [h.key, h.value]));
  assert.equal(headers['X-Content-Type-Options'], 'nosniff');
  assert.equal(headers['X-Frame-Options'], 'DENY');
  for (const directive of ["object-src 'none'", "frame-ancestors 'none'", "base-uri 'self'", "form-action 'none'"]) assert.ok(headers['Content-Security-Policy'].includes(directive));
  assert.ok(!headers['Content-Security-Policy'].includes("'unsafe-eval'"));
});
