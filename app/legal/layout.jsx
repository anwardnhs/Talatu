import { LegalNavigation } from "@/components/legal/LegalNavigation";
import "./legal.css";
export default function LegalLayout({ children }) {
  return <main id="main-content" tabIndex={-1} className="legal-shell"><LegalNavigation />{children}</main>;
}
