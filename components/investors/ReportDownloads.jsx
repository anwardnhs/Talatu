import { FiArrowUpRight, FiDownload } from "react-icons/fi";

const covers = {annual:<>Annual<br />Report.</>,presentation:<>Results<br />Presentation.</>,summary:<>Financial<br />Summary.</>};
export function ReportDownloads({ investorResources }) {
  const reports = investorResources.filter(r => r.cover && r.cover !== 'none' && r.format === 'PDF' && r.href).slice(0,3);
  if(!reports.length) return null;
  return <section className="featured-reports" aria-labelledby="featured-reports-heading"><h2 id="featured-reports-heading">Featured reports</h2><div>{reports.map((report,index)=><article className={`featured-report featured-report-${index}`} key={report.id}><a className="report-cover" href={report.href} target="_blank" rel="noreferrer" aria-label={`Preview ${report.title}`}><span>talatu<span aria-hidden="true">.</span></span><strong>{covers[report.cover] || report.title}</strong><div><span>Talatu Plc · {report.period}</span><FiArrowUpRight aria-hidden="true" /></div></a><div className="report-download-caption"><span>PDF · {report.pages} {report.cover==='presentation'?'slides':'pages'}</span><a href={report.href} download aria-label={`Download ${report.title} as PDF`}>Download PDF<FiDownload aria-hidden="true" /></a></div></article>)}</div></section>;
}
