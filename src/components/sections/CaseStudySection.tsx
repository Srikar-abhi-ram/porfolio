import { CASE_STUDY } from "@/lib/portfolio-data";

function Chevron() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-zinc-500 transition group-open:rotate-180"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 10.44l3.71-3.2a.75.75 0 11.99 1.12l-4.2 3.64a.75.75 0 01-1.01 0L5.2 8.27a.75.75 0 01.03-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function CaseStudySection() {
  return (
    <section
      id="case-study"
      className="relative border-t border-white/[0.06] bg-zinc-950/30 px-5 py-20 md:px-10"
    >
      <div className="mx-auto max-w-4xl" data-reveal>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
          Case study
        </p>
        <h2 className="mt-1.5 text-balance text-xl font-semibold leading-tight text-white sm:text-2xl md:text-3xl">
          {CASE_STUDY.title}
        </h2>

        {/* Quick metrics — scannable without scrolling */}
        <ul className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
          {CASE_STUDY.highlights.map((h) => (
            <li
              key={h.label}
              className="flex min-w-[9.5rem] flex-1 flex-col rounded-lg border border-zinc-800/90 bg-zinc-950/50 px-3 py-2.5 sm:min-w-0 sm:flex-initial"
            >
              <span className="font-mono text-lg font-medium tabular-nums text-white sm:text-xl">
                {h.value}
              </span>
              <span className="mt-0.5 text-[0.7rem] leading-tight text-zinc-500">
                {h.label}
              </span>
            </li>
          ))}
        </ul>

        {/* Overview — two columns on wide screens to shorten vertical space */}
        <div className="mt-6 rounded-xl border border-zinc-800/80 bg-zinc-950/30 p-4 sm:p-5">
          <h3 className="text-xs font-medium uppercase tracking-wide text-zinc-500">
            Overview
          </h3>
          <div className="mt-3 grid gap-3 text-sm leading-snug text-zinc-400 md:grid-cols-2 md:gap-5">
            {CASE_STUDY.overview.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        {/* Impact — always visible, dense grid */}
        <div className="mt-5">
          <h3 className="text-xs font-medium uppercase tracking-wide text-zinc-500">
            Results
          </h3>
          <ul className="mt-2.5 grid gap-2 sm:grid-cols-2">
            {CASE_STUDY.results.map((block) => (
              <li
                key={block.heading}
                className="rounded-lg border border-zinc-800/80 bg-zinc-900/25 px-3 py-2.5"
              >
                <h4 className="text-[0.65rem] font-medium uppercase tracking-wide text-zinc-500">
                  {block.heading}
                </h4>
                <ul className="mt-1.5 space-y-0.5 text-xs leading-relaxed text-zinc-400">
                  {block.items.map((item) => (
                    <li key={item} className="pl-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* Outcome callout — tight */}
        <div className="mt-5 rounded-xl border border-violet-500/20 bg-violet-950/15 px-3.5 py-3 sm:px-4">
          <h3 className="text-xs font-medium text-violet-200/90">Final outcome</h3>
          <p className="mt-1.5 text-sm leading-snug text-zinc-400">
            {CASE_STUDY.finalOutcome}
          </p>
        </div>

        {/* Collapsible depth (default closed = less scroll) */}
        <div className="mt-4 space-y-2">
          <p className="text-[0.65rem] font-medium uppercase tracking-wider text-zinc-600">
            Details
          </p>

          <details className="group rounded-xl border border-zinc-800/90 bg-zinc-950/20 open:border-zinc-700/70 open:bg-zinc-950/40">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-3.5 py-2.5 text-sm font-medium text-zinc-300 [&::-webkit-details-marker]:hidden sm:px-4">
              Problem, system context &amp; key challenges
              <Chevron />
            </summary>
            <div className="border-t border-zinc-800/70 px-3.5 pb-3.5 pt-0 sm:px-4">
              <p className="pt-2.5 text-xs leading-relaxed text-zinc-500">
                {CASE_STUDY.problem.lead}
              </p>
              <ul className="mt-2 space-y-1 text-xs text-zinc-500">
                {CASE_STUDY.problem.bullets.map((b) => (
                  <li key={b} className="flex gap-1.5">
                    <span className="text-zinc-600" aria-hidden>
                      ·
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-xs text-zinc-600">{CASE_STUDY.problem.closing}</p>

              <h4 className="mt-4 text-[0.65rem] font-medium uppercase tracking-wide text-zinc-500">
                System context
              </h4>
              <ul className="mt-1.5 space-y-1 text-xs text-zinc-500">
                {CASE_STUDY.systemContext.map((c) => (
                  <li key={c} className="pl-0">
                    {c}
                  </li>
                ))}
              </ul>

              <ul className="mt-3 grid gap-2 sm:grid-cols-3">
                {CASE_STUDY.keyChallenges.map((c) => (
                  <li
                    key={c.title}
                    className="rounded-lg border border-zinc-800/60 bg-zinc-900/40 p-2.5"
                  >
                    <p className="text-[0.7rem] font-medium leading-tight text-zinc-300">
                      {c.title.replace(/^\d+\.\s*/, "")}
                    </p>
                    <p className="mt-1.5 text-[0.65rem] leading-snug text-zinc-500">
                      {c.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </details>

          <details className="group rounded-xl border border-zinc-800/90 bg-zinc-950/20 open:border-violet-500/25 open:bg-violet-950/10">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-3.5 py-2.5 text-sm font-medium text-zinc-300 [&::-webkit-details-marker]:hidden sm:px-4">
              Approach (5 steps)
              <Chevron />
            </summary>
            <div className="border-t border-violet-500/10 px-3.5 pb-3.5 pt-0 sm:px-4">
              <p className="pt-2.5 text-xs leading-relaxed text-zinc-500">
                {CASE_STUDY.approachIntro}
              </p>
              <ol className="mt-3 space-y-2.5 border-t border-violet-500/10 pt-2.5">
                {CASE_STUDY.approachSteps.map((s) => (
                  <li
                    key={s.title}
                    className="grid gap-0.5 sm:grid-cols-[min(11rem,34%)_1fr] sm:gap-3"
                  >
                    <span className="text-[0.7rem] font-medium text-violet-200/90">
                      {s.title}
                    </span>
                    <p className="text-[0.7rem] leading-snug text-zinc-500 sm:pl-0">
                      {s.body}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </details>

          <details className="group rounded-xl border border-zinc-800/90 bg-zinc-950/20 open:border-zinc-700/70 open:bg-zinc-950/40">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-3.5 py-2.5 text-sm font-medium text-zinc-300 [&::-webkit-details-marker]:hidden sm:px-4">
              Key learnings
              <Chevron />
            </summary>
            <ul className="space-y-1.5 border-t border-zinc-800/70 px-3.5 py-2.5 text-xs leading-snug text-zinc-500 sm:px-4">
              {CASE_STUDY.keyLearnings.map((k) => (
                <li key={k} className="flex gap-1.5">
                  <span className="shrink-0 text-zinc-600">—</span>
                  <span>{k}</span>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </section>
  );
}
