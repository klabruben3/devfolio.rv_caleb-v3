"use client";
import { useAuthContext, useVisitorContext } from "@/context";
import ChatButton from "./ChatButton";
import AdminChat from "./admin/AdminChat";
import VisitorConsole from "./visitor/VisitorConsole";
import { useEffect, useRef, useState } from "react";
import { VisitorScreen } from "./visitor/types";
import { setOnlineStatus } from "./admin/actions";

export default function ChatInstance() {
  const { isAuth, isOnline } = useAuthContext();
  const [showConsole, setShowConsole] = useState(false);
  const [screen, setScreen] = useState<VisitorScreen>("setup");
  const { chatId } = useVisitorContext();
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
