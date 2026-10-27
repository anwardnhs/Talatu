// FY2025 (year ended 31 December 2025). Naira at ₦1,500 = US$1.
export const investors = {
  ticker: "NGX: TALATU",
  fiscalYear: "FY2025",
  exchangeRate: "₦1,500 = US$1",
  intro:
    "Talatu Plc is listed on the Nigerian Exchange. This section provides financial results, share information, shareholder structure and governance documents.",

  highlights: [
    { label: "Revenue", usd: "US$1.50bn", ngn: "₦2.25tn" },
    { label: "EBITDA", usd: "US$375m", ngn: "₦563bn", note: "25% margin" },
    { label: "Profit before tax", usd: "US$248m", ngn: "₦372bn" },
    { label: "Profit after tax", usd: "US$179m", ngn: "₦269bn" },
    { label: "Total assets", usd: "US$2.50bn", ngn: "₦3.75tn" },
    { label: "Net debt", usd: "US$225m", ngn: "₦338bn", note: "0.6x EBITDA" },
  ],

  shareData: {
    sharePrice: "₦711",
    sharesInIssue: "11.6bn",
    marketCap: { usd: "US$5.5bn", ngn: "₦8.25tn" },
    eps: "₦23.1",
    dividendPerShare: "₦10.9",
    payoutRatio: "47%",
    asAt: "", // TODO: date of price snapshot, or wire to a live feed
  },

  revenueBySegment: [
    { segment: "Comet Broadcasting Corporation", share: 45 },
    { segment: "Odyssey Entertainment", share: 29 },
    { segment: "Talatu Africa Media", share: 18 },
    { segment: "Talatu Licensing", share: 4 },
    { segment: "Jaridah Publishing", share: 3 },
    { segment: "Talatu Interactive", share: 1, label: "<1%" },
  ],

  revenueFiveYear: {
    unit: "US$bn",
    series: [
      { year: "FY2021", value: 1.35 },
      { year: "FY2022", value: 1.48 },
      { year: "FY2023", value: 1.12 },
      { year: "FY2024", value: 1.28 },
      { year: "FY2025", value: 1.5 },
    ],
    note: "US dollar growth trails naira growth because of the 2023–24 naira devaluations.",
  },

  shareholders: [
    { holder: "Alhassan Family Office", pct: 28.6, group: "Founding family" },
    { holder: "Westbridge Asset Management Limited", pct: 21.0, group: "Founding family" },
    { holder: "Westbridge Investments Limited", pct: 10.0, group: "Founding family" },
    { holder: "Retail investors", pct: 14.6, group: "Public" },
    { holder: "Other institutions", pct: 6.3, group: "Institutions" },
    { holder: "Marina Capital Equity Fund", pct: 6.2, group: "Institutions" },
    { holder: "First Alliance Pension Custodians", pct: 5.1, group: "Institutions" },
    { holder: "Highwater Africa Growth Fund", pct: 4.4, group: "Institutions" },
    { holder: "Talatu Employee Share Trust", pct: 2.0, group: "Employees" },
    { holder: "Mukhtar Bello Trust", pct: 1.8, group: "Trust" },
  ],
  shareholdingSummary: { founderFamily: 59.6, public: 14.6, institutions: 22.0, employeesAndTrusts: 3.8 },

  documents: [
    // Branded fictional PDF editions; source figures remain unchanged.
    { category: "Annual Reports", items: [{ label: "Annual Report FY2025", url: "/reports/talatu-plc-annual-report-fy2025.pdf" }] },
    { category: "Results", items: [{ label: "FY2025 Results Release", url: "/reports/talatu-plc-results-release-fy2025.pdf" }, { label: "FY2025 Results Presentation", url: "/reports/talatu-plc-results-presentation-fy2025.pdf" }] },
    { category: "Governance", items: [{ label: "Editorial Charter", url: "" }, { label: "Board Committee Terms of Reference", url: "" }] },
  ],

  contact: { team: "Investor Relations", email: "", phone: "" }, // TODO
};
