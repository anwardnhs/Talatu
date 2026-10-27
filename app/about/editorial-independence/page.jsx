import { createPageMetadata } from "@/lib/seo/metadata";
import Image from "@/components/media/OptimizedImage";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { editorialIndependence } from "@/data";
import { AboutRelatedLink } from "@/components/about/AboutRelatedLink";

export const metadata = createPageMetadata({
  title: "Editorial Independence",
  description:
    "How Talatu protects independent journalism through its Editorial Charter, newsroom commitments and Board oversight.",
  path: "/about/editorial-independence",
});

export default function EditorialIndependencePage() {
  return (
    <>
      <header className="independence-masthead">
        <h1>
          Editors decide
          <br />
          what we <em>publish.</em>
        </h1>
        <p>{editorialIndependence.intro}</p>
      </header>
      <figure className="independence-image">
        <Image
          src="/images/Talatu’s Nigerian Newspaper Collection.png"
          alt="A collection of Talatu newspapers including The Comet, The Jaridah and National Review of Affairs"
          fill
          priority
          sizes="(max-width: 1280px) 95vw, 1200px"
        />
      </figure>
      <section
        className="editorial-commitments"
        aria-labelledby="commitments-heading"
      >
        <div className="commitments-intro">
          <h2 id="commitments-heading">
            Editorial <em>commitments.</em>
          </h2>
          <p>
            Talatu’s Editorial Charter outlines the principles that guide our
            journalism. Our newsroom is committed to upholding these principles
            in every story we publish.
          </p>
        </div>
        <ol>
          {editorialIndependence.commitments.map((commitment, index) => (
            <li key={commitment.title}>
              <span className="commitment-number" aria-hidden="true">
                0{index + 1}
              </span>
              <div>
                <h3>{commitment.title}</h3>
                <p>{commitment.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section
        className="editorial-oversight"
        aria-labelledby="oversight-heading"
      >
        <div>
          <h2 id="oversight-heading">
            Editorial <em>oversight.</em>
          </h2>
          <p>
            Leadership and governance structures at Talatu are designed to
            protect the independence of our newsroom. The Board of Directors and
            its committees provide oversight of our editorial operations,
            ensuring that our journalists can report freely and without
            interference.
          </p>
          <Link href="/about/governance#committees-heading">
            Board committees
            <FiArrowUpRight size={20} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <AboutRelatedLink href="/about" label="About Talatu" />
    </>
  );
}
