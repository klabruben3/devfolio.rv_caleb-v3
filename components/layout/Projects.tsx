import { projects, statusStyles } from "@/data";
import { useState } from "react";

export default function Projects() {
  const [active, setActive] = useState<string>(projects[0].id);
  const project = projects.find((p) => p.id === active)!;

  return (
    <section id="projects" className="py-24 px-8 md:px-16">
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
          04
        </span>
        <div>
          <h2
            className="text-[#F0EDE6] leading-tight"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
            }}
          >
            Projects
          </h2>
          <p
            className="text-[#7A7A6A] text-sm mt-1"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Case studies, not cards. Every project is a question that needed
            answering.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex flex-col gap-2 lg:w-56 flex-shrink-0">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`text-left px-4 py-3 border transition-all cursor-pointer ${
                active === p.id
                  ? "border-[#E9B44C]/40 bg-[#E9B44C]/5 text-[#E9B44C]"
                  : "border-[rgba(240,237,230,0.08)] text-[#F0EDE6]/60 hover:text-[#F0EDE6] hover:border-[rgba(240,237,230,0.15)]"
              }`}
              style={{
                transform: `rotate(${i % 2 === 0 ? -0.4 : 0.6}deg)`,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              <div className="flex items-center justify-between">
                <span>{p.name}</span>
                <span
                  className={`text-[9px] font-mono ${statusStyles[p.status] || "text-[#7A7A6A]"}`}
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {p.status}
                </span>
              </div>
              <div className="text-[11px] text-[#7A7A6A] mt-0.5">
                {p.tagline}
              </div>
            </button>
          ))}
        </div>

        <div
          className="flex-1 border border-[rgba(240,237,230,0.1)] bg-[#131310]"
          style={{ transform: "rotate(0.2deg)" }}
        >
          <div className="border-b border-[rgba(240,237,230,0.08)] px-8 py-5 flex items-center justify-between">
            <div>
              <h3
                className="text-[#F0EDE6] text-2xl"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                {project.name}
              </h3>
              <p
                className="text-[#7A7A6A] text-sm mt-0.5"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {project.tagline} · {project.year}
              </p>
            </div>
            <span
              className={`text-[9px] tracking-widest uppercase px-3 py-1 border font-mono ${statusStyles[project.status]} border-current/20`}
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {project.status}
            </span>
          </div>

          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { label: "The Problem", content: project.problem },
              { label: "Why It Exists", content: project.motivation },
              { label: "What I Learned", content: project.lesson },
              { label: "Future Possibilities", content: project.future },
            ].map(({ label, content }) => (
              <div key={label}>
                <p
                  className="text-[#E9B44C]/70 text-[10px] tracking-widest uppercase mb-2"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {label}
                </p>
                <p
                  className="text-[#F0EDE6]/75 text-sm leading-relaxed"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {content}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-[rgba(240,237,230,0.08)] px-8 py-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[10px] px-2 py-1 border border-[rgba(240,237,230,0.1)] text-[#7A7A6A]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
