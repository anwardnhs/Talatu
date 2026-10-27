import Image from "@/components/media/OptimizedImage";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { CompanyWebsiteDialog } from "@/components/businesses/CompanyWebsiteDialog";
import { CompanyLeadership } from "./CompanyLeadership";

export function InteractivePage({ company, page, next }) {
  return <div className="company-experience interactive-experience"><header className="interactive-stage"><div><h1>Talatu<br /><em>Interactive.</em></h1><CompanyWebsiteDialog name={company.name} domain={page.domain} description={page.websiteDescription} /></div><figure><Image src={page.image} alt={page.alt} fill priority sizes="(max-width:700px) 92vw, 640px" /></figure></header><section className="interactive-publishing" aria-labelledby="interactive-publishing-heading"><h2 id="interactive-publishing-heading">Stories,<br /><em>made playable.</em></h2><div><p>{page.focus}</p><ul>{company.brands.map((brand)=><li key={brand.name}>{brand.name}</li>)}</ul><Link href="/businesses/licensing/content-licensing">Explore adaptation rights<FiArrowUpRight aria-hidden="true" /></Link></div></section><CompanyLeadership company={company} next={next} /></div>;
}
