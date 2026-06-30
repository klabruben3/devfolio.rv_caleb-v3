import {
  ChatInstance,
  ConnectionStatus,
  CurrentSection,
  Footer,
  GlobalStyles,
  LivePresence,
  Nav,
} from "@/components";
import {
  AuthProvider,
  LoginContextProvider,
  SectionContextProvider,
  VisitorProvider,
} from "@/context";

export default function Home() {
  return (
    <div
      className="bg-[#0D0D0B] min-h-screen text-[#F0EDE6]"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <VisitorProvider>
        <AuthProvider>
          <SectionContextProvider>
            <GlobalStyles />

            {/* Fixed header */}
            <LivePresence />
            <Nav />

            {/* Upon offline */}
            <ConnectionStatus />
            <LoginContextProvider>
              <main>
                <CurrentSection />
              </main>
              <ChatInstance />
            </LoginContextProvider>
          </SectionContextProvider>
          <Footer />
        </AuthProvider>
      </VisitorProvider>
    </div>
  );
}
