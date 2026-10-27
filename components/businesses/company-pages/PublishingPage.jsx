import Image from "@/components/media/OptimizedImage";
import { CompanyWebsiteDialog } from "@/components/businesses/CompanyWebsiteDialog";
import { CompanyLeadership } from "./CompanyLeadership";

export function PublishingPage({ company, page, next }) {
  return <div className="company-experience jaridah-experience"><header className="jaridah-masthead"><h1>Jaridah <em>Publishing.</em></h1><CompanyWebsiteDialog name={company.name} domain={page.domain} description={page.websiteDescription} /></header><div className="jaridah-editorial"><figure><Image src="/images/Talatu’s Nigerian Newspaper Collection.png" alt="The Comet, The Jaridah and other titles in Talatu's newspaper collection" fill priority sizes="(max-width:700px) 92vw, 600px" style={{ objectPosition:"50% 22%" }} /></figure><section aria-labelledby="jaridah-titles-heading"><h2 id="jaridah-titles-heading">Our mastheads</h2><ul>{company.brands.map((brand)=><li key={brand.name}><h3>{brand.name}</h3></li>)}</ul></section></div><section className="jaridah-colophon"><h2>The daily paper.<br /><em>And what comes next.</em></h2><p>{page.focus}</p></section><CompanyLeadership company={company} next={next} /></div>;
}
