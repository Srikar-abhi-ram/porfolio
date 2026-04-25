"use client";

import { PROFILE } from "@/lib/portfolio-data";

const links = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "case-study", label: "Case study" },
  { id: "work", label: "Experience" },
  { id: "stack", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export function Navigation() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md supports-[backdrop-filter]:bg-zinc-950/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3.5 md:px-8">
        <a
          href="#top"
          className="shrink-0 text-sm font-medium tracking-tight text-zinc-200"
        >
          {PROFILE.name.split(" ")[0]}{" "}
          <span className="text-zinc-500">Srikar</span>
        </a>
        <nav
          className="flex max-w-[55vw] items-center gap-0.5 overflow-x-auto pr-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden text-[0.7rem] md:max-w-none md:gap-0.5 md:overflow-visible md:text-xs"
        >
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="shrink-0 rounded-md px-2 py-1 font-medium text-zinc-500 transition hover:bg-zinc-800/50 hover:text-zinc-200 md:px-2.5"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="shrink-0 rounded-lg border border-zinc-700 bg-zinc-900/50 px-3 py-1.5 text-xs text-zinc-200 transition hover:border-zinc-500"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
