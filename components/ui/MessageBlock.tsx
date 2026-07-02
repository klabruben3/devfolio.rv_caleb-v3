import { relativeTime } from "../features/chat/actions";
import { cn } from "../utils/cn";
import { Message } from "./types";

export default function MessageBlock({ msg }: { msg: Message }) {
    const isAdmin = msg.from === "admin";
    const time = relativeTime(msg.time!)

    return (
      <div className={cn("flex flex-col mb-4", isAdmin ? "items-start" : "items-end")}>
        <span style={{ fontFamily: "JetBrains Mono", fontSize: "8px", color: "#3a3a30", letterSpacing: "0.1em", marginBottom: "4px" }}>
          {isAdmin ? "caleb" : msg.sender.toLowerCase()} · {time}
        </span>
        <div
          className="relative max-w-[85%] px-3 py-2"
          style={{
            background: isAdmin ? "#1a1a17" : "rgba(233,180,76,0.06)",
            border: `1px solid ${isAdmin ? "rgba(240,237,230,0.06)" : "rgba(233,180,76,0.15)"}`,
            borderRadius: "2px",
          }}
        >
          <p style={{ fontFamily: "Plus Jakarta Sans", fontSize: "12px", color: "#f0ede6", lineHeight: 1.65 }}>
            {msg.text}
          </p>
        </div>
      </div>
    );
  }