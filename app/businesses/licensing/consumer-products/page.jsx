import { createPageMetadata } from "@/lib/seo/metadata";
﻿import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { LicensingArtwork } from "@/components/businesses/LicensingArtwork";
export const metadata = createPageMetadata({ title: "Consumer Products", description: "Explore character and consumer-product licensing with Talatu." , path: "/businesses/licensing/consumer-products" });
const areas = [
  ["Publishing & learning", "Books, activity formats and learning materials using Talatu characters and stories."],
  ["Merchandise & retail", "Proposals for apparel, accessories, toys and other character products."],
  ["Brand partnerships", "Collaborations that connect a Talatu property with a partner’s product or campaign."],
];
export default function ConsumerProductsPage() {
  return <>
    <header className="licensing-subheading"><p className="company-category">Consumer products</p><h1>Characters with<br /><em>somewhere new to go.</em></h1></header>
    <div className="licensing-product-layout"><LicensingArtwork /><section aria-labelledby="product-areas-heading"><h2 id="product-areas-heading">Partnership areas</h2>{areas.map(([title, description]) => <article key={title}><h3>{title}</h3><p>{description}</p></article>)}</section></div>
    <section className="licensing-note"><h2>Start with the property.</h2><p>Zuri and the Talking Drum is part of our licensing portfolio. For any proposal, tell us which property you have in mind, the product category, sales territories and expected launch period. Rights and approvals are agreed for each project.</p><Link className="company-text-link" href="/businesses/licensing/partner-with-us?type=Consumer%20products">Prepare a proposal<FiArrowUpRight size={20} aria-hidden="true" /></Link></section>
  </>;
}
