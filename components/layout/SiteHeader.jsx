"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight as ArrowUpRight, FiArrowRight as ArrowRight, FiChevronDown as ChevronDown, FiMenu as Menu, FiX as X, FiRadio as Radio, FiFilm as Clapperboard, FiGlobe as Globe2, FiStar as Sparkles, FiBookOpen as BookOpen, FiMonitor as Gamepad2 } from "react-icons/fi";
import { businesses, nav, site } from "@/data";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const icons = [Radio, Clapperboard, Globe2, Sparkles, BookOpen, Gamepad2];
const groups = {
  About: { eyebrow: "THE TALATU STORY", title: "About Talatu", description: "Our businesses, leadership and editorial responsibilities.", href: "/about", cta: "Discover Talatu", links: [
    { label: "About Talatu", href: "/about", description: "The Group and its operations." },
    { label: "Leadership", href: "/about/leadership", description: "Executive and divisional teams." },
    { label: "Governance", href: "/about/governance", description: "The Board and its committees." },
    { label: "Editorial independence", href: "/about/editorial-independence", description: "The commitments that protect our newsrooms." },
  ] },
  Businesses: { eyebrow: "OUR COMPANIES", title: "Our companies", description: "Broadcasting, entertainment, publishing, licensing and games.", href: "/businesses", cta: "Our companies", links: businesses.map((b, i) => ({ label: b.name, href: `/businesses/${b.slug}`, description: b.category, Icon: icons[i] })) },
  Investors: { eyebrow: "INVESTOR RELATIONS", title: "Investor relations", description: "Financial results, reports and shareholder information.", href: "/investors", cta: "Investor overview", links: [
    { label: "Financial performance", href: "/investors/financial-performance", description: "Results and financial highlights." },
    { label: "Reports & presentations", href: "/investors/reports", description: "Explore our reporting library." },
    { label: "Shareholder information", href: "/investors/shareholder-information", description: "Ownership and share information." },
    { label: "Corporate governance", href: "/about/governance", description: "Our framework for responsible growth." },
  ] },
};

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(null);
  const pathname = usePathname();
  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 24);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, [pathname]);
  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [mobileOpen]);
  const headerRef = useRef(null);
  const triggers = useRef({});
  const close = () => { setActive(null); setMobileOpen(false); };
  useEffect(() => { close(); }, [pathname]);
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        if (active) { triggers.current[mobileOpen ? `mobile-${active}` : active]?.focus(); setActive(null); }
        else if (mobileOpen) { setMobileOpen(false); document.getElementById("navigation-toggle")?.focus(); }
      }
    };
    const onPointer = (e) => { if (!headerRef.current?.contains(e.target)) close(); };
    const openingWidth = window.innerWidth;
    const onResize = () => { if (window.innerWidth !== openingWidth) close(); };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    window.addEventListener("resize", onResize);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("pointerdown", onPointer); window.removeEventListener("resize", onResize); };
  }, [active, mobileOpen]);
  return <>
    {(active || mobileOpen) && <div className="navigation-scrim" aria-hidden="true" onClick={close} />}
    <header ref={headerRef} className={`site-header ${pathname === "/" && !scrolled && !active && !mobileOpen ? "header-over-hero" : ""}`} onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) close(); }}>
      <a href="#main-content" className="skip-link" onClick={close}>Skip to content</a>
      <div className="site-header-inner">
        <Link href="/" aria-label={`${site.name} home`} className="wordmark" onClick={close}>talatu<span aria-hidden="true">.</span></Link>
        
        <nav aria-label="Main navigation" className="desktop-navigation">
          {nav.primary.map((item) => {
            const group = groups[item.label];
            return group ? <div className="nav-disclosure" key={item.href}>
              <Button variant="ghost" ref={(node) => { triggers.current[item.label] = node; }} type="button" className="nav-trigger" aria-expanded={active === item.label} aria-controls={`dropdown-${item.label}`} data-current={pathname.startsWith(item.href) || undefined} onClick={() => setActive(active === item.label ? null : item.label)} onKeyDown={(e) => { if (e.key === "ArrowDown") { e.preventDefault(); setActive(item.label); requestAnimationFrame(() => document.querySelector(`#dropdown-${item.label} a`)?.focus()); } }}>{item.label}<ChevronDown size={16} aria-hidden="true" /></Button>
              <div id={`dropdown-${item.label}`} className="mega-menu" hidden={active !== item.label}>
                <div className="mega-feature"><span className="eyebrow">{group.eyebrow}</span><h2>{group.title}</h2><p>{group.description}</p><Link href={group.href} onClick={close}>{group.cta}<ArrowRight size={16} aria-hidden="true" /></Link><span className="mega-orbit" aria-hidden="true" /></div>
                <div className="mega-content"><div className="mega-section-label">{item.label === "Businesses" ? "OUR DIVISIONS" : "EXPLORE"}<span>Talatu / {item.label}</span></div><div className="mega-links">{group.links.map(({ label, href, description, Icon }) => <Link key={href} href={href} onClick={close}>{Icon && <span className="division-icon"><Icon size={21} strokeWidth={1.5} aria-hidden="true" /></span>}<span><strong>{label}</strong><small>{description}</small></span><ArrowUpRight className="mega-link-arrow" size={16} aria-hidden="true" /></Link>)}</div></div>
              </div>
            </div> : <Link className="nav-direct" key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={close}>{item.label}</Link>;
          })}
        </nav>
        <Button asChild><Link href="/contact" className="header-contact" onClick={close}>Let’s talk<span><ArrowUpRight size={18} aria-hidden="true" /></span></Link></Button>
        <Button variant="outline" size="icon" id="navigation-toggle" type="button" className="navigation-toggle" aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => { setMobileOpen(!mobileOpen); setActive(null); }}>{mobileOpen ? <X size={22} /> : <Menu size={22} />}</Button>
      </div>
      <nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-navigation" hidden={!mobileOpen}>
        <p className="eyebrow">EXPLORE TALATU</p>
        <Accordion type="single" collapsible value={active || ""} onValueChange={(value) => setActive(value || null)}>
          {nav.primary.map((item) => groups[item.label] ? <AccordionItem className="mobile-group border-0" key={item.href} value={item.label}>
            <AccordionTrigger ref={(node) => { triggers.current[`mobile-${item.label}`] = node; }} className="mobile-section-trigger">{item.label}</AccordionTrigger>
            <AccordionContent className="mobile-subnav"><Link href={groups[item.label].href} onClick={close}>Overview<ArrowUpRight size={18} aria-hidden="true" /></Link>{groups[item.label].links.filter((link) => link.href !== groups[item.label].href).map((link) => <Link key={link.href} href={link.href} onClick={close}>{link.label}<ArrowUpRight size={18} aria-hidden="true" /></Link>)}</AccordionContent>
          </AccordionItem> : <Link className="mobile-direct" key={item.href} href={item.href} onClick={close}>{item.label}<ArrowUpRight size={20} aria-hidden="true" /></Link>)}
        </Accordion>
        <Link className="mobile-contact" href="/contact" onClick={close}>Let’s start a conversation<ArrowUpRight size={20} aria-hidden="true" /></Link>
        <p className="mobile-caption">Lagos, Nigeria · Stories without borders.</p>
      </nav>
    </header>
  </>;
}






