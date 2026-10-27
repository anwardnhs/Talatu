import { AnimatedAmount } from "@/components/motion/AnimatedAmount";
import { investors } from "@/data/investors";

export function FinancialHighlights({ compact = false }) {
  const metrics = investors.highlights.slice(0, compact ? 3 : 6);
  return (
    <section className="financial-highlights" aria-labelledby="financial-highlights-heading">
      <div className="investor-section-heading">
        <div>
          <p className="investor-caption">Talatu Plc · Year ended 31 December 2025</p>
          <h2 id="financial-highlights-heading">FY2025 at a glance.</h2>
        </div>
      </div>
      <dl className={`financial-metrics ${compact ? "financial-metrics-compact" : ""}`}>
        {metrics.map((metric) => (
          <div key={metric.label}>
            <dt>{metric.label}</dt>
            <dd><AnimatedAmount value={metric.ngn} /></dd>
            {metric.note && <dd className="financial-metric-note">{metric.note}</dd>}
          </div>
        ))}
      </dl>
    </section>
  );
}
