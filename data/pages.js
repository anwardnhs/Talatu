// Page copy for Home and About.
export const home = {
  hero: {
    eyebrow: "Talatu Plc",
    headline: "Stories that move a continent.",
    subhead: "Television, news, publishing, film, streaming, sport and games, from Lagos to eight African markets.",
    cta: { label: "Explore our businesses", href: "/businesses" },
    media: { video: "", poster: "" }, // TODO: showreel
  },
  intro: {
    heading: "One group. Many ways to tell a story.",
    body: "Talatu brings together some of Nigeria’s best-known channels, newspapers and studios with growing platforms across Africa. We make, publish and distribute content for audiences wherever they watch, read and play.",
  },
  businessesSection: { heading: "Our businesses", cta: { label: "All businesses", href: "/businesses" } },
  titlesSection: { heading: "Featured titles", cta: { label: "View all titles", href: "/titles" } },
  numbersSection: { heading: "Talatu today" }, // pulls company.stats
  independence: {
    heading: "Editors decide what we publish.",
    body: "Our Editorial Charter protects every newsroom in the Group from owner and advertiser influence, with oversight at Board level.",
    cta: { label: "Editorial independence", href: "/about/editorial-independence" },
  },
  newsSection: { heading: "Latest news", cta: { label: "Visit the newsroom", href: "/newsroom" } },
  investorBanner: {
    heading: "For investors",
    body: "Results, share information and governance for NGX: TALATU.",
    cta: { label: "Investor relations", href: "/investors" },
  },
};

export const about = {
  headline: "About Talatu",
  lede: "Talatu is a Nigerian media and entertainment group with operations in eight African markets and an associate in Egypt.",
  sections: [
    {
      heading: "What we do",
      body: "We run national television channels, publish newspapers and magazines, produce films and series, operate the Odyssey+ streaming platform, broadcast live sport, license our characters and stories, and publish games.",
    },
    {
      heading: "Where we work",
      body: "Our corporate headquarters is in Ikoyi, Lagos. Our newsroom, studios, post-production and animation teams work from the Southstone Campus on the Lekki–Epe Expressway. Beyond Nigeria we operate in South Africa, Kenya, Uganda, Tanzania, Rwanda, Zambia and Ghana, and hold an associate interest in Cairo’s Red Sea Pictures.",
    },
    {
      heading: "How we are governed",
      body: "An 11-member Board, five independent directors and five standing committees oversee the Group. Editorial independence is protected by a Charter and a dedicated Board committee.",
      cta: { label: "Governance", href: "/about/governance" },
    },
  ],
  subpages: [
    { label: "Leadership", href: "/about/leadership", description: "Our Executive Chairman, executive team and divisional heads." },
    { label: "Governance", href: "/about/governance", description: "Board, committees and governance principles." },
    { label: "Editorial independence", href: "/about/editorial-independence", description: "How we protect our newsrooms." },
  ],
};
