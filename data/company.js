// Core company facts used across Home, About and Investors.
export const company = {
  legalName: "Talatu Plc",
  founded: 1962,
  listing: { exchange: "NGX", ticker: "TALATU" },
  financialYearEnd: "31 December",
  headquarters: {
    corporate: { name: "Talatu House", location: "Ikoyi, Lagos, Nigeria" },
    operations: {
      name: "Southstone Campus",
      location: "Lekki–Epe Expressway, Lagos, Nigeria",
      description:
        "Home to the Group’s newsroom, studios, post-production and animation operations on a single production hub.",
    },
  },
  markets: {
    count: 8,
    operating: ["Nigeria", "South Africa", "Kenya", "Uganda", "Tanzania", "Rwanda", "Zambia", "Ghana"],
    associate: ["Egypt"],
  },
  statement:
    "Talatu is a Nigerian media and entertainment group. From television and news to publishing, film, series, streaming, sport, licensing and games, we create and distribute content for audiences across Africa and beyond.",
  // Headline figures for the home page stat strip
  stats: [
    { value: "₦2.25tn", label: "FY2025 revenue" },
    { value: "8", label: "African markets" },
    { value: "6", label: "business divisions" },
    { value: "1962", label: "Established" },
  ],
  currencyNote: "Naira figures converted at ₦1,500 = US$1.",
};
