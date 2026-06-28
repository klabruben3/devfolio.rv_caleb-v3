"use client";

import { useAuthContext } from "@/context";
import { supabase } from "@/lib/supabase/client";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import React, { useState } from "react";

export default function Authentication() {
  const { isAuth } = useAuthContext();
  const [showLogin, setShowLogin] = useState(false);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error(error);
      return;
    }
  };

  const handleShowLogin = () => setShowLogin(true);

  const currentAction = isAuth ? handleSignOut : handleShowLogin;

  return (
    <>
      {!showLogin ? (
        <button
          onClick={currentAction}
          className={`absolute right-[500px] top-[300px] z-50 h-[50px] w-[50px] rounded-full border-2 ${isAuth ? "border-gray-500" : "border-primary"} bg-primary`}
        />
      ) : (
        <LoginCard setShowLogin={setShowLogin} />
      )}
    </>
  );
}

function LoginCard({
  setShowLogin,
}: {
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");

    if (!email || !password) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setIsSubmitting(false);

    if (error) {
      setErrorMessage(error.message);
      return;
    }

    setShowLogin(false);
  }

  return (
    <main className="fixed grid place-items-center h-screen w-screen bg-black/50 z-60">
      <section className="relative max-w-md overflow-hidden rounded-2xl border-2 border-border bg-card p-7 sm:p-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-primary/60" />
        <div className="pointer-events-none absolute -top-24 left-1/2 h-40 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative">
          <div className="mb-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
              Secure access
            </p>

            <h1 className="mt-2 font-['DM_Serif_Display'] text-3xl text-foreground">
              Welcome back
            </h1>
          </div>

          <form id="login" aria-label="login" className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="email">Email address</label>

              <div className="group relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary" />

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="h-12 w-full rounded-xl border border-border bg-secondary pl-10 pr-4 outline-none focus:border-primary/60 focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password">Password</label>

              <div className="group relative">
                <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary" />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="h-12 w-full rounded-xl border border-border bg-secondary pl-10 pr-11 outline-none focus:border-primary/60 focus:ring-2 focus:ring-ring"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  className="absolute right-1.5 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-lg text-muted-foreground hover:text-primary"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {errorMessage && (
              <p className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive-foreground">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex h-12 w-full items-center justify-center rounded-xl border border-primary/60 bg-primary font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Logging in..." : "Log in"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
