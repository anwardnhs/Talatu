import { getReportedSegments } from "@/lib/investors/financial-data";

export function SegmentRevenue() {
  return (
    <section className="segment-revenue" aria-labelledby="segments-heading">
      <h2 id="segments-heading">Where revenue comes from.</h2>
      <p className="investor-section-intro">
        FY2025 revenue share by segment, based on reported revenue for the year
        ended 31 March 2025.
      </p>
      <ul>
        {getReportedSegments().map((segment, index) => (
          <li key={segment.segment}>
            <div>
              <span>{segment.segment}</span>
              <strong>{segment.reportedShare}</strong>
            </div>
            {segment.sharePercent !== null && (
              <span className="segment-track" aria-hidden="true">
                <span
                  className={`segment-fill segment-colour-${index}`}
                  style={{ width: `${(segment.sharePercent / 45) * 100}%` }}
                />
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
