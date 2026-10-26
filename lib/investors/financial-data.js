import { investors } from "@/data/investors";

export const financialContext = {
  fiscalYear: "FY2025",
  periodEnd: "2025-12-31",
  source: "Talatu corporate profile",
  exchangeRate: investors.exchangeRate,
  live: false,
  marketDataAsAt: investors.shareData.asAt || null,
};

export function getRevenueGrowth() {
  const series = investors.revenueFiveYear.series;
  return ((series.at(-1).value / series.at(-2).value - 1) * 100).toFixed(1);
}

export function getReportedSegments() {
  return investors.revenueBySegment.map(({ segment, share, label }) => ({
    segment,
    sharePercent: label ? null : share,
    reportedShare: label || `${share}%`,
  }));
}

export function getInvestorDataset(dataset) {
  const context = financialContext;
  if (dataset === "financials") return { context, highlights: investors.highlights, revenue: investors.revenueFiveYear };
  if (dataset === "shareholders") return { context, shareholders: investors.shareholders, summary: investors.shareholdingSummary };
  if (dataset === "revenue") return { context, history: investors.revenueFiveYear, segments: getReportedSegments() };
  return { context, highlights: investors.highlights, shareData: investors.shareData, revenue: investors.revenueFiveYear, segments: getReportedSegments(), shareholders: investors.shareholders };
}

const csvRow = (values) => values.map((value) => `"${String(value ?? "").replaceAll('"', '""')}"`).join(",");
export function getInvestorCsv(dataset) {
  const rows = [["Talatu Plc", "Supplied corporate profile data"], ["Reporting period", "FY2025; year ended 31 December 2025"], ["Exchange-rate assumption", investors.exchangeRate], ["Market data", "Not live; snapshot date not supplied"], []];
  if (dataset === "shareholders") {
    rows.push(["Holder", "Share (%)", "Group"], ...investors.shareholders.map(({ holder, pct, group }) => [holder, pct.toFixed(1), group]));
  } else if (dataset === "revenue") {
    rows.push(["Financial year", "Revenue (US$bn)"], ...investors.revenueFiveYear.series.map(({ year, value }) => [year, value.toFixed(2)]), [], ["Segment", "Reported revenue share"], ...getReportedSegments().map(({ segment, reportedShare }) => [segment, reportedShare]));
  } else {
    rows.push(["Metric", "USD", "NGN", "Note"], ...investors.highlights.map(({ label, usd, ngn, note }) => [label, usd, ngn, note || ""]));
  }
  return "\uFEFF" + rows.map(csvRow).join("\r\n");
}
