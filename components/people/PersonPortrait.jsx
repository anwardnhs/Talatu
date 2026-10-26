import Image from "next/image";
import { portraits } from "@/data/portraits";

export function PersonPortrait({ name, principal = false, modal = false }) {
  const portrait = portraits[name];
  if (!portrait) return null;
  const sizes = modal ? "(max-width: 760px) 100vw, 900px" : principal ? "(max-width: 700px) 110vw, 700px" : "(max-width: 560px) 110vw, (max-width: 900px) 65vw, 640px";
  return <div className={`person-portrait${principal ? " principal-portrait" : ""}`}><Image src={`/images/${portrait.file}`} alt="" fill quality={95} unoptimized={modal} sizes={sizes} style={{ objectPosition: portrait.position }} /></div>;
}
