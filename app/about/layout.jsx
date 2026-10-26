import { AboutNavigation } from "@/components/about/AboutNavigation";
import "./about.css";

export default function AboutLayout({ children }) {
  return <main id="main-content" tabIndex={-1} className="about-shell"><AboutNavigation />{children}</main>;
}
