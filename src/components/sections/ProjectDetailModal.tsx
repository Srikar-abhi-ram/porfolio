"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import type { Project } from "@/lib/portfolio-data";

type Props = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectDetailModal({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return;
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
  }, [project, onClose]);

  if (!project) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default bg-zinc-950/80 backdrop-blur-sm transition"
        onClick={onClose}
        aria-label="Close project details"
      />
      <div
        className="relative z-10 max-h-[min(90dvh,880px)] w-full max-w-2xl overflow-y-auto rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="min-w-0">
            {project.badge && (
              <span className="mb-2 inline-block rounded border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wider text-amber-200/90">
                {project.badge}
              </span>
            )}
            <h2
              id="project-modal-title"
              className="text-balance text-lg font-semibold leading-snug text-zinc-100 sm:text-xl"
            >
              {project.title}
            </h2>
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

        <div className="space-y-6 border-t border-zinc-800/80 pt-5 text-sm text-zinc-300">
          <section>
            <h3 className="text-xs font-medium uppercase tracking-wide text-zinc-500">
              {project.badge === "Publication" ? "Context" : "Problem"}
            </h3>
            <p className="mt-2 leading-relaxed text-zinc-400">
              {project.problem}
            </p>
          </section>
          <section>
            <h3 className="text-xs font-medium uppercase tracking-wide text-zinc-500">
              {project.badge === "Publication" ? "Approach & evaluation" : "What we built"}
            </h3>
            <ul className="mt-2 list-disc space-y-2 pl-4 leading-relaxed text-zinc-400">
              {project.solution.map((p, j) => (
                <li key={`modal-${project.id}-sol-${j}`}>{p}</li>
              ))}
            </ul>
          </section>
          <section>
            <h3 className="text-xs font-medium uppercase tracking-wide text-zinc-500">
              Tech & methods
            </h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 text-xs text-zinc-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>
          {project.metrics && project.metrics.length > 0 && (
            <section>
              <h3 className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                Key metrics
              </h3>
              <div className="mt-2 grid gap-2 sm:grid-cols-3">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-3 py-2"
                  >
                    <p className="font-mono text-lg font-semibold text-zinc-100">
                      {m.value}
                    </p>
                    <p className="text-[0.7rem] text-zinc-500">{m.label}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
          {project.outcomes.length > 0 && (
            <section>
              <h3 className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                {project.badge === "Publication" ? "Outcomes" : "Impact"}
              </h3>
              <ul className="mt-2 list-disc space-y-1.5 pl-4 text-zinc-400">
                {project.outcomes.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}
