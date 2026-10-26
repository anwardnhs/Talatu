import { newsArticles } from "./news-articles.js";

// Compatibility summary; full content is maintained in news-articles.js.
export const newsroom = {
  categories: [...new Set(newsArticles.map((article) => article.category))],
  mediaContact: { team: "Corporate Affairs", lead: "Naledi Dlamini", email: "press@talatu.com" },
  items: newsArticles.map(({ slug, category, year, title, excerpt, featured }) => ({
    slug, category, date: year, title, excerpt, featured: Boolean(featured),
  })),
};
