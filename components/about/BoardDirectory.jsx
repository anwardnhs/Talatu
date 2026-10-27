"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { PersonPortrait } from "@/components/people/PersonPortrait";
import { PersonRole } from "@/components/people/PersonRole";
import { BiographyDialog } from "@/components/people/BiographyDialog";
import "./BoardDirectory.css";

const groups = [
  { value: "Executive", label: "Executive", abbreviation: "ED", tone: "executive" },
  { value: "Independent", label: "Independent", abbreviation: "INED", tone: "independent" },
  { value: "Non-Executive", label: "Non-executive", abbreviation: "NED", tone: "nonexecutive" },
];

export function BoardDirectory({ directors }) {
  return (
    <section className="board-section board-directory" aria-labelledby="board-heading">
      <Tabs defaultValue="Executive">
        <div className="board-directory-heading">
          <h2 id="board-heading">The Board of Directors</h2>
          <TabsList className="board-filters" aria-label="Director appointments">
            {groups.map((group) => (
              <TabsTrigger key={group.value} value={group.value} className={`board-filter board-filter-${group.tone}`} aria-label={`${group.label} directors (${group.abbreviation})`}>
                <span className="board-filter-colour" aria-hidden="true" />
                <span>{group.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {groups.map((group) => (
          <TabsContent key={group.value} value={group.value} className="board-directory-panel">
            <ul className="board-portraits">
              {directors.filter((director) => director.type === group.value).map((director) => (
                <li key={director.name}>
                  <PersonPortrait name={director.name} />
                  <h3>{director.name}</h3>
                  <PersonRole name={director.name} title={director.role} />
                  <BiographyDialog name={director.name} title={director.role} />
                </li>
              ))}
            </ul>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
