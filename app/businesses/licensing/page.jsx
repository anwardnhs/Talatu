import { createPageMetadata } from "@/lib/seo/metadata";
﻿import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { LicensingArtwork } from "@/components/businesses/LicensingArtwork";
import { licensingServices } from "@/data/company-pages";
import { BiographyDialog } from "@/components/people/BiographyDialog";
import { PersonPortrait } from "@/components/people/PersonPortrait";

export const metadata = createPageMetadata({ title: "Talatu Licensing", description: "Consumer products, content licensing and partnerships for Talatu’s stories and characters." , path: "/businesses/licensing" });
export default function LicensingPage() {
  return <>
    <header className="licensing-hero"><div><p className="company-category">Talatu Licensing</p><h1>Stories beyond<br /><em>the screen.</em></h1><p>We manage rights to Talatu’s stories and characters, and work with partners to adapt them for products, publishing and new formats.</p><Link className="company-website-button" href="/businesses/licensing/partner-with-us">Work with us<FiArrowUpRight size={20} aria-hidden="true" /></Link></div><LicensingArtwork /></header>
    <section className="licensing-services" aria-labelledby="licensing-services-heading"><h2 id="licensing-services-heading">What we license</h2><div>{licensingServices.map((service) => <Link key={service.slug} href={`/businesses/licensing/${service.slug}`}><h3>{service.title}</h3><p>{service.description}</p><FiArrowUpRight size={23} aria-hidden="true" /></Link>)}</div></section>
    <section className="licensing-property"><span className="licensing-property-symbol" aria-hidden="true">Z<span>+</span></span><div><p className="company-category">From our library</p><h2>Zuri and the Talking Drum</h2><p>The Talatu Studios animated children’s series airs on CBC Kids and is part of Talatu Licensing’s property portfolio.</p><Link className="company-text-link" href="/businesses/licensing/consumer-products">Explore consumer licensing<FiArrowUpRight size={19} aria-hidden="true" /></Link></div></section>
    <section className="company-leader" aria-label="Licensing leadership"><PersonPortrait name="Salome Ogide" /><div><p className="company-category">Chief Executive Officer</p><h2>Salome Ogide</h2><BiographyDialog name="Salome Ogide" title="Chief Executive Officer" /></div></section>
  </>;
}
