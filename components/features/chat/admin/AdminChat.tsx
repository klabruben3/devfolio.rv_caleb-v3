"use client";

import { Dispatch, SetStateAction, useState } from "react";

interface AdminChatProp {
  action: Dispatch<SetStateAction<boolean>>;
}

import { Radio, X } from "lucide-react";
import Chats from "./Chats";
import ChatMessageScreen from "../ChatMessageScreen";

export default function AdminChat({ action: setShowConsole }: AdminChatProp) {
  const [hasChats, setHasChat] = useState(false);
  const [showChat, setShowChat] = useState(false);
  return (
    <div
      className="fixed bottom-5 right-5 z-50 border border-white/10 flex flex-col overflow-hidden"
      style={{
        background: "#131310",
        borderRadius: "2px",
        width: "420px",
        height: "auto",
        boxShadow: "0 16px 48px rgba(0,0,0,0.7)",
        transition: "width 0.2s ease",
      }}
    >
      {/* admin console header */}
      <div
        className="px-5 pt-5 pb-4 relative"
        style={{
          borderBottom: "1px solid rgba(240,237,230,0.06)",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            fontFamily: "JetBrains Mono",
            fontSize: "9px",
            color: "#7a7a6a",
            letterSpacing: "0.14em",
            marginBottom: "6px",
          }}
        >
          // live desk
        </div>
        <div className="flex items-center justify-between">
          <h2
            style={{
              fontFamily: "DM Serif Display",
              fontSize: "22px",
              color: "#f0ede6",
            }}
          >
            Inbox - DevFolio
          </h2>
          <button
            onClick={() => setShowConsole(false)}
            className="opacity-40 hover:opacity-70 transition-opacity"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <X size={14} color="#f0ede6" />
          </button>
        </div>
      </div>

      {!hasChats ? (
        <div className="flex flex-col items-center justify-center py-10 px-6">
          {/* Signal icon */}
          <div
            className="relative mb-6"
            style={{ width: "48px", height: "48px" }}
          >
            <Radio
              size={32}
              color="#3a3a30"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
            />
            <div className="absolute inset-0 rounded-full border border-white/6" />
          </div>
          <h3
            style={{
              fontFamily: "DM Serif Display",
              fontSize: "20px",
              color: "#f0ede6",
              marginBottom: "8px",
              textAlign: "center",
            }}
          >
            No conversations yet.
          </h3>
          <p
            style={{
              fontFamily: "Plus Jakarta Sans",
              fontSize: "11px",
              color: "#7a7a6a",
              textAlign: "center",
              lineHeight: 1.6,
              marginBottom: "16px",
            }}
          >
            When someone requests a chat, it will appear here.
          </p>
          <span
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: "8px",
              color: "#3a3a30",
              letterSpacing: "0.12em",
            }}
          >
            listening for requests…
          </span>
        </div>
      ) : !showChat ? (
        <Chats action={setShowChat} />
      ) : (
        <ChatMessageScreen />
      )}
    </div>
  );
}
