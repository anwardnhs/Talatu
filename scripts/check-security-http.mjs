import assert from 'node:assert/strict';
const origin = process.argv[2] || 'http://127.0.0.1:3001';
if (!['localhost','127.0.0.1','[::1]'].includes(new URL(origin).hostname)) throw Error('Run burst verification against a local preview only.');
const page = await fetch(origin);
assert.equal(page.status,200);
assert.equal(page.headers.get('x-powered-by'),null);
assert.equal(page.headers.get('x-frame-options'),'DENY');
assert.equal(page.headers.get('x-content-type-options'),'nosniff');
assert.ok(page.headers.get('content-security-policy').includes("frame-ancestors 'none'"));
assert.ok(!page.headers.get('content-security-policy').includes('unsafe-eval'));
for (const path of ['/newsroom','/contact?team=press','/businesses/broadcasting','/businesses/licensing/partner-with-us?type=Content%20licensing','/foundation/programmes/content-fund','/legal/cookies','/reports/talatu-plc-annual-report-fy2025.pdf','/_next/image?url=%2Fimages%2Fcbc-newsroom-home.webp&w=640&q=75']) {
 const response=await fetch(origin+path); assert.equal(response.status,200,path);
}
for (const path of ['/_next/image?url=https%3A%2F%2Fexample.com%2Ftest.jpg&w=640&q=75','/_next/image?url=%2Fapi%2Finvestors&w=640&q=75']) assert.equal((await fetch(origin+path)).status,400,path);
assert.equal((await fetch(origin+'/api/investors?dataset=financials&format=csv')).headers.get('content-type'),'text/csv; charset=utf-8');
const bad=await fetch(origin+'/api/investors?dataset=financials&dataset=revenue');assert.equal(bad.status,400);assert.equal(bad.headers.get('cache-control'),'no-store');
assert.equal((await fetch(origin+'/api/investors',{method:'POST'})).status,405);
let limited=false;
for(let i=0;i<65;i++) {
 const response=await fetch(origin+'/api/investors',{headers:{'x-forwarded-for':`192.0.2.${i+1}`}});
 if(response.status===429){assert.ok(Number(response.headers.get('retry-after'))>0);assert.equal(response.headers.get('cache-control'),'no-store');limited=true;break;}
 assert.equal(response.status,200);
}
assert.ok(limited,'Burst limit did not reject excessive requests');
console.log('Production headers, routes, PDF/CSV/image delivery, rejected image sources, query validation, method restriction and HTTP 429 verified.');
