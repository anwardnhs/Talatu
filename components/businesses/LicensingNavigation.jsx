"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
  ["Overview", "/businesses/licensing"],
  ["Consumer products", "/businesses/licensing/consumer-products"],
  ["Content licensing", "/businesses/licensing/content-licensing"],
  ["Work with us", "/businesses/licensing/partner-with-us"],
];
export function LicensingNavigation() {
  const pathname = usePathname();
  return <nav aria-label="Talatu Licensing pages" className="licensing-navigation">{links.map(([label, href]) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}>{label}</Link>)}</nav>;
}
