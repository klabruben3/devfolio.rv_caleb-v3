"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase/client";
import { relativeTime } from "@/components/features/chat/actions";

type AuthContextType = {
  isAuth: boolean;
  isOnline: boolean;
  lastSeen: string;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isOnline, setIsOnline] = useState(false);
  const [lastSeen, setLastSeen] = useState("");

  const isAuth = !!user;

  useEffect(() => {
    async function initialize() {
      // Load authenticated user
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);

      // Load current admin presence
      const { data } = await supabase
        .from("Presence")
        .select("is_online, updated_at")
        .eq("id", "admin")
        .single();

      if (data) {
        setIsOnline(data.is_online);
        setLastSeen(relativeTime(data.updated_at));
      }
    }

    initialize();

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    // Listen for admin presence changes
    const channel = supabase
      .channel("Presence")
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "Presence",
        },
        (payload) => {
          setIsOnline(payload.new.is_online);
          setLastSeen(relativeTime(payload.new.updated_at));
        },
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        isOnline,
        lastSeen
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
