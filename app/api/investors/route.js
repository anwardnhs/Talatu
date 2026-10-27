import { getInvestorCsv, getInvestorDataset } from "@/lib/investors/financial-data";

export function GET(request) {
  const { searchParams } = new URL(request.url);
  const dataset = searchParams.get("dataset") || "overview";
  const format = searchParams.get("format") || "json";
  if (!["overview", "financials", "shareholders", "revenue"].includes(dataset) || !["json", "csv"].includes(format)) {
    return Response.json({ error: "Unknown dataset or format." }, { status: 400 });
  }
  if (format === "csv") {
    if (dataset === "overview") return Response.json({ error: "Choose financials, revenue or shareholders for CSV export." }, { status: 400 });
    return new Response(getInvestorCsv(dataset), { headers: { "Content-Type": "text/csv; charset=utf-8", "Content-Disposition": `attachment; filename="talatu-plc-${dataset}-fy2025.csv"`, "Cache-Control": "public, max-age=3600" } });
  }
  return Response.json(getInvestorDataset(dataset), { headers: { "Cache-Control": "public, max-age=3600" } });
}
