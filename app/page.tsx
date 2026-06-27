import {
  Authentication,
  ChatInstance,
  ConnectionStatus,
  CurrentSection,
  Footer,
  GlobalStyles,
  LivePresence,
  Nav,
} from "@/components";
import { AuthProvider, SectionContextProvider } from "@/context";

export default function Home() {
  return (
    <div
      className="bg-[#0D0D0B] min-h-screen text-[#F0EDE6]"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <AuthProvider>
        <SectionContextProvider>
          <GlobalStyles />
          <LivePresence />
          <Authentication />
          <Nav />
          <ConnectionStatus />
          <main>
            <CurrentSection />
          </main>
          <ChatInstance />
        </SectionContextProvider>
        <Footer />
      </AuthProvider>
    </div>
  );
}
