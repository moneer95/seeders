// components/LenisWrapper.tsx
"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const LenisWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // Set your desired scrolling speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      // "vertical" or "horizontal"
    });

    // Animation loop to update Lenis
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Clean up the Lenis instance on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default LenisWrapper;
