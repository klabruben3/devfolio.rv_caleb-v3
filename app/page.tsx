import {
  ChatButton,
  Authentication,
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
          <ChatButton
            renderType="client"
            isAdminOnline={true}
            newMessage={true}
            typing={false}
          />
        </SectionContextProvider>
        <Footer />
      </AuthProvider>
    </div>
  );
}
