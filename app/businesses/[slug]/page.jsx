import { createPageMetadata } from "@/lib/seo/metadata";
﻿import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import { businesses, getBusiness } from "@/data/businesses";
import { companyPages } from "@/data/company-pages";
import { CompanyWebsiteDialog } from "@/components/businesses/CompanyWebsiteDialog";
import { BiographyDialog } from "@/components/people/BiographyDialog";
import { PersonPortrait } from "@/components/people/PersonPortrait";

export const generateStaticParams = () => businesses.filter((company) => company.slug !== "licensing").map(({ slug }) => ({ slug }));
export function generateMetadata({ params }) {
  const company = getBusiness(params.slug);
  return createPageMetadata({ title:company?.name || "Company not found", description:company?.summary, path:`/businesses/${params.slug}`, image:companyPages[params.slug]?.image, noIndex:!company });
}

export default function CompanyPage({ params }) {
  const company = getBusiness(params.slug);
  const page = companyPages[params.slug];
  if (!company || !page || company.slug === "licensing") notFound();
  const next = businesses[(businesses.findIndex((item) => item.slug === company.slug) + 1) % businesses.length];
  return <>
    <nav className="company-breadcrumb" aria-label="Company breadcrumb"><Link href="/businesses"><FiArrowLeft size={17} aria-hidden="true" />Our companies</Link><span aria-hidden="true">/</span><span>{company.category}</span></nav>
    <div className={`company-opening company-opening-${company.slug}`}><header className="company-heading"><h1>{company.name}</h1><p>{company.summary}</p></header>
    <figure className={`company-cover company-cover-${company.slug}`}><Image src={page.image} alt={page.alt} fill priority sizes="(max-width:1280px) 95vw, 1200px" style={{ objectPosition: page.position || "center" }} /></figure></div>
    <section className="company-description" aria-labelledby="company-work-heading"><div><h2 id="company-work-heading">{page.heading}</h2><p>{page.focus}</p><CompanyWebsiteDialog name={company.name} domain={page.domain} description={page.websiteDescription} /></div><div className="company-brand-list"><h2>{company.slug === "publishing" ? "Our titles" : company.slug === "broadcasting" ? "Channels & sport" : company.slug === "interactive" ? "How we work" : "Our businesses"}</h2><ul>{company.brands.map((brand) => <li key={brand.name}><h3>{brand.name}</h3>{company.brands.length <= 3 && <p>{brand.description}</p>}</li>)}</ul></div></section>
    {page.secondaryImage && <figure className="company-secondary-image"><Image src={page.secondaryImage} alt={page.secondaryAlt} fill sizes="(max-width:700px) 92vw, 820px" /></figure>}
    <section className="company-leader" aria-label="Company leadership"><PersonPortrait name={company.leader.name} /><div><p className="company-category">{company.leader.title}</p><h2>{company.leader.name}</h2><BiographyDialog name={company.leader.name} title={company.leader.title} /></div></section>
    <Link href={`/businesses/${next.slug}`} className="company-next"><span>Next company</span><strong>{next.name}</strong><FiArrowUpRight size={30} aria-hidden="true" /></Link>
  </>;
}
