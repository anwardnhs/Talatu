# Project structure

## Where things belong

```text
app/                    Next.js pages, layouts, endpoints and section styles
components/
  layout/               Header, footer and public site shell
  home/                 Homepage sections and slideshow
  about/                About navigation, board tabs and leadership directory
  people/               Portraits, role labels and biography dialogs
  businesses/
    companies/          CBC, Odyssey, Jaridah and Interactive page layouts
                        Shared company navigation and Licensing UI sit one level up
  investors/            Financial figures, charts and report library
  newsroom/             Article cards, search filters and press contact
  contact/              Contact form
  forms/                Shared form error presentation
  feedback/             Missing-page recovery
  privacy/              Cookie banner and preferences
  legal/                Policy navigation
  media/                Optimised image delivery wrapper
  motion/               Count-up and animated currency components
  seo/                  Structured data
  ui/                   Shared shadcn/Radix primitives
content/
  news/                 Editable news entries (JSON)
  reports/              Editable report entries (JSON)
data/                   Company facts, people, imagery and page configuration
lib/                    Content reading, validation, finance, security and SEO
public/
  brand/                Origami T mark
  images/               Supplied originals and selected website images
    optimized/          Generated WebP images and portrait crops
    editor/             Content editor image uploads, when present
  reports/              Website PDF downloads
    editor/             Content editor PDF uploads
scripts/
  assets/               Image and portrait optimisation
  content/              Seed and validate editable content
  reports/              Export report data, generate and inspect PDFs
tests/                  Content, security, feature and local HTTP checks
docs/                   Project guides, canon and setup notes
  reference/            Original architecture brief (historical reference)
```

Component files use PascalCase names matching their exports. Next.js keeps its required `page.jsx`, `layout.jsx` and `route.js` names. shadcn primitives keep their standard lowercase filenames. Component-specific CSS sits beside the component; page-section styles sit in the matching `app/` section. Import data from its specific file rather than a catch-all barrel.

## Common editing tasks

| Change | File or folder |
| --- | --- |
| Header and footer links | `data/site.js`, `components/layout/` |
| Homepage hero | `components/home/HomeHero.jsx`, `data/hero.js` |
| Homepage showcase images | `data/worlds.js` |
| Homepage slideshow | `data/home-intro.js` |
| Audience figures | `data/fictional-impact-metrics.js` |
| About page | `app/about/page.jsx`, `app/about/overview.css` |
| Board tabs | `components/about/BoardDirectory.jsx` and its CSS |
| Executives and board | `data/leadership.js`, `data/governance.js` |
| Portrait assignments and crops | `data/portraits.js`, `data/portrait-images.json` |
| Biography text | `data/biographies.js`, `data/fictional-biography-details.js` |
| Company descriptions and imagery | `data/businesses.js`, `data/company-pages.js` |
| Financial data | `data/investors.js`, `lib/investors/financial-data.js` |
| News and downloadable resources | `/editor`, `content/news/`, `content/reports/` |
| Foundation programmes | `data/foundation-programmes.js` |
| Brand tokens and shared styles | `app/globals.css` |
| Cookie preferences | `components/privacy/` |
| Policy copy | `data/legal-policies.js` |

## Commands

Run commands from the project root.

```sh
npm run dev
npm run build
npm start
npm test
```

`npm test` runs content, security and feature checks. `npm run test:routes` needs a running site on port 3000; `npm run test:security:http` defaults to a production preview on port 3001. Pass another local URL with `-- http://127.0.0.1:PORT`. `npm run content:seed` imports legacy content only when entries do not already exist; it can restore previously deleted entries, so run it intentionally. Normal editing uses `/editor`.

Image optimisation: `python scripts/assets/optimize-images.py` (Pillow required). Original uploads are retained because this script regenerates delivery assets and portrait crops from them.

Reports: `npm run reports:data`, then `python scripts/reports/build-investor-reports.py` (Pillow, ReportLab and Windows Arial/Georgia fonts). Generated working copies go to ignored `tmp/reports/`; downloadable copies remain in `public/reports/`. See `COMPANY-DESIGNS-AND-REPORTS.md` for PDF inspection.

## Content sources

`docs/CANON.md` and `docs/TALATU-PROFILE-SOURCE.txt` retain the project reference. Fictional biography and audience details stay in separate, clearly named data files. `data/news-articles.js` and `data/investor-resources.js` are legacy seed sources; published pages read editable JSON from `content/`.

## Investor API

`GET /api/investors` returns local profile data. Optional `dataset` values are `overview`, `financials`, `revenue` and `shareholders`. Add `format=csv` to download financials, revenue or shareholders. Unsupported queries return HTTP 400. This is fictional project data, not a live exchange feed.

## Local generated folders

`node_modules/`, `.next/`, `.next-dev/`, `.npm-cache/`, `logs/` and `tmp/` are ignored local dependencies, build caches and working files. They are not source folders and should not be committed. Avoid deleting build caches while a server is using them. Obsolete QA screenshots and duplicate report working copies have been removed.
