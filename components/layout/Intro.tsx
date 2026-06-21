export default function Intro() {
  return (
    <section className="mt-24 flex flex-col justify-end pb-20 px-8 md:px-16 relative overflow-hidden">
      <div className="fixed top-36 right-4 md:right-16 opacity-40">
        <span
          className="text-[11px] tracking-widest uppercase text-[#7A7A6A]"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            writingMode: "vertical-rl",
          }}
        >
          Living Workshop · Est. 2022
        </span>
      </div>

      <div className="max-w-5xl">
        <div className="mb-6 flex items-center gap-3">
          <div className="w-8 h-px bg-[#E9B44C]/60" />
          <span
            className="text-[10px] tracking-widest uppercase text-[#E9B44C]/80"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            A developer's mind, made visible
          </span>
        </div>

        <h1
          className="leading-[0.92] tracking-tight text-[#F0EDE6] mb-8 lg:w-screen"
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(3.5rem, 9vw, 9rem)",
          }}
        >
          Making<br />ideas{" "}
          <em className="text-[#E9B44C]">real</em>
          <br />
          enough to argue with.
        </h1>

        <div className="flex flex-col md:flex-row gap-8 md:gap-20 mt-12">
          <p
            className="text-[#F0EDE6]/60 text-base leading-relaxed max-w-sm"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Not a portfolio. Not a resume. A living record of curiosity,
            experimentation, and evolution. Some things work. Some don't.
            Everything connects.
          </p>
          <div
            className="border border-[#E9B44C]/20 p-5 max-w-xs"
            style={{
              transform: "rotate(0.8deg)",
              fontFamily: "'Caveat', cursive",
            }}
          >
            <span className="text-[#E9B44C]/70 text-lg">
              "Every project is a question I didn't know how to ask yet."
            </span>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-8 md:left-16 text-[#7A7A6A]/30"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "8rem",
          fontWeight: 500,
          lineHeight: 1,
          letterSpacing: "-0.05em",
          userSelect: "none",
        }}
      >
        01
      </div>
    </section>
  );
}
