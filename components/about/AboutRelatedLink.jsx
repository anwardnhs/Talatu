import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export function AboutRelatedLink({ href, label, children }) {
  return <aside className="about-related">{children && <p>{children}</p>}<Link href={href}>{label}<FiArrowUpRight size={28} aria-hidden="true" /></Link></aside>;
}

