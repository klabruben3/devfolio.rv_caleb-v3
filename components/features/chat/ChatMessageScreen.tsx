"use client";

import MessageBlock from "@/components/ui/MessageBlock";
import { Message } from "@/components/ui/types";
import { Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ChatMessageScreen() {
  const [draft, setDraft] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  const messages: Message[] = [];
  const handleSend = () => {
    if (draft.trim()) {
      console.log("supabase: sending a message");
      setDraft("");
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <div
        className="flex-1 overflow-y-auto px-4 pt-4 relative"
        style={{ scrollbarWidth: "none" }}
      >
        {messages.map((msg) => (
          <MessageBlock key={msg.id} msg={msg} />
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Send messages */}
      <div
        className="px-3 py-3 relative"
        style={{
          borderTop: "1px solid rgba(240,237,230,0.06)",
          flexShrink: 0,
        }}
      >
        <div className="flex gap-2 items-end">
          <textarea
          id="message"
          aria-label="Message"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Write a message…"
            rows={2}
            className="flex-1 resize-none outline-none px-3 py-2"
            style={{
              background: "#1a1a17",
              border: "1px solid rgba(240,237,230,0.08)",
              borderRadius: "2px",
              color: "#f0ede6",
              fontFamily: "Plus Jakarta Sans",
              fontSize: "12px",
              lineHeight: 1.5,
            }}
          />
          <button
            onClick={handleSend}
            disabled={!draft.trim()}
            className="flex-shrink-0 p-2.5 transition-opacity hover:opacity-80"
            style={{
              background: draft.trim() ? "#e9b44c" : "#2a2a20",
              borderRadius: "2px",
              border: "none",
              cursor: draft.trim() ? "pointer" : "not-allowed",
            }}
          >
            <Send size={13} color={draft.trim() ? "#0d0d0b" : "#3a3a30"} />
          </button>
        </div>
        <div className="flex justify-between items-center mt-1.5">
          <span
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: "7px",
              color: "#3a3a30",
              letterSpacing: "0.1em",
            }}
          >
            enter to send · plain text only
          </span>
        </div>
      </div>
    </>
  );
}
