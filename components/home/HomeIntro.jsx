import { CompanyFigures } from "@/components/home/CompanyFigures";
import { HomeStorySlideshow } from "@/components/home/HomeStorySlideshow";

export function HomeIntro() {
  return (
    <section
      id="our-story"
      className="editorial-intro"
      aria-labelledby="intro-heading"
    >
      <HomeStorySlideshow />
      <CompanyFigures />
    </section>
  );
}
