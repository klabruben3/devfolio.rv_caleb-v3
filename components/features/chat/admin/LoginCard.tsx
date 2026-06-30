"use client";
import { useLoginContext } from "@/context";
import { supabase } from "@/lib/supabase/client";
import { Eye, EyeOff, LockKeyhole, Mail, X } from "lucide-react";
import { useState } from "react";

export default function LoginCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { setShowLogin } = useLoginContext();

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
    <main
      className="fixed bottom-5 right-5 z-50 w-full max-w-sm overflow-hidden border border-border bg-card flex flex-col"
      style={{
        borderRadius: "var(--radius)", // Pulls your 2px sharp radius
        boxShadow: "0 16px 48px rgba(0,0,0,0.7)",
      }}
    >
      {/* Console Header */}
      <div
        className="flex items-center justify-between px-4 py-3 border-b border-border"
        style={{ flexShrink: 0 }}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_5px_var(--primary)]" />
          <div>
            <div className="font-['Plus_Jakarta_Sans'] text-[13px] font-medium text-foreground">
              System Authentication
            </div>
            <div className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground">
              secure · restricted access
            </div>
          </div>
        </div>

        {/* Escape Hatch / Close Button */}
        <button
          type="button"
          onClick={() => setShowLogin(false)}
          className="opacity-45 hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-none"
          aria-label="Close login panel"
        >
          <X size={14} className="text-foreground" />
        </button>
      </div>

      {/* Content Body */}
      <div className="p-6">
        <form
          id="login"
          aria-label="login"
          className="space-y-4"
          onSubmit={handleSubmit}
        >
          {/* Email Field */}
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="font-['Plus_Jakarta_Sans'] text-xs text-muted-foreground"
            >
              Email terminal
            </label>
            <div className="group relative">
              <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary" />
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="h-10 w-full rounded-sm border border-border bg-secondary pl-9 pr-4 text-sm font-mono text-foreground outline-none focus:border-primary/60 focus:ring-2 focus:ring-ring transition-all"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-1.5">
            <label
              htmlFor="password"
              className="font-['Plus_Jakarta_Sans'] text-xs text-muted-foreground"
            >
              Access key
            </label>
            <div className="group relative">
              <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary" />
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                className="h-10 w-full rounded-sm border border-border bg-secondary pl-9 pr-10 text-sm font-mono text-foreground outline-none focus:border-primary/60 focus:ring-2 focus:ring-ring transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                className="absolute right-1 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-sm text-muted-foreground hover:text-primary bg-transparent cursor-pointer"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <p className="rounded-sm border border-destructive/30 bg-destructive/10 px-3 py-2 font-mono text-xs text-destructive-foreground">
              ⚠️ {errorMessage}
            </p>
          )}

          {/* Action Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 flex h-10 w-full items-center justify-center rounded-sm border border-primary/40 bg-primary font-['Plus_Jakarta_Sans'] text-xs font-semibold text-primary-foreground tracking-wide transition-all uppercase hover:bg-primary/90 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
          >
            {isSubmitting ? "Executing Auth..." : "Initialize Session"}
          </button>
        </form>
      </div>
    </main>
  );
}
