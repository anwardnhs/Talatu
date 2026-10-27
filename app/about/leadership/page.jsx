import { createPageMetadata } from "@/lib/seo/metadata";
import { BiographyDialog } from "@/components/people/BiographyDialog";
import { PersonPortrait } from "@/components/people/PersonPortrait";
import { executiveChairman, executives, divisionalLeaders } from "@/data/leadership";
import { LeadershipDirectory } from "@/components/about/LeadershipDirectory";
import { AboutRelatedLink } from "@/components/about/AboutRelatedLink";

export const metadata = createPageMetadata({
  title: "Leadership",
  description:
    "Meet Talatu’s Executive Chairman, executive team and divisional leaders.",
  path: "/about/leadership",
});

export default function LeadershipPage() {
  return (
    <>
      <header className="about-masthead leadership-masthead">
        <h1>
          The people
          <br />
          <em>leading Talatu.</em>
        </h1>
      </header>
      <section className="leadership-principals" aria-label="Group leadership">
        <article className="chairman-feature">
          <PersonPortrait name={executiveChairman.name} principal />
          <h2>{executiveChairman.name}</h2>
          <BiographyDialog
            name={executiveChairman.name}
            title={executiveChairman.title}
          />
        </article>
        <article className="ceo-feature">
          <PersonPortrait name="David Saro" principal />
          <h2>David Saro</h2>
          <BiographyDialog name="David Saro" title="Chief Executive Officer" />
        </article>
      </section>
      <LeadershipDirectory
        executives={executives}
        divisionalLeaders={divisionalLeaders}
      />
      <AboutRelatedLink href="/about/governance" label="How we are governed" />
    </>
  );
}
