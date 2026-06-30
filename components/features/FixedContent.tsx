"use client";

import { useSectionContext } from "@/context";
import { useMediaType } from "@/utils/mediaQuery";
import { AnimatePresence, motion } from "motion/react";

export default function FixedContent() {
  const { section } = useSectionContext();
  const mediaType = useMediaType();
  return (
    <AnimatePresence>
      <>
        {mediaType === "desktop" && (
          <div className="fixed right-10 top-1/2 -translate-y-1/2 pointer-events-none">
            <div className="relative w-[700px] h-[700px]">
              <div className="h-full w-full absolute z-15 backdrop-blur-xs" />
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="h-full absolute right-0 z-10"
                src="/arrow.png"
                alt="Arrow Icon"
              />
            </div>
          </div>
        )}
        {section === "intro" && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed top-36 right-4 md:right-16 opacity-40 z-20"
            >
              <span
                className="text-[11px] tracking-widest uppercase text-[#7A7A6A]"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  writingMode: "vertical-rl",
                }}
              >
                Living Workshop · Est. 2022
              </span>
            </motion.div>

            {mediaType === "desktop" && (
              <>
                <div className="fixed right-10 top-1/2 -translate-y-1/2 pointer-events-none z-20">
                  <div className="relative w-[700px] h-[700px]">
                    <motion.img
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{
                        opacity: { duration: 0.2 },
                        x: { type: "spring", damping: 15, stiffness: 150 },
                      }}
                      className="h-50 absolute right-[500px] top-[250px]"
                      src="/block.png"
                      alt="Block Icon"
                    />
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </>
    </AnimatePresence>
  );
}
