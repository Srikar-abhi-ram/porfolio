"use client";

import { useEffect } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import type { Job } from "@/lib/portfolio-data";
import { JobMediaCarousel } from "@/components/sections/JobMediaCarousel";

type Props = {
  job: Job | null;
  onClose: () => void;
};

export function ExperienceDetailModal({ job, onClose }: Props) {
  useEffect(() => {
    if (!job) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [job, onClose]);

  if (!job) return null;

  const hasMedia = job.media.length > 0;

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exp-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default bg-zinc-950/86 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close experience details"
      />
      <div
        className={`relative z-10 flex w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl max-h-[min(92dvh,900px)] ${
          hasMedia ? "md:max-h-[min(92dvh,900px)] md:flex-row" : "md:max-w-2xl"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {hasMedia && (
          <div className="relative w-full shrink-0 border-b border-zinc-800 bg-zinc-950/80 md:min-w-0 md:max-w-[min(100%,32rem)] md:flex-[0_0_44%] md:border-r md:border-b-0">
            <div className="h-full w-full p-2 md:max-h-[min(90dvh,900px)] md:overflow-y-auto">
              <JobMediaCarousel
                media={job.media}
                stopClickPropagation
                variant="modal"
              />
            </div>
          </div>
        )}

        <div
          className={`flex min-h-0 min-w-0 flex-1 flex-col overflow-y-auto p-5 sm:p-6 ${!hasMedia ? "w-full" : ""}`}
        >
          <div className="mb-3 flex items-start justify-between gap-2">
            <div className="flex min-w-0 items-center gap-3">
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
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800/80 text-xs font-bold text-zinc-200">
                  {job.logo}
                </div>
              )}
            </div>
            <button
              type="button"
              onClick={onClose}
              className="shrink-0 rounded-lg border border-zinc-700 bg-zinc-900 px-2.5 py-1.5 text-sm text-zinc-400 transition hover:border-zinc-500 hover:text-zinc-200"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
          <p className="text-[0.7rem] text-zinc-500">{job.range}</p>
          <h2
            id="exp-modal-title"
            className="mt-0.5 text-lg font-semibold text-white sm:text-xl"
          >
            {job.org}
          </h2>
          <p className="mt-0.5 text-sm text-zinc-400">{job.line}</p>

          {!hasMedia && (
            <p className="mt-3 text-xs text-zinc-500">
              No project photos for this role.
            </p>
          )}

          <h3 className="mt-5 text-xs font-medium uppercase tracking-wide text-zinc-500">
            Highlights
          </h3>
          <ul className="mt-2 list-disc space-y-2 pl-4 text-sm leading-relaxed text-zinc-300">
            {job.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>

          <h3 className="mt-5 text-xs font-medium uppercase tracking-wide text-zinc-500">
            Skills
          </h3>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {job.skills.map((s) => (
              <span
                key={s}
                className="rounded-md border border-zinc-800 bg-zinc-900/60 px-2.5 py-0.5 text-xs text-zinc-200"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
