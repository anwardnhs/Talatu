# Content editor

Open http://127.0.0.1:3000/editor with the local development server running. Choose **Open content editor**. No code editing is needed to create stories, upload news images, replace report PDFs, or update titles and descriptions.

## Everyday editing

1. Open News stories or Reports & resources.
2. Select an existing entry or choose Create entry. Keep existing URL names unchanged.
3. Edit the fields and save. New entries start as Draft; Published entries appear on the website.
4. For news, use the preview action after saving to review a local draft. Preview routes are unavailable in production. For remote review, create a branch in Keystatic and use that branch's Vercel preview deployment.
5. To publish, set Publication status to Published and save on the production branch. Vercel rebuilds the website from the GitHub commit. Local edits require a commit and push before they appear online.

Draft status hides the entry from the homepage, newsroom, related stories, reports library and sitemap. This repository is public: draft files and uploaded assets are visible in GitHub and are not suitable for confidential material. Files uploaded with drafts also remain public assets. Do not upload passwords, personal records or unreleased confidential reports.

News image uploads accept JPG, PNG and WebP in the public content reader. Report uploads must be PDFs; a content validation check rejects unsupported file types and unsafe links before deployment. Use images under 2 MB and PDFs under 10 MB. PDFs are uploaded documents: the editor does not rewrite their contents. News paragraphs are plain text and are rendered safely by React.

The report collection includes CSV links and governance pages as well as PDFs. Leave Existing file or page link in place to preserve an existing resource. A new upload takes priority. Featured cover and Reporting period control the report cards; remove a featured cover to keep the resource in the list only.

## Enable online editing once

The hosted editor fails closed until configured. It never falls back to local filesystem writing in production.

1. In `.env.local`, set `NEXT_PUBLIC_KEYSTATIC_STORAGE=github`, then restart the local development server.
2. Visit `/keystatic` and use Keystatic's GitHub setup flow to create a GitHub App for **anwardnhs/Talatu**. The human repository owner must approve the app's access. Restrict installation to this repository.
3. Keystatic generates `KEYSTATIC_GITHUB_CLIENT_ID`, `KEYSTATIC_GITHUB_CLIENT_SECRET`, `KEYSTATIC_SECRET`, and `NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`. Keep secrets in local environment files and Vercel settings, never in Git commits or chat messages.
4. Add these four values to Vercel's Production environment (and Preview if needed), using the deployment's real URL for the GitHub App callback. The callback is `/api/keystatic/github/oauth/callback`. Add a localhost callback too if using GitHub mode locally.
5. Redeploy the site. Visit `/editor`, open the editor, and sign in with a GitHub account that has repository write access.

Production uses GitHub mode, where Keystatic checks GitHub authorization. Account firewall, branch protection and GitHub App approval are hosting/account settings; they are not silently changed by the repository code. Enable GitHub two-factor authentication on editing accounts. Keep the public site readable without login.

## Source and maintenance

Editable content lives in `content/news/*.json` and `content/reports/*.json`; uploads live in `public/images/editor/` and `public/reports/editor/`. `keystatic.config.js` defines editor fields. `lib/content/reader.mjs` supplies only published entries to the public site. Legacy data modules are migration seeds; edit current news and report resources through Keystatic.

`node scripts/content/seed-editor.mjs` imports legacy entries only if their editable files do not already exist; it never overwrites entries. Do not re-seed deleted entries unless intentionally restoring them.

Run `node --test tests/content-editor.test.mjs`, `npm run test:security`, `npm audit --omit=dev` and `npm run build` before deployment. GitHub saves are versioned; restore an earlier commit to recover a mistaken edit. Unpublishing does not delete uploaded files.

Official setup references: [Next.js integration](https://keystatic.com/docs/installation-next-js), [GitHub mode](https://keystatic.com/docs/github-mode).
