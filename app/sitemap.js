import { absoluteUrl } from "@/lib/seo/metadata";
import { publicRoutes } from "@/lib/seo/routes";
export default function sitemap() {
  return publicRoutes.map((path) => ({ url: absoluteUrl(path), changeFrequency: path.startsWith("/newsroom") ? "monthly" : "yearly", priority: path === "/" ? 1 : path.startsWith("/legal/") ? .3 : .7 }));
}
