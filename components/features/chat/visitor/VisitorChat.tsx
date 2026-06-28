"use client";
import { useAuthContext } from "@/context";
import { X } from "lucide-react";
import ChatMessageScreen from "../ChatMessageScreen";

interface VisitorChatProp {
  onClose: () => void;
}

export default function VisitorChat({ onClose }: VisitorChatProp) {
  const { isOnline } = useAuthContext();

  return (
    <div
      className="fixed bottom-5 right-5 z-50 border border-white/10 flex flex-col overflow-hidden"
      style={{
        background: "#131310",
        borderRadius: "2px",
        width: "380px",
        height: "auto",
        boxShadow: "0 16px 48px rgba(0,0,0,0.7)",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-3 relative"
        style={{
          borderBottom: "1px solid rgba(240,237,230,0.06)",
          flexShrink: 0,
        }}
      >
        <div className="flex items-center gap-2.5">
          <div
            className="w-2 h-2 rounded-full"
            style={{
              background: !isOnline ? "#e9b44c" : "#7ca982",
              boxShadow: `0 0 5px ${!isOnline ? "#e9b44c" : "#7ca982"}`,
            }}
          />
          <div>
            <div
              style={{
                fontFamily: "Plus Jakarta Sans",
                fontSize: "13px",
                color: "#f0ede6",
                fontWeight: 500,
              }}
            >
               {isOnline ? "Chatting with Caleb" : "Try leaving a message..."}
            </div>
            <div
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: "8px",
                color: "#7a7a6a",
                letterSpacing: "0.1em",
              }}
            >
              {"live · temporary room"}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {!isOnline && (
            <span
              style={{
                fontFamily: "Caveat",
                fontSize: "12px",
                color: "#e9b44c",
                opacity: 0.6,
                position: "absolute",
                top: "6px",
                left: "55%",
                transform: "translate(-30%, 2px)",
              }}
              className="flex"
            >
              <span>↙</span>
              <span className="rotate-5">thinking about life</span>
            </span>
          )}
          <button
            onClick={onClose}
            className="opacity-40 hover:opacity-70 transition-opacity"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <X size={14} color="#f0ede6" />
          </button>
        </div>
      </div>

      <ChatMessageScreen />
    </div>
  );
}
