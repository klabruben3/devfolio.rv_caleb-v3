export default function Footer() {
  return (
    <footer className="border-t border-[rgba(240,237,230,0.07)] px-8 md:px-16 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div>
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
          Last updated: June 2026 · Workshop open since 2022
        </p>
      </div>

      <div
        className="border border-[#7CA982]/25 px-5 py-3"
        style={{
          transform: "rotate(-0.7deg)",
          fontFamily: "'Caveat', cursive",
        }}
      >
        <p className="text-[#7CA982]/80 text-base">
          If something here resonates — say hello.
        </p>
      </div>
    </footer>
  );
}
