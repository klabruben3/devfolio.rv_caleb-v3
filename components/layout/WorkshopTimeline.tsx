"use client";

import { useEffect, useRef } from "react";
import { timelineNodes, typeStyles } from "@/data";

/*
 * Produces a stable "random-looking" rotation from
 * the year + card label.
 *
 * Unlike Math.random() during render, this won't
 * change every time React rerenders the component.
 */
function getCardRotation(year: string | number, label: string) {
  const seed = `${year}-${label}`;

  let hash = 0;

  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }

  /*
   * Gives roughly:
   *
   * -1.8deg → +1.8deg
   */
  const normalized = (Math.abs(hash) % 1000) / 1000;

  return normalized * 3.6 - 1.8;
}

export default function WorkshopTimeline() {
  const timelineScrollRef = useRef<HTMLDivElement>(null);

  /*
   * Start the timeline about 10% into its
   * available horizontal scroll distance.
   */
  useEffect(() => {
    const container = timelineScrollRef.current;

    if (!container) return;

    const setInitialScroll = () => {
      const maxScroll = container.scrollWidth - container.clientWidth;

      /*
       * 10% of the actual scrollable range.
       */
      container.scrollLeft = maxScroll * 0.1;
    };

    /*
     * Wait for layout to finish before reading
     * scrollWidth/clientWidth.
     */
    const frame = requestAnimationFrame(setInitialScroll);

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section id="timeline">
      {/* Section heading */}
      <div className="flex items-baseline gap-6 mb-16 px-4 lg:px-8">
        <span
          className="
            text-[#7A7A6A]/20
            font-mono
            select-none
          "
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
            className="
              text-[#F0EDE6]
              leading-tight
            "
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
            }}
          >
            Workshop Timeline
          </h2>

          <p
            className="
              text-[#7A7A6A]
              text-sm
              mt-1
            "
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            A timeline of experiments, projects and ideas that shaped how I
            build.
          </p>
        </div>
      </div>

      {/* Horizontal timeline */}
      <div
        ref={timelineScrollRef}
        className="
          overflow-x-auto
          pb-4
        "
        style={{
          scrollbarWidth: "none",
        }}
      >
        <div className="flex gap-0 min-w-max px-4">
          {timelineNodes.map((year, yi) => (
            <div
              key={year.year}
              className="
                  relative
                  flex
                  flex-col
                "
              style={{
                width: "clamp(300px, 34vw, 500px)",
                maxWidth: "500px",
              }}
            >
              {/* Year */}
              <div className="flex items-center mb-8">
                <div
                  className="
                      px-4
                      py-1.5
                      border
                      border-[#E9B44C]/30
                      text-[#E9B44C]
                      shrink-0
                    "
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
                  <div
                    className="
                        flex-1
                        border-t
                        border-dashed
                        border-[rgba(240,237,230,0.08)]
                        ml-4
                      "
                  />
                )}
              </div>

              {/* Timeline cards */}
              <div className="flex flex-col gap-4 pr-6">
                {year.items.map((item, ii) => {
                  const rotation = getCardRotation(year.year, item.label);

                  return (
                    <div
                      key={`${year.year}-${item.label}-${ii}`}
                      className="
                            border
                            border-[rgba(240,237,230,0.08)]
                            bg-[#131310]
                            p-4
                            transition-[border-color,transform]
                            duration-300
                            hover:border-[rgba(240,237,230,0.16)]
                          "
                      style={{
                        transform: `rotate(${rotation}deg)`,
                      }}
                    >
                      {/* Type */}
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

                      {/* Label */}
                      <p
                        className="
                              text-[#F0EDE6]/85
                              text-sm
                              font-medium
                              mb-1
                            "
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                        }}
                      >
                        {item.label}
                      </p>

                      {/* Description */}
                      <p
                        className="
                              text-[#7A7A6A]
                              text-xs
                              leading-relaxed
                            "
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

      {/* Small scroll hint */}
      <div
        className="
          mt-3
          flex
          items-center
          gap-2
          text-[9px]
          tracking-widest
          uppercase
          text-[#7A7A6A]/45
        "
        style={{
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        <span>←</span>
        <span>drag / scroll through the timeline</span>
        <span>→</span>
      </div>
    </section>
  );
}
