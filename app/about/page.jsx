import { createPageMetadata } from "@/lib/seo/metadata";
﻿import Image from "@/components/media/OptimizedImage";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { company, businesses } from "@/data";
import { AboutRelatedLink } from "@/components/about/AboutRelatedLink";

export const metadata = createPageMetadata({ title: "About Talatu", description: "Meet Talatu, a Nigerian media and entertainment group connecting audiences through television, publishing, film, streaming and games." , path: "/about" });

export default function AboutPage() {
  return <>
    <header className="about-masthead about-overview-masthead"><h1>Media made<br /><em>in Africa.</em></h1><p className="about-lead">Talatu is a Nigerian media and entertainment group working across television, publishing, film, streaming, sport and games.</p></header>
    <figure className="about-campus"><Image src="/images/Golden-Hour Media Campus Panorama.png" alt="An expansive media production campus at golden hour" fill priority sizes="(max-width: 1280px) 95vw, 1200px" /><figcaption>Southstone Campus · Lagos</figcaption></figure>
    <section className="about-introduction" aria-labelledby="about-purpose"><h2 id="about-purpose">What we do</h2><div><p>Talatu began as a newspaper company in Kaduna in {company.founded}. Today, the Group operates television channels, produces films and series, publishes newspapers and develops digital entertainment.</p><p>Our six companies operate in eight African markets. Talatu Africa Media also holds an associate interest in an Egyptian production studio.</p><Link className="about-text-link" href="/businesses">Our companies<FiArrowUpRight aria-hidden="true" /></Link></div></section>
    <section className="about-divisions" aria-labelledby="division-heading"><div className="about-section-heading"><h2 id="division-heading">Our companies</h2></div><div className="about-division-list">{businesses.map((division, index) => <article key={division.slug}><span className="about-list-index">{String(index + 1).padStart(2, "0")}</span><h3>{division.name}</h3><p>{division.summary}</p></article>)}</div></section>
    <section className="about-footprint" aria-labelledby="footprint-heading"><div><p className="about-kicker">Our footprint</p><h2 id="footprint-heading">Where we work</h2><p>The Group operates in eight markets, with an associate production business in Egypt.</p></div><div><ul className="about-market-list">{company.markets.operating.map((market) => <li key={market}>{market}{market === "Nigeria" && <span>Group headquarters</span>}</li>)}</ul></div></section>
    <section className="about-homes" aria-labelledby="homes-heading"><h2 id="homes-heading">Our headquarters</h2><div><article><p className="about-kicker">Corporate headquarters</p><h3>Talatu House</h3><p>Ikoyi, Lagos, Nigeria</p></article><article><p className="about-kicker">Operational headquarters</p><h3>Southstone Campus</h3><p>Lekki–Epe Expressway, Lagos, Nigeria</p></article></div></section>
    <AboutRelatedLink href="/about/leadership" label="Meet our leadership" />
  </>;
}

