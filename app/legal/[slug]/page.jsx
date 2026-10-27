import { createPageMetadata } from "@/lib/seo/metadata";
﻿import Link from "next/link";
import { CookieSettingsButton } from "@/components/privacy/CookieSettingsButton";
import { notFound } from "next/navigation";
import { legalPolicies, policyUpdated, getLegalPolicy } from "@/data/legal-policies";
export const generateStaticParams = () => Object.keys(legalPolicies).map((slug) => ({ slug }));
export async function generateMetadata({ params }) {
  params = await params;
  const policy = getLegalPolicy(params.slug);
  return createPageMetadata({ title:policy?.title || "Page not found", description:policy?.intro, path:`/legal/${params.slug}`, noIndex:!policy });
}
export default async function LegalPage({ params }) {
  params = await params;
  const policy = getLegalPolicy(params.slug);
  if (!policy) notFound();
  return <><header className="legal-masthead"><h1>{policy.title}</h1><p>{policy.intro}</p><span>Last updated {policyUpdated}</span></header>{params.slug === "cookies" && <CookieSettingsButton />}<div className="legal-reading-layout"><nav className="legal-contents" aria-label="On this page"><h2>On this page</h2>{policy.sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}</nav><article className="legal-prose">{policy.sections.map((section) => <section key={section.id} id={section.id}><h2>{section.title}</h2>{section.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}{section.link && <Link href={section.link.href}>{section.link.label}</Link>}</section>)}</article></div></>;
}
