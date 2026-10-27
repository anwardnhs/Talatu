import Image from "@/components/media/OptimizedImage";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { heroArtwork } from "@/data/hero";

export function HomeHero() {
  return (
    <section className="city-hero" aria-labelledby="hero-heading">
      <Image
        src={heroArtwork.image}
        alt={heroArtwork.alt}
        fill
        priority
        quality={90}
        sizes="100vw"
        className="city-hero-image"
        style={{ objectPosition: heroArtwork.position }}
      />
      <div className="city-hero-shade" aria-hidden="true" />
      <div className="city-hero-content">
        <h1 id="hero-heading">
          <span>Stories that</span>
          <span>
            <em>move</em> a <span className="hero-continent">continent.</span>
          </span>
        </h1>
        <p className="city-hero-description">
          Bringing African stories to life across television, film, journalism,
          and games.
        </p>
        <div className="city-hero-actions">
          <Button asChild size="lg">
            <a href="#businesses">
              Explore our Universe
              <span className="city-hero-cta-icon"><FiArrowUpRight size={20} aria-hidden="true" /></span>
            </a>
          </Button>
        </div>
        <div className="city-hero-bottom">
          <span>Lagos, Nigeria</span>
        </div>
      </div>
    </section>
  );
}
