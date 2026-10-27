import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
export function CompanyBreadcrumb() {
 return <nav className="company-breadcrumb" aria-label="Company navigation"><Link href="/businesses"><FiArrowLeft size={19} aria-hidden="true" /><span>All companies</span></Link></nav>;
}
