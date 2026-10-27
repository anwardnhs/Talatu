import { createPageMetadata } from "@/lib/seo/metadata";
import { governance, board } from "@/data";
import { BoardDirectory } from "@/components/about/BoardDirectory";
import { GovernanceCommittees } from "@/components/about/GovernanceCommittees";
import { AboutRelatedLink } from "@/components/about/AboutRelatedLink";

export const metadata = createPageMetadata({
  title: "Governance",
  description:
    "Talatu’s Board, independent directors, committees and governance responsibilities.",
  path: "/about/governance",
});

export default function GovernancePage() {
  return (
    <>
      <header className="about-masthead governance-masthead">
        <div>
          <h1>
            How Talatu
            <br />
            <em>is governed.</em>
          </h1>
        </div>
        <p className="about-lead">{governance.intro}</p>
      </header>
      <BoardDirectory directors={board} />
      <section
        className="committee-section"
        aria-labelledby="committees-heading"
      >
        <div>
          <h2 id="committees-heading">
            Five standing
            <br />
            committees.
          </h2>
        </div>
        <GovernanceCommittees committees={governance.committees} />
      </section>
      <AboutRelatedLink
        href="/about/editorial-independence"
        label="Editorial independence"
      />
    </>
  );
}
