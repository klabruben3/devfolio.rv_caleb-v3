"use client";
import { type Section, usePinContext, useSectionContext } from "@/context";
import { AnimatePresence, motion } from "motion/react";
import {
  Home,
  GitBranch,
  Boxes,
  Lightbulb,
  Code2,
  FileText,
  LucideIcon,
  BookMarkedIcon,
  Ellipsis,
} from "lucide-react";
import { useMediaType } from "@/utils/mediaQuery";
import { useEffect, useRef, useState } from "react";

type NavLabel =
  | "Home"
  | "Evolution"
  | "Projects"
  | "Ideas"
  | "Technologies"
  | "Thoughts"
  | "Notebook";
interface NavItem {
  id: number | string;
  section: Section;
  label: NavLabel;
  icon: LucideIcon;
}

const initialNavItems: NavItem[] = [
  { id: "x", section: "intro", label: "Home", icon: Home },
  { id: 7, section: "thinking", label: "Thoughts", icon: FileText },
  { id: "m", section: "timeline", label: "Evolution", icon: GitBranch },
  { id: "K", section: "projects", label: "Projects", icon: Boxes },
  { id: 2, section: "ideas", label: "Ideas", icon: Lightbulb },
  { id: "p", section: "technologies", label: "Technologies", icon: Code2 },
  { id: "Q", section: "notebook", label: "Notebook", icon: BookMarkedIcon },
];

export default function Nav() {
  const { section, setSection } = useSectionContext();
  const mediaType = useMediaType();
  const [showMore, setShowMore] = useState(false);
  const containerNavRef = useRef<HTMLDivElement | null>(null);
  const navItemsRef = useRef(initialNavItems);
  const countRef = useRef(0);
  const { pin, setPin } = usePinContext();

  const visibleCount =
    mediaType === "phone"
      ? 1
      : mediaType === "tablet"
        ? 3
        : navItemsRef.current.length;

  const handlePinReset = (item: NavItem) => {
    if (item.id === "Q") {
      countRef.current++;
    }
  };

  // Reset Pin when notebook is pressed
  useEffect(() => {
    if (countRef.current > 2) {
      countRef.current = 0;
      setPin("");
    }
  }, [countRef.current]);

  useEffect(() => {
    if (!showMore) return;

    const onPointerDown = (e: PointerEvent) => {
      if (
        containerNavRef.current &&
        !containerNavRef.current.contains(e.target as Node)
      ) {
        setShowMore(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [showMore]);

  return (
    <div
      ref={containerNavRef}
      className="flex flex-col items-end gap-3 fixed top-6 right-6 z-40 w-fit"
    >
      <nav
        className="bg-card rounded-full px-2 py-2 border border-border overflow-hidden"
        aria-label="Visible Navigation"
      >
        <ul className="flex items-center gap-1">
          <AnimatePresence>
            {navItemsRef.current.slice(0, visibleCount).map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.li
                  key={item.label}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.1 + 0.5 }}
                >
                  <button
                    onClick={() => {
                      setSection(item.section);
                      setPin(pin + item.id);
                      handlePinReset(item);
                    }}
                    disabled={mediaType === "phone" && item.id !== "Q"}
                    className="relative flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-colors hover:text-primary cursor-pointer disabled:cursor-not-allowed"
                  >
                    {item.section === section && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-primary/10 rounded-full"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                    <Icon className="w-4 h-4 relative z-10" />
                    <span
                      className={`relative z-10 ${item.section === section ? "text-primary" : ""}`}
                    >
                      {item.label}
                    </span>
                  </button>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </ul>
      </nav>

      {!(mediaType === "desktop") && (
        <motion.button
          onClick={() => setShowMore(true)}
          className="flex justify-center items-center w-[54px] bg-card rounded-full border border-border cursor-pointer active:scale-90 transition-transform duration-250"
          animate={{ height: showMore ? 22 : 44 }}
          transition={{ duration: 0.25 }}
        >
          <AnimatePresence>
            {!showMore && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Ellipsis />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      )}

      <AnimatePresence>
        {!(mediaType === "desktop") && showMore && (
          <nav aria-label="Hidden Navigation">
            <ul className="flex flex-col items-end gap-1">
              {navItemsRef.current
                .slice(visibleCount, navItemsRef.current.length)
                .map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.li
                      key={item.label}
                      layout
                      initial={{ y: 10 * i, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 10 * i, opacity: 0 }}
                      transition={{ duration: 0.25, delay: i * 0.1 + 0.5 }}
                      className="bg-card px-2 py-2 border border-border rounded-full w-fit"
                    >
                      <button
                        onClick={() => {
                          const temp = navItemsRef.current[0];
                          const currentI = navItemsRef.current.findIndex(
                            (navItem) => navItem.section === item.section,
                          );

                          navItemsRef.current[0] =
                            navItemsRef.current[currentI];
                          navItemsRef.current[currentI] = temp;
                          setSection(item.section);
                          setPin(pin + item.id);
                          handlePinReset(item);
                        }}
                        className="relative flex items-center justify-end gap-2 px-4 py-2 rounded-full text-sm transition-colors hover:text-primary cursor-pointer"
                      >
                        {item.section === section && (
                          <motion.div
                            layoutId="activeNav"
                            className="absolute flex flex-end inset-0 bg-primary/10 rounded-full"
                            transition={{
                              type: "spring",
                              bounce: 0.2,
                              duration: 0.6,
                            }}
                          />
                        )}
                        <Icon className="w-4 h-4 relative z-10" />
                        <span
                          className={`relative z-10 ${item.section === section ? "text-primary" : ""}`}
                        >
                          {item.label}
                        </span>
                      </button>
                    </motion.li>
                  );
                })}
            </ul>
          </nav>
        )}
      </AnimatePresence>
    </div>
  );
}
