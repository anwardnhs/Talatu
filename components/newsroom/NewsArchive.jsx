"use client";
import { useEffect, useState } from "react";
import { FiSearch, FiX, FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { NewsCard } from "@/components/newsroom/NewsCard";
import { filterNews } from "@/lib/newsroom/filter-news";

export function NewsArchive({ articles, featuredSlug }) {
  const categories = ["All", ...new Set(articles.map((article) => article.category))];
  const years = [...new Set(articles.map((article) => article.year))].sort().reverse();
  const [filters, setFilters] = useState({ category: "All", year: "All", query: "" });
  useEffect(() => {
    const read = () => {
      const params = new URLSearchParams(window.location.search);
      setFilters({ category: categories.includes(params.get("category")) ? params.get("category") : "All", year: years.includes(params.get("year")) ? params.get("year") : "All", query: params.get("q") || "" });
    };
    read(); window.addEventListener("popstate", read);
    return () => window.removeEventListener("popstate", read);
  }, []);
  function update(patch) {
    const next = { ...filters, ...patch };
    setFilters(next);
    const url = new URL(window.location.href);
    for (const [key, value] of [["category", next.category], ["year", next.year], ["q", next.query]]) {
      if (!value || value === "All") url.searchParams.delete(key); else url.searchParams.set(key, value);
    }
    window.history.replaceState(window.history.state, "", url);
  }
  const reset = () => update({ category: "All", year: "All", query: "" });
  const filtering = filters.category !== "All" || filters.year !== "All" || filters.query.trim();
  const visible = filterNews(articles, { ...filters, featuredSlug });
  return <section id="news-archive" className="news-archive" aria-labelledby="archive-heading">
    <div className="news-archive-heading"><h2 id="archive-heading">{filtering ? "Search results" : "Latest announcements"}</h2>
      <div className="news-search"><FiSearch size={19} aria-hidden="true" /><label className="sr-only" htmlFor="news-search">Search news by subject or company</label><Input id="news-search" type="search" value={filters.query} onChange={(event) => update({ query: event.target.value })} placeholder="Search news" aria-controls="news-results" />{filters.query && <button type="button" aria-label="Clear search" onClick={() => update({ query: "" })}><FiX aria-hidden="true" /></button>}</div>
    </div>
    <div className="news-filter-row"><div role="group" aria-label="News category" className="news-categories">{categories.map((item) => <button type="button" key={item} aria-pressed={filters.category === item} onClick={() => update({ category: item })}>{item}</button>)}</div><label className="news-year"><span>Year</span><select value={filters.year} onChange={(event) => update({ year: event.target.value })}><option value="All">All years</option>{years.map((item) => <option key={item}>{item}</option>)}</select></label></div>
    {filtering && <div className="news-active-filters"><p>{visible.length} {visible.length === 1 ? "story" : "stories"}{filters.query.trim() ? ` for “${filters.query.trim()}”` : " found"}</p><button type="button" onClick={reset}>Reset filters<FiX aria-hidden="true" /></button></div>}
    <div id="news-results" className="news-grid">{visible.map((article) => <NewsCard key={article.slug} article={article} />)}</div>
    {visible.length === 0 && <div className="news-empty"><FiSearch size={28} aria-hidden="true" /><h3>No matching stories.</h3><p>Try a company name such as CBC or Odyssey, or choose a different category or year.</p><div><button type="button" onClick={reset}>Show all news<FiArrowRight aria-hidden="true" /></button><Link href="/contact?team=press">Ask the press team</Link></div></div>}
    <p role="status" aria-atomic="true" className="sr-only">{visible.length} {visible.length === 1 ? "story" : "stories"} shown.</p>
  </section>;
}
