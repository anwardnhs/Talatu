# Company page palettes and report generation

The company palettes were curated with [Coolors](https://coolors.co/?home). Shared navigation and body typography stay consistent with Talatu.

- CBC: [navy, broadcast red, paper and sand](https://coolors.co/14252f-a92f3a-f4eddf-d7c3aa). A masthead, studio photograph and channel list.
- Odyssey: [charcoal, gold, burgundy and paper](https://coolors.co/171614-c7a776-754043-f4eddf). A cinematic cover with a studio and platform section.
- Jaridah: [green, burgundy, paper and taupe](https://coolors.co/37423d-754043-f4eddf-9a8873). A newspaper masthead and publication index.
- Interactive: [deep green, lime, terracotta and paper](https://coolors.co/18251f-c6d99a-d78e78-f4eddf). An asymmetric game publishing layout.

## PDF reports

Run `node scripts/export-report-data.mjs`, then run `scripts/build-investor-reports.py` with Python and ReportLab installed. The script embeds local Arial and Georgia fonts from Windows, writes deliverables to `output/pdf`, and copies website downloads to `public/reports`. Render with Poppler and inspect every page before publishing. `scripts/check-investor-pdfs.py` checks page counts and key financial text after rendering page PNGs into `tmp/pdfs`.

The four documents are fictional project editions: an eight-page annual report, seven-slide results presentation, two-page financial summary and one-page results release. They reproduce the rounded FY2025 naira figures from the project reference. They do not invent an audit opinion or a complete set of financial statements.
