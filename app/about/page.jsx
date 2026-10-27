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
];

export default function AboutPage() {
  return <div className="talatu-overview">
    <header className="overview-hero">
      <div className="overview-hero-copy">
        <h1>A Nigerian group.<br /><em>An African outlook.</em></h1>
        <p>Talatu Plc is a media and entertainment group headquartered in Lagos. Our six companies make, publish and distribute content for audiences across Africa.</p>
        <Link className="overview-primary-link" href="/businesses">Explore our companies<FiArrowUpRight aria-hidden="true" /></Link>
      </div>
      <figure className="overview-campus"><Image src="/images/Golden-Hour Media Campus Panorama.png" alt="Southstone Campus, Talatu’s operational headquarters in Lagos" fill priority sizes="(max-width: 760px) 92vw, (max-width:1280px) 48vw, 590px" style={{ objectPosition:"54% 50%" }} /><figcaption>Southstone Campus, Lagos</figcaption></figure>
    </header>

    <section className="overview-origins" aria-labelledby="overview-origins-heading">
      <h2 id="overview-origins-heading">It started<br /><em>with a newspaper.</em></h2>
      <div className="overview-prose"><p>Talatu began as Jaridah Media Company in Kaduna in {company.founded}. Publishing remains part of the Group, alongside television, film, streaming, licensing and games.</p><p>Today, Talatu Plc is listed on the Nigerian Exchange as TALATU. Its shareholders include the Alhassan family, institutional investors and members of the public.</p><Link className="overview-text-link" href="/investors">Investor information<FiArrowUpRight aria-hidden="true" /></Link></div>
    </section>

    <section className="overview-markets" aria-labelledby="overview-markets-heading">
      <div className="overview-markets-heading"><h2 id="overview-markets-heading">At work<br /><em>across Africa.</em></h2><p>Eight operating markets.<br />Nigeria is our home market.</p></div>
      <div className="overview-regions">{markets.map(({ region, countries }) => <section key={region} aria-label={region}><h3>{region}</h3><ul>{countries.map(country => <li key={country}>{country}</li>)}</ul></section>)}</div>
      <div className="overview-associate"><span>In Egypt</span><p>Talatu Africa Media also holds an associate interest in Cairo-based Red Sea Pictures, which produces Arabic-language series.</p></div>
    </section>

    <section className="overview-offices" aria-labelledby="overview-offices-heading">
      <h2 id="overview-offices-heading">Based in <em>Lagos.</em></h2>
      <div className="overview-office-list"><article><span>Corporate headquarters</span><h3>Talatu House</h3><p>Ikoyi, Lagos</p></article><article><span>Operational headquarters</span><h3>Southstone Campus</h3><p>Lekki–Epe Expressway, Lagos</p></article></div>
      <Link className="overview-text-link" href="/contact">Contact Talatu<FiArrowUpRight aria-hidden="true" /></Link>
    </section>

    <nav className="overview-next" aria-label="More about Talatu"><Link href="/about/leadership"><span>Leadership</span><strong>Meet the people<br />behind the Group.</strong><FiArrowUpRight aria-hidden="true" /></Link><Link href="/about/editorial-independence"><span>Editorial independence</span><strong>How we protect<br />newsroom decisions.</strong><FiArrowUpRight aria-hidden="true" /></Link></nav>
  </div>;
}
