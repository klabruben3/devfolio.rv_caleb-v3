import { Section } from "@/context";
import { LucideIcon } from "lucide-react";

export type NavLabel =
  | "Home"
  | "Evolution"
  | "Projects"
  | "Ideas"
  | "Technologies"
  | "Thoughts"
  | "Notebook";
export interface NavItem {
  section: Section;
  label: NavLabel;
  icon: LucideIcon;
}