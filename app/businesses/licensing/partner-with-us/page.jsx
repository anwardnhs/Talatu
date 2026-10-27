import { createPageMetadata } from "@/lib/seo/metadata";
﻿import { LicensingBrief } from "@/components/businesses/LicensingBrief";
export const metadata = createPageMetadata({ title: "Work With Us", description: "Prepare a product, content or interactive licensing proposal for Talatu Licensing." , path: "/businesses/licensing/partner-with-us" });
export default async function LicensingPartnerPage({ searchParams }) {
  searchParams = await searchParams;
  return <><header className="licensing-subheading"><p className="company-category">Work with Talatu Licensing</p><h1>What do you<br /><em>have in mind?</em></h1></header><LicensingBrief defaultType={searchParams?.type} /></>;
}
