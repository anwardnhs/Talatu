const development = process.env.NODE_ENV === "development";
const contentSecurityPolicy = [
  "default-src 'self'",
  // Static Next.js pages need inline hydration scripts. No third-party script hosts are allowed.
  `script-src 'self' 'unsafe-inline'${development ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  `connect-src 'self'${development ? " ws: wss:" : ""}`,
  "object-src 'none'",
  "base-uri 'self'",
  "frame-ancestors 'none'",
  "form-action 'none'",
  ...(!development ? ["upgrade-insecure-requests"] : []),
].join('; ');

export const securityHeaders = [
  { key: 'Content-Security-Policy', value: contentSecurityPolicy },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()' },
  ...(!development ? [{ key: 'Strict-Transport-Security', value: 'max-age=31536000' }] : []),
];
export const editorHeaders = securityHeaders.map(header => header.key === 'Content-Security-Policy' ? {
  ...header,
  value: header.value
    .replace("connect-src 'self'", "connect-src 'self' https://api.github.com https://github.com https://raw.githubusercontent.com")
    .replace("img-src 'self'", "img-src 'self' https://avatars.githubusercontent.com https://raw.githubusercontent.com")
    .replace("form-action 'none'", "form-action 'self' https://github.com"),
} : header).concat([
  { key:'Cache-Control',value:'no-store' },
  { key:'X-Robots-Tag',value:'noindex, nofollow' },
]);
