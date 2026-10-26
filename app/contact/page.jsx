import { createPageMetadata } from "@/lib/seo/metadata";
﻿import Link from "next/link";
import { FiArrowUpRight, FiMail, FiMapPin } from "react-icons/fi";
import { ContactForm } from "@/components/contact/ContactForm";
import { contactTeams } from "@/data/contact";
import { foundation } from "@/data/foundation";
import { company } from "@/data/company";
import "./contact.css";

export const metadata = createPageMetadata({ title: "Contact", description: "Contact Talatu’s press, investor relations, licensing and Foundation teams." , path: "/contact" });
export default function ContactPage({ searchParams }) {
  const programme = foundation.programmes.find((item) => item.slug === searchParams?.programme);
  return <main id="main-content" tabIndex={-1} className="contact-shell">
    <header className="contact-masthead"><h1>Let’s <em>talk.</em></h1><p>Find the right team<br />for your enquiry.</p></header>
    <section className="contact-team-grid" aria-label="Contact teams">{contactTeams.map((team) => <article key={team.id}><FiMail size={23} aria-hidden="true" /><h2>{team.name}</h2><p>{team.description}</p><a href={`mailto:${team.email}`}>{team.email}<FiArrowUpRight size={18} aria-hidden="true" /></a></article>)}</section>
    <section className="contact-lower" aria-labelledby="write-to-us"><ContactForm defaultTeam={searchParams?.team} defaultSubject={programme ? `Programme enquiry: ${programme.name}` : ""} /><aside className="contact-offices"><FiMapPin size={25} aria-hidden="true" /><h2>In Lagos.</h2>{Object.entries(company.headquarters).map(([key, office]) => <div key={key}><h3>{office.name}</h3><p>{office.location}</p><span>{key === "corporate" ? "Corporate headquarters" : "Operational headquarters"}</span></div>)}<Link href="/legal/privacy">How we handle your information<FiArrowUpRight size={17} aria-hidden="true" /></Link></aside></section>
  </main>;
}
