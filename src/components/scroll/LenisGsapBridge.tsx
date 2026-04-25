"use client";

import { useEffect, MutableRefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { invalidate } from "@react-three/fiber";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Props = {
  children: React.ReactNode;
  scrollRef: MutableRefObject<number>;
};

export function LenisGsapBridge({ children, scrollRef }: Props) {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.1,
    });

    const onLenisScroll = (l: { progress: number }) => {
      scrollRef.current = l.progress;
      ScrollTrigger.update();
      invalidate();
    };
    lenis.on("scroll", onLenisScroll);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const onResize = () => {
      lenis.resize();
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize);
    const t = window.setTimeout(() => ScrollTrigger.refresh(), 200);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("resize", onResize);
      gsap.ticker.remove(tick);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((s) => s.kill());
    };
  }, [scrollRef]);

  return <>{children}</>;
}
