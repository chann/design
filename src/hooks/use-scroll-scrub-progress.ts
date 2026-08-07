import { useEffect, useRef, useState } from "react";

import { calculateElementScrollProgress } from "@/lib/scroll-scrub";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export function useScrollScrubProgress<T extends Element>() {
  const elementRef = useRef<T>(null);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || typeof window.requestAnimationFrame !== "function") {
      setProgress(1);
      return;
    }

    const reducedMotion = window.matchMedia?.(REDUCED_MOTION_QUERY);
    let frameId: number | null = null;

    const measure = () => {
      frameId = null;
      if (reducedMotion?.matches) {
        setProgress(1);
        return;
      }

      const nextProgress = calculateElementScrollProgress(
        element.getBoundingClientRect(),
        window.innerHeight,
      );
      setProgress((currentProgress) =>
        currentProgress === nextProgress ? currentProgress : nextProgress,
      );
    };

    const scheduleMeasure = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(measure);
      }
    };

    const handleMotionPreference = () => {
      if (reducedMotion?.matches && frameId !== null) {
        window.cancelAnimationFrame?.(frameId);
        frameId = null;
      }
      if (reducedMotion?.matches) setProgress(1);
      else scheduleMeasure();
    };

    window.addEventListener("scroll", scheduleMeasure, { passive: true });
    window.addEventListener("resize", scheduleMeasure);
    reducedMotion?.addEventListener?.("change", handleMotionPreference);
    scheduleMeasure();

    return () => {
      window.removeEventListener("scroll", scheduleMeasure);
      window.removeEventListener("resize", scheduleMeasure);
      reducedMotion?.removeEventListener?.("change", handleMotionPreference);
      if (frameId !== null) window.cancelAnimationFrame?.(frameId);
    };
  }, []);

  return { elementRef, progress };
}
