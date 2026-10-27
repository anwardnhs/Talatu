import { InvestorNavigation } from "@/components/investors/InvestorNavigation";
import "./investors.css";

export default function InvestorLayout({ children }) {
  return <main id="main-content" tabIndex={-1} className="investor-shell"><InvestorNavigation /><div className="investor-issuer"><strong>Talatu Plc</strong><span>Nigerian Exchange (NGX): TALATU</span></div>{children}</main>;
}
