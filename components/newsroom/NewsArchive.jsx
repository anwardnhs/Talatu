"use client";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import { NewsCard } from "@/components/newsroom/NewsCard";

export function NewsArchive({ articles, featuredSlug }) {
  const [category, setCategory] = useState("All");
  const [year, setYear] = useState("All");
  const [query, setQuery] = useState("");
  const filtering = category !== "All" || year !== "All" || query.trim() !== "";
  const visible = articles.filter((article) => (filtering || article.slug !== featuredSlug) && (category === "All" || article.category === category) && (year === "All" || article.year === year) && `${article.title} ${article.excerpt}`.toLowerCase().includes(query.trim().toLowerCase()));
  const categories = ["All", ...new Set(articles.map((article) => article.category))];
  return <section className="news-archive" aria-labelledby="archive-heading"><div className="news-archive-heading"><h2 id="archive-heading">{filtering ? "Search results" : "More from Talatu"}</h2><label className="news-search"><FiSearch size={19} aria-hidden="true" /><span className="sr-only">Search newsroom</span><Input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search newsroom" /></label></div><div className="news-filter-row"><div role="group" aria-label="News category" className="news-categories">{categories.map((item) => <button type="button" key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div><label className="news-year"><span>Year</span><select value={year} onChange={(event) => setYear(event.target.value)}><option value="All">All years</option>{[...new Set(articles.map((article) => article.year))].sort().reverse().map((item) => <option key={item}>{item}</option>)}</select></label></div><div className="news-grid">{visible.map((article) => <NewsCard key={article.slug} article={article} />)}</div>{visible.length === 0 && <div className="news-empty"><p>No stories match those filters.</p><button type="button" onClick={() => { setCategory("All"); setYear("All"); setQuery(""); }}>Clear filters</button></div>}<p role="status" className="sr-only">{visible.length} {visible.length === 1 ? "story" : "stories"}.</p></section>;
}
