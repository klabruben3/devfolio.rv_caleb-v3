"use client";
import { useAuthContext } from "@/context";
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

  const isAuthRef = useRef(isAuth);
  useEffect(() => {
    isAuthRef.current = isAuth;
  }, [isAuth]);

  const handleUnload = () => {
    if (isAuthRef.current) setOnlineStatus(false);
  };

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
