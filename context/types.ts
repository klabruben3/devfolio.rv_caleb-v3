import { Dispatch, SetStateAction } from "react";

export type Section =
  | "intro"
  | "thinking"
  | "timeline"
  | "projects"
  | "ideas"
  | "technologies"
  | "notebook";

export interface SectionProp {
  section: Section;
  setSection: Dispatch<SetStateAction<Section>>;
}