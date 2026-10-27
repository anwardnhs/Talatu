import Image from "@/components/media/OptimizedImage";
import { portraits } from "@/data/portraits";
import portraitImages from "@/data/portrait-images.json";

export function PersonPortrait({ name, principal = false, modal = false }) {
  const portrait = portraits[name];
  if (!portrait) return null;
  const sizes = modal ? "(max-width: 760px) 50vw, 440px" : principal ? "(max-width: 700px) 90vw, 580px" : "(max-width: 560px) 90vw, (max-width: 900px) 43vw, 370px";
  return <div className={`person-portrait${principal ? " principal-portrait" : ""}`}><Image src={portraitImages[name] || `/images/${portrait.file}`} alt="" fill quality={82} sizes={sizes} style={{ objectPosition: "50% 20%" }} /></div>;
}
