"use client";

import { useSectionContext } from "@/context";

import CurrentlyThinking from "./CurrentlyThinking";
import IdeaVault from "./IdeaVault";
import Intro from "./Intro";
import Notebook from "./Notebook";
import Projects from "./Projects";
import TechEvolution from "./TechEvolution";
import WorkshopTimeline from "./WorkshopTimeline";
import { AnimatePresence, motion } from "motion/react";

export default function CurrentSection() {
  const { section } = useSectionContext();

  const pages = {
    intro: Intro, // Server
    thinking: CurrentlyThinking, // Client
    timeline: WorkshopTimeline, // Server
    projects: Projects, // Client
    ideas: IdeaVault, // Client
    technologies: TechEvolution, // Client
    notebook: Notebook, // Server
  };

  const Page = pages[section];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={section}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
      >
        <Page />
      </motion.div>
    </AnimatePresence>
  );
}
