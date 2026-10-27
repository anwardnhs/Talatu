"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
  ["/about", "About Talatu"],
  ["/about/leadership", "Leadership"],
  ["/about/governance", "Governance"],
  ["/about/editorial-independence", "Editorial independence"],
];
export function AboutNavigation() {
  const pathname = usePathname();
  return (
    <nav className="about-navigation" aria-label="About Talatu pages">
      {pages.map(([href, label]) => (
        <Link
          key={href}
          href={href}
          aria-current={pathname === href ? "page" : undefined}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
