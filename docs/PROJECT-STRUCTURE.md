# Project guide

Component files use **PascalCase** names that match their exported React components. Next.js route files retain the required `page.jsx`, `layout.jsx`, and `route.js` names. shadcn primitives retain their standard lowercase names under `components/ui/`.

```text
app/
  layout.jsx                         Shared site layout and metadata
  page.jsx                           Homepage
  globals.css                        Brand tokens, shared styles and homepage
  about/
    layout.jsx                       About navigation and page shell
    about.css                        About and biography styling
    page.jsx                         About Talatu
    leadership/page.jsx
    governance/page.jsx
    editorial-independence/page.jsx
  investors/
    layout.jsx                       Investor navigation and source note
    investors.css                    Investor pages and charts
    page.jsx                         Investor overview
    financial-performance/page.jsx
    reports/page.jsx
    shareholder-information/page.jsx
  api/investors/route.js              Read-only JSON and CSV data endpoint
  newsroom/
    page.jsx                         Featured story and searchable archive
    [slug]/page.jsx                   Individual news articles
    newsroom.css                     Newsroom and article styling

components/
  layout/
    SiteHeader.jsx                   Global navigation and dropdowns
    SiteFooter.jsx
  home/
    HomeHero.jsx                      Lagos cover image and calls to action
    HomeIntro.jsx                     Introduction and animated statistics
    CompanyFigures.jsx                Founding year and Group figures
    CreativeWorlds.jsx                Creative showcase and filters
  about/
    AboutNavigation.jsx
    AboutRelatedLink.jsx
    LeadershipDirectory.jsx          Executive/divisional directory switch
    GovernanceCommittees.jsx
  people/
    PersonPortrait.jsx               Shared image selection and quality
    PersonRole.jsx                   Appointment and responsibility labels
    BiographyDialog.jsx              Accessible portrait biography modal
  investors/
    InvestorNavigation.jsx
    FinancialHighlights.jsx          Animated FY2025 naira financial figures
    EarningsChart.jsx                Interactive FY2025 naira earnings bars
    SegmentRevenue.jsx               Reported business contributions
    ShareholdingChart.jsx            Ownership summary ring and legend
    ShareholderTable.jsx             Searchable, sortable share register
    ReportsLibrary.jsx               Searchable resource library
  shared/
    CountUp.jsx
    AnimatedAmount.jsx               Currency and unit formatting for count-up figures
  newsroom/
    NewsArchive.jsx                   Keyword, category and year filters
    NewsCard.jsx                      Linked article preview
  ui/                                shadcn components; shared primitives

data/                                Content, configuration and project canon
lib/
  investors/financial-data.js         Dataset formatting, growth and CSV exports
  images.js                          Original image registry
  utils.js                           Shared class-name helper
public/
  brand/talatu-mark.png
  images/                            Supplied image originals
docs/
  CANON.md                           Facts and authorized fictional additions
  TALATU-PROFILE-SOURCE.txt           Original supplied corporate profile
  PROJECT-STRUCTURE.md               This guide
```

## Common edits

| Change | Start here |
| --- | --- |
| Header order and footer links | `data/site.js` |
| Header dropdown links and descriptions | `components/layout/SiteHeader.jsx` |
| Homepage hero image | `data/hero.js` |
| Showcase images and copy | `data/worlds.js` |
| Executive names and roles | `data/leadership.js` |
| Portrait assignments | `data/portraits.js` |
| Supplied biography facts | `data/biographies.js` |
| Authorized fictional biography details | `data/fictional-biography-details.js` |
| Board appointment and committee labels | `data/person-roles.js` |
| Financial figures and shareholders | `data/investors.js` |
| Resource titles, links and publication status | `data/investor-resources.js` |
| News articles, images and featured story | `data/news-articles.js` |
| Brand palette and text sizes | `app/globals.css` |

## Investor data API

`GET /api/investors` returns the overview dataset with source context. Optional `dataset` values are `overview`, `financials`, `revenue`, and `shareholders`.

Use `format=csv` with `financials`, `revenue`, or `shareholders` to download a UTF-8 CSV:

```text
/api/investors?dataset=financials&format=csv
/api/investors?dataset=revenue&format=csv
/api/investors?dataset=shareholders&format=csv
```

Unsupported datasets and formats return HTTP 400. The API uses local profile data, requires no API keys and does not provide live market data. Missing market snapshot dates are represented as `null`. Talatu Interactive's precise revenue share is also `null`, with its reported `<1%` label retained.

To publish a supplied report, place the real file in `public/reports/` and update its `href` in `data/investor-resources.js`. A null link renders as **Not yet available**; it never downloads a fabricated PDF.


## Companies and licensing

- Routes: app/businesses/page.jsx, app/businesses/[slug]/page.jsx, and app/businesses/licensing/.
- Licensing subpages: consumer-products, content-licensing, partner-with-us.
- Feature components: components/businesses/CompanyWebsiteDialog.jsx, LicensingNavigation.jsx, LicensingArtwork.jsx, LicensingBrief.jsx.
- Content: data/businesses.js and data/company-pages.js. Website domains are display-only placeholders.
- Shared biography styles now live in components/people/BiographyDialog.css, imported by the dialog component.
- HomeStorySlideshow.jsx uses data/home-intro.js; its photo transitions pause on hover/focus, offer manual selection and respect reduced motion.

## Foundation, Contact and policies

Foundation: app/foundation/page.jsx and data/foundation.js. Contact: app/contact/page.jsx, components/contact/ContactForm.jsx and data/contact.js. Contact drafts are prepared locally and opened through mailto only when the visitor chooses. All corporate email addresses use the reserved .example placeholder domain. Legal pages use app/legal/[slug]/page.jsx, components/legal/LegalNavigation.jsx and data/legal-policies.js. Privacy rights wording references the Nigeria Data Protection Commission: https://ndpc.gov.ng/faqs/. Update policies if actual collection, hosting, analytics or email operations change.

## Consent and SEO

CookieConsent.jsx and CookieConsent.css live in components/privacy/. The first-visit banner opens a preferences dialog and records a versioned talatu_consent cookie for 180 days (SameSite=Lax; Secure over HTTPS). No trackers are installed. Preferences can be reopened from the floating Cookies control or the Cookie Policy.

SEO is centralized in lib/seo/metadata.js and lib/seo/routes.js. Every implemented page has a unique canonical, description, Open Graph and Twitter metadata. app/sitemap.js, app/robots.js, app/manifest.js and app/social-preview/route.jsx provide discovery and social assets. Set NEXT_PUBLIC_SITE_URL to the actual deployment origin before deployment; the default www.talatu.com is a fictional project placeholder. WebSite structured data and search descriptions identify the project as fictional. No invented publication dates or real corporate stock schema are emitted.

## Experience additions
- components/home/HomeUpdates.jsx: newsroom stories and investor routes on the homepage.
- components/newsroom/PressContact.jsx: shared press contact on archive and article pages.
- lib/newsroom/filter-news.js: search matching and related-story selection; archive URL state uses q, category and year.
- data/foundation-programmes.js: fictional 2027 programme details, requirements and illustrative stories.
- app/foundation/programmes/[slug]/: three programme routes and a programme-specific missing page.
- components/feedback/NotFoundContent.jsx and app/error.jsx: recovery links and retry states.
- lib/forms/validation.js and components/forms/FormErrors.jsx: field errors and linked validation summary.
- components/media/OptimizedImage.jsx: shared Next Image wrapper mapping original source names to smaller WebP assets.
- scripts/optimize-images.py: repeatable asset generation with Pillow; originals are preserved. data/portrait-images.json holds individually framed portrait delivery paths.
- scripts/check-experience.mjs and scripts/check-experience-pages.mjs: focused feature and route checks.

Development output is .next-dev/; production output remains .next/. Server logs belong in logs/, outside either build directory.
