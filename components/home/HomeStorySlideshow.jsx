"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiPause, FiPlay } from "react-icons/fi";
import { introSlides } from "@/data/home-intro";

export function HomeStorySlideshow() {
  const root = useRef(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(true);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(preference.matches);
    sync(); preference.addEventListener("change", sync);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: .15 });
    observer.observe(root.current);
    return () => { observer.disconnect(); preference.removeEventListener("change", sync); };
  }, []);

  useEffect(() => {
    if (paused || hovered || focused || !visible || reduced) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setActive((current) => (current + 1) % introSlides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [paused, hovered, focused, visible, reduced]);

  return (
    <div ref={root} className="home-story-slideshow" aria-roledescription="carousel" aria-label="Across Talatu"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
      <div className="home-story-images" aria-hidden="true">
        {introSlides.map((slide, index) => (
          <div key={slide.image} className={`home-story-slide ${index === active ? "is-active" : ""}`}>
            <Image src={slide.image} alt="" fill sizes="(max-width: 700px) 100vw, 1200px" quality={85} style={{ objectPosition: slide.position }} />
          </div>
        ))}
      </div>
      <div className="home-story-shade" />
      <div className="home-story-content">
        <h2 id="intro-heading">From the newsroom<br />to the <em>film set.</em></h2>
        <p>Television, film, publishing and games.<br />Six companies, working across eight African markets.</p>
        <Link href="/businesses">Our companies<FiArrowUpRight size={22} aria-hidden="true" /></Link>
      </div>
      <div className="home-story-controls">
        <div role="group" aria-label="Choose background image">
          {introSlides.map((slide, index) => (
            <button key={slide.label} type="button" aria-label={`Show ${slide.label} image`} aria-pressed={index === active}
              onClick={() => { setActive(index); setPaused(true); }}><span />{slide.label}</button>
          ))}
        </div>
        {!reduced && <button type="button" className="home-story-pause" onClick={() => setPaused(!paused)} aria-label={paused ? "Play slideshow" : "Pause slideshow"}>
          {paused ? <FiPlay size={18} /> : <FiPause size={18} />}
        </button>}
      </div>
    </div>
  );
}
