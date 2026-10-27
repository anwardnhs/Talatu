"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FiDownload,
  FiArrowUpRight,
  FiFileText,
  FiSearch,
} from "react-icons/fi";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ReportDownloads } from "@/components/investors/ReportDownloads";

export function ReportsLibrary({ investorResources }) {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const resources = investorResources.filter(
    (resource) =>
      (category === "All" || resource.category === category) &&
      `${resource.title} ${resource.detail}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  return (
    <section className="reports-library" aria-label="Investor resource library">
      <ReportDownloads investorResources={investorResources} />
      <Tabs value={category} onValueChange={setCategory}>
        <div className="reports-tools">
          <TabsList aria-label="Filter resources by category">
            {["All", "Results", "Shareholding", "Governance"].map((item) => (
              <TabsTrigger key={item} value={item}>
                {item}
              </TabsTrigger>
            ))}
          </TabsList>
          <label className="investor-search">
            <FiSearch size={19} aria-hidden="true" />
            <span className="sr-only">Search investor resources</span>
            <Input
              type="search"
              placeholder="Search resources"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
        </div>
        <TabsContent value={category}>
          <ul className="report-list">
            {resources.map((resource) => (
              <li
                key={resource.id}
                className={!resource.href ? "report-pending" : ""}
              >
                <span className="report-icon">
                  <FiFileText size={23} aria-hidden="true" />
                </span>
                <div className="report-description">
                  <span>
                    {resource.category} · {resource.format}
                  </span>
                  <h2>{resource.title}</h2>
                  <p>{resource.detail}</p>
                </div>
                {resource.href ? (
                  resource.download ? (
                    <a
                      className="report-action"
                      href={resource.href}
                      download
                      aria-label={`Download ${resource.title} as ${resource.format}`}
                    >
                      <FiDownload size={20} aria-hidden="true" />
                      <span>Download {resource.format}</span>
                    </a>
                  ) : (
                    <Link
                      className="report-action"
                      href={resource.href}
                      aria-label={`Read ${resource.title}`}
                    >
                      <FiArrowUpRight size={20} aria-hidden="true" />
                      <span>Read online</span>
                    </Link>
                  )
                ) : (
                  <span className="report-status">Not yet available</span>
                )}
              </li>
            ))}
          </ul>
          {resources.length === 0 && (
            <p className="investor-empty">
              No resources match your search. Try another name or category.
            </p>
          )}
          <p className="investor-data-note" role="status">
            {resources.length} resources shown.
          </p>
        </TabsContent>
      </Tabs>
    </section>
  );
}
