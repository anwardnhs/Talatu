import { createPageMetadata } from "@/lib/seo/metadata";
﻿import { PersonRole } from "@/components/people/PersonRole";
import { BiographyDialog } from "@/components/people/BiographyDialog";
import { PersonPortrait } from "@/components/people/PersonPortrait";
import { governance, board } from "@/data";
import { GovernanceCommittees } from "@/components/about/GovernanceCommittees";
import { AboutRelatedLink } from "@/components/about/AboutRelatedLink";

export const metadata = createPageMetadata({ title: "Governance", description: "Talatu’s Board, independent directors, committees and governance responsibilities." , path: "/about/governance" });

export default function GovernancePage() {
  return <>
    <header className="about-masthead governance-masthead"><div><h1>How Talatu<br /><em>is governed.</em></h1></div><p className="about-lead">{governance.intro}</p></header>
    <section className="board-composition" aria-labelledby="composition-heading"><div><h2 id="composition-heading">The Board<br />at a glance.</h2></div><div className="composition-visual"><dl className="board-composition-groups">{[{ label: "Independent", count: governance.boardComposition.independent, tone: "independent" }, { label: "Executive", count: governance.boardComposition.executive, tone: "executive" }, { label: "Non-executive", count: governance.boardComposition.nonExecutive, tone: "nonexecutive" }].map(({ label, count, tone }) => <div key={tone}><dt>{label}</dt><dd>{count}<span className="board-group-seats" aria-hidden="true">{Array.from({ length: count }, (_, index) => <i className={`seat-${tone}`} key={index} />)}</span></dd></div>)}</dl></div></section>
    <section className="board-section" aria-labelledby="board-heading"><div className="about-section-heading"><h2 id="board-heading">The Board of Directors</h2></div><ul className="board-portraits">{board.map((director) => <li key={director.name}><PersonPortrait name={director.name} /><h3>{director.name}</h3><PersonRole name={director.name} title={director.role} /><BiographyDialog name={director.name} title={director.role} /></li>)}</ul></section>
    <section className="committee-section" aria-labelledby="committees-heading"><div><h2 id="committees-heading">Five standing<br />committees.</h2></div><GovernanceCommittees committees={governance.committees} /></section>
    <AboutRelatedLink href="/about/editorial-independence" label="Editorial independence" />
  </>;
}




