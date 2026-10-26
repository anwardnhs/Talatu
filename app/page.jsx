import { createPageMetadata } from "@/lib/seo/metadata";
﻿import { HomeHero } from "@/components/home/HomeHero";
import { CreativeWorlds } from "@/components/home/CreativeWorlds";
import { HomeIntro } from "@/components/home/HomeIntro";

export default function HomePage() {
  return <main id="main-content" tabIndex={-1} className="homepage-main"><HomeHero /><div className="homepage-content"><HomeIntro /><CreativeWorlds /></div></main>;
}

export const metadata = createPageMetadata({ path: "/", description: "Explore Talatu’s companies, stories, leadership and Foundation." });
