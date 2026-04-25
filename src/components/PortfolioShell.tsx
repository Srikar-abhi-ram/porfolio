"use client";

import dynamic from "next/dynamic";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LenisGsapBridge } from "@/components/scroll/LenisGsapBridge";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Navigation } from "@/components/sections/Navigation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HeroCanvas = dynamic(
  () => import("@/components/r3f/HeroScene").then((m) => m.HeroCanvas),
  { ssr: false },
);

export function PortfolioShell() {
  const scrollRef = useRef(0);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      els.forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 44 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              end: "bottom top",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <LenisGsapBridge scrollRef={scrollRef}>
      <div className="relative min-h-screen bg-[#08080a] text-zinc-200">
        <div
          className="pointer-events-none fixed inset-0 -z-20"
          aria-hidden
        >
          <div
            className="site-bg-aurora absolute inset-0 motion-reduce:animate-none"
            style={{ willChange: "background-position" }}
          />
          <div className="site-bg-orb absolute -top-1/2 left-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(63,63,70,0.16)_0%,transparent_65%)] motion-reduce:animate-none" />
          <div className="site-bg-orb absolute right-0 bottom-0 h-[60vmin] w-[60vmin] rounded-full bg-[radial-gradient(circle,rgba(17,24,39,0.2)_0%,transparent_60%)] motion-reduce:animate-none [animation-delay:6s]" />
        </div>
        <HeroCanvas scrollRef={scrollRef} />
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <CaseStudySection />
          <ExperienceSection />
          <TechStackSection />
          <ContactSection />
        </main>
      </div>
    </LenisGsapBridge>
  );
}
