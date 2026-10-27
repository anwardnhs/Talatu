"use client";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import { contactTeams } from "@/data/contact";
import { validateForm } from "@/lib/forms/validation";
import { FormErrors } from "@/components/forms/FormErrors";

const rules = {
  name: { required: "Tell us your name." },
  email: { required: "Add an email address so we can reply.", email: true },
  subject: { required: "Add a subject for your enquiry." },
  message: { required: "Write a short message about your enquiry.", min: 10, message: "Add a little more detail to your message (at least 10 characters)." },
};
export function ContactForm({ defaultTeam = "general", defaultSubject = "" }) {
  const [draft, setDraft] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const attributes = (name) => ({ id: `contact-${name}`, "aria-invalid": Boolean(errors[name]), "aria-describedby": errors[name] ? `contact-${name}-error` : undefined });
  const error = (name) => errors[name] && <span id={`contact-${name}-error`} className="field-error">{errors[name]}</span>;
  function prepare(event) {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget));
    const nextErrors = validateForm(values, rules);
    setErrors(nextErrors); setSubmitted(true); setDraft(null);
    if (Object.keys(nextErrors).length) { document.getElementById(`contact-${Object.keys(nextErrors)[0]}`)?.focus(); return; }
    const team = contactTeams.find((item) => item.id === values.team) || contactTeams[0];
    const body = `${String(values.message).trim()}\n\n${String(values.name).trim()}\n${String(values.email).trim()}`;
    setDraft({ email: team.email, subject: String(values.subject).trim(), body });
  }
  return <div className="contact-form-wrap"><h2 id="write-to-us">Write to us.</h2>
    <form noValidate onSubmit={prepare} onChange={(event) => { setDraft(null); if (submitted) setErrors(validateForm(Object.fromEntries(new FormData(event.currentTarget)), rules)); }}>
      <FormErrors errors={errors} prefix="contact" />
      <div className="contact-fields">
        <label>Your name<Input {...attributes("name")} name="name" required autoComplete="name" maxLength={120} />{error("name")}</label>
        <label>Email address<Input {...attributes("email")} name="email" type="email" required autoComplete="email" maxLength={160} />{error("email")}</label>
        <label>Team<select name="team" defaultValue={contactTeams.some((team) => team.id === defaultTeam) ? defaultTeam : "general"}>{contactTeams.map((team) => <option key={team.id} value={team.id}>{team.name}</option>)}</select></label>
        <label>Subject<Input {...attributes("subject")} name="subject" defaultValue={defaultSubject} required maxLength={160} />{error("subject")}</label>
        <label className="contact-message">Message<textarea {...attributes("message")} name="message" required rows={5} maxLength={4000} />{error("message")}</label>
      </div><button type="submit" className="contact-primary">Prepare email<FiArrowUpRight size={19} aria-hidden="true" /></button>
    </form>
    {draft && <div className="contact-draft" role="status"><p>Your email is ready.</p><a href={`mailto:${draft.email}?subject=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(draft.body)}`}>Open email draft<FiArrowUpRight size={19} aria-hidden="true" /></a><span>Review and send it in your email app. Nothing has been sent yet.</span></div>}
  </div>;
}
