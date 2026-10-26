import { createPageMetadata } from "@/lib/seo/metadata";
import Link from "next/link";
import { FiDownload, FiArrowUpRight } from "react-icons/fi";
import { FinancialHighlights } from "@/components/investors/FinancialHighlights";
import { EarningsChart } from "@/components/investors/EarningsChart";
import { SegmentRevenue } from "@/components/investors/SegmentRevenue";
import { CountUp } from "@/components/shared/CountUp";

export const metadata = createPageMetadata({ title: "Financial Performance", description: "Explore Talatu’s FY2025 financial highlights, five-year revenue and business segment contributions." , path: "/investors/financial-performance" });

export default function FinancialPerformancePage() {
  return <><header className="investor-masthead"><h1>Financial<br /><em>performance.</em></h1><div className="investor-heading-bottom"><p className="investor-lead">Financial performance for the year ended 31 December 2025. All amounts are in Nigerian naira.</p><a className="investor-text-link" href="/api/investors?dataset=financials&format=csv" download><FiDownload size={19} aria-hidden="true" />Financial data CSV</a></div></header><FinancialHighlights /><EarningsChart /><div className="financial-detail-grid"><SegmentRevenue /><aside className="financial-reading"><p className="investor-caption">FY2025 results</p><h2>Key ratios</h2><article><strong><CountUp value={47} />%</strong><h3>Dividend payout</h3><p>A dividend of ₦10.9 per share represents 47% of earnings per share.</p></article><article><strong><CountUp value={25} />%</strong><h3>EBITDA margin</h3><p>FY2025 EBITDA was ₦563bn on revenue of ₦2.25tn.</p></article><article><strong><CountUp value={0.6} decimals={1} />×</strong><h3>Net debt to EBITDA</h3><p>Net debt was ₦338bn, equivalent to 0.6 times annual EBITDA.</p></article></aside></div><div className="investor-page-next"><Link href="/investors/reports">Reports & resources<FiArrowUpRight size={24} aria-hidden="true" /></Link></div></>;
}
