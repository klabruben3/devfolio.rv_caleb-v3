"use client";
import { useVisitorContext } from "@/context";
import { supabase } from "@/lib/supabase/client";
import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function SetupCard({
  onSubmit: setScreen,
  onCancel,
}: {
  onSubmit: () => void;
  onCancel: () => void;
}) {
  const [name, setName] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { initialize } = useVisitorContext();

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // 1. Sign in anonymously
    const { data: authData, error: authError } =
      await supabase.auth.signInAnonymously();
    if (authError || !authData.user) {
      console.error("Auth error:", authError);
      return;
    }

    // 2. Create chat
    const { data: chat, error: chatError } = await supabase
      .from("chats")
      .insert({ visitor: name.trim() })
      .select("id")
      .single();

    if (chatError || !chat) {
      console.error("Chat error:", chatError);
      return;
    }

    // 3. Link visitor to chat
    const { error: visitorError } = await supabase.from("visitors").insert({
      auth_id: authData.user.id,
      chat_id: chat.id,
      name: name.trim(),
    });

    if (visitorError) {
      console.error("Visitor error:", visitorError);
      return;
    }
    await initialize(); // fetches chatId into context

    setIsSubmitting(false);
    setScreen();
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div
      className="fixed bottom-5 right-5 z-50 border border-white/10 overflow-hidden"
      style={{
        background: "#131310",
        borderRadius: "2px",
        width: "360px",
        boxShadow: "0 16px 48px rgba(0,0,0,0.6)",
      }}
    >
      <div className="px-6 pt-6 pb-5">
        {/* Eyebrow */}
        <div
          style={{
            fontFamily: "JetBrains Mono",
            fontSize: "9px",
            color: "#7a7a6a",
            letterSpacing: "0.14em",
            marginBottom: "14px",
          }}
        >
          // temporary connection
        </div>

        {/* Heading */}
        <h2
          style={{
            fontFamily: "DM Serif Display",
            fontSize: "28px",
            color: "#f0ede6",
            marginBottom: "16px",
            lineHeight: 1.2,
          }}
        >
          Before we talk.
        </h2>

        {/* Copy */}
        <div
          style={{
            fontFamily: "Plus Jakarta Sans",
            fontSize: "12px",
            color: "#7a7a6a",
            lineHeight: 1.7,
            marginBottom: "20px",
          }}
        >
          This is a temporary live chat with Caleb.
          <br />
          Messages exist only while this conversation is active.
          <br />
          Leaving or disconnecting may end the session.
        </div>

        {/* Caveat note */}
        <div className="absolute top-6 right-6">
          <span
            style={{
              fontFamily: "Caveat",
              fontSize: "13px",
              color: "#e9b44c",
              opacity: 0.65,
              transform: "rotate(2deg)",
              display: "block",
            }}
          >
            no account needed
          </span>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "rgba(240,237,230,0.06)",
            marginBottom: "20px",
          }}
        />

        {/* Name input */}
        <label
          style={{
            fontFamily: "Plus Jakarta Sans",
            fontSize: "11px",
            color: "#7a7a6a",
            display: "block",
            letterSpacing: "0.04em",
          }}
          htmlFor="visitor-name"
        >
          <span className="mb-[8px] block cursor-pointer active:text-white/60 tranition-[color] duration-200 w-fit">
            What should I call you?
          </span>
          <input
            id="visitor-name"
            aria-label="Visitor Label"
            ref={inputRef}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Thando"
            onKeyDown={(e) => {
              if (e.key === "Enter" && name.trim() && agreed) handleSubmit();
            }}
            className="w-full px-3 py-2 outline-none focus:border-[#e9b44c]/40 transition-colors"
            style={{
              background: "#1a1a17",
              border: "1px solid rgba(240,237,230,0.08)",
              borderRadius: "2px",
              color: "#f0ede6",
              fontFamily: "Plus Jakarta Sans",
              fontSize: "13px",
              marginBottom: "16px",
            }}
          />
        </label>

        {/* Consent checkbox */}
        <label
          htmlFor="policy"
          className="flex items-start gap-3 mb-5 w-fit cursor-pointer"
        >
          {/* Visually hidden native checkbox */}
          <input
            type="checkbox"
            id="policy"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
            className="hidden"
          />

          {/* Custom visual checkbox */}
          <div
            className="mt-0.5 w-4 h-4 flex-shrink-0 flex items-center justify-center transition-colors"
            style={{
              border: `1px solid ${agreed ? "#e9b44c" : "rgba(240,237,230,0.15)"}`,
              background: agreed ? "#e9b44c" : "transparent",
              borderRadius: "2px",
            }}
          >
            {agreed && <Check size={10} color="#0d0d0b" strokeWidth={3} />}
          </div>

          <span
            style={{
              fontFamily: "Plus Jakarta Sans",
              fontSize: "11px",
              color: "#7a7a6a",
              lineHeight: 1.5,
            }}
          >
            I understand this chat is temporary.
          </span>
        </label>

        {/* Buttons */}
        <button
          onClick={() => name.trim() && agreed && handleSubmit()}
          disabled={!name.trim() || !agreed || isSubmitting}
          className="w-full py-2.5 mb-2 transition-opacity"
          style={{
            background:
              name.trim() && agreed && !isSubmitting
                ? "#e9b54c"
                : "#e9b54ca0",
            borderRadius: "2px",
            border: "none",
            cursor:
              name.trim() && agreed && !isSubmitting
                ? "pointer"
                : "not-allowed",
            fontFamily: "Plus Jakarta Sans",
            fontSize: "13px",
            fontWeight: 600,
            color:
              name.trim() && agreed && !isSubmitting ? "#0d0d0b" : "#3a3a30",
          }}
        >
          {isSubmitting ? "Analysing..." : "Start a chat"}
        </button>
        <button
          onClick={onCancel}
          className="w-full py-2 transition-opacity hover:opacity-70"
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            fontFamily: "Plus Jakarta Sans",
            fontSize: "12px",
            color: "#7a7a6a",
          }}
        >
          Not now
        </button>
      </div>
    </div>
  );
}
