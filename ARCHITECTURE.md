# Talatu Corporate Website: Architecture & MVP

**Type:** Purely corporate (reference: A24, Netflix corporate, Skydance). Image-led, minimal copy, large typography, restrained palette, content-first.
**Stack suggestion:** Astro or Next.js (static export), data from `/data/*.js`, headless CMS (Sanity/Contentful) for Newsroom and Careers later.

## Sitemap

| Route | Page | Data file |
|---|---|---|
| `/` | Home | `pages.js`, `company.js`, `businesses.js`, `titles.js`, `newsroom.js` |
| `/about` | About | `pages.js` |
| `/about/leadership` | Leadership | `leadership.js` |
| `/about/governance` | Governance | `governance.js`, `leadership.js` |
| `/about/editorial-independence` | Editorial Independence | `governance.js` |
| `/businesses` | Businesses index | `businesses.js` |
| `/businesses/[slug]` | Division page (x6) | `businesses.js` |
| `/titles` | Featured titles | `titles.js` |
| `/newsroom` | News index | `newsroom.js` |
| `/newsroom/[slug]` | Article | `newsroom.js` |
| `/investors` | Investor relations | `investors.js` |
| `/foundation` | Talatu Foundation | `foundation.js` |
| `/careers` | Careers | `careers.js` |
| `/contact` | Contact | `contact.js` |
| `/legal/*` | Privacy, Terms, Cookies | static |

**Primary nav:** About · Businesses · Titles · Newsroom · Investors · Foundation · Careers
**Footer:** Company / Businesses / Connect columns, legal links, ticker, social.

## Page blocks

**Home:** Full-bleed hero (showreel) → intro statement → businesses grid → featured titles carousel → stat strip → editorial independence banner → latest news (3) → investor banner.
**Businesses index:** Six large division tiles. **Division page:** hero, summary, brand list, leader, related news.
**Investors:** Highlights grid, five-year revenue chart, revenue by segment, share data, shareholder table, documents, IR contact.
**Governance:** Board composition, board table, committees, principles.
**Newsroom:** Featured story, category filter, list, media contact.

## MVP (Phase 1, launch)

Home · About (+ Leadership, Governance, Editorial Independence) · Businesses (index + 6 division pages) · Investors · Newsroom (index + articles) · Careers (links out to ATS) · Contact (form + directory) · Legal · responsive, SEO, accessibility, analytics, cookie consent.

## Phase 2
Titles page with posters and trailers · Foundation page and application flow · site search · press kit / brand assets download · CMS for newsroom and careers · live share-price feed.

## Phase 3
Regional language versions · investor email alerts · event calendar · division microsites (CBC, Odyssey+).

## Content intentionally removed
History and timeline; family and succession detail; Anwar’s personal life and Northstar holdings; the theme park episode and related litigation; regulatory fines and the FCCPC/Canal+ dispute; Netflix and competitor commentary; campus acreage and construction details; internal org changes; Editorial history.

## Placeholders to complete before launch (marked `TODO` in data files)
Domain, social links, all emails/phones, executive and board bios and photos, title posters/trailers, Editorial Charter and annual report PDFs, share price "as at" date, exact news dates, hero showreel, ATS link.

## Notes to verify
- Market data (share price, market cap) is a snapshot; label with a date or connect a live feed.
- Newsroom items are drafts built from the profile; Corporate Affairs should approve wording.
- "Record revenue" claim in the FY2025 item comes from the profile; confirm before publishing.
