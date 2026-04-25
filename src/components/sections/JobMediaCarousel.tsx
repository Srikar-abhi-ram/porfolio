"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

type Media = { src: string; alt: string };

export function JobMediaCarousel({
  media,
  stopClickPropagation = false,
  variant = "default",
}: {
  media: Media[];
  stopClickPropagation?: boolean;
  /** `modal` uses object-contain and a taller area so photos are not over-cropped */
  variant?: "default" | "modal";
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const isModal = variant === "modal";
  const imgClass = isModal
    ? "object-contain p-1.5"
    : "object-cover";
  const slideMinH = isModal
    ? "min-h-[min(45vh,420px)] md:min-h-[min(80vh,720px)]"
    : "aspect-[4/3]";

  useEffect(() => {
    if (media.length <= 1) return;
    const t = window.setInterval(() => {
      setIndex((i) => (i + 1) % media.length);
    }, 4000);
    return () => clearInterval(t);
  }, [media.length]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el || media.length <= 1) return;
    const w = el.offsetWidth;
    el.scrollTo({ left: index * w, behavior: "smooth" });
  }, [index, media.length]);

  if (media.length === 0) return null;

  if (media.length === 1) {
    return (
      <div
        className={`relative w-full overflow-hidden rounded-lg bg-zinc-800/60 ${isModal ? "min-h-[min(45vh,400px)] md:min-h-[min(75vh,680px)]" : "aspect-[4/3]"}`}
      >
        <Image
          src={media[0].src}
          alt={media[0].alt}
          fill
          sizes="(max-width: 768px) 100vw, 24rem"
          className={imgClass}
        />
      </div>
    );
  }

  return (
    <div className="w-full">
      <div
        ref={scrollerRef}
        className="flex overflow-x-auto scroll-smooth rounded-lg [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        style={{ touchAction: "pan-y pinch-zoom" }}
      >
        {media.map((m) => (
          <div
            key={m.src}
            className={`relative w-full min-w-full flex-[0_0_100%] shrink-0 overflow-hidden bg-zinc-800/60 ${slideMinH}`}
          >
            <Image
              src={m.src}
              alt={m.alt}
              fill
              sizes="(max-width: 768px) 100vw, 24rem"
              className={imgClass}
            />
          </div>
        ))}
      </div>
      <div
        className="mt-2 flex justify-center gap-1.5"
        role="tablist"
        aria-label="Photo carousel"
      >
        {media.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show photo ${i + 1} of ${media.length}`}
            aria-current={i === index}
            onClick={(e) => {
              if (stopClickPropagation) e.stopPropagation();
              setIndex(i);
            }}
            className={`h-1.5 rounded-full transition ${
              i === index ? "w-6 bg-zinc-300" : "w-1.5 bg-zinc-600 hover:bg-zinc-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
