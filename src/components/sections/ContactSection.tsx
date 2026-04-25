"use client";

import { useState } from "react";
import { CONTACT, PROFILE } from "@/lib/portfolio-data";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/[0.06] px-5 py-32 md:px-10"
    >
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-zinc-800/30 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-2xl text-center" data-reveal>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
          Contact
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
          {CONTACT.headline}
        </h2>
        <p className="mt-2 text-sm text-zinc-500">
          {CONTACT.sub}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex rounded-lg border border-zinc-600 bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:bg-white"
          >
            {CONTACT.email}
          </a>
          <a
            href={"https://www.linkedin.com/in/sai-balaji-srikar-yellepeddi-595126197/"}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-zinc-500 underline decoration-zinc-600 underline-offset-2 hover:text-zinc-200"
          >
            LinkedIn
          </a>
          <a
            href={"https://github.com/Srikar-abhi-ram"}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-zinc-500 underline decoration-zinc-600 underline-offset-2 hover:text-zinc-200"
          >
            GitHub
          </a>
        </div>

        <form
          className="mx-auto mt-10 max-w-md space-y-3 text-left"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <div>
            <label htmlFor="name" className="text-xs text-zinc-500">
              Name
            </label>
            <input
              id="name"
              name="name"
              className="mt-1 w-full rounded-lg border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="em" className="text-xs text-zinc-500">
              Email
            </label>
            <input
              id="em"
              name="email"
              type="email"
              className="mt-1 w-full rounded-lg border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label htmlFor="msg" className="text-xs text-zinc-500">
              Message
            </label>
            <textarea
              id="msg"
              name="message"
              rows={3}
              className="mt-1 w-full rounded-lg border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600"
              placeholder="Briefly describe what you are building…"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg border border-zinc-600 py-2.5 text-sm text-zinc-200 transition hover:border-zinc-400"
          >
            Send           </button>
          {submitted && (
            <p className="text-center text-xs text-zinc-500">
              Thanks 
            </p>
          )}
        </form>

        <p className="mt-8 text-xs text-zinc-600">© {new Date().getFullYear()}</p>
      </div>
    </section>
  );
}
