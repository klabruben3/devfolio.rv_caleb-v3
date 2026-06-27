"use client";
import { useAuthContext } from "@/context";
import ChatButton from "./ChatButton";
import AdminChat from "./admin/AdminChat";
import VisitorChat from "./visitor/VisitorChat";
import { useState } from "react";

export default function ChatInstance() {
  const { isAuth, isOnline } = useAuthContext();
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      {!showChat ? (
        <ChatButton
          isAdminOnline={isOnline}
          renderType="admin"
          newMessage={false}
          typing={false}
          action={setShowChat}
        />
      ) : isAuth ? (
        <AdminChat />
      ) : (
        <VisitorChat />
      )}
    </>
  );
}
