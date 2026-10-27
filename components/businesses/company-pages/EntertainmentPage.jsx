import Image from "@/components/media/OptimizedImage";
import { CompanyWebsiteDialog } from "@/components/businesses/CompanyWebsiteDialog";
import { CompanyLeadership } from "./CompanyLeadership";

export function EntertainmentPage({ company, page, next }) {
  const formats=["Films", "Series", "Streaming"];
  return <div className="company-experience odyssey-experience"><header className="odyssey-cover"><Image src={page.image} alt={page.alt} fill priority sizes="(max-width:1280px) 95vw, 1180px" /><div className="odyssey-cover-shade" aria-hidden="true" /><div className="odyssey-title"><h1>Odyssey<br /><em>Entertainment.</em></h1><CompanyWebsiteDialog name={company.name} domain={page.domain} description={page.websiteDescription} /></div></header><section className="odyssey-studios" aria-labelledby="odyssey-studios-heading"><div className="odyssey-studios-intro"><h2 id="odyssey-studios-heading">For the<br /><em>screen.</em></h2><p>{page.focus}</p></div><div className="odyssey-formats">{company.brands.map((brand,index)=><article key={brand.name}><span>{formats[index]}</span><h3>{brand.name}</h3></article>)}</div></section><CompanyLeadership company={company} next={next} /></div>;
}
