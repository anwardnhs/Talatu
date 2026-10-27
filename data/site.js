// Global site config: brand, navigation, footer, SEO defaults.
export const site = {
  name: "Talatu",
  legalName: "Talatu Plc",
  ticker: "NGX: TALATU",
  tagline: "Stories that move a continent.",
  description:
    "Talatu is a Nigerian media and entertainment group spanning television, news, publishing, film, series, streaming, sport, licensing and games.",
  url: "https://www.talatu.com", // TODO: confirm domain
  seo: { titleTemplate: "%s | Talatu", ogImage: "/social-preview" },
  social: [
    { label: "LinkedIn", url: "" }, // TODO
    { label: "X", url: "" },
    { label: "Instagram", url: "" },
    { label: "YouTube", url: "" },
  ],
};

export const nav = {
  primary: [
    { label: "About", href: "/about" },
    { label: "Businesses", href: "/businesses" },
    { label: "Investors", href: "/investors" },
    { label: "Newsroom", href: "/newsroom" },
  ],
  footer: [
    { heading: "Company", links: [
      { label: "About", href: "/about" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Governance", href: "/about/governance" },
      { label: "Editorial Independence", href: "/about/editorial-independence" },
      { label: "Foundation", href: "/foundation" },
    ]},
    { heading: "Businesses", links: [
      { label: "Broadcasting", href: "/businesses/broadcasting" },
      { label: "Publishing", href: "/businesses/publishing" },
      { label: "Entertainment", href: "/businesses/entertainment" },
      { label: "Africa Media", href: "/businesses/africa-media" },
      { label: "Licensing", href: "/businesses/licensing" },
      { label: "Interactive", href: "/businesses/interactive" },
    ]},
    { heading: "Connect", links: [
      { label: "Newsroom", href: "/newsroom" },
      { label: "Investors", href: "/investors" },
      { label: "Careers enquiries", href: "mailto:careers@talatu.com" },
      { label: "Contact", href: "/contact" },
    ]},
  ],
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms of Use", href: "/legal/terms" },
    { label: "Cookie Policy", href: "/legal/cookies" },
  ],
  copyright: "© 2026 Talatu Plc. All rights reserved.",
};
