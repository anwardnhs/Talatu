import Link from "next/link";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";

export function NotFoundContent({ title = "This page isn’t here.", description = "We couldn’t find that page. Check the address or continue with one of the links below.", href = "/", label = "Back to the homepage" }) {
  return <section className="not-found-content" aria-labelledby="not-found-heading"><div className="not-found-mark" aria-hidden="true">404<span /></div><div><p className="not-found-label">Page not found</p><h1 id="not-found-heading">{title}</h1><p>{description}</p><Link className="not-found-primary" href={href}><FiArrowLeft aria-hidden="true" />{label}</Link><nav aria-label="Explore Talatu"><Link href="/businesses">Our companies<FiArrowUpRight aria-hidden="true" /></Link><Link href="/newsroom">Newsroom<FiArrowUpRight aria-hidden="true" /></Link><Link href="/contact">Contact us<FiArrowUpRight aria-hidden="true" /></Link></nav></div></section>;
}
