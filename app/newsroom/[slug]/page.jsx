import { PressContact } from "@/components/newsroom/PressContact";
import { relatedNews } from "@/lib/newsroom/filter-news";
import { createPageMetadata } from "@/lib/seo/metadata";
import Image from "@/components/media/OptimizedImage";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import { getPublishedNews } from "@/lib/content/reader.mjs";
import { NewsCard } from "@/components/newsroom/NewsCard";

export async function generateStaticParams() { return (await getPublishedNews()).map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }) {
  params = await params;
  const newsArticles = await getPublishedNews();
  const article = newsArticles.find(item => item.slug === params.slug);
  return createPageMetadata({ title:article?.title || "Story not found", description:article?.excerpt, path:`/newsroom/${params.slug}`, image:article?.image, type:article ? "article" : "website", noIndex:!article });
}

export default async function NewsArticlePage({ params }) {
  params = await params;
  const newsArticles = await getPublishedNews();
  const article = newsArticles.find(item => item.slug === params.slug);
  if (!article) notFound();
  const related = relatedNews(newsArticles, article);
  return <><Link href="/newsroom" className="news-back"><FiArrowLeft size={18} aria-hidden="true" />All news</Link><header className="news-article-heading"><div className="news-meta"><Link href={`/newsroom?category=${encodeURIComponent(article.category)}#news-archive`}>{article.category}</Link><span>{article.year}</span></div><h1>{article.title}</h1><p>{article.excerpt}</p></header><figure className={`news-article-image ${article.imageFit === "contain" ? "news-article-poster" : ""}`}><div style={{ background: article.imageBackground }}><Image src={article.image} alt={article.alt} fill priority sizes="(max-width: 1280px) 95vw, 1200px" style={{ objectFit: article.imageFit || "cover", objectPosition: article.imagePosition || "center" }} /></div><figcaption>{article.imageCaption}</figcaption></figure><div className="news-article-body"><aside><span>Talatu</span><p>Corporate Affairs</p></aside><div>{article.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}{article.relatedLink && <Link href={article.relatedLink.href} className="news-read-link">{article.relatedLink.label}<FiArrowUpRight size={19} aria-hidden="true" /></Link>}</div></div><section className="news-related" aria-labelledby="related-news-heading"><h2 id="related-news-heading">Related stories</h2><div className="news-grid">{related.map((item) => <NewsCard key={item.slug} article={item} />)}</div></section><PressContact /></>;
}
