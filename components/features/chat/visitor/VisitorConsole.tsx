"use client";

import SetupCard from "./SetupCard";
import { VisitorChatProp } from "./types";
import VisitorChat from "./VisitorChat";

export default function VisitorConsole({
  screen,
  setScreen,
  setShowConsole,
}: VisitorChatProp) {
  const handleSubmit = () => {
    setScreen("active");
  };
  return (
    <>
      {screen === "setup" && (
        <SetupCard
          onSubmit={handleSubmit}
          onCancel={() => setShowConsole(false)}
        />
      )}

      {screen === "active" && (
        <VisitorChat onClose={() => setShowConsole(false)} />
      )}
    </>
  );
}
