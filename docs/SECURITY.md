# Security controls

## Implemented

- Next.js 15.5.28 (patched maintenance release). Its nested PostCSS is pinned to 8.5.32 to address the remaining source-map advisories. Recheck the override when upgrading Next.js.
- Security headers on pages, public files and API responses: CSP, anti-framing, MIME sniffing protection, restricted browser permissions, referrer policy and production HTTPS enforcement. The framework identification header is disabled.
- CSP allows only this site's resources, plus image/font data and image blobs. Inline scripts/styles remain permitted for static Next.js hydration and existing styles. This is a baseline CSP, not a nonce-based XSS defence. Production does not permit JavaScript eval. Development WebSocket connections remain allowed.
- Image optimization accepts only local `/images/` and `/brand/` assets without query strings; remote sources and SVG optimization are disabled. Requested device widths are bounded at 1920px.
- Investor API allows known datasets and formats only, rejects duplicate/unknown parameters and oversized addresses, caches public results, and applies a 60-request/minute per-origin-process burst limit. Excess requests get HTTP 429 and Retry-After; error responses cannot be cached. The limiter has bounded memory and keeps only hashed visitor identifiers for at most one minute.
- Only Vercel's platform-controlled `x-vercel-forwarded-for` header is trusted on Vercel. On other hosts the guard uses a shared bucket; configure a trusted host adapter before deploying elsewhere.
- Weekly Dependabot updates and a GitHub workflow run production dependency audits, security tests and builds. The workflow requests read-only repository access.

## Hosting protection

The process-local API limiter resets on restarts and is independent across serverless instances. It is a burst guard, not distributed bot or DDoS protection. Edge-cached responses can bypass the origin limiter. Vercel's platform provides automatic DDoS mitigation; this change does not configure the account firewall or enable paid services.

For sustained scraping, add a Vercel Firewall rate-limit rule targeting `/api/investors` (start at 60 requests/minute per IP and monitor false positives). Keep ordinary pages, SEO crawlers, images and report downloads accessible. Enable a temporary challenge in the Vercel dashboard during an active attack. Shared networks can have multiple legitimate users: adjust limits based on logs. Never rely on robots.txt or a bot-looking user-agent as a security boundary.

Contact and licensing forms currently prepare drafts on the visitor's device. They do not submit messages to a server. When delivery or uploads are added, require server-side validation, bounded request bodies, persistent rate limiting and bot verification before enabling them. Client-side honeypots alone are not protection.

## Verification

Run `npm run test:security`, `npm audit --omit=dev`, and `npm run build`. Test the production server, since its CSP intentionally differs from development. Confirm normal navigation, cookie preferences, images, contact drafts, PDF/CSV downloads, malformed API requests and a burst yielding 429. Do not expose the development server publicly.

References: [Next.js security update](https://nextjs.org/blog/nextjs-security-update-october-14-2026), [Next.js headers](https://nextjs.org/docs/app/api-reference/config/next-config-js/headers), [Vercel rate limiting](https://vercel.com/docs/vercel-firewall/vercel-waf/rate-limiting), [Vercel security](https://vercel.com/security).
