"use client";
import { useAuthContext } from "@/context";
import ChatButton from "./ChatButton";
import AdminChat from "./admin/AdminChat";
import VisitorConsole from "./visitor/VisitorConsole";
import { useState } from "react";
import { VisitorScreen } from "./visitor/types";

export default function ChatInstance() {
  const { isAuth, isOnline } = useAuthContext();
  const [showConsole, setShowConsole] = useState(false);
  const [screen, setScreen] = useState<VisitorScreen>("setup");

  return (
    <>
      {!showConsole ? (
        <ChatButton
          isAdminOnline={isOnline}
          renderType="admin"
          newMessage={false}
          typing={false}
          action={setShowConsole}
        />
      ) : isAuth ? (
        <AdminChat action={setShowConsole} />
      ) : (
        <VisitorConsole
          setShowConsole={setShowConsole}
          setScreen={setScreen}
          screen={screen}
        />
      )}
    </>
  );
}
