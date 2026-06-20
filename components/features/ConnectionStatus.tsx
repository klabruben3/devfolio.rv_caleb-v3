"use client";

import { useConnection } from "@/utils/useConnection";
import { AnimatePresence, motion } from "motion/react";
import { WifiOff } from "lucide-react";

export default function ConnectionStatus() {
  const connection = useConnection();

  return (
    <AnimatePresence>
      {connection === "offline" && (
        <motion.div
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -24, opacity: 0 }}
          transition={{
            y: { type: "spring", stiffness: 200, damping: 12.5 },
          }}
          className="
            fixed
            top-24
            left-1/2
            -translate-x-1/2
            z-60
          "
        >
          <div
            className="
              flex items-center gap-3
              px-4 py-3
              bg-card
              border border-destructive/30
              text-foreground
            "
          >
            <WifiOff className="w-4 h-4 text-destructive" />

            <span className="text-sm">
              You're offline. Some content may be unavailable.
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
