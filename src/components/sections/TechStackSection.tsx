import { SKILLS } from "@/lib/portfolio-data";

const groups = [
  SKILLS.generativeAI,
  SKILLS.backend,
  SKILLS.frontend,
  SKILLS.cloud,
  SKILLS.tools,
];

export function TechStackSection() {
  return (
    <section
      id="stack"
      className="relative border-t border-white/[0.06] px-5 py-28 md:px-10"
    >
      <div className="mx-auto max-w-3xl" data-reveal>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
          Skills
        </p>
        <h2 className="mt-1 text-3xl font-semibold text-white sm:text-4xl">
          Stack
        </h2>
        <p className="mt-2 text-sm text-zinc-500">
          Grouped for clarity: Gen AI, backend, frontend, platform, and tools.
        </p>
        <div className="mt-10 space-y-6">
          {groups.map((g) => (
            <div key={g.label}>
              <h3 className="text-sm font-medium text-zinc-400">{g.label}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="rounded border border-zinc-800 bg-zinc-900/40 px-2.5 py-1 text-xs text-zinc-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
