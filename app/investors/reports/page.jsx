import { createPageMetadata } from "@/lib/seo/metadata";
﻿import { ReportsLibrary } from "@/components/investors/ReportsLibrary";

export const metadata = createPageMetadata({ title: "Reports & Resources", description: "Find Talatu Plc’s financial data exports, shareholder data and governance resources." , path: "/investors/reports" });

export default function ReportsPage() {
  return <><header className="investor-masthead"><h1>Reports<br /><em>& resources.</em></h1><p className="investor-lead">Download Talatu Plc annual reports, results presentations and financial data.</p></header><ReportsLibrary /></>;
}
