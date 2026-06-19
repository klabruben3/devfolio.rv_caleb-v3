import { useState } from "react";
import EcosystemMap from "../features/EcosystemMap";
import { thinkingCards, typeStyles } from "@/data";

export default function CurrentlyThinking() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="thinking" className="py-24 px-8 md:px-16">
      <div className="flex items-baseline gap-6 mb-16">
        <span
          className="text-[#7A7A6A]/20 font-mono select-none"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "5rem",
            fontWeight: 500,
            lineHeight: 1,
          }}
        >
          02
        </span>
        <div>
          <h2
            className="text-[#F0EDE6] leading-tight"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
            }}
          >
            Currently Thinking
          </h2>
          <p
            className="text-[#7A7A6A] text-sm mt-1"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            A live status feed. Some of these become projects. Some remain
            unresolved.
          </p>
        </div>
      </div>

      <EcosystemMap />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {thinkingCards.map((card) => (
          <div
            key={card.id}
            className={`border p-5 cursor-pointer transition-all ${
              active === card.id
                ? "border-[#E9B44C]/50 bg-[#1A1A17]"
                : "border-[rgba(240,237,230,0.1)] bg-[#131310] hover:border-[rgba(240,237,230,0.2)]"
            }`}
            style={{ transform: `rotate(${card.rot}deg)` }}
            onClick={() => setActive(active === card.id ? null : card.id)}
          >
            <div className="flex items-start justify-between gap-2 mb-3">
              <span
                className={`text-[9px] tracking-widest uppercase px-2 py-0.5 ${typeStyles[card.type]}`}
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {card.type}
              </span>
              <span
                className="text-[#7A7A6A]/40 text-xs"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                ●
              </span>
            </div>
            <h3
              className="text-[#F0EDE6] text-base font-medium mb-2"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {card.topic}
            </h3>
            <p
              className="text-[#F0EDE6]/55 text-sm leading-relaxed"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontStyle: "italic",
              }}
            >
              {card.note}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}