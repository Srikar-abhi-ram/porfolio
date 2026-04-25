"use client";

import { useRef, useEffect, useState } from "react";
import { PROFILE, HERO_CTA } from "@/lib/portfolio-data";

const HERO_VIDEO_SRC = "/assets/herosection.mp4";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onMq = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onMq);
    return () => mq.removeEventListener("change", onMq);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const v = videoRef.current;
    if (!v) return;

    const onReady = () => setVideoReady(true);
    v.addEventListener("loadeddata", onReady);

    const tryPlay = () => {
      v.play().catch(() => setVideoReady(true));
    };
    v.addEventListener("canplay", tryPlay, { once: true });
    v.addEventListener("playing", onReady, { once: true });

    if (v.readyState >= 2) {
      onReady();
      tryPlay();
    }

    return () => {
      v.removeEventListener("loadeddata", onReady);
    };
  }, [reduceMotion]);

  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden bg-[#08080a] px-5 pb-24 pt-32 md:px-10 md:pb-32"
    >
      {!reduceMotion && (
        <div
          className="pointer-events-none absolute top-1/2 right-0 z-0 h-[min(75vh,720px)] w-[min(75vw,1000px)] -translate-y-1/2 overflow-hidden rounded-2xl border border-white/[0.06] bg-zinc-900 shadow-2xl shadow-black/50 md:rounded-3xl"
          aria-hidden
        >
          <video
            ref={videoRef}
            className="h-full w-full scale-[1.01] object-cover"
            style={{
              opacity: videoReady ? 1 : 0.4,
              transition: "opacity 0.5s ease",
            }}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            src={HERO_VIDEO_SRC}
          />
          <div
            className="absolute inset-0 bg-gradient-to-l from-zinc-950/30 via-zinc-950/50 to-zinc-950/95"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-transparent to-zinc-950/30"
            aria-hidden
          />
        </div>
      )}

      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-zinc-950/85 via-zinc-950/10 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 max-w-4xl" data-reveal>
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
          {PROFILE.role}
        </p>
        <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white/[0.88] drop-shadow-[0_2px_28px_rgba(0,0,0,0.85)] sm:text-6xl md:text-7xl">
          {PROFILE.New_name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-zinc-300 sm:text-xl">
          {PROFILE.tagline}
        </p>
        <p className="mt-4 max-w-2xl border-l-2 border-zinc-600 pl-4 text-sm leading-relaxed text-zinc-400">
          {PROFILE.valueLine}
        </p>
        <div className="pointer-events-auto mt-10 flex flex-wrap gap-3">
          <a
            href={HERO_CTA.primaryHref}
            className="group inline-flex items-center justify-center rounded-lg border border-zinc-600 bg-zinc-100 px-6 py-3 text-sm font-medium text-zinc-900 transition hover:bg-white"
          >
            {HERO_CTA.primary}
            <span className="ml-1 transition group-hover:translate-x-0.5">↘</span>
          </a>
          <a
            href={HERO_CTA.secondaryHref}
            className="inline-flex items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900/50 px-6 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-500"
          >
            {HERO_CTA.secondary}
          </a>
        </div>
        <p className="mt-6 text-xs text-zinc-600">Scroll for projects, case study, and experience.</p>
      </div>
    </section>
  );
}
