"use client";
import { useState } from "react";
import { PersonPortrait } from "@/components/people/PersonPortrait";
import { PersonRole } from "@/components/people/PersonRole";
import { BiographyDialog } from "@/components/people/BiographyDialog";

export function LeadershipDirectory({ executives, divisionalLeaders }) {
  const [team, setTeam] = useState("executive");
  const people = team === "executive" ? executives : divisionalLeaders;
  return (
    <section
      className="leadership-directory"
      aria-labelledby="directory-heading"
    >
      <div className="directory-heading">
        <h2 id="directory-heading">
          {team === "executive" ? "Executive team" : "Company leaders"}
        </h2>
        <div
          role="group"
          aria-label="Choose leadership team"
          className="directory-controls"
        >
          <button
            type="button"
            aria-pressed={team === "executive"}
            onClick={() => setTeam("executive")}
          >
            Executive team
          </button>
          <button
            type="button"
            aria-pressed={team === "divisional"}
            onClick={() => setTeam("divisional")}
          >
            Company leaders
          </button>
        </div>
      </div>
      <ul className="people-directory">
        {people.map((person) => (
          <li key={person.name}>
            <PersonPortrait name={person.name} />
            <div>
              <h3>{person.name}</h3>
              <PersonRole name={person.name} title={person.title} />
              <BiographyDialog name={person.name} title={person.title} />
            </div>
          </li>
        ))}
      </ul>
      <span className="sr-only" role="status">
        {people.length}{" "}
        {team === "executive" ? "executive team members" : "divisional leaders"}{" "}
        shown.
      </span>
    </section>
  );
}
