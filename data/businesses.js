// Six divisions. `revenueShare` = share of FY2025 Group revenue (%).
export const businesses = [
  {
    slug: "broadcasting",
    name: "Comet Broadcasting Corporation",
    short: "CBC",
    category: "Broadcasting",
    revenueShare: 45,
    tagline: "Nigeria’s news, business and entertainment on air.",
    summary:
      "CBC runs a portfolio of television channels spanning national entertainment, news, business, international affairs, children’s programming and sport.",
    brands: [
      { name: "CBC 1", description: "Flagship general entertainment and national programming." },
      { name: "CBC 2", description: "Drama, comedy, acquisitions and premium content." },
      { name: "CBC News", description: "Rolling domestic and international news." },
      { name: "CBC Business", description: "Markets, finance, economics and corporate affairs." },
      { name: "CBC World", description: "International news and global affairs." },
      { name: "CBC Kids", description: "Children’s programming and animation." },
      { name: "Pinnacle Sports", description: "Sports programming and live coverage." },
    ],
    leader: { name: "Damilola Shonibare", title: "Chief Executive Officer" },
  },
  {
    slug: "entertainment",
    name: "Odyssey Entertainment",
    short: "Odyssey",
    category: "Film, Series & Streaming",
    revenueShare: 29,
    tagline: "Original film and series, made for the screen and the stream.",
    summary:
      "Odyssey Entertainment makes and distributes films and series, and runs the Odyssey+ streaming platform.",
    brands: [
      { name: "Ironwood Pictures", description: "Theatrical feature films." },
      { name: "Talatu Studios", description: "Scripted and unscripted series." },
      { name: "Odyssey+", description: "Streaming platform for local and pan-African originals." },
    ],
    leader: { name: "Bode Fasanya", title: "Chief Executive Officer" },
  },
  {
    slug: "africa-media",
    name: "Talatu Africa Media",
    short: "Africa Media",
    category: "Regional Media & Production",
    revenueShare: 18,
    tagline: "Our platform beyond Nigeria.",
    summary:
      "Talatu Africa Media brings together broadcasters and production companies across Africa.",
    brands: [
      { name: "Baseline Motion Pictures", description: "Film and series production services and drama, based in South Africa." },
      { name: "Signal Television (STV)", description: "Nairobi-based broadcaster operating STV News and STV Business across six African markets." },
      { name: "Red Sea Pictures", description: "Cairo-based associate studio producing Arabic-language series." },
    ],
    leader: { name: "Thabo Mokoena", title: "Chief Executive Officer" },
  },
  {
    slug: "licensing",
    name: "Talatu Licensing",
    short: "Licensing",
    category: "IP & Consumer Products",
    revenueShare: 4,
    tagline: "Taking our stories off the screen.",
    summary:
      "Talatu Licensing manages the Group’s intellectual property and brings it to consumers through licensing partnerships and consumer products.",
    brands: [{ name: "Talatu Licensing", description: "IP management, consumer products and content licensing." }],
    leader: { name: "Salome Ogide", title: "Chief Executive Officer" },
  },
  {
    slug: "publishing",
    name: "Jaridah Publishing",
    short: "Publishing",
    category: "Newspapers & Magazines",
    revenueShare: 3,
    tagline: "Journalism in print and digital.",
    summary:
      "Jaridah Publishing produces national and regional newspapers and specialist titles, with digital subscriptions alongside print.",
    brands: [
      { name: "The Jaridah", description: "National daily newspaper." },
      { name: "The Comet", description: "Lagos daily newspaper." },
      { name: "The Continental", description: "National daily newspaper." },
      { name: "People’s Chronicle", description: "Port Harcourt daily with a Niger Delta newsroom." },
      { name: "Capital Register", description: "Financial and business weekly." },
      { name: "Diplomatic Dispatch", description: "Diplomacy and international affairs." },
      { name: "National Review of Affairs", description: "Current affairs and analysis." },
    ],
    leader: { name: "Folarin Adegoke", title: "Managing Director & Publisher" },
  },
  {
    slug: "interactive",
    name: "Talatu Interactive",
    short: "Interactive",
    category: "Games",
    revenueShare: 1, // reported as <1%
    revenueShareLabel: "<1%",
    tagline: "Our worlds, playable.",
    summary:
      "Talatu Interactive publishes games based on the Group’s stories, working with independent development studios.",
    brands: [{  description: "Studios are commissioned to develop the games." }, {  description: "Rights to the Group’s stories are licensed through Talatu Licensing." }],
    leader: { name: "Abdullahi Kurfi", title: "Chief Executive Officer" },
  },
];

export const getBusiness = (slug) => businesses.find((b) => b.slug === slug);
