export function filterNews(articles, { category = "All", year = "All", query = "", featuredSlug } = {}) {
  const words = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  const filtering = category !== "All" || year !== "All" || words.length > 0;
  return articles.filter((article) => {
    const text = `${article.title} ${article.excerpt} ${article.category} ${article.year}`.toLocaleLowerCase();
    return (filtering || article.slug !== featuredSlug) && (category === "All" || article.category === category)
      && (year === "All" || article.year === year) && words.every((word) => text.includes(word));
  });
}

export function relatedNews(articles, article, limit = 2) {
  return articles.filter((item) => item.slug !== article.slug)
    .sort((a, b) => Number(b.category === article.category) - Number(a.category === article.category) || Number(b.year) - Number(a.year))
    .slice(0, limit);
}
