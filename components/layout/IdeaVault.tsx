"use client";
import { ideas, statusStyles } from "@/data";
import { useState } from "react";

export default function IdeaVault() {
  const [filter, setFilter] = useState<string | null>(null);
  const statuses = Array.from(new Set(ideas.map((i) => i.status)));
  const filtered = filter ? ideas.filter((i) => i.status === filter) : ideas;

  return (
    <section id="ideas" className="py-24 px-8 md:px-16">
      <div className="flex items-baseline gap-6 mb-10">
        <span
          className="text-[#7A7A6A]/20 font-mono select-none"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "5rem",
            fontWeight: 500,
            lineHeight: 1,
          }}
        >
          05
        </span>
        <div>
          <h2
            className="text-[#F0EDE6] leading-tight"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
            }}
          >
            Idea Vault
          </h2>
          <p
            className="text-[#7A7A6A] text-sm mt-1"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            A public shelf. Including the unfinished, the paused, and the
            abandoned.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setFilter(null)}
          className={`text-[10px] tracking-widest uppercase px-3 py-1.5 border transition-all cursor-pointer font-mono ${
            filter === null
              ? "border-[#E9B44C]/50 text-[#E9B44C]"
              : "border-[rgba(240,237,230,0.1)] text-[#7A7A6A] hover:text-[#F0EDE6]"
          }`}
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          All
        </button>
        {statuses.map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s === filter ? null : s)}
            className={`text-[10px] tracking-widest uppercase px-3 py-1.5 border transition-all cursor-pointer font-mono ${
              filter === s
                ? `border-current/40 ${statusStyles[s]}`
                : "border-[rgba(240,237,230,0.1)] text-[#7A7A6A] hover:text-[#F0EDE6]"
            }`}
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((idea) => (
          <div
            key={idea.id}
            className="border border-[rgba(240,237,230,0.1)] bg-[#131310] p-5"
            style={{ transform: `rotate(${idea.rot}deg)` }}
          >
            <div className="flex items-start justify-between mb-3">
              <span
                className={`text-[9px] tracking-widest uppercase px-2 py-0.5 font-mono ${statusStyles[idea.status] || "text-[#7A7A6A]"} border border-current/20`}
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {idea.status}
              </span>
              <span
                className="text-[#7A7A6A] text-[10px]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {idea.date}
              </span>
            </div>

            <h3
              className="text-[#F0EDE6]/90 text-base font-medium mb-2"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {idea.name}
            </h3>
            <p
              className="text-[#7A7A6A] text-sm leading-relaxed mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {idea.why}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {idea.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] px-1.5 py-0.5 border border-[rgba(240,237,230,0.08)] text-[#7A7A6A]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}