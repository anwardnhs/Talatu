"use client";

import Image from "@/components/media/OptimizedImage";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiPause, FiPlay } from "react-icons/fi";
import { introSlides } from "@/data/home-intro";

export function HomeStorySlideshow() {
  const root = useRef(null);
  const [active, setActive] = useState(0);
  const [requested, setRequested] = useState(0);
  const [visited, setVisited] = useState([0]);
  const [constrained, setConstrained] = useState(true);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(true);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(preference.matches);
    setConstrained(
      Boolean(navigator.connection?.saveData) ||
        /(^|slow-)2g$/.test(navigator.connection?.effectiveType || "") ||
        window.matchMedia("(max-width:700px)").matches,
    );
    sync();
    preference.addEventListener("change", sync);
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 },
    );
    observer.observe(root.current);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (paused || hovered || focused || !visible || reduced || constrained)
      return;
    const timer = window.setInterval(() => {
      if (!document.hidden) {
        const next = (active + 1) % introSlides.length;
        setVisited((current) =>
          current.includes(next) ? current : [...current, next],
        );
        setRequested(next);
        if (visited.includes(next)) setActive(next);
      }
    }, 8500);
    return () => window.clearInterval(timer);
  }, [
    paused,
    hovered,
    focused,
    visible,
    reduced,
    constrained,
    active,
    visited,
  ]);

  return (
    <div
      ref={root}
      className="home-story-slideshow"
      aria-roledescription="carousel"
      aria-label="Across Talatu"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setFocused(false);
      }}
    >
      <div className="home-story-images" aria-hidden="true">
        {introSlides.map(
          (slide, index) =>
            visited.includes(index) && (
              <div
                key={slide.image}
                className={`home-story-slide ${index === active ? "is-active" : ""}`}
              >
                <Image
                  src={slide.image}
                  alt=""
                  fill
                  sizes="(max-width: 700px) 100vw, 1200px"
                  quality={78}
                  onLoad={() => {
                    if (index === requested) setActive(index);
                  }}
                  style={{ objectPosition: slide.position }}
                />
              </div>
            ),
        )}
      </div>
      <div className="home-story-shade" />
      <div className="home-story-content">
        <h2 id="intro-heading">
          From the newsroom
          <br />
          to the <em>film set.</em>
        </h2>
        <p>
          Discover how our stories come to life across various media platforms.
        </p>
        <Link href="/businesses">
          Explore our Universe
          <FiArrowUpRight size={22} aria-hidden="true" />
        </Link>
      </div>
      <div className="home-story-controls">
        <div role="group" aria-label="Choose background image">
          {introSlides.map((slide, index) => (
            <button
              key={slide.label}
              type="button"
              aria-label={`Show ${slide.label} image`}
              aria-pressed={index === active}
              onClick={() => {
                setVisited((current) =>
                  current.includes(index) ? current : [...current, index],
                );
                setRequested(index);
                if (visited.includes(index)) setActive(index);
                setPaused(true);
              }}
            >
              <span />
              {slide.label}
            </button>
          ))}
        </div>
        {!reduced && !constrained && (
          <button
            type="button"
            className="home-story-pause"
            onClick={() => setPaused(!paused)}
            aria-label={paused ? "Play slideshow" : "Pause slideshow"}
          >
            {paused ? <FiPlay size={18} /> : <FiPause size={18} />}
          </button>
        )}
      </div>
    </div>
  );
}
