"use client";

import "./BiographyDialog.css";

import { useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { PersonPortrait } from "@/components/people/PersonPortrait";
import { biographies } from "@/data/biographies";
import { getPersonRole } from "@/data/person-roles";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export function BiographyDialog({ name, title }) {
  const dialogRef = useRef(null);
  const paragraphs = biographies[name];
  const { appointment, responsibility } = getPersonRole(name, title);
  if (!paragraphs?.length) return null;
  return <Dialog><DialogTrigger asChild><button type="button" className="read-bio" aria-label={`Read biography of ${name}`}>Read bio<FiArrowUpRight size={19} aria-hidden="true" /></button></DialogTrigger><DialogContent ref={dialogRef} className="bio-dialog" onOpenAutoFocus={(event) => { event.preventDefault(); dialogRef.current?.querySelector("[data-dialog-close]")?.focus(); }}><div className="bio-dialog-toolbar" aria-hidden="true" /><div className="bio-portrait"><PersonPortrait name={name} modal /></div><div className="bio-reading" tabIndex={0} role="region" aria-label={`${name} biography`}><header><DialogDescription className="bio-role">{appointment}</DialogDescription><DialogTitle className="bio-name">{name}</DialogTitle>{responsibility && <p className="bio-responsibility">{responsibility}</p>}</header><div className="bio-prose">{paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div></div></DialogContent></Dialog>;
}

