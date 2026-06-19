import { thoughts } from "@/data";

export default function Notebook() {
    const tagColor: Record<string, string> = {
      building: "text-[#E9B44C]",
      systems: "text-[#4AADCC]",
      philosophy: "text-[#9B7ECC]",
      data: "text-[#7CA982]",
      reflection: "text-[#CC7E7E]",
    };
  
    return (
      <section id="notebook" className="py-24 px-8 md:px-16">
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
            07
          </span>
          <div>
            <h2
              className="text-[#F0EDE6] leading-tight"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
              }}
            >
              Notebook
            </h2>
            <p
              className="text-[#7A7A6A] text-sm mt-1"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Not a blog. Not content. Just observations that felt too heavy to
              keep private.
            </p>
          </div>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {thoughts.map((t, i) => {
            const rots = [-1.2, 0.9, -0.4, 1.6, -0.7, 1.1];
            const rot = rots[i % rots.length];
            return (
              <div
                key={t.id}
                className="border border-[rgba(240,237,230,0.1)] bg-[#131310] p-6"
                style={{ transform: `rotate(${rot}deg)` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[10px] tracking-widest uppercase font-mono ${tagColor[t.tag] || "text-[#7A7A6A]"}`}
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    #{t.tag}
                  </span>
                  <span
                    className="text-[#7A7A6A] text-[10px]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {t.date}
                  </span>
                </div>
                <p
                  className="text-[#F0EDE6]/80 text-base leading-relaxed"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontStyle: "italic",
                  }}
                >
                  "{t.text}"
                </p>
              </div>
            );
          })}
        </div>
      </section>
    );
  }