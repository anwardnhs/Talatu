"use client";

import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import { contactTeams } from "@/data/contact";

export function ContactForm({ defaultTeam = "general", defaultSubject = "" }) {
  const [draft, setDraft] = useState(null);
  function prepare(event) {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget));
    const team = contactTeams.find((item) => item.id === values.team) || contactTeams[0];
    const body = `${String(values.message).trim()}\n\n${String(values.name).trim()}\n${String(values.email).trim()}`;
    setDraft({ email: team.email, subject: String(values.subject).trim(), body });
  }
  return <div className="contact-form-wrap">
    <h2 id="write-to-us">Write to us.</h2>
    <form onSubmit={prepare} onChange={() => setDraft(null)}>
      <div className="contact-fields">
        <label>Your name<Input name="name" required autoComplete="name" maxLength={120} /></label>
        <label>Email address<Input name="email" type="email" required autoComplete="email" maxLength={160} /></label>
        <label>Team<select name="team" defaultValue={contactTeams.some((team) => team.id === defaultTeam) ? defaultTeam : "general"}>{contactTeams.map((team) => <option key={team.id} value={team.id}>{team.name}</option>)}</select></label>
        <label>Subject<Input name="subject" defaultValue={defaultSubject} required maxLength={160} /></label>
        <label className="contact-message">Message<textarea name="message" required rows={5} maxLength={4000} /></label>
      </div>
      <button type="submit" className="contact-primary">Prepare email<FiArrowUpRight size={19} aria-hidden="true" /></button>
    </form>
    {draft && <div className="contact-draft" role="status"><p>Your email is ready.</p><a href={`mailto:${draft.email}?subject=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(draft.body)}`}>Open email draft<FiArrowUpRight size={19} aria-hidden="true" /></a><span>You can review and send it in your email app.</span></div>}
  </div>;
}
