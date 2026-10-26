export default {
  reactStrictMode: true,
  // Keep production builds from overwriting a running development server.
  distDir: process.env.NODE_ENV === "development" ? ".next/dev" : ".next",
};
