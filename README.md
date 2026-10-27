# Talatu

A fictional Nigerian media and entertainment group's corporate website, built with Next.js, React, shadcn/Radix and React Icons.

## Run locally

Use Node.js 22 and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For production, run `npm run build` and `npm start`. Run `npm test` for content, security and feature checks.

## Project guide

- [Folder structure, common edits and maintenance commands](docs/PROJECT-STRUCTURE.md)
- [Corporate profile and content rules](docs/CANON.md)
- [Original supplied profile](docs/TALATU-PROFILE-SOURCE.txt)
- [Content editor and deployment setup](docs/CONTENT-EDITOR.md)
- [Security measures and limits](docs/SECURITY.md)
- [Fictional reports and company designs](docs/COMPANY-DESIGNS-AND-REPORTS.md)
- [Original architecture brief](docs/reference/ORIGINAL-ARCHITECTURE.md) (historical reference)

## Find the right folder

| Folder | Purpose |
| --- | --- |
| `app/` | Pages, layouts, section styles and endpoints |
| `components/` | Reusable UI grouped by page or feature |
| `content/` | Editable news and report entries |
| `data/` | Company information, people and image assignments |
| `lib/` | Content access, validation, finance, security and SEO |
| `public/` | Website images, brand mark and PDF downloads |
| `scripts/` | Image, content and report maintenance |
| `tests/` | Automated and local HTTP checks |
| `docs/` | Setup notes, project canon and guides |

## Pages

Home; About Talatu; Leadership; Governance; Editorial Independence; Our Companies and individual company pages; Licensing and its subpages; Investors, Financial Performance, Reports and Shareholder Information; Newsroom and articles; Foundation and programme pages; Contact; Privacy, Terms, Cookies and Disclaimer.

News and reports can be edited at `/editor`. Editable entries live in `content/news/` and `content/reports/`. GitHub-backed production editing requires the environment settings described in the editor guide; it stays locked when credentials are missing.

## Project conventions

Keep the established cream, ink, burgundy, coffee, green and taupe palette. Component filenames match their exported names. Shared portraits and biographies use one mapping across all pages. Supplied original images are retained for regenerating optimised delivery assets. The header and footer wordmarks remain text; the origami T is the favicon.

All company information, financial reports, biographies and contact details form part of a fictional portfolio project. Forms prepare local drafts; company website dialogs display demonstration domains. The investor API uses local project figures. Cookie choices do not install analytics or advertising tools.

Set `NEXT_PUBLIC_SITE_URL` to the deployment origin for canonical URLs and the sitemap. Copy environment variable names from `.env.example`; keep secret values out of Git.
