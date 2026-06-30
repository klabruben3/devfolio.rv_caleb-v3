import {
  ChatInstance,
  ConnectionStatus,
  CurrentSection,
  FixedContent,
  Footer,
  GlobalStyles,
  LivePresence,
  Nav,
} from "@/components";
import {
  AuthProvider,
  LoginContextProvider,
  PinContextProvider,
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

            {/* Background Features */}
            <FixedContent />

            {/* Fixed header */}
            <LoginContextProvider>
              <PinContextProvider>
                <LivePresence />

                <Nav />

                <ChatInstance />
              </PinContextProvider>

              {/* Upon offline */}
              <ConnectionStatus />
              <main>
                <CurrentSection />
              </main>
            </LoginContextProvider>
          </SectionContextProvider>
          <Footer />
        </AuthProvider>
      </VisitorProvider>
    </div>
  );
}
