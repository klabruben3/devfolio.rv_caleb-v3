"use client";
import { useAuthContext, useLoginContext, useVisitorContext } from "@/context";
import ChatButton from "./ChatButton";
import AdminChat from "./admin/AdminChat";
import VisitorConsole from "./visitor/VisitorConsole";
import { useEffect, useRef, useState } from "react";
import { VisitorScreen } from "./visitor/types";
import { setOnlineStatus } from "./admin/actions";
import LoginCard from "./admin/LoginCard";
import { supabase } from "@/lib/supabase/client";

export default function ChatInstance() {
  const { isAuth, isOnline } = useAuthContext();
  const [showConsole, setShowConsole] = useState(false);
  const [screen, setScreen] = useState<VisitorScreen>("setup");
  const { chatId } = useVisitorContext();
  const { showLogin } = useLoginContext();
  const [unread, setUnread] = useState(false);
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
    const checkNewMessage = async () => {
      if (chatId) {
        const { data } = await supabase
          .from("chats")
          .select("visitor_read")
          .eq("id", chatId)
          .single();

        setUnread(data?.visitor_read === false);
        return;
      }

      const { count } = await supabase
        .from("chats")
        .select("*", { count: "exact", head: true })
        .eq("admin_read", false);

      setUnread((count ?? 0) > 0);
    };

    checkNewMessage();
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
            newMessage={unread}
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
