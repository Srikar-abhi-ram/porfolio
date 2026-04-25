import { ABOUT, PROFILE } from "@/lib/portfolio-data";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative border-t border-white/[0.06] bg-zinc-950/50 px-5 py-28 md:px-10"
    >
      <div className="mx-auto max-w-3xl" data-reveal>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
          About
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
          Engineering-first Gen AI
        </h2>
        {ABOUT.intro.map((p) => (
          <p key={p} className="mt-5 text-sm leading-relaxed text-zinc-400">
            {p}
          </p>
        ))}
        <h3 className="mt-8 text-sm font-medium text-zinc-300">
          {ABOUT.specializeTitle}
        </h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-400">
          {ABOUT.specialize.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-zinc-500">{ABOUT.focus}</p>
        <a
          href={encodeURI(`/${PROFILE.resumeFileName}`)}
          download={PROFILE.resumeFileName}
          className="mt-8 inline-flex rounded-lg border border-zinc-600 px-4 py-2.5 text-sm text-zinc-200 transition hover:border-zinc-400 hover:text-white"
        >
          Download Resume
        </a>
        
      </div>
    </section>
  );
}
