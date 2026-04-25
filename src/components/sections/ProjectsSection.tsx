"use client";

import { useRef, useLayoutEffect, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS, type Project } from "@/lib/portfolio-data";
import { ProjectDetailModal } from "@/components/sections/ProjectDetailModal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function ProjectCard({
  project,
  index,
  onSelect,
}: {
  project: Project;
  index: number;
  onSelect: (p: Project) => void;
}) {
  return (
    <article
      className="group flex h-full w-[min(92vw,26rem)] shrink-0 cursor-pointer flex-col overflow-hidden rounded-xl border border-zinc-800/90 bg-zinc-950/40 p-5 transition duration-200 ease-out hover:-translate-y-1 hover:border-zinc-500/80 hover:bg-zinc-900/60 hover:shadow-lg hover:shadow-zinc-950/50 sm:w-[24rem] sm:p-6"
    >
      <button
        type="button"
        onClick={() => onSelect(project)}
        className="w-full min-h-0 flex-1 text-left"
      >
        <div className="mb-3 flex items-start justify-between gap-3 border-b border-zinc-800/80 pb-3">
          <div className="min-w-0">
            {project.badge && (
              <span className="mb-1 inline-block rounded border border-amber-500/25 bg-amber-500/5 px-1.5 py-0.5 text-[0.6rem] font-medium uppercase tracking-wide text-amber-200/80">
                {project.badge}
              </span>
            )}
            <span className="mt-0.5 block font-mono text-[0.65rem] text-zinc-600">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-0.5 text-base font-semibold leading-snug text-zinc-100 sm:text-lg">
              {project.title}
            </h3>
            <p className="mt-2 text-xs text-zinc-500">Click for full write-up</p>
          </div>
          <div
            className="hidden h-1.5 w-12 shrink-0 rounded-full bg-zinc-800 transition group-hover:w-16 group-hover:bg-zinc-500 sm:block"
            aria-hidden
          />
        </div>

        <div className="min-h-0 max-h-48 space-y-2.5 overflow-hidden text-ellipsis text-sm text-zinc-500 [mask-image:linear-gradient(to_bottom,black,transparent)]">
          <p className="line-clamp-3 text-zinc-400">{project.problem}</p>
        </div>
      </button>
    </article>
  );
}

export function ProjectsSection() {
  const [active, setActive] = useState<Project | null>(null);
  const closeModal = useCallback(() => setActive(null), []);
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const pin = pinRef.current;
    const track = trackRef.current;
    if (!pin || !track) return;
    const ctx = gsap.context(() => {
      const getMaxX = () =>
        Math.max(0, track.scrollWidth - window.innerWidth + 40);
      gsap.to(track, {
        x: () => -getMaxX(),
        ease: "none",
        scrollTrigger: {
          trigger: pin,
          start: "top top",
          end: () => `+=${getMaxX() * 1.12}`,
          scrub: 1.15,
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
      id="projects"
      ref={pinRef}
      className="relative z-0 min-h-[100dvh] border-t border-white/[0.04] bg-zinc-950/20"
    >
      <ProjectDetailModal project={active} onClose={closeModal} />

      <div className="relative z-10 max-w-6xl px-5 py-20 md:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
          Projects
        </p>
        <h2
          className="mt-1 max-w-2xl text-3xl font-semibold text-white sm:text-4xl"
          data-reveal
        >
          Production systems, real constraints
        </h2>
        <p
          className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-500"
          data-reveal
        >
          Scroll horizontally, then{" "}
          <span className="font-medium text-zinc-400">click any card</span> to open
          a centered view with the full problem, approach, and impact.
        </p>
      </div>

      <div className="relative z-10 overflow-hidden pb-24">
        <p className="mb-3 px-5 text-xs text-zinc-600 md:px-8">
          <span className="text-zinc-500">→</span> Vertical scroll moves the
          row; <span className="text-zinc-500">+</span> card opens details.
        </p>
        <div
          ref={trackRef}
          className="flex w-max min-h-[20rem] items-stretch gap-4 px-5 md:min-h-[16rem] md:px-8"
        >
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onSelect={setActive}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
