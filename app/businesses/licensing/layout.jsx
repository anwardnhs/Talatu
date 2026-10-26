import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { LicensingNavigation } from "@/components/businesses/LicensingNavigation";

export default function LicensingLayout({ children }) {
  return <><Link className="company-back" href="/businesses"><FiArrowLeft size={18} aria-hidden="true" />Our companies</Link><LicensingNavigation />{children}</>;
}
