"use client";

import { useEffect, useRef, useState } from "react";

export function CountUp({ value, decimals = 0, duration = 1500 }) {
  const target = Number(value);
  const [current, setCurrent] = useState(target);
  const element = useRef(null);
  const complete = useRef(false);
  const format = (number) => number.toFixed(decimals);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (complete.current || preference.matches || !("IntersectionObserver" in window)) return;
    let frame;
    let start;
    setCurrent(0);
    const tick = (time) => {
      start ??= time;
      const progress = Math.min((time - start) / duration, 1);
      setCurrent(target * (1 - Math.pow(1 - progress, 3)));
      if (progress < 1) frame = requestAnimationFrame(tick);
      else { setCurrent(target); complete.current = true; }
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect();
        frame = requestAnimationFrame(tick);
      }
    }, { threshold: .5 });
    observer.observe(element.current);
    const onPreferenceChange = () => {
      if (preference.matches) {
        cancelAnimationFrame(frame);
        observer.disconnect();
        setCurrent(target);
        complete.current = true;
      }
    };
    preference.addEventListener("change", onPreferenceChange);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); preference.removeEventListener("change", onPreferenceChange); };
  }, [target, decimals, duration]);

  return <span ref={element} className="stat-count"><span className="sr-only">{format(target)}</span><span className="stat-count-width" aria-hidden="true">{format(target)}</span><span className="stat-count-value" aria-hidden="true">{format(current)}</span></span>;
}
