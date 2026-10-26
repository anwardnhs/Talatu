import { createPageMetadata } from "@/lib/seo/metadata";
﻿import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
export const metadata = createPageMetadata({ title: "Content Licensing", description: "Content rights, distribution and interactive adaptation proposals for Talatu’s library." , path: "/businesses/licensing/content-licensing" });
const rights = [
  ["Programme distribution", "Tell us the title, platform, territory, language and licence period you need. We review availability for that specific use."],
  ["Clips & programme use", "Identify the footage or programme, how it will be used and where it will appear. Include the proposed duration and audience."],
  ["Interactive adaptations", "Games based on the Group’s library are licensed through Talatu Licensing. Talatu Interactive manages game publishing and independent developer partnerships."],
];
export default function ContentLicensingPage() {
  return <>
    <header className="licensing-subheading"><p className="company-category">Content licensing</p><h1>The right story.<br /><em>The right permissions.</em></h1><p>For broadcasters, platforms and producers looking to use or adapt content from the Talatu library.</p></header>
    <section className="licensing-rights" aria-label="Content rights">{rights.map(([title, description]) => <article key={title}><h2>{title}</h2><p>{description}</p></article>)}</section>
    <section className="licensing-checklist"><div><h2>Tell us what<br />you’re planning.</h2><p>Rights vary by title, territory and use. A programme’s appearance on a Talatu channel or platform does not mean every right is available.</p></div><ul><li>The title or material you want to use</li><li>Platform, format and intended use</li><li>Territories and languages</li><li>Proposed licence period and launch date</li></ul></section>
    <Link className="company-website-button" href="/businesses/licensing/partner-with-us?type=Content%20licensing">Prepare a licensing enquiry<FiArrowUpRight size={20} aria-hidden="true" /></Link>
  </>;
}
