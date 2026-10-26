import { absoluteUrl } from "@/lib/seo/metadata";
export function WebsiteStructuredData() {
  const schema = { "@context":"https://schema.org", "@type":"WebSite", "@id":absoluteUrl("/#website"), url:absoluteUrl("/"), name:"Talatu — Fictional Project", description:"A fictional Nigerian media and entertainment website created as a design and development project.", inLanguage:"en-NG" };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(schema).replace(/</g,"\\u003c") }} />;
}
