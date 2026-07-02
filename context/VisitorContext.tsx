"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { supabase } from "@/lib/supabase/client";
import { Message } from "@/components/ui/types";

type VisitorContextType = {
  chatId: string | null;
  initialize: () => Promise<void>;
  visitorName: string;
  visitorRead: boolean | null;
  messages: Message[];
};

const VisitorContext = createContext<VisitorContextType | null>(null);

export function VisitorProvider({ children }: { children: React.ReactNode }) {
  const [chatId, setChatId] = useState<string | null>(null);
  const [visitorName, setVisitorName] = useState<string>("");
  const [visitorRead, setVisitorRead] = useState<boolean | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);

  const initialize = useCallback(async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user || user.is_anonymous === false) return;

    const { data: visitor, error } = await supabase
      .from("visitors")
      .select("chat_id, name")
      .single();

    if (error || !visitor) {
      await supabase.auth.signOut();
      return;
    }

    setChatId(visitor.chat_id);
    setVisitorName(visitor.name);

    const { data: chat } = await supabase
      .from("chats")
      .select("visitor_read")
      .eq("id", visitor.chat_id)
      .single();

    if (chat) {
      setVisitorRead(chat.visitor_read);
    }

    // Initial messages fetch for chatID
    const { data: Messages } = await supabase
      .from("messages")
      .select("*")
      .eq("chat_id", visitor.chat_id)
      .order("time");

    if (Messages) {
      setMessages(Messages);
    }
  }, []);

  useEffect(() => {
    initialize();
  }, [initialize]);

  useEffect(() => {
    if (!chatId) return;

    const visitorChatChannel = supabase
      .channel(`visitor-chat-${chatId}`)
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "chats",
          filter: `id=eq.${chatId}`,
        },
        (payload) => {
          setVisitorRead(payload.new.visitor_read);
        },
      )
      .subscribe();

    // Keeps visitor chats updated
    const messagesInsertsChannel = supabase
      .channel(`messages-${chatId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
          filter: `chat_id=eq.${chatId}`,
        },
        (payload) => {
          const isConcern = payload.new.chat_id === chatId;
          if (!isConcern) return;

          setMessages((prev) => [...prev, payload.new as Message]);
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(visitorChatChannel);
      supabase.removeChannel(messagesInsertsChannel);
    };
  }, [chatId]);

  return (
    <VisitorContext.Provider
      value={{
        chatId,
        initialize,
        visitorName,
        visitorRead,
        messages,
      }}
    >
      {children}
    </VisitorContext.Provider>
  );
}

export function useVisitorContext() {
  const context = useContext(VisitorContext);
  if (!context)
    throw new Error("useVisitorContext cannot be used outside VisitorProvider");
  return context;
}
