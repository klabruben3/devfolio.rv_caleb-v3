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
};

const VisitorContext = createContext<VisitorContextType | null>(null);

export function VisitorProvider({ children }: { children: React.ReactNode }) {
  const [chatId, setChatId] = useState<string | null>(null);
  const [visitorName, setVisitorName] = useState<string>("");

  const initialize = useCallback(async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user || user.is_anonymous === false) return;

    const { data: visitor } = await supabase
      .from("visitors")
      .select("chat_id, name")
      .single();

    if (visitor?.chat_id) {
      setChatId(visitor.chat_id);
      setVisitorName(visitor.name)
    } else {
      await supabase.auth.signOut();
    }
  }, []);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <VisitorContext.Provider value={{ chatId, initialize, visitorName }}>
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
