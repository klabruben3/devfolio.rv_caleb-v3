"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { supabase } from "@/lib/supabase/client";

type VisitorContextType = {
  chatId: string | null;
  initialize: () => Promise<void>;
  visitorName: string;
  visitorRead: boolean | null;
};

const VisitorContext = createContext<VisitorContextType | null>(null);

export function VisitorProvider({ children }: { children: React.ReactNode }) {
  const [chatId, setChatId] = useState<string | null>(null);
  const [visitorName, setVisitorName] = useState<string>("");
  const [visitorRead, setVisitorRead] = useState<boolean | null>(null);

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

    const { data } = await supabase
      .from("chats")
      .select("visitor_read")
      .eq("id", visitor.chat_id)
      .single();

    if (data) {
      setVisitorRead(data.visitor_read);
    }
  }, []);

  useEffect(() => {
    initialize();
  }, [initialize]);

  useEffect(() => {
    if (!chatId) return;

    const channel = supabase
      .channel("visitor-chat")
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

    return () => {
      supabase.removeChannel(channel);
    };
  }, [chatId]);

  return (
    <VisitorContext.Provider
      value={{ chatId, initialize, visitorName, visitorRead }}
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
