"use client";

import MessageBlock from "@/components/ui/MessageBlock";
import { Message } from "@/components/ui/types";
import { useAuthContext, useChatContext, useVisitorContext } from "@/context";
import { useLenis } from "lenis/react";
import { Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import UpdateDetails from "./visitor/UpdateDetails";
import MyContactDetails from "./visitor/MyContactDetails";
import { send } from "./actions";
import { supabase } from "@/lib/supabase/client";

export default function ChatMessageScreen() {
  const [draft, setDraft] = useState("");
  const [hoveringChat, setHoveringChat] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [showUpdateCard, setShowUpdateCard] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const { isOnline, isAuth } = useAuthContext();

  // admin messages
  const { currChatId } = useChatContext();
  const [adimMessages, setAdminMessages] = useState<Message[]>([]);
  //

  // Fetch messages for message.chat_id === currChatId
  async function initialize() {
    const { data: Messages } = await supabase
      .from("messages")
      .select("*")
      .eq("chat_id", currChatId)
      .order("time");

    if (Messages) {
      setAdminMessages(Messages);
    }
  } //

  // Visitor messages
  const {
    chatId,
    visitorName,
    messages: visitorMessages,
  } = useVisitorContext();
  //

  const bottomRef = useRef<HTMLDivElement | null>(null);
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const messages: Message[] = chatId ? visitorMessages : adimMessages;
  const handleSend = async () => {
    if (draft.trim()) {
      setIsSending(true);

      send({
        chat_id: chatId ? chatId : currChatId,
        from: chatId ? "visitor" : "admin",
        sender: chatId ? visitorName : "Ruben",
        text: draft,
      });

      setIsSending(false);
      setDraft("");
    }
  };

  const handleUserDetails = () => {
    setShowUpdateCard(true);
  };

  const handleShowContacts = () => {
    setShowContactInfo(true);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    textAreaRef.current?.focus();
  }, [messages]);

  useEffect(() => {
    if (!isAuth) return;
    console.log("itsssss admin") // only for for Rubza👇👇👇
    initialize();

    // Subscribe to message changes
    const messagesInsertsChannel = supabase
      .channel(`messages-${currChatId}-admin`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
          filter: `chat_id=eq.${currChatId}`,
        },
        (payload) => {
          setAdminMessages((prev) => [...prev, payload.new as Message]);
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(messagesInsertsChannel);
    };
  }, []);

  // Stops Lenis from running upon mouse enter
  const lenis = useLenis();
  useEffect(() => {
    if (hoveringChat) lenis?.stop();
    else lenis?.start();
  }, [hoveringChat]);

  return (
    <>
      <div
        className="flex-1 overflow-y-auto px-4 pt-4 relative max-h-[250px] min-h-[200px]"
        onMouseEnter={() => setHoveringChat(true)}
        onMouseLeave={() => setHoveringChat(false)}
        onWheel={(e) => e.stopPropagation()}
        style={{ scrollbarWidth: "none" }}
      >
        {showUpdateCard && (
          <UpdateDetails onCancel={() => setShowUpdateCard(false)} />
        )}

        {showContactInfo && (
          <MyContactDetails onCancel={() => setShowContactInfo(false)} />
        )}
        <div className="flex items-center flex-col">
          <p
            className="mb-4 text-center rounded-xl px-3 py-2 max-w-[80%] text-white/60"
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: "9px",
              letterSpacing: "0.1em",
            }}
          >
            {!isOnline && !isAuth && (
              <>
                Ruben is not online right now.
                <br />
                Leave a message and he'll get back to you.
                <br />
                <span
                  onClick={handleUserDetails}
                  className="text-[#e9b44c] underline leading-[5px] underline-offset-2 text-[10px] cursor-pointer"
                >
                  Add/update your contact details
                </span>{" "}
                or{" "}
                <span
                  onClick={handleShowContacts}
                  className="text-[#e9b44c] underline leading-[5px] underline-offset-2 text-[10px] cursor-pointer"
                >
                  contact him directly.
                </span>
              </>
            )}

            {isOnline && (
              <span className="text-[#7ca982]">
                Average response under 5 minutes...
              </span>
            )}
          </p>
        </div>

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
            ref={textAreaRef}
            id="message"
            aria-label="Message"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
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
            disabled={!draft.trim() && !isSending}
            className="flex-shrink-0 p-2.5 transition-opacity hover:opacity-80"
            style={{
              background: draft.trim() || isSending ? "#e9b44c" : "#2a2a20",
              borderRadius: "2px",
              border: "none",
              cursor: draft.trim() || isSending ? "pointer" : "not-allowed",
            }}
          >
            <Send
              size={13}
              color={draft.trim() || isSending ? "#0d0d0b" : "#3a3a30"}
            />
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
