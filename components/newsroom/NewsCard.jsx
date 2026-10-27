import Image from "@/components/media/OptimizedImage";
import Link from "next/link";

export function NewsCard({ article }) {
  return <article className="news-card"><Link href={`/newsroom/${article.slug}`}><div className={`news-card-image ${article.imageFit === "contain" ? "news-card-poster" : ""}`} style={{ background: article.imageBackground }}><Image src={article.image} alt={article.alt} fill sizes="(max-width: 700px) 90vw, 580px" style={{ objectFit: article.imageFit || "cover", objectPosition: article.imagePosition || "center" }} /></div><div className="news-meta"><span>{article.category}</span><span>{article.year}</span></div><h2>{article.title}</h2><p>{article.excerpt}</p></Link></article>;
}
