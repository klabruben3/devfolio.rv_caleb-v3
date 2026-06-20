"use client";

import {
  ConnectionStatus,
  CurrentSection,
  Footer,
  GlobalStyles,
  LivePresence,
  Nav,
} from "@/components";
import { SectionContextProvider } from "@/context";

export default function Home() {
  return (
    <div
      className="bg-[#0D0D0B] min-h-screen text-[#F0EDE6]"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <SectionContextProvider>
        <GlobalStyles />
        <LivePresence />
        <Nav />
        <ConnectionStatus />
        <main>
          <CurrentSection />
        </main>
      </SectionContextProvider>
      <Footer />
    </div>
  );
}
