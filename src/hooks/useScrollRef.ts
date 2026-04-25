"use client";

import { useRef } from "react";

/**
 * Global scroll 0..1 and raw scroll for 3D (no React re-renders per frame).
 */
export function useScrollRef() {
  const scrollRef = useRef(0);
  return scrollRef;
}
