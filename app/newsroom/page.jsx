import { PressContact } from "@/components/newsroom/PressContact";
import { createPageMetadata } from "@/lib/seo/metadata";
import Image from "@/components/media/OptimizedImage";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { getPublishedNews } from "@/lib/content/reader.mjs";
import { NewsArchive } from "@/components/newsroom/NewsArchive";

export const metadata = createPageMetadata({ title: "Newsroom", description: "News and announcements from Talatu’s broadcasting, publishing, entertainment and regional businesses." , path: "/newsroom" });

export default async function NewsroomPage() {
  const newsArticles = await getPublishedNews();
  const featured = newsArticles.find((article) => article.featured) || newsArticles[0];
  return <><header className="newsroom-masthead"><h1>Newsroom</h1><nav className="newsroom-shortcuts" aria-label="Newsroom sections"><a href="#news-archive">Browse news</a><a href="#press-contact">Press enquiries<FiArrowUpRight aria-hidden="true" /></a></nav></header>{featured && <section aria-label="Featured news" className="news-feature"><Link className="news-feature-image" href={`/newsroom/${featured.slug}`}><Image src={featured.image} alt={featured.alt} fill priority sizes="(max-width: 800px) 90vw, 760px" /></Link><div><div className="news-meta"><span>{featured.category}</span><span>{featured.year}</span></div><h2><Link href={`/newsroom/${featured.slug}`}>{featured.title}</Link></h2><p>{featured.excerpt}</p><Link className="news-read-link" href={`/newsroom/${featured.slug}`}>Read the story<FiArrowUpRight size={20} aria-hidden="true" /></Link></div></section>}<NewsArchive articles={newsArticles} featuredSlug={featured?.slug} /><PressContact /></>;
}
