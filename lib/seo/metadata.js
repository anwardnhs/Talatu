import { site } from "@/data/site";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || site.url).replace(/\/$/, "");
export const absoluteUrl = (path = "/") => new URL(path, siteUrl).toString();
export function createPageMetadata({ title, description, path = "/", image = "/social-preview", type = "website", noIndex = false }) {
  const summary = `Fictional Talatu project. ${description || site.description}`;
  const fullTitle = title ? `${title} | Talatu` : "Talatu | Stories that move a continent.";
  return {
    title: title || { absolute: fullTitle }, description: summary,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: { title: fullTitle, description: summary, url: absoluteUrl(path), siteName: "Talatu — Fictional Project", locale: "en_NG", type, images: [{ url: absoluteUrl(image), alt: `${title || "Talatu"} — fictional project` }] },
    twitter: { card: "summary_large_image", title: fullTitle, description: summary, images: [absoluteUrl(image)] },
    robots: { index: !noIndex, follow: !noIndex },
  };
}
