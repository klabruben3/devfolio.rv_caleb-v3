"use client";

import type { ComponentType } from "react";
import {
  MessageSquareDashed,
  MessageSquareDot,
  MessageSquareMore,
  MessageSquarePlus,
} from "lucide-react";

interface ChatButtonProps {
  renderType: "admin" | "client";
  newMessage: boolean;
  isAdminOnline: boolean;
  typing: boolean;
}

export default function ChatButton({
  renderType,
  newMessage,
  isAdminOnline,
  typing,
}: ChatButtonProps) {
  if (renderType === "admin") {
    if (typing) {
      return <ChatLayout Icon={MessageSquareMore} variant="typing" />;
    }

    if (newMessage) {
      return <ChatLayout Icon={MessageSquareDot} variant="new-message" />;
    }

    return null;
  }

  if (typing) {
    return <ChatLayout Icon={MessageSquareMore} variant="typing" />;
  }

  if (newMessage) {
    return <ChatLayout Icon={MessageSquareDot} variant="new-message" />;
  }

  if (isAdminOnline) {
    return <ChatLayout Icon={MessageSquarePlus} variant="online" />;
  }

  return <ChatLayout Icon={MessageSquareDashed} variant="offline" />;
}

interface ChatLayoutProps {
  Icon: ComponentType<{ className?: string }>;
  variant: "online" | "offline" | "new-message" | "typing";
}

function ChatLayout({ Icon, variant }: ChatLayoutProps) {
  const styles = {
    online: {
      icon: "text-accent",
      label: "Start a conversation",
      statusDot: "bg-accent",
      ring: "bg-accent/20",
      hover:
        "hover:border-accent/50 hover:shadow-[0_12px_35px_rgba(124,169,130,0.16)]",
    },

    offline: {
      icon: "text-muted-foreground",
      label: "Chat currently unavailable",
      statusDot: "bg-muted-foreground/50",
      ring: "",
      hover:
        "hover:border-muted-foreground/40 hover:text-foreground hover:shadow-[0_12px_35px_rgba(0,0,0,0.45)]",
    },

    "new-message": {
      icon: "text-primary",
      label: "You have a new message",
      statusDot: "bg-primary",
      ring: "bg-primary/20",
      hover:
        "hover:border-primary/60 hover:shadow-[0_12px_35px_rgba(233,180,76,0.16)]",
    },

    typing: {
      icon: "text-foreground",
      label: "Someone is typing",
      statusDot: "bg-primary/70",
      ring: "",
      hover:
        "hover:border-primary/40 hover:shadow-[0_12px_35px_rgba(233,180,76,0.1)]",
    },
  };

  const current = styles[variant];

  const shouldPulse = variant === "online" || variant === "new-message";

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Soft glow / communication pulse behind button */}
      {shouldPulse && (
        <span
          className={[
            "pointer-events-none absolute inset-0 rounded-xl blur-md",
            current.ring,
            variant === "online"
              ? "animate-[ping_2.8s_ease-in-out_infinite]"
              : "animate-[ping_2s_ease-in-out_infinite]",
          ].join(" ")}
        />
      )}

      <button
        type="button"
        aria-label={current.label}
        title={current.label}
        className={[
          "group relative grid h-13 w-13 place-items-center",
          "rounded-xl",
          "border border-border",
          "bg-card",
          "shadow-[0_10px_30px_rgba(0,0,0,0.42)]",
          "transition-all duration-200 ease-out",
          "hover:-translate-y-1",
          "active:translate-y-0 active:scale-95",
          "focus-visible:outline-none",
          "focus-visible:ring-2 focus-visible:ring-ring",
          "focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "cursor-pointer",
          current.hover,
        ].join(" ")}
      >
        {/* Inner edge highlight — gives it a premium layered surface */}
        <span className="pointer-events-none absolute inset-[2px] rounded-[10px] border border-white/[0.05]" />

        {/* Icon */}
        <Icon
          className={[
            "relative z-10 h-5 w-5 transition-transform duration-200",
            "group-hover:scale-110",
            current.icon,
            variant === "typing" ? "animate-pulse" : "",
          ].join(" ")}
        />

        {/* New message badge */}
        {variant === "new-message" && (
          <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full border border-card bg-primary px-1 text-[9px] font-bold text-primary-foreground shadow-sm">
            !
          </span>
        )}
      </button>
    </div>
  );
}
