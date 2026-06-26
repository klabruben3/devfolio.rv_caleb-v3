"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase/client";

type AuthContextType = {
  isAuth: boolean;
  isOnline: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isOnline, setIsOnline] = useState(false);

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
        .select("is_online")
        .eq("id", "admin")
        .single();

      if (data) {
        setIsOnline(data.is_online);
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
