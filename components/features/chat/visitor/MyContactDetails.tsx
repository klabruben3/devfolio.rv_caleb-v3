import FloatingWindow from "@/components/ui/FloatingWindow";
import { Mail, Phone } from "lucide-react";

export default function MyContactDetails({ onCancel }: { onCancel : () => void}) {
  return (
    <FloatingWindow title="Contact Details" onClose={onCancel}>
      <ContactMeCard />
    </FloatingWindow>
  );
}

function ContactMeCard() {
  return (
    <div className="flex flex-col gap-5">
      <p
        style={{
          fontFamily: "Plus Jakarta Sans",
          fontSize: "12px",
          color: "#7a7a6a",
          lineHeight: 1.6,
        }}
      >
        Feel free to reach out using either of the options below.
      </p>

      {/* Phone */}

      <div
        className="flex items-center gap-4 px-3 py-3 transition-colors"
        style={{
          background: "#1a1a17",
          border: "1px solid rgba(240,237,230,.08)",
          borderRadius: "2px",
        }}
      >
        <Phone size={18} color="#e9b44c" />

        <div className="flex flex-col">
          <span
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: "9px",
              letterSpacing: ".12em",
              color: "#7a7a6a",
            }}
          >
            PHONE
          </span>

          <a
            href="tel:+27846891445"
            className="hover:underline"
            style={{
              fontFamily: "Plus Jakarta Sans",
              fontSize: "13px",
              color: "#f0ede6",
            }}
          >
            +27 84 689 1445
          </a>
        </div>
      </div>

      {/* Email */}

      <div
        className="flex items-center gap-4 px-3 py-3 transition-colors"
        style={{
          background: "#1a1a17",
          border: "1px solid rgba(240,237,230,.08)",
          borderRadius: "2px",
        }}
      >
        <Mail size={18} color="#e9b44c" />

        <div className="flex flex-col">
          <span
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: "9px",
              letterSpacing: ".12em",
              color: "#7a7a6a",
            }}
          >
            EMAIL
          </span>

          <a
            href="mailto:klabruben@gmail.com"
            className="hover:underline"
            style={{
              fontFamily: "Plus Jakarta Sans",
              fontSize: "13px",
              color: "#f0ede6",
            }}
          >
            klabruben@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
