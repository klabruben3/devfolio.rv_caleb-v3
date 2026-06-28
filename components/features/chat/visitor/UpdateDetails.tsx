"use client";

import FloatingWindow from "@/components/ui/FloatingWindow";
import { Check } from "lucide-react";
import { useState } from "react";

export default function UpdateDetails({ onCancel }: { onCancel: () => void }) {
  return (
    <FloatingWindow title="Contact Details" onClose={onCancel}>
      <ContactDetailsCard onCancel={onCancel} />
    </FloatingWindow>
  );
}

function ContactDetailsCard({ onCancel }: { onCancel: () => void }) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState(false);

  const handleUpdate = () => {
    console.log("Supabase: updating visitor details");
  };

  return (
    <div className="flex flex-col gap-4">
      <p
        style={{
          fontFamily: "Plus Jakarta Sans",
          fontSize: "12px",
          color: "#7a7a6a",
          lineHeight: 1.6,
        }}
      >
        Send at least one way for Ruben to contact you.
      </p>

      {/* Email */}
      <label
        htmlFor="email"
        className="block mb-2"
        style={{
          fontFamily: "JetBrains Mono",
          fontSize: "9px",
          letterSpacing: ".12em",
          color: "#7a7a6a",
          cursor: "pointer",
        }}
      >
        EMAIL
        <input
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@email.com"
          className="w-full px-3 py-2 mt-2 outline-none"
          style={{
            background: "#1a1a17",
            border: "1px solid rgba(240,237,230,.08)",
            borderRadius: "2px",
            color: "#f0ede6",
            fontFamily: "Plus Jakarta Sans",
            fontSize: "13px",
          }}
          autoComplete="email"
        />
      </label>

      {/* Phone */}
      <label
        className="block mb-2"
        htmlFor="phone"
        style={{
          fontFamily: "JetBrains Mono",
          fontSize: "9px",
          letterSpacing: ".12em",
          color: "#7a7a6a",
          cursor: "pointer",
        }}
      >
        PHONE NUMBER
        <input
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+27 ..."
          className="w-full px-3 py-2 mt-2 outline-none"
          style={{
            background: "#1a1a17",
            border: "1px solid rgba(240,237,230,.08)",
            borderRadius: "2px",
            color: "#f0ede6",
            fontFamily: "Plus Jakarta Sans",
            fontSize: "13px",
          }}
          autoComplete="tel"
        />
      </label>

      {/* WhatsApp */}

      <label
        htmlFor="whatsapp"
        className={`flex items-center gap-3 w-fit ${phone ? "cursor-pointer" : "cursor-not-allowed"}`}
      >
        <input
          type="checkbox"
          id="whatsapp"
          checked={whatsapp}
          onChange={() => {
            if (phone) setWhatsapp(!whatsapp);
          }}
          className="hidden"
        />
        <div
          className="flex items-center justify-center"
          style={{
            width: 16,
            height: 16,
            border: `1px solid ${
              whatsapp ? "#e9b44c" : "rgba(240,237,230,.12)"
            }`,
            background: whatsapp ? "#e9b44c" : "transparent",
            transition: ".2s",
          }}
        >
          {whatsapp && <Check size={11} color="#0d0d0b" />}
        </div>

        <span
          style={{
            fontFamily: "Plus Jakarta Sans",
            fontSize: "10px",
            color: phone ? "#f0ede6" : "#f0ede695",
          }}
        >
          This number is on WhatsApp
        </span>
      </label>

      {/* Footer */}

      <div
        className="flex justify-end gap-2 pt-3"
        style={{
          borderTop: "1px solid rgba(240,237,230,.06)",
        }}
      >
        <button
          onClick={onCancel}
          className="px-4 py-2"
          style={{
            background: "#1a1a17",
            border: "1px solid rgba(240,237,230,.08)",
            color: "#7a7a6a",
            borderRadius: "2px",
            fontFamily: "JetBrains Mono",
            fontSize: "10px",
          }}
        >
          CANCEL
        </button>

        <button
          onClick={handleUpdate}
          disabled={!email.trim() && !phone.trim()}
          className="px-4 py-2"
          style={{
            background: email.trim() || phone.trim() ? "#e9b44c" : "#2a2a20",
            color: "#0d0d0b",
            borderRadius: "2px",
            fontFamily: "JetBrains Mono",
            fontSize: "10px",
            cursor: email.trim() || phone.trim() ? "pointer" : "not-allowed",
          }}
        >
          SEND
        </button>
      </div>
    </div>
  );
}
