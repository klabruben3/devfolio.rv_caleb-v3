"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Section, SectionProp } from "./types";

const SectionContext = createContext<SectionProp | undefined>(undefined);

function SectionContextProvider({ children }: { children: ReactNode }) {
  const [section, setSection] = useState<Section>("intro");
  const isFirstRender = useRef(true);

  // Once mounted, adopt whatever was saved from a previous visit
  useEffect(() => {
    const stored = localStorage.getItem("current-section") as Section | null;
    if (stored) setSection(stored);
  }, []);

  // Persist whenever it changes — but skip the very first run,
  // so we never write the default value over a real saved value
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem("current-section", section);
  }, [section]);

  return (
    <SectionContext.Provider value={{ section, setSection }}>
      {children}
    </SectionContext.Provider>
  );
}

function useSectionContext() {
  const sectionContext = useContext(SectionContext);
  if (!sectionContext) {
    throw new Error(
      "useSectionContext cannot be used out the Section provider.",
    );
  }

  return sectionContext;
}

export { SectionContextProvider, useSectionContext };