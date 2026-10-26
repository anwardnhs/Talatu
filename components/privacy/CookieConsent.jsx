"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FiSliders } from "react-icons/fi";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import "./CookieConsent.css";

const cookieName = "talatu_consent";
const maxAge = 60 * 60 * 24 * 180;
function readChoice() {
  try {
    const value = document.cookie.split("; ").find((item) => item.startsWith(cookieName + "="));
    if (!value) return null;
    const saved = JSON.parse(decodeURIComponent(value.slice(cookieName.length + 1)));
    return saved.version === 1 && ["all", "essential"].includes(saved.choice) ? saved.choice : null;
  } catch { return null; }
}

export function CookieConsent() {
  const [ready, setReady] = useState(false);
  const [choice, setChoice] = useState(null);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    setChoice(readChoice()); setReady(true);
    const show = () => setOpen(true);
    window.addEventListener("talatu:cookie-settings", show);
    return () => window.removeEventListener("talatu:cookie-settings", show);
  }, []);
  function save(next) {
    try {
      document.cookie = `${cookieName}=${encodeURIComponent(JSON.stringify({ version: 1, choice: next }))}; Max-Age=${maxAge}; Path=/; SameSite=Lax${location.protocol === "https:" ? "; Secure" : ""}`;
      setMessage(readChoice() === next ? "Cookie choice saved." : "Your choice applies to this visit.");
    } catch { setMessage("Your choice applies to this visit."); }
    setChoice(next); setOpen(false);
  }
  if (!ready) return null;
  return <>
    {!choice && <section className="cookie-banner" aria-label="Cookie choices"><div><h2>Your cookie choices.</h2><p>We use one cookie to remember your choice. No analytics or advertising trackers are active. <Link href="/legal/cookies">Cookie Policy</Link></p></div><div className="cookie-actions"><button onClick={() => setOpen(true)} type="button">Preferences</button><button onClick={() => save("essential")} type="button">Essential only</button><button onClick={() => save("all")} type="button" className="cookie-primary">Accept all</button></div></section>}
    {choice && <button type="button" className="cookie-settings-button" aria-label="Cookie settings" onClick={() => setOpen(true)}><FiSliders size={18} aria-hidden="true" /><span>Cookies</span></button>}
    <span className="sr-only" role="status">{message}</span>
    <Dialog open={open} onOpenChange={setOpen}><DialogContent className="cookie-dialog"><DialogTitle>Cookie preferences</DialogTitle><DialogDescription>Choose what works for you. You can change this at any time.</DialogDescription><div className="cookie-category"><div><h3>Essential</h3><p>Remembers your cookie choice for six months.</p></div><span>Always on</span></div><div className="cookie-category"><div><h3>Analytics</h3><p>No analytics tools are installed.</p></div><span>Not used</span></div><div className="cookie-category"><div><h3>Advertising</h3><p>No advertising trackers are installed.</p></div><span>Not used</span></div><Link href="/legal/cookies" onClick={() => setOpen(false)}>Read the Cookie Policy</Link><div className="cookie-dialog-actions"><button type="button" onClick={() => save("essential")}>Essential only</button><button type="button" className="cookie-primary" onClick={() => save("all")}>Accept all</button></div></DialogContent></Dialog>
  </>;
}
