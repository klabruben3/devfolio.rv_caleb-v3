import { type Section, useSectionContext } from "@/context";
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
} from "lucide-react";
import { useMediaType } from "@/utils/mediaQuery";
import { useEffect } from "react";

type NavLabel =
  | "Home"
  | "Evolution"
  | "Projects"
  | "Ideas"
  | "Technologies"
  | "Thoughts"
  | "Notebook";
interface NavItem {
  section: Section;
  label: NavLabel;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  { section: "intro", label: "Home", icon: Home },
  { section: "thinking", label: "Thoughts", icon: FileText },
  { section: "timeline", label: "Evolution", icon: GitBranch },
  { section: "projects", label: "Projects", icon: Boxes },
  { section: "ideas", label: "Ideas", icon: Lightbulb },
  { section: "technologies", label: "Technologies", icon: Code2 },
  { section: "notebook", label: "Notebook", icon: BookMarkedIcon },
];

export default function Nav() {
  const { section, setSection } = useSectionContext();
  const mediaType = useMediaType();

  const visibleCount =
    mediaType === "phone" ? 1 : (mediaType === "tablet" ? 3 : 7);

  return (
    <div className="flex flex-col items-end gap-3 fixed top-6 right-6 z-40 w-full">
      <nav className="bg-card rounded-full px-2 py-2 border border-border overflow-hidden">
        <ul className="flex items-center gap-1">
          <AnimatePresence>
            {navItems.slice(0, visibleCount).map((item, i) => {
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
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setSection(item.section);
                    }}
                    className="relative flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-colors hover:text-primary cursor-pointer"
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
                  </a>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </ul>
      </nav>

      <button className="flex justify-center items-center w-[54px] h-[44] bg-card rounded-full border border-border cursor-pointer active:scale-90 transition-transform duration-250" />
    </div>
  );
}
