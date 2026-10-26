"use client";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export function GovernanceCommittees({ committees }) {
  return <Accordion type="multiple" defaultValue={["Audit"]} className="committee-accordion">
    {committees.map((committee) => <AccordionItem value={committee.name} key={committee.name} className="committee-item">
      <AccordionTrigger className="committee-trigger"><span>{committee.name}</span></AccordionTrigger>
      <AccordionContent className="committee-content"><p>{committee.remit}</p><div className="committee-chair"><span>Chaired by</span><strong>{committee.chair}</strong></div></AccordionContent>
    </AccordionItem>)}
  </Accordion>;
}
