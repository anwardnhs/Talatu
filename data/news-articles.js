// Articles developed from the supplied project profile. Only confirmed years are shown;
// exact publication days and direct quotations have not been invented.
export const newsArticles = [
  {
    slug: "fy2025-results", category: "Financial", year: "2026",
    title: "Talatu Plc reports FY2025 revenue of ₦2.25tn",
    excerpt: "Revenue reached ₦2.25tn, with profit after tax of ₦269bn and a dividend of ₦10.9 per share.",
    image: "/images/talatu-tower-daylight.webp", alt: "Talatu Tower overlooking the Lagos waterfront", imageCaption: "Talatu Tower, Lagos.",
    paragraphs: [
      "Talatu Plc reported revenue of ₦2.25tn for the year ended 31 December 2025.",
      "EBITDA was ₦563bn, representing a 25% margin. Profit before tax was ₦372bn, while profit after tax was ₦269bn.",
      "The Group reported total assets of ₦3.75tn and net debt of ₦338bn, equivalent to 0.6 times EBITDA. Earnings per share were ₦23.1. The reported dividend of ₦10.9 per share represents a 47% payout ratio.",
      "Comet Broadcasting Corporation accounted for 45% of reported revenue, followed by Odyssey Entertainment at 29% and Talatu Africa Media at 18%. Licensing contributed 4%, publishing 3%, and Talatu Interactive less than 1%. Segment percentages are rounded.",
      "The financial performance section brings together the year’s results in naira. The figures are also available to download as CSV files.",
    ],
    relatedLink: { href: "/investors/financial-performance", label: "View the financial results" },
  },
  {
    slug: "odyssey-plus-egypt", category: "Entertainment", year: "2026",
    title: "Odyssey+ expands Arabic-language offering in Egypt",
    excerpt: "The expansion brings originals from Cairo’s Red Sea Pictures to the streaming platform.",
    image: "/images/odyssey-plus-wordmark.png", alt: "Odyssey+ wordmark on a dark background", imageCaption: "Odyssey+ is expanding its Arabic-language offering.", imagePosition: "50% 50%",
    paragraphs: [
      "Odyssey+ is expanding its offering in Egypt with an Arabic-language tier featuring originals from Red Sea Pictures. The move extends the platform’s work with local production teams beyond its existing markets.",
      "Talatu Africa Media acquired a minority associate interest in the Cairo-based studio in 2025. Founder Layla Mansour continues to lead Red Sea Pictures, which provides an Arabic-language production base for the Group.",
      "The expansion was greenlit by Talatu Chief Executive Officer David Saro. Odyssey+ operates within Odyssey Entertainment, alongside the theatrical label Ironwood Pictures and series producer Talatu Studios.",
      "Egypt remains an associate market in Talatu’s corporate structure. The Group operates in eight African markets, with its interest in Red Sea Pictures held separately as an associate investment.",
    ],
  },
  {
    slug: "southstone-campus-commissioned", category: "Corporate", year: "2025", featured: true,
    title: "Talatu commissions Southstone Campus in Lagos",
    excerpt: "The completed Lagos campus puts newsrooms, studios, post-production and animation teams in one production hub.",
    image: "/images/southstone-campus-daylight.webp", alt: "Aerial view of Southstone Campus and its production buildings", imageCaption: "Southstone Campus, on the Lekki–Epe Expressway in Lagos.",
    paragraphs: [
      "Talatu has fully commissioned Southstone Campus, its operational headquarters on the Lekki–Epe Expressway in Lagos. The completed campus brings the Group’s newsroom, studios, post-production and animation operations together on one site.",
      "The project consolidates production operations that previously worked from separate locations. The campus supports the teams responsible for Talatu’s news and entertainment output, while the Group’s corporate headquarters remains at Talatu House in Ikoyi.",
      "Planning for the campus began in 2022, with construction starting in 2023. The project was designed to accommodate the Group’s existing operations while allowing for future growth.",
      "Media and production teams at Southstone Campus work across Talatu’s news, entertainment and licensing divisions. The campus is designed to support the Group’s content creation and distribution strategy, with facilities for live broadcasting, post-production, and animation. ",
    ],
    relatedLink: { href: "/about", label: "About Talatu" },
  },
  {
    slug: "talatu-interactive-launch", category: "Entertainment", year: "2025",
    title: "Talatu Plc launches Talatu Interactive games publishing division",
    excerpt: "With Talatu Interactive, the Group will commission independent studios to develop games based on its content library.",
    image: "/images/news-gaming-symbols.jpg", alt: "Black square, triangle, cross and circle gaming symbols on white", imageCaption: "Talatu Interactive publishes games developed by independent studios.", imageFit: "contain", imageBackground: "#ffffff",
    paragraphs: [
      "Talatu has launched Talatu Interactive, a games publishing division led by Chief Executive Officer Abdullahi Kurfi. The business will commission independent studios to develop games based on the Group’s content library.",
      "Content rights will be licensed through Talatu Licensing. The structure separates publishing and developer partnerships from the stewardship of the underlying intellectual property.",
      "Talatu Interactive is the Group’s sixth business division, alongside broadcasting, entertainment, Africa Media, licensing and publishing. Its remit is games publishing rather than an in-house development studio.",
      "The launch gives Talatu another way to work with its existing stories and characters, while bringing independent developers into the process of adapting them for play.",
    ],
  },
  {
    slug: "red-sea-pictures-stake", category: "Africa", year: "2025",
    title: "Talatu Africa Media invests in Red Sea Pictures",
    excerpt: "The Cairo-based studio will provide an Arabic-language production base for Odyssey+.",
    image: "/images/cairo-city-news.jpg", alt: "Mosques and the Cairo skyline in warm light", imageCaption: "Cairo, Egypt.", imagePosition: "50% 50%",
    paragraphs: [
      "Talatu Africa Media has acquired a minority equity interest in Red Sea Pictures, a Cairo-based studio led by Layla Mansour. The investment provides an Arabic-language production base for series commissioned for Odyssey+.",
      "Red Sea Pictures joins Talatu Africa Media’s regional interests alongside South Africa’s Baseline Motion Pictures and Nairobi-based Signal Television. The Egyptian investment is an associate interest, rather than a wholly owned operating company.",
      "The arrangement includes an option to increase Talatu’s holding, subject to regulatory approval.",
      "The investment supports Odyssey+’s expansion into Arabic-language programming and provides a route into Egyptian distribution while retaining the studio’s existing founder-led management.",
    ],
  },
];

export const getNewsArticle = (slug) => newsArticles.find((article) => article.slug === slug);
