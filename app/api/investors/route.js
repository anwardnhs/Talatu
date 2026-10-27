import { getInvestorCsv, getInvestorDataset } from '@/lib/investors/financial-data';
import { investorBurstLimit, requestBucket } from '@/lib/security/rate-limit.mjs';
import { parseInvestorQuery } from '@/lib/security/investor-query.mjs';

export const runtime = 'nodejs';
export function GET(request) {
  const rate = investorBurstLimit(requestBucket(request.headers));
  if (!rate.allowed) return Response.json({ error: 'Too many requests. Please try again shortly.' }, { status: 429, headers: { 'Retry-After': String(rate.retryAfter), 'Cache-Control': 'no-store' } });
  const query = parseInvestorQuery(request.url);
  if (query.error) return Response.json({ error: query.error }, { status: query.status, headers: { 'Cache-Control': 'no-store' } });
  const { dataset, format } = query;
  const headers = { 'Cache-Control': 'public, max-age=300, s-maxage=3600', 'X-Content-Type-Options': 'nosniff' };
  if (format === 'csv') return new Response(getInvestorCsv(dataset), { headers: { ...headers, 'Content-Type': 'text/csv; charset=utf-8', 'Content-Disposition': `attachment; filename="talatu-plc-${dataset}-fy2025.csv"` } });
  return Response.json(getInvestorDataset(dataset), { headers });
}
