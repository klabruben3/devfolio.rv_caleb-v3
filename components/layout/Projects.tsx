"use client";

import { projects, statusStyles } from "@/data";
import { useState } from "react";

export default function Projects() {
  const [active, setActive] = useState<string>(projects[0].id);

  const project = projects.find((p) => p.id === active)!;

  return (
    <section id="projects" className="px-8 lg:px-8">
      {/* Section heading */}
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

      {/* Mobile project selector */}
      <div className="lg:hidden mb-8">
        <label
          htmlFor="project-selector"
          className="block text-[9px] tracking-widest uppercase text-[#E9B44C]/70 mb-2"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Select project
        </label>

        <div className="relative">
          <select
            id="project-selector"
            value={active}
            onChange={(event) => setActive(event.target.value)}
            className="
              w-full
              appearance-none
              border
              border-[rgba(240,237,230,0.12)]
              bg-[#131310]
              text-[#F0EDE6]
              px-4
              py-3
              pr-12
              outline-none
              cursor-pointer
              focus:border-[#E9B44C]/50
              transition-colors
            "
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "14px",
            }}
          >
            {projects.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} — {p.status}
              </option>
            ))}
          </select>

          {/* Custom dropdown indicator */}
          <span
            className="
              pointer-events-none
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-[#E9B44C]/70
              text-xs
            "
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            ↓
          </span>
        </div>

        <p
          className="text-[10px] text-[#7A7A6A] mt-2"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {project.kind} / {project.year}
        </p>
      </div>

      {/* Project browser */}
      <div className="flex flex-col lg:flex-row lg:items-start gap-6">
        {/* Desktop project index */}
        <div
          className="
            hidden
            lg:flex
            flex-col
            gap-2
            lg:w-64
            shrink-0
            lg:max-h-100
            lg:overflow-y-scroll
            lg:pr-3
            lg:pt-1
            project-scrollbar
          "
        >
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`
                text-left
                px-4
                py-3
                border
                transition-all
                cursor-pointer
                shrink-0
                ${
                  active === p.id
                    ? "border-[#E9B44C]/40 bg-[#E9B44C]/5 text-[#E9B44C]"
                    : "border-[rgba(240,237,230,0.08)] text-[#F0EDE6]/60 hover:text-[#F0EDE6] hover:border-[rgba(240,237,230,0.15)]"
                }
              `}
              style={{
                transform: `rotate(${i % 2 === 0 ? -0.4 : 0.6}deg)`,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="min-w-0">{p.name}</span>

                <span
                  className={`
                    text-[9px]
                    font-mono
                    shrink-0
                    ${statusStyles[p.status] || "text-[#7A7A6A]"}
                  `}
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

        {/* Selected project */}
        <div
          className="
            flex-1
            min-w-0
            border
            border-[rgba(240,237,230,0.1)]
            bg-[#131310]
          "
          style={{ transform: "rotate(0.2deg)" }}
        >
          {/* Project header */}
          <div
            className="
              border-b
              border-[rgba(240,237,230,0.08)]
              px-6
              md:px-8
              py-5
              flex
              flex-col
              sm:flex-row
              sm:items-start
              sm:justify-between
              gap-4
            "
          >
            <div className="min-w-0">
              <div
                className="
                  flex
                  flex-wrap
                  items-center
                  gap-x-2
                  gap-y-1
                  text-[9px]
                  tracking-widest
                  uppercase
                  text-[#7A7A6A]
                  mb-2
                "
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <span className="text-[#E9B44C]/70">{project.kind}</span>

                <span className="text-[#7A7A6A]/30">/</span>

                <span>{project.year}</span>
              </div>

              <h3
                className="text-[#F0EDE6] text-2xl"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                {project.name}
              </h3>

              <p
                className="text-[#7A7A6A] text-sm mt-0.5 max-w-2xl"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {project.tagline}
              </p>
            </div>

            <span
              className={`
                text-[9px]
                tracking-widest
                uppercase
                px-3
                py-1
                border
                font-mono
                shrink-0
                ${statusStyles[project.status] || "text-[#7A7A6A]"}
                border-current/20
              `}
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {project.status}
            </span>
          </div>

          {/* Case study */}
          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                label: "The Problem",
                content: project.problem,
              },
              {
                label: "Why It Exists",
                content: project.motivation,
              },
              {
                label: "What I Learned",
                content: project.lesson,
              },
              {
                label: "Future Possibilities",
                content: project.future,
              },
            ].map(({ label, content }) => (
              <div key={label}>
                <p
                  className="
          text-[#E9B44C]/70
          text-[10px]
          tracking-widest
          uppercase
          mb-2
        "
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

            {project.reasonToAbandon && (
              <div
                className="
        md:col-span-2
        border-t
        border-[rgba(240,237,230,0.08)]
        pt-6
      "
              >
                <p
                  className="
          text-[#E9B44C]/70
          text-[10px]
          tracking-widest
          uppercase
          mb-2
        "
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Why I Abandoned It
                </p>

                <p
                  className="text-[#F0EDE6]/75 text-sm leading-relaxed max-w-4xl"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {project.reasonToAbandon}
                </p>
              </div>
            )}
          </div>

          {/* Public links */}
          {(project.repoUrl || project.liveUrl) && (
            <div
              className="
                border-t
                border-[rgba(240,237,230,0.08)]
                px-6
                md:px-8
                py-4
                flex
                flex-wrap
                items-center
                gap-3
              "
            >
              <span
                className="
                  text-[9px]
                  tracking-widest
                  uppercase
                  text-[#7A7A6A]/60
                  mr-1
                "
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Open
              </span>

              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    text-[10px]
                    tracking-widest
                    uppercase
                    px-3
                    py-1.5
                    border
                    border-[rgba(240,237,230,0.12)]
                    text-[#F0EDE6]/60
                    hover:text-[#F0EDE6]
                    hover:border-[rgba(240,237,230,0.28)]
                    transition-colors
                  "
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Repository ↗
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    text-[10px]
                    tracking-widest
                    uppercase
                    px-3
                    py-1.5
                    border
                    border-[#E9B44C]/25
                    text-[#E9B44C]/80
                    hover:text-[#E9B44C]
                    hover:border-[#E9B44C]/50
                    bg-[#E9B44C]/3
                    transition-colors
                  "
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Live ↗
                </a>
              )}
            </div>
          )}

          {/* Technologies */}
          <div
            className="
              border-t
              border-[rgba(240,237,230,0.08)]
              px-6
              md:px-8
              py-4
              flex
              flex-wrap
              gap-2
            "
          >
            {project.tech.map((technology) => (
              <span
                key={technology}
                className="
                  text-[10px]
                  px-2
                  py-1
                  border
                  border-[rgba(240,237,230,0.1)]
                  text-[#7A7A6A]
                "
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
