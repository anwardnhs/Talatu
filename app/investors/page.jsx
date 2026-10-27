import { createPageMetadata } from "@/lib/seo/metadata";
import Link from "next/link";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import { FinancialHighlights } from "@/components/investors/FinancialHighlights";
import { EarningsChart } from "@/components/investors/EarningsChart";
import { CountUp } from "@/components/motion/CountUp";

export const metadata = createPageMetadata({ title: "Investors", description: "Talatu Plc investor relations: FY2025 financial performance, shareholder information, reporting and governance." , path: "/investors" });

export default function InvestorsPage() {
  return <>
    <header className="investor-masthead investor-overview-hero"><div><h1>Investing<br /><em>in Talatu.</em></h1><p className="investor-lead">Financial results, ownership information and reporting for Talatu Plc shareholders.</p><Link className="investor-primary-link" href="/investors/financial-performance">Explore our performance<FiArrowUpRight size={21} aria-hidden="true" /></Link></div><div className="investor-year-panel"><span>NGX: TALATU</span><strong>2025<span>FY</span></strong><p>Year ended 31 December 2025</p><div><span>EBITDA margin</span><b><CountUp value={25} />%</b></div></div></header>
    <FinancialHighlights compact />
    <section className="investor-link-grid" aria-label="Explore investor information"><Link href="/investors/reports"><span>Reporting</span><h2>Reports & resources</h2><p>Browse results data, financial resources and governance information.</p><FiArrowUpRight size={26} aria-hidden="true" /></Link><Link href="/investors/shareholder-information"><span>Ownership</span><h2>Shareholder information</h2><p>See major shareholders, share capital and dividends.</p><FiArrowUpRight size={26} aria-hidden="true" /></Link><Link href="/about/governance"><span>Accountability</span><h2>Corporate governance</h2><p>Meet the Board and understand the safeguards behind its decisions.</p><FiArrowUpRight size={26} aria-hidden="true" /></Link></section>
    <EarningsChart />
    <div className="investor-download-banner"><div><h2>Download the financial data</h2><p>FY2025 highlights in CSV format.</p></div><a href="/api/investors?dataset=financials&format=csv" download><FiDownload size={20} aria-hidden="true" />Download CSV</a></div>
  </>;
}
