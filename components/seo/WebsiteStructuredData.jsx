import { absoluteUrl } from "@/lib/seo/metadata";
export function WebsiteStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    url: absoluteUrl("/"),
    name: "Talatu Plc",
    description:
      "Nigerian media and entertainment group. From television and news to publishing, film, series, streaming, sport, licensing and games, we create and distribute content for audiences across Africa and beyond.  ",
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
