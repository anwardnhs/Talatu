import Image from "@/components/media/OptimizedImage";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { getPublishedNews } from "@/lib/content/reader.mjs";

export async function HomeUpdates() {
  const newsArticles = await getPublishedNews();
  const articles = [...newsArticles]
    .sort((a, b) => Number(b.year) - Number(a.year))
    .slice(0, 2);
  return (
    <section className="home-updates" aria-labelledby="home-news-heading">
      <header>
        <h2 id="home-news-heading">From Talatu.</h2>
        <Link href="/newsroom">
          All news
          <FiArrowUpRight aria-hidden="true" />
        </Link>
      </header>
      <div className="home-updates-grid">
        <div className="home-news-list">
          {articles.map((article) => (
            <article key={article.slug}>
              <Link href={`/newsroom/${article.slug}`}>
                <div className="home-news-image">
                  <Image
                    src={article.image}
                    alt={article.alt}
                    fill
                    sizes="(max-width:700px) 30vw, 180px"
                    style={{
                      objectFit: article.imageFit || "cover",
                      objectPosition: article.imagePosition || "center",
                    }}
                  />
                </div>
                <div>
                  <p>
                    {article.category} · {article.year}
                  </p>
                  <h3>{article.title}</h3>
                  <span>
                    Read story
                    <FiArrowUpRight aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
        <aside className="home-investor-link">
          <span>Investor relations</span>
          <h3>
            The year
            <br />
            in numbers.
          </h3>
          <p>Results, reports and information for Talatu shareholders.</p>
          <Link href="/investors/financial-performance">
            Explore financial results
            <FiArrowUpRight aria-hidden="true" />
          </Link>
          <Link href="/investors/reports">
            Reports & presentations
            <FiArrowUpRight aria-hidden="true" />
          </Link>
        </aside>
      </div>
    </section>
  );
}
