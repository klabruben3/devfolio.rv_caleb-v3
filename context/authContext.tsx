"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase/client";
import { relativeTime } from "@/components/features/chat/actions";
import { useVisitorContext } from "./VisitorContext";

type AuthContextType = {
  isAuth: boolean;
  isOnline: boolean;
  lastSeen: string;
  readChats: number | null;
  initialize: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isOnline, setIsOnline] = useState(false);
  const [lastSeen, setLastSeen] = useState("");
  const [readChats, setReadChats] = useState<number | null>(null);

  const { chatId } = useVisitorContext();

  const isAuth = !!user;

  const initialize = useCallback(async () => {
    // Load current admin presence
    const { data } = await supabase
      .from("presence")
      .select("is_online, updated_at")
      .eq("id", "admin")
      .single();

    if (data) {
      setIsOnline(data.is_online);
      setLastSeen(relativeTime(data.updated_at));
    }

    // loads the user and makess sure its admin
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user || user.is_anonymous !== false) return;
    setUser(user);

    // Checks if there is an chat with admin_unread === false
    const { count } = await supabase
      .from("chats")
      .select("*", { count: "exact", head: true })
      .eq("admin_read", false);

    setReadChats(count);
  }, []);

  useEffect(() => {
    initialize();

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      const u = session?.user ?? null;
      // Only set user if it's the admin (not anonymous)
      if (u && u.is_anonymous === false) {
        setUser(u);
      } else {
        setUser(null);
      }
    });

    // Listen for admin presence changes
    const presenceChannel = supabase
      .channel("presence")
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "presence",
        },
        (payload) => {
          setIsOnline(payload.new.is_online);
          setLastSeen(relativeTime(payload.new.updated_at));
        },
      )
      .subscribe();

    if (chatId) return;
    // Listen for the number of unread chats
    const chatChannel = supabase
      .channel("chats")
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "chats",
        },
        (payload) => {
          const wasRead = payload.old.admin_read;
          const isRead = payload.new.admin_read;

          if (wasRead && !isRead) {
            setReadChats((prev) => (prev ?? 0) + 1);
          }

          if (!wasRead && isRead) {
            setReadChats((prev) => Math.max((prev ?? 0) - 1, 0));            
          }
        },
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
      supabase.removeChannel(chatChannel);
      supabase.removeChannel(presenceChannel);
    };
  }, [chatId]);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        isOnline,
        lastSeen,
        readChats,
        initialize,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be used inside AuthProvider");
  }

  return context;
}
