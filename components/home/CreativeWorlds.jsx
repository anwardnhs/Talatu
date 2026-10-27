"use client";

import Image from "@/components/media/OptimizedImage";
import { useState } from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { worlds } from "@/data/worlds";

function EditorialArtwork({ type }) {
  return (
    <svg
      className={`world-art world-art-${type}`}
      viewBox="0 0 640 420"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {type === "film" && (
        <g transform="rotate(-16 320 210)">
          <rect x="70" y="90" width="500" height="240" rx="8" />
          <path d="M70 122h500M70 298h500M235 122v176M405 122v176" />
          {Array.from({ length: 12 }, (_, i) => (
            <g key={i}>
              <rect x={85 + i * 40} y="100" width="18" height="12" rx="2" />
              <rect x={85 + i * 40} y="308" width="18" height="12" rx="2" />
            </g>
          ))}
          <circle cx="320" cy="210" r="56" />
          <path d="m307 185 36 25-36 25z" />
        </g>
      )}
      {type === "signal" && (
        <g>
          <rect x="169" y="95" width="302" height="230" rx="48" />
          <rect x="188" y="114" width="264" height="192" rx="35" />
          <path d="m280 54 40 41 46-57M280 347h80" />
          <ellipse cx="320" cy="210" rx="95" ry="76" />
          <ellipse cx="320" cy="210" rx="62" ry="76" />
          <ellipse cx="320" cy="210" rx="26" ry="76" />
          <path d="M225 210h190M238 170h164M238 250h164" />
        </g>
      )}
      {type === "play" && (
        <g>
          <circle cx="320" cy="210" r="133" />
          <circle cx="320" cy="210" r="107" strokeDasharray="3 9" />
          <circle cx="320" cy="210" r="80" />
          <path d="m299 172 63 38-63 38z" />
          <path d="M140 210h-40M500 210h40M320 30v-30M320 390v30" />
        </g>
      )}
      {type === "pages" && (
        <g transform="rotate(-10 320 210)">
          <path d="M104 95h180q36 0 36 30 0-30 36-30h180v230H356q-36 0-36 20-0-20-36-20H104zM320 125v220" />
          <path d="M136 136h142M136 155h142M136 244h142M136 263h142M136 282h86M360 136h142M360 155h142M360 174h142M360 193h142M360 263h142M360 282h110" />
          <rect x="136" y="177" width="142" height="45" />
          <rect x="360" y="216" width="142" height="28" />
        </g>
      )}
      {type === "orbit" && (
        <g>
          <ellipse
            cx="320"
            cy="210"
            rx="207"
            ry="73"
            transform="rotate(-25 320 210)"
          />
          <ellipse
            cx="320"
            cy="210"
            rx="207"
            ry="73"
            transform="rotate(35 320 210)"
          />
          <ellipse
            cx="320"
            cy="210"
            rx="170"
            ry="73"
            transform="rotate(90 320 210)"
          />
          <path d="m320 153 16 38 41 4-31 27 9 40-35-21-35 21 9-40-31-27 41-4z" />
          <circle cx="134" cy="257" r="10" />
          <circle cx="473" cy="301" r="7" />
        </g>
      )}
      {type === "game" && (
        <g>
          <path d="M242 145h156q32 0 43 32l37 110q10 34-18 41-15 4-29-10l-51-48H260l-51 48q-14 14-29 10-28-7-18-41l37-110q11-32 43-32z" />
          <path d="M320 145v-37q0-26 26-26h30" />
          <path d="M234 190v58M205 219h58" />
          <circle cx="392" cy="199" r="11" />
          <circle cx="421" cy="228" r="11" />
          <circle cx="296" cy="246" r="7" />
          <circle cx="343" cy="246" r="7" />
        </g>
      )}
      <path
        className="art-crosshair"
        d="M32 50V32h18M590 32h18v18M32 370v18h18M590 388h18v-18"
      />
    </svg>
  );
}

export function CreativeWorlds() {
  const [filter, setFilter] = useState("All");

  const visible =
    filter === "All"
      ? worlds
      : worlds.filter((world) => world.category === filter);
  return (
    <section
      id="businesses"
      className="editorial-worlds"
      aria-labelledby="worlds-heading"
    >
      <div className="worlds-heading-row worlds-heading-simple">
        <h2 id="worlds-heading">Watch. Read. Play.</h2>
        <div
          className="worlds-filters"
          role="group"
          aria-label="Filter creative worlds"
        >
          {["All", "Watch", "Read", "Play"].map((item) => (
            <button
              type="button"
              key={item}
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item}
              <span>
                {item === "All"
                  ? "06"
                  : String(
                      worlds.filter((world) => world.category === item).length,
                    ).padStart(2, "0")}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div
        className={`worlds-grid ${filter !== "All" ? "worlds-grid-filtered" : ""}`}
      >
        {visible.map((world) => (
          <article
            key={`${filter}-${world.id}`}
            className={`world-card world-card-${world.size} world-tone-${world.tone} ${world.imageFit === "contain" ? "world-card-poster" : ""}`}
          >
            <Link
              href={world.href}
              className="world-card-link"
              aria-label={`Explore ${world.title}`}
            >
              <div className="world-card-media">
                {world.image ? (
                  <Image
                    className="world-image"
                    src={world.image}
                    alt={world.imageAlt}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1280px) 55vw, 700px"
                    style={{
                      objectPosition: world.imagePosition || "center",
                      objectFit: world.imageFit || "cover",
                    }}
                  />
                ) : (
                  <div className="world-image-placeholder">
                    <EditorialArtwork type={world.art} />
                  </div>
                )}
                <span className="world-card-arrow">
                  <FiArrowUpRight size={24} aria-hidden="true" />
                </span>
              </div>
              <div className="world-card-caption">
                <div>
                  <h3>{world.title}</h3>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
      <p className="worlds-result-count sr-only" aria-live="polite">
        {visible.length} creative worlds shown.
      </p>
      <div className="worlds-directory">
        <Link href="/businesses">
          Our companies
          <FiArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
