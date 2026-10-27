import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { PersonPortrait } from "@/components/people/PersonPortrait";
import { BiographyDialog } from "@/components/people/BiographyDialog";

export function CompanyLeadership({ company, next }) {
  return <div className="company-experience-footer"><section className="company-leader" aria-label="Company leadership"><PersonPortrait name={company.leader.name} /><div><p className="company-category">{company.leader.title}</p><h2>{company.leader.name}</h2><BiographyDialog name={company.leader.name} title={company.leader.title} /></div></section><Link href={`/businesses/${next.slug}`} className="company-next"><span>Next company</span><strong>{next.name}</strong><FiArrowUpRight size={30} aria-hidden="true" /></Link></div>;
}
