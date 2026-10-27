import { createPageMetadata } from "@/lib/seo/metadata";
import Image from "@/components/media/OptimizedImage";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { foundation } from "@/data/foundation";
import { PersonPortrait } from "@/components/people/PersonPortrait";

export const metadata = createPageMetadata({
  title: "Talatu Foundation",
  description:
    "Supporting first-time filmmakers, trainee journalists and media education through Talatu Foundation.",
  path: "/foundation",
});
export default function FoundationPage() {
  return (
    <>
      <header className="foundation-hero">
        <div className="foundation-hero-heading">
          <h1>
            Talatu
            <br />
            <em>Foundation.</em>
          </h1>
        </div>
        <div className="foundation-hero-summary">
          <p>
            The Foundation supports first-time filmmakers, trainee journalists
            and media education through a range of programmes.
          </p>
          <a href="#foundation-programmes">
            Explore programmes
            <span><FiArrowUpRight size={20} aria-hidden="true" /></span>
          </a>
        </div>
        <figure>
          <Image
            src="/images/foundation-community.jpg"
            alt="A group putting their hands together in a community activity"
            fill
            priority
            sizes="(max-width:1280px) 92vw, 1180px"
          />
        </figure>
      </header>
      <section
        className="foundation-programmes"
        aria-labelledby="foundation-programmes"
      >
        <h2 id="foundation-programmes">Where we focus.</h2>
        <div>
          {foundation.programmes.map((programme) => (
            <article key={programme.slug}>
              <p className="foundation-audience">{programme.audience}</p>
              <h3>{programme.name}</h3>
              <p>{programme.description}</p>
              <Link href={`/foundation/programmes/${programme.slug}`}>
                Explore programme
                <FiArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="foundation-funding">
        <div>
          <h2>Funded by Talatu.</h2>
          <p>
            The Foundation receives annual funding from the Group’s pre-tax
            profit to support its programmes.
          </p>
        </div>
        <div>
          <span>FY2025 funding</span>
          <strong>About {foundation.funding.fy2025}</strong>
        </div>
      </section>
      <section
        className="foundation-leadership"
        aria-labelledby="foundation-leadership"
      >
        <PersonPortrait name="Aisha Alhassan" />
        <div>
          <h2 id="foundation-leadership">Foundation leadership</h2>
          <dl>
            <div>
              <dt>Chair</dt>
              <dd>{foundation.chair.name}</dd>
            </div>
            <div>
              <dt>Executive Director</dt>
              <dd>{foundation.executiveDirector.name}</dd>
            </div>
          </dl>
        </div>
      </section>
      <div className="foundation-contact">
        <h2>Ask about a programme.</h2>
        <Link href="/contact?team=foundation">
          Contact the Foundation
          <FiArrowUpRight size={22} aria-hidden="true" />
        </Link>
      </div>
    </>
  );
}
