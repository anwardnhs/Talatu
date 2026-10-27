import { createPageMetadata } from "@/lib/seo/metadata";
import { FiDownload } from "react-icons/fi";
import { AnimatedAmount } from "@/components/motion/AnimatedAmount";
import { investors } from "@/data/investors";

export const metadata = createPageMetadata({ title: "Shareholder Information", description: "Talatu Plc ownership, shareholder information and FY2025 per-share figures.", path: "/investors/shareholder-information" });

export default function ShareholderInformationPage() {
  const share = investors.shareData;
  return <>
    <header className="investor-masthead"><h1>Shareholder<br /><em>information.</em></h1><p className="investor-lead">Ownership and share information for Talatu Plc.</p></header>
    <section className="ownership-summary" aria-labelledby="ownership-heading"><h2 id="ownership-heading">Who owns Talatu</h2><p>Talatu is owned by the Alhassan family alongside institutional investors, individual shareholders and employee trusts.</p><a className="investor-text-link" href="/api/investors?dataset=shareholders&format=csv" download><FiDownload size={19} aria-hidden="true" />Download shareholder information</a></section>
    <section className="share-financials" aria-labelledby="per-share-heading"><h2 id="per-share-heading">FY2025 per-share figures</h2><dl className="share-per-share-pair"><div><dt>Earnings per share</dt><dd><AnimatedAmount value={share.eps} /></dd></div><div><dt>Dividend per share</dt><dd><AnimatedAmount value={share.dividendPerShare} /></dd></div></dl></section>
    <section className="share-snapshot" aria-labelledby="snapshot-heading"><div className="investor-section-heading"><h2 id="snapshot-heading">Market reference</h2><span>Reference figures · date unavailable</span></div><p>Historical reference figures; current market prices are unavailable.</p><dl><div><dt>Share price</dt><dd><AnimatedAmount value={share.sharePrice} /></dd></div><div><dt>Shares in issue</dt><dd><AnimatedAmount value={share.sharesInIssue} /></dd></div><div><dt>Market capitalisation</dt><dd><AnimatedAmount value={share.marketCap.ngn} /></dd></div></dl></section>
  </>;
}
