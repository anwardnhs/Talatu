import Image from "@/components/media/OptimizedImage";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { createPageMetadata } from "@/lib/seo/metadata";
import { company } from "@/data/company";
import "./overview.css";

export const metadata = createPageMetadata({
  title: "About Talatu",
  description: "Talatu Plc is a Nigerian media and entertainment group founded in Kaduna in 1962, with six companies operating across eight African markets.",
  path: "/about",
});

const markets = [
  { region: "West Africa", countries: ["Nigeria", "Ghana"] },
  { region: "East Africa", countries: ["Kenya", "Uganda", "Tanzania", "Rwanda"] },
  { region: "Southern Africa", countries: ["South Africa", "Zambia"] },
  { region: "North Africa", countries: ["Egypt"], associate: true },
];

export default function AboutPage() {
  return <div className="talatu-overview">
    <header className="overview-hero">
      <div className="overview-hero-copy">
        <h1>A Nigerian group.<br /><em>An African outlook.</em></h1>
        <p>Talatu Plc is home to television channels, news titles, film studios and digital platforms. Our companies tell African stories in print, on screen and online.</p>
        <Link className="overview-primary-link" href="/businesses">Explore our companies<FiArrowUpRight aria-hidden="true" /></Link>
      </div>
      <figure className="overview-campus"><Image src="/images/southstone-campus-about.webp" alt="Southstone Campus, Talatu’s operational headquarters in Lagos" fill priority quality={85} sizes="(max-width:760px) 120vw, (max-width:1280px) 75vw, 900px" style={{ objectPosition:"48% 50%" }} /><figcaption>Southstone Campus, Lagos</figcaption></figure>
    </header>

    <section className="overview-origins" aria-labelledby="overview-origins-heading">
      <h2 id="overview-origins-heading">It started<br /><em>with a newspaper.</em></h2>
      <div className="overview-prose"><p>We began in Kaduna in {company.founded} as Jaridah Media Company. Newspapers remain part of who we are, alongside our work in television, film and digital entertainment.</p><p>Talatu Plc is owned by the Alhassan family and other shareholders, and is listed on the Nigerian Exchange as TALATU.</p><Link className="overview-text-link" href="/investors">Investor information<FiArrowUpRight aria-hidden="true" /></Link></div>
    </section>

    <section className="overview-markets" aria-labelledby="overview-markets-heading">
      <div className="overview-markets-heading"><h2 id="overview-markets-heading">At work<br /><em>across Africa.</em></h2></div>
      <div className="overview-regions">{markets.map(({ region, countries, associate }) => <section key={region} aria-label={region}><h3>{region}</h3><ul>{countries.map(country => <li key={country} aria-label={associate ? `${country}, associate market` : undefined}>{country}</li>)}</ul></section>)}</div>
    </section>

    <div className="overview-connections"><section className="overview-offices" aria-labelledby="overview-offices-heading">
      <h2 id="overview-offices-heading">At home<br /><em>in Lagos.</em></h2>
      <div className="overview-office-list"><article><span>Corporate headquarters</span><h3>Talatu House</h3><p>Ikoyi, Lagos</p></article><article><span>Operational headquarters</span><h3>Southstone Campus</h3><p>Lekki–Epe Expressway, Lagos</p></article></div>
      <Link className="overview-text-link" href="/contact">Contact Talatu<FiArrowUpRight aria-hidden="true" /></Link>
    </section>

    <nav className="overview-next" aria-label="More about Talatu"><Link href="/about/leadership"><strong>Leadership</strong><FiArrowUpRight aria-hidden="true" /></Link><Link href="/about/editorial-independence"><strong>Editorial independence</strong><FiArrowUpRight aria-hidden="true" /></Link></nav></div>
  </div>;
}
