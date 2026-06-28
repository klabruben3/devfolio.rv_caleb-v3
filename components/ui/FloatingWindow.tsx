"use client";

import { X } from "lucide-react";
import { ReactNode } from "react";

type FloatingWindowProps = {
  title: string;
  children: ReactNode;
  onClose: () => void;
};

export default function FloatingWindow({
  title,
  children,
  onClose,
}: FloatingWindowProps) {
  return (
    <div className="fixed bottom-8 right-8 min-w-[400px] z-70 flex items-center justify-center pointer-events-none">
      <div
        className="pointer-events-auto w-[82%] max-w-[430px]"
        style={{
          background: "#131310",
          border: "1px solid rgba(240,237,230,.08)",
          borderRadius: "2px",
          boxShadow:
            "0 18px 40px rgba(0,0,0,.55), 0 0 0 1px rgba(233,180,76,.04)",
          transform: "translate(18px,-18px)",
        }}
      >
        {/* title bar */}

        <div
          className="flex items-center justify-between px-3 py-2"
          style={{
            background: "#1a1a17",
            borderBottom: "1px solid rgba(240,237,230,.06)",
          }}
        >
          <span
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: "10px",
              letterSpacing: ".12em",
              color: "#e9b44c",
              textTransform: "uppercase",
            }}
          >
            {title}
          </span>

          <button
            onClick={onClose}
            className="transition-opacity hover:opacity-70 cursor-pointer"
          >
            <X size={13} color="#7a7a6a" />
          </button>
        </div>

        {/* content */}

        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}
