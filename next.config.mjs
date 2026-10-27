import { securityHeaders } from './lib/security/headers.mjs';

export default {
  reactStrictMode: true,
  poweredByHeader: false,
  // Keep production builds from overwriting a running development server.
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
  images: {
    dangerouslyAllowSVG: false,
    remotePatterns: [],
    localPatterns: [{ pathname: '/images/**', search: '' }, { pathname: '/brand/**', search: '' }],
    deviceSizes: [360, 640, 750, 828, 1080, 1200, 1600, 1920],
  },
  async headers() { return [{ source: '/:path*', headers: securityHeaders }]; },
};
