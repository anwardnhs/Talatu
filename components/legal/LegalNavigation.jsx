"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const policies = [["Privacy Policy", "privacy"], ["Terms of Use", "terms"], ["Cookie Policy", "cookies"], ["Disclaimer", "disclaimer"]];
export function LegalNavigation() {
  const pathname = usePathname();
  return <nav className="legal-navigation" aria-label="Legal pages">{policies.map(([label, slug]) => <Link key={slug} href={`/legal/${slug}`} aria-current={pathname === `/legal/${slug}` ? "page" : undefined}>{label}</Link>)}</nav>;
}
