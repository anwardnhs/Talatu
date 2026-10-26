"use client";
import { useMemo, useState } from "react";
import { FiSearch, FiArrowDown, FiArrowUp } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell, TableCaption } from "@/components/ui/table";
import { investors } from "@/data/investors";

export function ShareholderTable() {
  const [query, setQuery] = useState("");
  const [descending, setDescending] = useState(true);
  const rows = useMemo(() => investors.shareholders.filter((row) => `${row.holder} ${row.group}`.toLowerCase().includes(query.trim().toLowerCase())).sort((a, b) => descending ? b.pct - a.pct : a.pct - b.pct), [query, descending]);
  return <section className="shareholder-register" aria-labelledby="register-heading"><div className="investor-section-heading"><h2 id="register-heading">Shareholding structure</h2><label className="investor-search"><FiSearch size={19} aria-hidden="true" /><span className="sr-only">Search shareholders</span><Input type="search" placeholder="Search shareholders" value={query} onChange={(event) => setQuery(event.target.value)} /></label></div><Table><TableCaption>Percentages of total issued shares.</TableCaption><TableHeader><TableRow><TableHead>Holder</TableHead><TableHead>Category</TableHead><TableHead className="ownership-column" aria-sort={descending ? "descending" : "ascending"}><button type="button" onClick={() => setDescending(!descending)}>Ownership {descending ? <FiArrowDown aria-hidden="true" /> : <FiArrowUp aria-hidden="true" />}</button></TableHead></TableRow></TableHeader><TableBody>{rows.map((row) => <TableRow key={row.holder}><TableCell>{row.holder}</TableCell><TableCell>{row.group}</TableCell><TableCell className="ownership-column">{row.pct.toFixed(1)}%</TableCell></TableRow>)}{!rows.length && <TableRow><TableCell colSpan={3} className="investor-empty">No shareholders match “{query}”. Try a name or category.</TableCell></TableRow>}</TableBody></Table><p className="investor-data-note" role="status">Showing {rows.length} of {investors.shareholders.length} holders.</p></section>;
}
