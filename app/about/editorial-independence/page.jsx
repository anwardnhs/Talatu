import { createPageMetadata } from "@/lib/seo/metadata";
﻿import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { editorialIndependence } from "@/data";
import { AboutRelatedLink } from "@/components/about/AboutRelatedLink";

export const metadata = createPageMetadata({ title: "Editorial Independence", description: "How Talatu protects independent journalism through its Editorial Charter, newsroom commitments and Board oversight." , path: "/about/editorial-independence" });

export default function EditorialIndependencePage() {
  return <>
    <header className="independence-masthead"><h1>Editors decide<br />what we <em>publish.</em></h1><p>{editorialIndependence.intro}</p></header>
    <figure className="independence-image"><Image src="/images/Talatu’s Nigerian Newspaper Collection.png" alt="A collection of Talatu newspapers including The Comet, The Jaridah and National Review of Affairs" fill priority sizes="(max-width: 1280px) 95vw, 1200px" /></figure>
    <section className="editorial-commitments" aria-labelledby="commitments-heading"><div className="commitments-intro"><h2 id="commitments-heading">Our newsroom<br />commitments.</h2><p>Our Editorial Charter sets the principles. These commitments put them into practice across Group newsrooms.</p></div><ol>{editorialIndependence.commitments.map((commitment, index) => <li key={commitment.title}><span className="commitment-number" aria-hidden="true">0{index + 1}</span><div><h3>{commitment.title}</h3><p>{commitment.text}</p></div></li>)}</ol></section>
    <section className="editorial-oversight" aria-labelledby="oversight-heading"><div><h2 id="oversight-heading">Editorial <em>oversight.</em></h2><p>The Board’s Editorial Committee, chaired by Angela Nwana, monitors compliance with the Editorial Charter and protects newsroom independence.</p><Link href="/about/governance#committees-heading">Board committees<FiArrowUpRight size={20} aria-hidden="true" /></Link></div></section>
    <AboutRelatedLink href="/about" label="About Talatu" />
  </>;
}

