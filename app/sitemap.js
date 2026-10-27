import { getPublishedNews } from "@/lib/content/reader.mjs";
import { absoluteUrl } from "@/lib/seo/metadata";
import { publicRoutes } from "@/lib/seo/routes";
export default async function sitemap() {
  const news=await getPublishedNews();
  const routes=[...publicRoutes.filter(path=>!path.startsWith("/newsroom/")),...news.map(article=>`/newsroom/${article.slug}`)];
  return routes.map((path) => ({ url: absoluteUrl(path), changeFrequency: path.startsWith("/newsroom") ? "monthly" : "yearly", priority: path === "/" ? 1 : path.startsWith("/legal/") ? .3 : .7 }));
}
