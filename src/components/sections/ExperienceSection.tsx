"use client";

import { useRef, useLayoutEffect, useState, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { JOBS } from "@/lib/portfolio-data";
import type { Job } from "@/lib/portfolio-data";
import { JobMediaCarousel } from "@/components/sections/JobMediaCarousel";
import { ExperienceDetailModal } from "@/components/sections/ExperienceDetailModal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ExperienceSection() {
  const [openJob, setOpenJob] = useState<Job | null>(null);
  const closeModal = useCallback(() => setOpenJob(null), []);

  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const pin = pinRef.current;
    const track = trackRef.current;
    if (!pin || !track) return;
    const ctx = gsap.context(() => {
      const getMaxX = () =>
        Math.max(0, track.scrollWidth - window.innerWidth + 32);
      gsap.to(track, {
        x: () => -getMaxX(),
        ease: "none",
        scrollTrigger: {
          trigger: pin,
          start: "top top",
          end: () => `+=${getMaxX() * 1.15}`,
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="work"
      ref={pinRef}
      className="relative z-0 min-h-[100dvh] border-t border-white/[0.06] bg-zinc-950/80"
    >
      <ExperienceDetailModal job={openJob} onClose={closeModal} />

      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-zinc-900/20 via-transparent to-zinc-900/20" />
      <div className="relative z-10 max-w-6xl px-5 py-20 md:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
          Experience
        </p>
        <h2
          className="mt-1 max-w-xl text-3xl font-semibold text-white sm:text-4xl"
          data-reveal
        >
          Timeline
        </h2>
        <p className="mt-2 max-w-lg text-sm text-zinc-500" data-reveal>
          Scroll sideways — click a card to open the full story with photos.
        </p>
      </div>

      <div className="relative z-10 overflow-hidden pb-24">
        <div
          ref={trackRef}
          className="flex w-max items-stretch gap-4 px-5 md:px-8"
        >
          {JOBS.map((job) => (
            <article
              key={job.id}
              role="button"
              tabIndex={0}
              onClick={() => setOpenJob(job)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setOpenJob(job);
                }
              }}
              className="group flex w-[min(88vw,24rem)] shrink-0 cursor-pointer flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 text-left shadow-xl shadow-black/40 transition hover:border-zinc-500/80 hover:bg-zinc-900/80"
            >
              <div className="flex items-start justify-between gap-3 p-4">
                {job.brandLogo ? (
                  <div className="relative h-10 w-32 shrink-0 sm:w-36">
                    <Image
                      src={job.brandLogo}
                      alt=""
                      fill
                      className="object-contain object-left"
                      sizes="144px"
                    />
                  </div>
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800/80 text-xs font-bold text-zinc-200">
                    {job.logo}
                  </div>
                )}
                <div className="min-w-0 text-right text-[0.7rem] text-zinc-500">
                  {job.range}
                </div>
              </div>
              <div className="px-4 pb-2">
                <h3 className="text-sm font-semibold text-white">{job.org}</h3>
                <p className="mt-1 text-sm text-zinc-400">{job.line}</p>
                <p className="mt-1.5 text-xs text-zinc-600">Click card for full view</p>
                <ul className="mt-2 list-disc space-y-1.5 pl-4 text-sm text-zinc-500">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
              {job.media.length > 0 ? (
                <div className="mt-auto border-t border-zinc-800/80 p-2">
                  <JobMediaCarousel
                    media={job.media}
                    stopClickPropagation
                  />
                </div>
              ) : (
                <div className="mt-auto border-t border-dashed border-zinc-800/50 px-3 py-4 text-center text-[0.7rem] text-zinc-600">
                  No photos
                </div>
              )}
              <div className="flex flex-wrap gap-1.5 p-3 pt-1">
                {job.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded border border-zinc-700/80 bg-zinc-950/50 px-1.5 py-0.5 text-[0.65rem] text-zinc-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
