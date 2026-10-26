"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [["/investors", "Overview"], ["/investors/financial-performance", "Financial performance"], ["/investors/reports", "Reports & resources"], ["/investors/shareholder-information", "Shareholder information"]];
export function InvestorNavigation() {
  const pathname = usePathname();
  return <nav className="investor-navigation" aria-label="Investor pages">{pages.map(([href, label]) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}>{label}</Link>)}</nav>;
}
