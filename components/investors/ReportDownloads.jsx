import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import { investorResources } from "@/data/investor-resources";

export function ReportDownloads() {
  const reports = ["annual-report", "results-presentation", "financial-summary"].map((id) => investorResources.find((item) => item.id === id));
  return <section className="featured-reports" aria-labelledby="featured-reports-heading"><h2 id="featured-reports-heading">FY2025 reporting</h2><div>{reports.map((report,index) => <article className={`featured-report featured-report-${index}`} key={report.id}><a href={report.href} target="_blank" rel="noreferrer" aria-label={`Preview ${report.title}`} className="report-cover"><span>talatu<span aria-hidden="true">.</span></span><strong>{index===0 ? <>Annual<br />Report.</> : index===1 ? <>Results<br />Presentation.</> : <>Financial<br />Summary.</>}</strong><div><span>Talatu Plc · FY2025</span><FiArrowUpRight aria-hidden="true" /></div></a><div className="report-download-caption"><span>PDF · {report.pages} {index===1 ? "slides" : "pages"}</span><a href={report.href} download aria-label={`Download ${report.title} as PDF`}>Download PDF<FiDownload aria-hidden="true" /></a></div></article>)}</div><p className="reports-project-note">Fictional project editions using the supplied FY2025 figures. Selected financial information; no audit assurance.</p></section>;
}
