"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";
import { Section, SectionProp } from "./types";

const SectionContext = createContext<SectionProp | undefined>(undefined);

function SectionContextProvider({ children }: { children: ReactNode }) {
  const [section, setSection] = useState<Section>("intro");

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
