import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import { foundationProgrammes, getFoundationProgramme } from "@/data/foundation-programmes";
import { createPageMetadata } from "@/lib/seo/metadata";

export const generateStaticParams = () => foundationProgrammes.map(({ slug }) => ({ slug }));
export async function generateMetadata({ params }) {
  params = await params;
  const programme = getFoundationProgramme(params.slug);
  return createPageMetadata({ title: programme?.name || "Programme not found", description: programme?.summary, path: `/foundation/programmes/${params.slug}`, noIndex: !programme });
}
export default async function FoundationProgrammePage({ params }) {
  params = await params;
  const programme = getFoundationProgramme(params.slug);
  if (!programme) notFound();
  return <div className="programme-page">
    <Link className="programme-back" href="/foundation"><FiArrowLeft aria-hidden="true" />Talatu Foundation</Link>
    <header className="programme-masthead"><p>{programme.audience}</p><h1>{programme.name}</h1><p>{programme.summary}</p></header>
    <div className="programme-layout"><article className="programme-reading">
      <section><h2>What the programme offers</h2><p>{programme.introduction}</p><ul>{programme.support.map((item) => <li key={item}>{item}</li>)}</ul></section>
      <section id="eligibility"><h2>Who can apply</h2><ul>{programme.eligibility.map((item) => <li key={item}>{item}</li>)}</ul></section>
      <section><h2>How selection works</h2><ol>{programme.process.map((item) => <li key={item}>{item}</li>)}</ol><h3>What to prepare</h3><p>{programme.materials}</p></section>
    </article><aside className="programme-dates" aria-labelledby="programme-dates-heading"><span className="programme-status">2027 intake · Planned</span><h2 id="programme-dates-heading">Key dates</h2><dl><div><dt>Applications open</dt><dd>{programme.opens}</dd></div><div><dt>Applications close</dt><dd>{programme.closes}</dd></div><div><dt>Selection decisions</dt><dd>{programme.decisions}</dd></div><div><dt>Programme period</dt><dd>{programme.delivery}</dd></div></dl><p>Applications are not open. These are proposed dates for this fictional programme.</p><Link href={`/contact?team=foundation&programme=${programme.slug}`}>Ask about the programme<FiArrowUpRight aria-hidden="true" /></Link></aside></div>
    <section className="programme-story" aria-labelledby="programme-story-heading"><div><span>Illustrative programme story</span><h2 id="programme-story-heading">{programme.story.title}</h2></div><div><h3>{programme.story.name}</h3><p>{programme.story.text}</p></div></section>
    <nav className="programme-other" aria-label="Other Foundation programmes"><h2>Explore another programme</h2>{foundationProgrammes.filter((item) => item.slug !== programme.slug).map((item) => <Link key={item.slug} href={`/foundation/programmes/${item.slug}`}><span>{item.name}</span><FiArrowUpRight aria-hidden="true" /></Link>)}</nav>
    <p className="programme-project-note">Programme details and stories are fictional. <Link href="/legal/disclaimer">About this project</Link></p>
  </div>;
}
