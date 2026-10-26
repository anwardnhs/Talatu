"use client";

import { useState } from "react";
import { CountUp } from "@/components/shared/CountUp";

const earnings = [
  { label: "EBITDA", value: 563 },
  { label: "Profit before tax", value: 372 },
  { label: "Profit after tax", value: 269 },
];

export function EarningsChart() {
  const [selected, setSelected] = useState(0);
  const active = earnings[selected];
  return (
    <section className="revenue-chart" aria-labelledby="earnings-chart-heading">
      <div className="investor-section-heading">
        <div>
          <p className="investor-caption">FY2025 · ₦ billion</p>
          <h2 id="earnings-chart-heading">Earnings breakdown</h2>
        </div>
        <div className="revenue-selected" aria-live="polite">
          <span>{active.label}</span>
          <strong>₦<CountUp key={active.label} value={active.value} />bn</strong>
        </div>
      </div>
      <div className="revenue-plot earnings-plot" role="group" aria-label="FY2025 earnings in naira">
        {earnings.map((point, index) => (
          <button type="button" className="revenue-column" key={point.label}
            aria-pressed={selected === index}
            aria-label={`${point.label}: ₦${point.value} billion`}
            onClick={() => setSelected(index)} onFocus={() => setSelected(index)}>
            <span className="revenue-bar-space">
              <span className="revenue-bar-value"><CountUp value={point.value} /></span>
              <span className="revenue-bar" style={{ height: `${point.value / 600 * 100}%` }} />
            </span>
            <span className="revenue-year">{point.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
