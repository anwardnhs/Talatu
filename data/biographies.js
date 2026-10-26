import { fictionalBiographyDetails } from "./fictional-biography-details.js";

// Short biographies based on the project profile, with separately recorded fictional backgrounds.
const profileBiographies = {
  "Anwar Alhassan": [
    "Anwar Alhassan has been Executive Chairman of Talatu Plc since 2021. He chairs the Board and oversees Group strategy, capital allocation and shareholder relations.",
    "He began at Talatu as a planning analyst, later leading CBC Business and Odyssey Entertainment before becoming President, Studios and Entertainment. He holds a BSc in Economics from Ahmadu Bello University, Zaria."
  ],
  "David Saro": [
    "David Saro has been Chief Executive Officer of Talatu Plc since 2021. He runs the Group’s operations and led the consolidation of its production teams at Southstone Campus.",
    "He previously served as Talatu’s Chief Operating Officer and CEO of Odyssey Entertainment. Before joining Talatu as Odyssey’s Chief Content Officer, he was a vice president for international content at Sky."
  ],
  "Femi Ayodeji": [
    "Femi Ayodeji is Chief Financial Officer and an executive director of Talatu Plc. He was appointed CFO in 2021 after working in the Group treasury team."
  ],
  "Aliyu Mania": [
    "Aliyu Mania is President & Chief Operating Officer and an executive director of Talatu Plc. He took the role in 2021 after serving as CEO of Comet Broadcasting Corporation.",
    "He previously ran commercial and operations at CBC Business before becoming head of the channel. His work now covers divisional operating plans, budgets and production facilities."
  ],
  "Ovie Ejiro": [
    "Ovie Ejiro has been Talatu’s Chief Content Officer since 2021. He was the founding CEO of Ironwood Pictures, the Group’s theatrical film label."
  ],
  "Felix Onwudiwe": [
    "Felix Onwudiwe is Chief Product Officer of Talatu Plc. He leads product planning for Odyssey+ and the Group’s other digital services."
  ],
  "Emmanuel Tabi": [
    "Emmanuel Tabi is Chief Technology Officer of Talatu Plc. He oversees broadcast systems, streaming infrastructure and the technology used by production teams."
  ],
  "Tomiye Alagoa": [
    "Tomiye Alagoa is Chief Commercial Officer of Talatu Plc. She leads Group advertising sales, distribution agreements and commercial partnerships."
  ],
  "Temiloluwa Adebayo": [
    "Temiloluwa Adebayo is Chief People Officer of Talatu Plc. She oversees recruitment, employee development, pay and workforce planning across the Group."
  ],
  "Murtala Sule": [
    "Murtala Sule is General Counsel & Company Secretary of Talatu Plc. He leads the legal team and manages Board meetings, company filings and corporate governance procedures."
  ],
  "Naledi Dlamini": [
    "Naledi Dlamini is Chief Corporate Affairs Officer of Talatu Plc. She leads corporate communications, press enquiries and relations with regulators and other stakeholders."
  ],
  "Damilola Shonibare": [
    "Damilola Shonibare is CEO of Comet Broadcasting Corporation. A former CBC News executive and founding head of CBC World, she became acting CEO in 2021 and was confirmed in 2022."
  ],
  "Bode Fasanya": [
    "Bode Fasanya is CEO of Odyssey Entertainment, which includes Ironwood Pictures, Talatu Studios and Odyssey+. He founded Talatu Studios and became Odyssey CEO in 2019."
  ],
  "Thabo Mokoena": [
    "Thabo Mokoena has been CEO of Talatu Africa Media since 2019. He previously served as chief operating officer of a Johannesburg-based pay-TV group."
  ],
  "Salome Ogide": [
    "Salome Ogide is CEO of Talatu Licensing. She oversees licensing agreements for the Group’s characters, programmes and other intellectual property, including rights licensed to Talatu Interactive."
  ],
  "Folarin Adegoke": [
    "Folarin Adegoke has been Managing Director & Publisher of Jaridah Publishing since 2022. He runs the publishing business, including newspaper operations, circulation and subscriptions."
  ],
  "Abdullahi Kurfi": [
    "Abdullahi Kurfi is CEO of Talatu Interactive. He commissions independent developers and manages publishing agreements for games based on the Group’s content library."
  ],
  "Dr. Bukola Adewale": [
    "Dr. Bukola Adewale is Lead Independent Director and chairs Talatu’s Audit Committee. She led the independent directors’ committee that appointed David Saro as CEO in 2021."
  ],
  "Goni Bukar": [
    "Goni Bukar is an independent director and chairs the Governance & Nomination Committee. He oversees Board appointments, succession planning and Board evaluations."
  ],
  "Obinna Ezeh": [
    "Obinna Ezeh is an independent director and chairs Talatu’s Risk Committee. He oversees the review of business risks, major financial commitments and management’s spending authorities."
  ],
  "Hadiza Yerima": [
    "Hadiza Yerima is an independent director and has chaired the Remuneration Committee since joining the Board in 2022. She oversees executive pay, incentives and remuneration policy."
  ],
  "Angela Nwana": [
    "Angela Nwana is an independent director and chairs the Editorial Committee. She joined the Board in 2022 and led the drafting of the Editorial Charter amendment separating advertising from editorial decisions."
  ],
  "Amira Alhassan": [
    "Amira Alhassan is a non-executive director representing the Alhassan Family Office, which manages the family’s shareholding on behalf of Amira and Aisha Alhassan."
  ],
  "Emeka Anyanwu": [
    "Emeka Anyanwu is a non-executive director and represents minority shareholders on Talatu’s Board. His work covers shareholder reporting, voting rights and the treatment of investors outside the controlling family."
  ]
};

export const biographies = Object.fromEntries(
  Object.entries(profileBiographies).map(([name, paragraphs]) => [
    name, [...paragraphs, ...(fictionalBiographyDetails[name] || [])],
  ])
);
