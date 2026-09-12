"use client";

import { ExternalLink, FileText, Mail } from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/klabruben3",
    icon:
      "/external-icons/github.svg",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ruben-caleb-b5243326b/",
    icon: "/external-icons/linkedIn.svg",
  },
  {
    label: "Email",
    href: "mailto:klabruben@gmail.com",
    icon: "/external-icons/email.svg",
  },
];

const cvLinks = [
  {
    label: "Full-Stack Software Developer",
    description: "General software / full-stack applications",
    href: "/cv/Ruben-Caleb-CV-FullStack-Software-Developer.pdf",
  },
  {
    label: "Frontend / React Developer",
    description: "React, Next.js, UI and frontend-focused roles",
    href: "/cv/Ruben-Caleb-CV-Frontend-React.pdf",
  },
  {
    label: "AI / Full-Stack Developer",
    description:
      "AI integration, RAG, document processing and full-stack roles",
    href: "/cv/Ruben-Caleb-CV-AI-FullStack.pdf",
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t-3 border-[rgba(240,237,230,0.07)] px-4 sm:px-8 py-12 z-10">
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
        {/* Workshop note */}
        <div className="h-full flex flex-col">
          <p
            className="text-[#F0EDE6]/80 text-sm"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Built in public. Always evolving.
          </p>

          <p
            className="text-[#7A7A6A] text-xs mt-1"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Last updated: September 2026 · Workshop open since 2022
          </p>

          <div className="mt-3 lg:mt-auto flex flex-wrap gap-x-5 gap-y-3">
            {socialLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="group inline-flex items-center gap-2 text-[#7A7A6A] transition-colors hover:text-[#F0EDE6]"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "12px",
                }}
              >
                <img
                  src={icon}
                  alt={label}
                  className="transition-transform w-3.5 group-hover:-translate-y-px"
                />
                {label}

                {href.startsWith("http") && (
                  <ExternalLink
                    size={10}
                    strokeWidth={1.5}
                    className="opacity-0 transition-opacity group-hover:opacity-60"
                  />
                )}
              </a>
            ))}
          </div>
        </div>

        {/* CVs */}
        <div className="lg:min-w-77.5">
          <p
            className="mb-3 text-[#7A7A6A] text-[10px] uppercase tracking-[0.18em]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Working documents
          </p>

          <details className="group border border-[rgba(240,237,230,0.1)] bg-[rgba(240,237,230,0.02)]">
            <summary
              className="flex cursor-pointer list-none items-center justify-between gap-8 px-4 py-3 text-[#F0EDE6]/80 transition-colors hover:text-[#F0EDE6] [&::-webkit-details-marker]:hidden"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "13px",
              }}
            >
              <span className="inline-flex items-center gap-2">
                <FileText size={14} strokeWidth={1.6} />
                Résumé / CV
              </span>

              <span
                className="text-[#7A7A6A] transition-transform duration-200 group-open:rotate-45"
                aria-hidden="true"
              >
                +
              </span>
            </summary>

            <div className="border-t border-[rgba(240,237,230,0.08)] px-2 py-2 block md:flex gap-2">
              {cvLinks.map((cv) => (
                <a
                  key={cv.label}
                  href={cv.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group/cv flex items-start justify-between gap-5 px-3 py-3 transition-colors hover:bg-[rgba(240,237,230,0.035)]"
                >
                  <span>
                    <span
                      className="block text-[#F0EDE6]/75 transition-colors group-hover/cv:text-[#F0EDE6]"
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "12px",
                      }}
                    >
                      {cv.label}
                    </span>

                    <span
                      className="mt-1 block max-w-60 text-[#7A7A6A]"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "9px",
                        lineHeight: 1.5,
                      }}
                    >
                      {cv.description}
                    </span>
                  </span>

                  <ExternalLink
                    size={12}
                    strokeWidth={1.5}
                    className="mt-0.5 shrink-0 text-[#7A7A6A]/60 transition-colors group-hover/cv:text-[#E9B44C]"
                  />
                </a>
              ))}
            </div>
          </details>
        </div>
      </div>
    </footer>
  );
}
