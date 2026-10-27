import Image from "@/components/media/OptimizedImage";
import { CompanyWebsiteDialog } from "@/components/businesses/CompanyWebsiteDialog";
import { CompanyLeadership } from "./CompanyLeadership";

export function BroadcastingPage({ company, page, next }) {
  return <div className="company-experience cbc-experience"><header className="cbc-masthead"><h1>{company.name}</h1><CompanyWebsiteDialog name={company.name} domain={page.domain} description={page.websiteDescription} /></header><figure className="cbc-cover"><Image src="/images/cbc-news-studio.jpeg" alt="CBC presenters in the television newsroom" fill priority sizes="(max-width:1280px) 95vw, 1180px" style={{ objectPosition:"55% 45%" }} /></figure><section className="cbc-network" aria-labelledby="cbc-network-heading"><div><h2 id="cbc-network-heading">The CBC<br /><em>network.</em></h2><p>{page.focus}</p></div><ul>{company.brands.map((brand) => <li key={brand.name}><span aria-hidden="true" className="cbc-signal" /><h3>{brand.name}</h3></li>)}</ul></section><CompanyLeadership company={company} next={next} /></div>;
}
