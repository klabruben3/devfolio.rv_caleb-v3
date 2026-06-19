import { techs } from "@/data";
import { useState } from "react";

export default function TechEvolution() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="technologies" className="py-24 px-8 md:px-16">
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
          06
        </span>
        <div>
          <h2
            className="text-[#F0EDE6] leading-tight"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
            }}
          >
            Technology Evolution
          </h2>
          <p
            className="text-[#7A7A6A] text-sm mt-1"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            No skill bars. No percentages. Every tool has a story.
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        {techs.map((tech, i) => (
          <div
            key={tech.name}
            className={`border-b border-[rgba(240,237,230,0.07)] transition-all ${i === 0 ? "border-t" : ""}`}
          >
            <button
              className="w-full flex items-center justify-between px-0 py-5 cursor-pointer group text-left"
              onClick={() => setOpen(open === tech.name ? null : tech.name)}
            >
              <div className="flex items-center gap-6">
                <span
                  className="text-[#7A7A6A] text-[10px] w-12"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {tech.since}
                </span>
                <h3
                  className="text-[#F0EDE6]/85 text-xl group-hover:text-[#F0EDE6] transition-colors"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  {tech.name}
                </h3>
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden md:flex gap-1.5">
                  {tech.projects.slice(0, 2).map((p) => (
                    <span
                      key={p}
                      className="text-[9px] px-2 py-0.5 border border-[rgba(240,237,230,0.1)] text-[#7A7A6A]"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {p}
                    </span>
                  ))}
                  {tech.projects.length > 2 && (
                    <span
                      className="text-[9px] px-2 py-0.5 text-[#7A7A6A]"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      +{tech.projects.length - 2}
                    </span>
                  )}
                </div>
                <span
                  className="text-[#7A7A6A] text-sm transition-transform"
                  style={{
                    transform:
                      open === tech.name ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </div>
            </button>

            {open === tech.name && (
              <div
                className="pb-6 grid grid-cols-1 md:grid-cols-3 gap-6 border-l-2 border-[#E9B44C]/20 pl-6 ml-14"
                style={{ transform: "rotate(-0.3deg)" }}
              >
                <div>
                  <p
                    className="text-[#E9B44C]/70 text-[10px] tracking-widest uppercase mb-2"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Why it entered
                  </p>
                  <p
                    className="text-[#F0EDE6]/70 text-sm leading-relaxed"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {tech.why}
                  </p>
                </div>
                <div>
                  <p
                    className="text-[#E9B44C]/70 text-[10px] tracking-widest uppercase mb-2"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Used in
                  </p>
                  <div className="flex flex-col gap-1">
                    {tech.projects.map((p) => (
                      <span
                        key={p}
                        className="text-[#F0EDE6]/60 text-sm"
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                        }}
                      >
                        → {p}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p
                    className="text-[#E9B44C]/70 text-[10px] tracking-widest uppercase mb-2"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Evolution
                  </p>
                  <p
                    className="text-[#F0EDE6]/70 text-sm leading-relaxed"
                    style={{
                      fontFamily: "'Caveat', cursive",
                      fontSize: "16px",
                    }}
                  >
                    {tech.evolution}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
