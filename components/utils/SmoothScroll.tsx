"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1, // Control smooth intensity (0.05 - 0.2)
        syncTouch: true, // Keeps touch scrolling smooth
      }}
    >
      {children}
    </ReactLenis>
  );
}
