import { CountUp } from '@/components/motion/CountUp';
import { company } from '@/data/company';
import { fictionalImpactMetrics } from '@/data/fictional-impact-metrics';
export function CompanyFigures() {
 return <section id="talatu-numbers" className="company-figures" aria-labelledby="company-figures-heading"><header><h2 id="company-figures-heading">Talatu today</h2><span className="company-reach-label">Our audience, in numbers</span></header><div className="company-figures-grid"><div className="company-founding"><span>Established</span><strong><CountUp value={company.founded} /></strong><p>Kaduna, Nigeria</p></div><dl className="company-numbers">{fictionalImpactMetrics.map(metric=><div key={metric.label}><dt>{metric.label}</dt><dd><CountUp value={metric.value} /><span className="company-unit">{metric.suffix}</span></dd><dd className="company-figure-detail">{metric.detail}</dd></div>)}</dl></div></section>;
}
