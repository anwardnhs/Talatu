import { FiMail, FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import { newsroom } from "@/data/newsroom";

export function PressContact() {
  return <aside id="press-contact" className="news-media-note" aria-labelledby="press-heading"><div><FiMail size={24} aria-hidden="true" /><h2 id="press-heading">Press enquiries</h2><p>Interviews, company statements and image requests.</p></div><div className="news-media-contact"><a href={`mailto:${newsroom.mediaContact.email}`}>{newsroom.mediaContact.email}<FiArrowUpRight aria-hidden="true" /></a><Link href="/contact?team=press">Contact Corporate Communications</Link></div></aside>;
}
