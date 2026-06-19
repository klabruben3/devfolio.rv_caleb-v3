import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "../";

const tooltipVariants = {
  hidden: {
    y: -200,
    rotate: 30,
    opacity: 0,
  },
  visible: {
    x: 0,
    y: 0,
    rotate: 0,
    opacity: 1,
  },
  exit: {
    y: 200,
    rotate: -30,
    opacity: 0,
  },
};

export default function LivePresence() {
  const [hovered, setHovered] = useState(false);
  const [extend, setExtend] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const online = true;

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const showStatusText = isDesktop || extend;

  // Handle mouse movements
  const handleMouseEnter = () => {
    setHovered(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setHovered(false);

      timeoutRef.current = null;
    }, 100);
  }; //

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsDesktop(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      if (touchTimeoutRef.current) {
        clearTimeout(touchTimeoutRef.current);
        touchTimeoutRef.current = null;
      }
    };
  }, []);

  return (
    <div className="fixed top-5 left-5 w-fit z-50 flex flex-col gap-2">
      <Button
        onMouseEnter={() => {
          if (!isDesktop) return;
          handleMouseEnter();
        }}
        onMouseLeave={() => {
          if (!isDesktop) return;
          handleMouseLeave();
        }}
        onPointerDown={() => {
          if (!isDesktop) {
            setExtend(true);
            setHovered(true);

            if (touchTimeoutRef.current) {
              clearTimeout(touchTimeoutRef.current);
            }

            touchTimeoutRef.current = setTimeout(() => {
              setExtend(false);
              setHovered(false);
            }, 2000);
          }
        }}
        className="flex items-center bg-card px-5 w-fit h-[50px] rounded-full border-2 border-border z-1"
      >
        <div className="relative flex items-center">
          <span
            className={`w-2 h-2 rounded-full ${online ? "bg-[#7CA982]" : "bg-[#CC7E7E]"}`}
            style={{ animation: "pulse-dot 2.4s ease-in-out infinite" }}
          />
        </div>

        <AnimatePresence>
          {showStatusText && (
            <div className="flex items-center">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 10 }}
                exit={{ width: 0 }}
              />
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "fit-content" }}
                exit={{ width: 0 }}
                className="font-mono text-[10px] tracking-widest uppercase truncate"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: online ? "#7CA982" : "#CC7E7E",
                }}
              >
                {online ? "Online" : "Offline"}
              </motion.span>
            </div>
          )}
        </AnimatePresence>
      </Button>

      <AnimatePresence>
        {hovered && (
          <motion.div
            variants={tooltipVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{
              opacity: { duration: 0.2 },
              rotate: { type: "spring", damping: 20, stiffness: 300 },
              y: { type: "spring", damping: 20, stiffness: 300 },
            }}
            className={`w-52 rounded-lg border-3 border-border bg-card p-3 pointer-events-none z-0`}
          >
            <p
              className="text-xs text-[#F0EDE6]/80 leading-relaxed"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {online ? (
                <>
                  Currently available
                  <span className="inline-block -rotate-32 text-lg">🤞</span>
                  <br />
                  <br />
                  Average response under 5 minutes.{" "}
                  <span className="inline-block text-[#7CA982]">
                    Open for conversation.
                  </span>
                </>
              ) : (
                <>
                  Left a message?
                  <br />
                  Responses typically come later the same day.
                </>
              )}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
