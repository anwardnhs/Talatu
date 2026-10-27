import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { CountUp } from "@/components/shared/CountUp";
import { company } from "@/data/company";

export function CompanyFigures() {
  return (
    <section
      id="talatu-numbers"
      className="company-figures"
      aria-labelledby="company-figures-heading"
    >
      <header>
        <h2 id="company-figures-heading">Talatu today</h2>
        <Link href="/investors/financial-performance">
          FY2025 financials
          <FiArrowUpRight size={19} aria-hidden="true" />
        </Link>
      </header>
      <div className="company-figures-grid">
        <div className="company-founding">
          <span>Established</span>
          <strong>
            <CountUp value={company.founded} />
          </strong>
          <p>Kaduna, Nigeria</p>
        </div>
        <dl className="company-numbers">
          <div>
            <dt>Operating markets</dt>
            <dd>
              <CountUp value={company.markets.count} />
            </dd>
          </div>
          <div>
            <dt>Companies</dt>
            <dd>
              <CountUp value={company.stats[2].value} />
            </dd>
          </div>
          <div className="company-revenue">
            <dt>FY2025 revenue</dt>
            <dd>
              <span className="company-currency">₦</span>
              <CountUp value={2.25} decimals={2} />
              <span className="company-unit">tn</span>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
