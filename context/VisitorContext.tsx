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
};

const VisitorContext = createContext<VisitorContextType | null>(null);

export function VisitorProvider({ children }: { children: React.ReactNode }) {
  const [chatId, setChatId] = useState<string | null>(null);

  const initialize = useCallback(async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user || user.is_anonymous === false) return;

    const { data: visitor } = await supabase
      .from("visitors")
      .select("chat_id")
      .single();

    if (visitor?.chat_id) {
      setChatId(visitor.chat_id);
    } else {
      await supabase.auth.signOut();
    }
  }, []);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <VisitorContext.Provider value={{ chatId, initialize }}>
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
