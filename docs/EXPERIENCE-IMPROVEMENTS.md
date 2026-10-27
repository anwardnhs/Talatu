# Experience improvements — 27 October 2026

## Delivered
- Newsroom: multiword search, category/year combinations, shareable URL filters, filter reset, clear no-results recovery, related articles and reusable press contact.
- Leadership: individually framed portrait derivatives, more accurate image sizes, concise roles and two-part biographies (Current role / Experience). Existing casting and corporate facts are preserved.
- Homepage: refined spacing, lazy slide delivery and new links to news, financial results and reports.
- Error states: custom global and programme 404s, section recovery pages, retry UI and accessible contact/licensing validation.
- Foundation: three programme pages with eligibility, supporting materials, proposed 2027 dates, selection steps and explicitly illustrative stories. No live application submission.
- Performance: WebP delivery images, capped image quality, appropriate sizes, on-demand slideshow images and paused automatic slideshow on narrow screens / data-saving connections.

## Validation
- Final production build compiled successfully, passed validity checks and generated 42 static pages, including the three Foundation programmes.
- scripts/check-experience.mjs passes search combinations, category-related stories, form validation, planned programme dates, two-paragraph biography structure and asset existence/uniqueness.
- scripts/check-experience-pages.mjs checks 11 successful routes, two missing routes and programme sitemap inclusion. Dynamic missing-route HTML can stream the recovery UI; its hydrated programme recovery was inspected in the browser.
- Browser checks: no-results reset restored the four non-featured articles and cleared query parameters. Contact validation focused the first missing field; a valid Foundation enquiry prepared the correct mailto draft without sending it. David Saro's biography displayed the correct portrait and both content sections with the close control focused.
- In-app browser frames at 360px and 768px: homepage, newsroom empty state, leadership, Content Fund, contact and global missing page had no root horizontal overflow or clipped checked headings/controls. This is viewport testing, not a physical-device certification.

## Asset measurements
64 source images: 171,072,603 bytes before conversion; 8,208,386 bytes for their WebP delivery variants (95.2% smaller in total). These are file-size comparisons, not measured page-speed or network-byte claims. Twenty-five separately framed portrait variants are also generated. Original uploads remain unchanged.

## Project content
New Foundation dates and participant examples are fictional project additions in data/foundation-programmes.js. Programme pages mark the intake as planned, explain applications are not open, and link to the project disclaimer.
