import { absoluteUrl, siteUrl } from "@/lib/seo/metadata";
export default function robots() {
  return { rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }], sitemap: absoluteUrl("/sitemap.xml"), host: siteUrl };
}
