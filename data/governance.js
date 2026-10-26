export const governance = {
  intro:
    "Talatu’s 11-member Board oversees strategy, financial reporting and executive appointments. Its five standing committees cover audit, risk, nominations, remuneration and editorial independence.",
  boardComposition: { total: 11, executive: 4, independent: 5, nonExecutive: 2 },
  committees: [
    { name: "Audit", chair: "Dr. Bukola Adewale", remit: "Financial reporting, internal controls and external audit." },
    { name: "Risk", chair: "Obinna Ezeh", remit: "Enterprise risk, financial exposure and delegated authorities." },
    { name: "Governance & Nomination", chair: "Goni Bukar", remit: "Board composition, succession and governance standards." },
    { name: "Remuneration", chair: "Hadiza Yerima", remit: "Executive and Board remuneration policy." },
    { name: "Editorial", chair: "Angela Nwana", remit: "Oversight of editorial independence across Group titles and platforms." },
  ],
  principles: [
    { title: "Independent CEO appointment", text: "Only Talatu’s five independent directors vote on CEO appointments. The Alhassan Family Office and the two Westbridge companies have no vote on that decision." },
    { title: "Lead Independent Director", text: "Dr. Bukola Adewale is Lead Independent Director and chairs the Audit Committee. She leads independent oversight of the Executive Chairman and management." },
    { title: "Defined chairman remit", text: "Executive Chairman Anwar Alhassan oversees capital allocation, shareholder relations, strategy and content rights. CEO David Saro runs operations. Editors make editorial decisions." },
    { title: "Divisional boards", text: "Jaridah Publishing and Comet Broadcasting Corporation each have a divisional board. Their CEOs run the businesses and their editors decide coverage. The Talatu Board oversees the Group, with editorial safeguards monitored by its Editorial Committee." },
  ],
  codeNote:
    "The Executive Chairman structure departs from the NCCG 2018 preference for a non-executive chair.",
};

export const editorialIndependence = {
  headline: "Editors decide what we publish.",
  intro:
    "Journalism is central to Talatu. Our Editorial Charter protects the independence of every newsroom in the Group, and our Board holds management accountable for upholding it.",
  commitments: [
    { title: "Freedom from owner interference", text: "Editors are guaranteed freedom from interference by owners and management in editorial decisions." },
    { title: "No party endorsements", text: "Group titles and platforms do not endorse political parties or candidates." },
    { title: "Advertising kept separate", text: "Advertising is separated from editorial decision-making." },
    { title: "Protected investment in journalism", text: "A minimum budget is set for investigative work and for CBC’s verification desk." },
    { title: "Board-level oversight", text: "The Editorial Committee is a full committee of the Board, reporting on adherence to the Charter." },
  ],
  documents: [{ label: "Editorial Charter (PDF)", url: "" }], // TODO
};
