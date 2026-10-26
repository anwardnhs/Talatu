import { createPageMetadata } from "@/lib/seo/metadata";
﻿import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { LicensingArtwork } from "@/components/businesses/LicensingArtwork";
import { businesses } from "@/data/businesses";
import { companyPages } from "@/data/company-pages";

export const metadata = createPageMetadata({ title: "Our Companies", description: "Meet Talatu’s six companies in broadcasting, entertainment, regional media, publishing, licensing and games." , path: "/businesses" });

export default function CompaniesPage() {
  return <>
    <header className="companies-masthead"><h1>Our <em>companies.</em></h1><p>Television, film, publishing and games.<br />Meet the businesses behind the work.</p></header>
    <div className="company-index">
      {businesses.map((company) => {
        const visual = companyPages[company.slug];
        return <article className={`company-index-item company-index-${company.slug}`} key={company.slug}>
          <Link href={`/businesses/${company.slug}`} className="company-index-image" aria-label={`Explore ${company.name}`}>
            {company.slug === "licensing" ? <LicensingArtwork /> : <Image src={visual.image} alt={visual.alt} fill sizes="(max-width: 700px) 92vw, 650px" style={{ objectPosition: visual.position || "center" }} />}
            <span><FiArrowUpRight size={25} aria-hidden="true" /></span>
          </Link>
          <div><p className="company-category">{company.category}</p><h2><Link href={`/businesses/${company.slug}`}>{company.name}</Link></h2><p>{company.summary}</p><Link className="company-text-link" href={`/businesses/${company.slug}`}>Explore company<FiArrowUpRight size={19} aria-hidden="true" /></Link></div>
        </article>;
      })}
    </div>
  </>;
}
