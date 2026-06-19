import { type Section, useSectionContext } from "@/context";
import { motion } from "motion/react";
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

type NavLabel =
  | "Home"
  | "Evolution"
  | "Projects"
  | "Ideas"
  | "Technologies"
  | "Thoughts"
  | "Notebook";
interface NavItem{
  section: Section;
  label: NavLabel;
  icon: LucideIcon;
}

export default function Nav() {
  const { section, setSection } = useSectionContext();

  const navItems: NavItem[] = [
    { section: "intro", label: "Home", icon: Home },
    { section: "thinking", label: "Thoughts", icon: FileText },
    { section: "timeline", label: "Evolution", icon: GitBranch },
    { section: "projects", label: "Projects", icon: Boxes },
    { section: "ideas", label: "Ideas", icon: Lightbulb },
    { section: "technologies", label: "Technologies", icon: Code2 },
    { section: "notebook", label: "Notebook", icon: BookMarkedIcon },
  ];

  return (
    <nav className="fixed top-6 right-6 z-50 bg-card rounded-full px-2 py-2 border border-border">
      <ul className="flex items-center gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.label}>
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
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <Icon className="w-4 h-4 relative z-10" />
                <span
                  className={`relative z-10 ${item.section === section ? "text-primary" : ""}`}
                >
                  {item.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
