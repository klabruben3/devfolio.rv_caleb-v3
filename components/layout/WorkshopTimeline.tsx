import { timelineNodes, typeStyles } from "@/data";

function getCardRotation(year: number, label: string) {
  const seed = `${year}-${label}`;

  let hash = 0;

  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }

  // Random-looking value between -1.2deg and +1.2deg
  let rotation = (hash % 240) / 100 - 1.2;

  // Prevent cards from looking completely straight
  if (Math.abs(rotation) < 0.2) {
    rotation = rotation < 0 ? -0.25 : 0.25;
  }

  return rotation;
}

export default function WorkshopTimeline() {
  return (
    <section id="timeline" className="py-24 px-8 md:px-16">
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
          03
        </span>

        <div>
          <h2
            className="text-[#F0EDE6] leading-tight"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
            }}
          >
            Workshop Timeline
          </h2>

          <p
            className="text-[#7A7A6A] text-sm mt-1"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            An evolution map. Ideas branch. Projects merge. Knowledge compounds.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto pb-4" style={{ scrollbarWidth: "none" }}>
        <div className="flex gap-0 min-w-max">
          {timelineNodes.map((year, yi) => (
            <div
              key={year.year}
              className="relative flex flex-col"
              style={{ maxWidth: "500px" }}
            >
              {/* Year */}
              <div className="flex items-center mb-8">
                <div
                  className="px-4 py-1.5 border border-[#E9B44C]/30 text-[#E9B44C]"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "13px",
                    fontWeight: 500,
                    transform: `rotate(${yi % 2 === 0 ? -0.8 : 0.5}deg)`,
                  }}
                >
                  {year.year}
                </div>

                {yi < timelineNodes.length - 1 && (
                  <div className="flex-1 border-t border-dashed border-[rgba(240,237,230,0.08)] ml-4" />
                )}
              </div>

              {/* Timeline cards */}
              <div className="flex flex-col gap-4 pr-6">
                {year.items.map((item, ii) => {
                  const rotation = getCardRotation(year.year, item.label);

                  return (
                    <div
                      key={`${year.year}-${item.label}-${ii}`}
                      className="border border-[rgba(240,237,230,0.08)] bg-[#131310] p-4"
                      style={{
                        transform: `rotate(${rotation}deg)`,
                      }}
                    >
                      <span
                        className={`
                          text-[8px]
                          tracking-widest
                          uppercase
                          px-1.5
                          py-0.5
                          mb-2
                          inline-block
                          ${typeStyles[item.type] || typeStyles.experiment}
                        `}
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {item.type}
                      </span>

                      <p
                        className="text-[#F0EDE6]/85 text-sm font-medium mb-1"
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                        }}
                      >
                        {item.label}
                      </p>

                      <p
                        className="text-[#7A7A6A] text-xs leading-relaxed"
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
