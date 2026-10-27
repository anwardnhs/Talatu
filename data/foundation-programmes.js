// Fictional programme development authorised by the user's October 2026 feature request.
// Dates are proposed 2027 windows, not live calls for applications. Stories are fictional.
export const foundationProgrammes = [
  {
    slug: "content-fund", name: "Talatu Content Fund", audience: "First-time filmmakers",
    summary: "Support to take a first short film from a working script to a finished cut.",
    introduction: "A first film needs time, a practical budget and people who can help make it. The Content Fund pairs production support with script feedback, budgeting sessions and mentoring through the edit.",
    support: ["Script development and production planning", "A production budget agreed for the selected project", "Mentoring through filming, editing and delivery"],
    eligibility: ["Nigerian residents aged 18 or over, applying individually or as a small production team.", "A first-time lead director with a scripted short film of up to 20 minutes.", "A working script, a short director’s statement and a realistic budget. Previous film-school attendance is not required."],
    opens: "18 January 2027", closes: "12 March 2027", decisions: "June 2027", delivery: "July–December 2027",
    materials: "A script, director’s statement, draft budget and a brief introduction to the team.",
    process: ["Submit a project outline and the supporting materials.", "Shortlisted teams discuss the script, schedule and budget with the programme team.", "Selected teams agree a production plan before support begins."],
    story: { title: "Finding the film inside a first draft", name: "Mariam’s project", text: "Mariam, a first-time director in Kaduna, brings a 15-minute family drama to a script workshop. With a producer’s help, she reduces the locations, rewrites one difficult scene and builds a budget her small team can deliver. The programme follows the project through the edit, rather than ending at the shoot." },
  },
  {
    slug: "faisal-alhassan-fellows", name: "Faisal Alhassan Fellows", audience: "Early-career journalists",
    summary: "A supervised newsroom placement for journalists at the start of their careers.",
    introduction: "Fellows work alongside editors and reporters while learning how to pitch, verify and produce a story. The placement combines reporting assignments with regular editing sessions and practical training.",
    support: ["A six-month newsroom placement with an assigned editor", "A stipend and agreed reporting expenses", "Training in verification, interviewing and reporting ethics"],
    eligibility: ["Nigerian residents aged 18 or over with up to two years of journalism experience.", "Applicants may be graduates, freelancers or people moving into journalism from another field.", "Two samples of reporting, writing, audio or video. Unpublished work is welcome."],
    opens: "1 February 2027", closes: "26 March 2027", decisions: "May 2027", delivery: "July–December 2027",
    materials: "Two work samples, a short CV and a reporting idea you would like to develop.",
    process: ["Send work samples and a reporting proposal.", "Shortlisted applicants complete a short editing exercise and an interview.", "Fellows are matched with an editor and a placement team."],
    story: { title: "Learning to follow the evidence", name: "Yusuf’s reporting assignment", text: "Yusuf proposes a story about unreliable water supply in his neighbourhood. His editor helps him separate residents’ accounts from records he can verify. He learns to request documents, put questions to the local authority and make corrections before publication. The assignment becomes a practical lesson in reporting fairly." },
  },
  {
    slug: "mukhtar-bello-initiative", name: "Mukhtar Bello Initiative", audience: "Students, teachers and community groups",
    summary: "Media literacy workshops and study support in northern Nigeria.",
    introduction: "The initiative works with schools and community groups to help people assess the information they read and share. Its education strand also supports students entering journalism and media-related courses.",
    support: ["Facilitated workshops on sources, images and online claims", "Teaching materials that schools can reuse", "Study support assessed against course costs and financial need"],
    eligibility: ["Schools, libraries and registered community groups working in northern Nigeria may propose a workshop.", "Study-support applicants must have an offer or current enrolment in a journalism or media-related course at an accredited Nigerian institution.", "Applicants under 18 need a parent or guardian’s involvement. No application fee is charged."],
    opens: "15 February 2027", closes: "30 April 2027", decisions: "July 2027", delivery: "September–December 2027",
    materials: "For workshops: your organisation, location and proposed audience. For study support: course details and a statement of financial need.",
    process: ["Choose a workshop proposal or a study-support enquiry.", "The team reviews the audience, location or course requirements.", "Eligible proposals are discussed before support or workshop dates are agreed."],
    story: { title: "A claim worth checking twice", name: "A classroom workshop in Kano", text: "A teacher brings a widely shared photograph into a workshop. Students compare the caption with the original source, check the date and discuss what changes when the image is taken out of context. They leave with a simple habit: find the source before forwarding the message." },
  },
];
export const getFoundationProgramme = (slug) => foundationProgrammes.find((programme) => programme.slug === slug);
