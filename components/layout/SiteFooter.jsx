import Link from "next/link";
import { FiArrowUpRight as ArrowUpRight, FiArrowUp as ArrowUp, FiGlobe as Globe2 } from "react-icons/fi";
import { nav, site } from "@/data";
import { Button } from "@/components/ui/button";


export function SiteFooter() {
  const socialLinks = site.social.filter((item) => item.url);
  return <footer className="site-footer">
    <div className="site-footer-inner">
      <div className="footer-invitation">
        <div><h2>Get in touch.</h2></div>
        <Link href="/contact" className="footer-conversation"><span>Press, partnerships or another enquiry?<strong>Contact Talatu</strong></span><span className="conversation-arrow"><ArrowUpRight size={30} strokeWidth={1.4} aria-hidden="true" /></span></Link>
      </div>
      
      <div className="footer-grid">
        <div className="footer-brand"><p>Stories that move<br />a continent.</p><span className="footer-location"><Globe2 size={15} aria-hidden="true" />Lagos, Nigeria</span></div>
        {nav.footer.map((group, index) => <nav key={group.heading} aria-label={`${group.heading} footer links`}><h2><span>0{index + 1}</span>{group.heading}</h2><ul>{group.links.map((item) => <li key={item.href}><Link href={item.href}>{item.label}<ArrowUpRight size={13} aria-hidden="true" /></Link></li>)}</ul></nav>)}
      </div>
      {socialLinks.length > 0 && <nav aria-label="Social media" className="footer-social">{socialLinks.map((item) => <a key={item.label} href={item.url}>{item.label}<ArrowUpRight size={14} aria-hidden="true" /></a>)}</nav>}
      <div className="footer-signature"><Link href="/" aria-label={`${site.name} home`}>talatu<span aria-hidden="true">.</span></Link><Button asChild variant="outline" size="icon"><a href="#page-top" className="back-to-top" aria-label="Back to top"><ArrowUp size={22} aria-hidden="true" /></a></Button></div>
      <div className="footer-bottom"><p>{nav.copyright}</p><nav aria-label="Legal">{nav.legal.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav></div>
    </div>
  </footer>;
}




