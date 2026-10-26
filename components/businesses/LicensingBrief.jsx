"use client";

import { useState } from "react";
import { FiCheck, FiCopy, FiDownload } from "react-icons/fi";
import { Input } from "@/components/ui/input";

export function LicensingBrief({ defaultType = "Consumer products" }) {
  const [brief, setBrief] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  function prepare(event) {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget));
    const labels = { company: "Company", email: "Contact email", type: "Enquiry type", property: "Property or title", territory: "Territories", proposal: "Proposal" };
    setBrief("TALATU LICENSING — ENQUIRY BRIEF\n\n" + Object.entries(labels).map(([key, label]) => `${label}: ${String(values[key] || "Not specified").trim()}`).join("\n\n"));
    setCopied(false); setCopyError(false);
  }

  async function copy() {
    try { await navigator.clipboard.writeText(brief); setCopied(true); setCopyError(false); }
    catch { setCopyError(true); }
  }

  function download() {
    const url = URL.createObjectURL(new Blob([brief], { type: "text/plain;charset=utf-8" }));
    const anchor = document.createElement("a"); anchor.href = url; anchor.download = "talatu-licensing-brief.txt"; anchor.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  return <div className="licensing-brief">
    <form onSubmit={prepare}>
      <div className="licensing-form-grid">
        <label>Company<Input name="company" required autoComplete="organization" maxLength={120} /></label>
        <label>Contact email <span>(optional)</span><Input name="email" type="email" autoComplete="email" maxLength={160} /></label>
        <label>Enquiry type<select name="type" defaultValue={defaultType}><option>Consumer products</option><option>Content licensing</option><option>Interactive adaptation</option><option>Other partnership</option></select></label>
        <label>Property or title<Input name="property" placeholder="e.g. Zuri and the Talking Drum" maxLength={160} /></label>
        <label className="licensing-field-wide">Territories<Input name="territory" required placeholder="Countries or regions" maxLength={200} /></label>
        <label className="licensing-field-wide">Your proposal<textarea name="proposal" required rows={5} maxLength={3000} placeholder="Describe the product or use, audience and proposed timing." /></label>
      </div>
      <button className="company-website-button" type="submit">Prepare brief</button>
    </form>
    {brief && <section className="licensing-brief-result" aria-label="Prepared licensing brief"><h2>Your brief is ready.</h2><pre>{brief}</pre><div><button type="button" onClick={copy}>{copied ? <FiCheck /> : <FiCopy />}{copied ? "Copied" : "Copy brief"}</button><button type="button" onClick={download}><FiDownload />Save as text</button></div><p role="status">{copyError ? "Copy is unavailable. Save the brief as text instead." : copied ? "Brief copied to clipboard." : "Ready to copy or save."}</p></section>}
  </div>;
}
