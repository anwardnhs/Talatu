# Talatu

Next.js corporate website with an editorial design, based on the supplied Talatu project profile.

## Start locally

Requires Node.js 18.17 or newer and npm.

```sh
npm install
npm run dev
```

Open http://localhost:3000. Build for production with `npm run build`, then run it with `npm start`.

## Find your way around

- [Project structure and common editing tasks](docs/PROJECT-STRUCTURE.md)
- [Project canon and content rules](docs/CANON.md)
- [Original corporate profile](docs/TALATU-PROFILE-SOURCE.txt)
- [Original architecture and roadmap](ARCHITECTURE.md)

Components are organized by area under `components/layout`, `home`, `about`, `people`, `investors`, `newsroom`, `businesses`, `shared`, and `ui`. Component filenames and exports use matching PascalCase names; shadcn primitives keep their standard lowercase filenames. Routes live in `app/`, content in `data/`, and investor data/CSV logic in `lib/investors/`.

## Implemented pages

| Section | Routes |
| --- | --- |
| Home | `/` |
| About | `/about`, `/about/leadership`, `/about/governance`, `/about/editorial-independence` |
| Investors | `/investors`, `/investors/financial-performance`, `/investors/reports`, `/investors/shareholder-information` |
| Foundation & contact | `/foundation`, `/contact` |
| Policies | `/legal/privacy`, `/legal/terms`, `/legal/cookies`, `/legal/disclaimer` |
| Companies | `/businesses`, `/businesses/[slug]` (five company profiles), `/businesses/licensing` and three Licensing subpages |
| Newsroom | `/newsroom`, `/newsroom/[slug]` (five articles) |

Other routes in the original sitemap remain future work. No corporate timeline is planned.

Newsroom content lives in `data/news-articles.js`. The archive supports keyword, category and year filters. Article pages include related coverage and use the years supplied in the profile without inventing exact publication dates or quotations.

## Investor features

- Animated FY2025 naira highlights, an interactive naira earnings chart, reported segment shares.
- Ownership summary, shareholder search and ownership sorting.
- Searchable resource library with working CSV exports and links to governance pages.
- Read-only JSON and CSV API at `/api/investors`; see the [API guide](docs/PROJECT-STRUCTURE.md#investor-data-api).

The API reads the supplied corporate profile; it is not a live exchange or market feed. Undated share-price data is clearly labelled as a reference snapshot. Missing annual reports and PDFs are marked **Not yet available** until real documents are supplied. Do not fabricate audited reports, current prices or publication dates.

## Design and content

Palette: ink `#171614`, coffee `#3A2618`, burgundy `#754043`, taupe `#9A8873`, and green `#37423D`, with warm light surfaces. The homepage hero uses the supplied Lagos photograph behind a transparent header, with a light blue overlay. The header becomes solid on scroll and when menus open.

Supporting text is 14px, navigation/body text 16px, and lead copy 18px. React Icons provides icons. shadcn/Radix primitives power tabs, tables, inputs, biography dialogs, buttons and accordions.

Portraits use shared assignments in `data/portraits.js`. Biographies combine supplied facts with separately maintained, user-authorized fictional backgrounds. Originals in `public/images/` are preserved. The header and footer wordmarks remain text; the supplied origami mark is the favicon.


Company content is in `data/businesses.js` and `data/company-pages.js`. Website names are display-only placeholders opened in dialogs. Talatu Licensing has consumer-product, content-rights and partner-brief pages; the brief form copies or downloads text locally and does not submit personal data. Homepage slideshow images and labels live in `data/home-intro.js`.

## Deployment metadata

Set `NEXT_PUBLIC_SITE_URL` to the actual deployment origin for canonicals and the sitemap. The default .com domain and email addresses are fictional project placeholders. Page descriptions, social previews and the fourth legal tab identify the project as fictional. Cookie preferences use one essential first-party cookie; analytics and advertising tools are not installed.
