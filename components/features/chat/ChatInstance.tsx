"use client";
import { useAuthContext, useLoginContext, useVisitorContext } from "@/context";
import ChatButton from "./ChatButton";
import AdminChat from "./admin/AdminChat";
import VisitorConsole from "./visitor/VisitorConsole";
import { useEffect, useRef, useState } from "react";
import { VisitorScreen } from "./visitor/types";
import { setOnlineStatus } from "./admin/actions";
import LoginCard from "./admin/LoginCard";

export default function ChatInstance() {
  const { isAuth, isOnline, readChats } = useAuthContext();
  const [showConsole, setShowConsole] = useState(false);
  const [screen, setScreen] = useState<VisitorScreen>("setup");
  const { chatId, visitorRead } = useVisitorContext();
  const { showLogin } = useLoginContext();
  const isAuthRef = useRef(isAuth);

  const handleUnload = () => {
    if (isAuthRef.current) setOnlineStatus(false);
  };

  useEffect(() => {
    isAuthRef.current = isAuth;
  }, [isAuth]);

  useEffect(() => {
    if (chatId) setScreen("active");
  }, [chatId]);
  
  useEffect(() => {
    window.addEventListener("beforeunload", handleUnload);
    return () => {
      handleUnload();
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  return (
    <>
      {!showLogin ? (
        !showConsole ? (
          <ChatButton
            isAdminOnline={isOnline}
            renderType={chatId ? "visitor" : "admin"}
            read={chatId ? visitorRead : readChats}
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
        )
      ) : (
        <LoginCard />
      )}
    </>
  );
}
