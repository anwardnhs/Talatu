import { absoluteUrl } from "@/lib/seo/metadata";
export function WebsiteStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    url: absoluteUrl("/"),
    name: "Talatu Plc",
    description:
      "Nigerian leading media company, Talatu Plc, is a multimedia platform that produces and distributes news, entertainment, and educational content across various channels. ",
    inLanguage: "en-NG",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
