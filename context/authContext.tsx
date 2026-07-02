"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase/client";
import { relativeTime } from "@/components/features/chat/actions";
import { useVisitorContext } from "./VisitorContext";
import { Chat } from "@/components/features/chat/admin/types";

type AuthContextType = {
  isAuth: boolean;
  isOnline: boolean;
  lastSeen: string;
  readChats: number | null;
  initialize: () => Promise<void>;
  chats: Chat[] | null;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isOnline, setIsOnline] = useState(false);
  const [lastSeen, setLastSeen] = useState("");
  const [readChats, setReadChats] = useState<number | null>(null);
  const [chats, setChats] = useState<Chat[] | null>(null);

  const { chatId } = useVisitorContext();

  const isAuth = !!user;

  const initialize = async () => {
    // Load current admin presence (runs for everyone)
    const { data: presence } = await supabase
      .from("presence")
      .select("is_online, updated_at")
      .eq("id", "admin")
      .single();

    if (presence) {
      setIsOnline(presence.is_online);
      setLastSeen(relativeTime(presence.updated_at));
    }

    // Load user and make sure it's admin
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user || user.is_anonymous !== false) return;
    setUser(user);

    // Check unread chats
    const { count } = await supabase
      .from("chats")
      .select("*", { count: "exact", head: true })
      .eq("admin_read", false);

    setReadChats(count);

    // Fetch all chats
    const { data: chats, error } = await supabase.from("chats").select("*");

    if (error) {
      console.log(error);
      return;
    }

    setChats(chats);
  };

  useEffect(() => {
    initialize();

    // Auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      const u = session?.user ?? null;
      if (u && u.is_anonymous === false) {
        setUser(u);
      } else {
        setUser(null);
      }
    });

    // Presence changes (runs for everyone)
    const presenceChannel = supabase
      .channel("presence-changes")
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "presence" },
        (payload) => {
          setIsOnline(payload.new.is_online);
          setLastSeen(relativeTime(payload.new.updated_at));
        },
      )
      .subscribe();

    // Admin-only subscriptions
    if (!chatId) {
      const chatUpdatesChannel = supabase
        .channel("chats-updates")
        .on(
          "postgres_changes",
          { event: "UPDATE", schema: "public", table: "chats" },
          (payload) => {
            const wasRead = payload.old.admin_read;
            const isRead = payload.new.admin_read;

            if (wasRead && !isRead) {
              setReadChats((prev) => (prev ?? 0) + 1);
            }

            if (!wasRead && isRead) {
              setReadChats((prev) => Math.max((prev ?? 0) - 1, 0));
            }

            // Keep chats list in sync
            setChats((prev) =>
              prev
                ? prev.map((c) =>
                    c.id === payload.new.id ? { ...c, ...payload.new } : c,
                  )
                : prev,
            );
          },
        )
        .subscribe();

      const chatInsertsChannel = supabase
        .channel("chats-inserts")
        .on(
          "postgres_changes",
          { event: "INSERT", schema: "public", table: "chats" },
          (payload) => {
            setChats((prev) =>
              prev ? [...prev, payload.new as Chat] : [payload.new as Chat],
            );
          },
        )
        .subscribe();

      return () => {
        subscription.unsubscribe();
        supabase.removeChannel(presenceChannel);
        supabase.removeChannel(chatUpdatesChannel);
        supabase.removeChannel(chatInsertsChannel);
      };
    }

    return () => {
      subscription.unsubscribe();
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
        chats,
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
