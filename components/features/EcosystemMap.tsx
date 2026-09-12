"use client";

import {
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  edges,
  nodeColorMap,
  nodeMap,
  nodes,
} from "@/data";

type Point = {
  x: number;
  y: number;
};

type Surface = {
  width: number;
  height: number;
};

type AnimatedNodeState = {
  current: Point;
  start: Point;
  target: Point;
  startedAt: number;
  duration: number;
  frozen: boolean;
};

const BASE_WIDTH = 800;
const BASE_HEIGHT = 450;

const EDGE_PADDING_X = 35;
const EDGE_PADDING_Y = 35;

const randomBetween = (min: number, max: number) =>
  Math.random() * (max - min) + min;

function distance(a: Point, b: Point) {
  return Math.hypot(
    b.x - a.x,
    b.y - a.y,
  );
}

/*
 * Random coordinate across the whole available axis.
 *
 * Some destinations are deliberately biased toward
 * the edges so the motion actually uses the entire map.
 */
function randomAxis(
  min: number,
  max: number,
) {
  const range = max - min;

  /*
   * 55% chance of choosing somewhere near
   * either edge.
   */
  if (Math.random() < 0.55) {
    const edgeBand =
      range * 0.16;

    if (Math.random() < 0.5) {
      return randomBetween(
        min,
        min + edgeBand,
      );
    }

    return randomBetween(
      max - edgeBand,
      max,
    );
  }

  /*
   * Otherwise use the entire axis normally.
   */
  return randomBetween(
    min,
    max,
  );
}

function randomPointInSurface(
  surface: Surface,
  current?: Point,
): Point {
  const minX = EDGE_PADDING_X;
  const maxX =
    surface.width -
    EDGE_PADDING_X;

  const minY = EDGE_PADDING_Y;
  const maxY =
    surface.height -
    EDGE_PADDING_Y;

  /*
   * Force a reasonably large move.
   *
   * Otherwise "random" can legitimately choose a point
   * 20px away, which visually doesn't feel random.
   */
  const minimumTravel =
    Math.hypot(
      surface.width,
      surface.height,
    ) * 0.25;

  let candidate: Point = {
    x: randomAxis(
      minX,
      maxX,
    ),
    y: randomAxis(
      minY,
      maxY,
    ),
  };

  if (!current) {
    return candidate;
  }

  /*
   * Try several times to get a destination
   * sufficiently far from the current point.
   */
  for (
    let attempt = 0;
    attempt < 20;
    attempt++
  ) {
    candidate = {
      x: randomAxis(
        minX,
        maxX,
      ),
      y: randomAxis(
        minY,
        maxY,
      ),
    };

    if (
      distance(
        current,
        candidate,
      ) >= minimumTravel
    ) {
      return candidate;
    }
  }

  return candidate;
}

/*
 * Keep the physical speed somewhat consistent.
 *
 * A trip from x=50 to x=1350 should take much longer
 * than a trip of only 200px.
 */
function travelDuration(
  from: Point,
  to: Point,
) {
  const dist = distance(
    from,
    to,
  );

  const speed =
    randomBetween(
      50,
      75,
    );

  return Math.max(
    3000,
    Math.min(
      15000,
      (dist / speed) * 1000,
    ),
  );
}

function easeInOut(t: number) {
  return (
    -(Math.cos(Math.PI * t) - 1) /
    2
  );
}

export default function EcosystemMap() {
  const svgRef =
    useRef<SVGSVGElement | null>(
      null,
    );

  /*
   * This is now the ACTUAL rendered SVG size.
   *
   * On your current desktop layout this should
   * become roughly 1408 × 420.
   */
  const [
    surface,
    setSurface,
  ] = useState<Surface>({
    width: BASE_WIDTH,
    height: 420,
  });

  const [
    hovered,
    setHovered,
  ] = useState<string | null>(
    null,
  );

  const [
    focused,
    setFocused,
  ] = useState<string | null>(
    null,
  );

  const [
    pinned,
    setPinned,
  ] = useState<Set<string>>(
    () => new Set(),
  );

  const hoveredRef =
    useRef<string | null>(
      null,
    );

  const focusedRef =
    useRef<string | null>(
      null,
    );

  const pinnedRef =
    useRef<Set<string>>(
      new Set(),
    );

  const nodeRefs =
    useRef<
      Record<
        string,
        SVGGElement | null
      >
    >({});

  const edgeRefs =
    useRef<
      Record<
        string,
        SVGPathElement | null
      >
    >({});

  const animationRef =
    useRef<
      Record<
        string,
        AnimatedNodeState
      >
    >({});

  const livePositionsRef =
    useRef<
      Record<string, Point>
    >({});

  const frameRef =
    useRef<number | null>(
      null,
    );

  /*
   * =============================
   * MEASURE THE REAL SVG
   * =============================
   *
   * This is the important part.
   *
   * We're no longer pretending the map is always
   * 800px wide.
   */
  useEffect(() => {
    const svg =
      svgRef.current;

    if (!svg) return;

    const measure = () => {
      const rect =
        svg.getBoundingClientRect();

      if (
        rect.width <= 0 ||
        rect.height <= 0
      ) {
        return;
      }

      setSurface(
        (previous) => {
          /*
           * Avoid unnecessary rerenders from tiny
           * fractional ResizeObserver changes.
           */
          const width =
            Math.round(
              rect.width,
            );

          const height =
            Math.round(
              rect.height,
            );

          if (
            previous.width ===
              width &&
            previous.height ===
              height
          ) {
            return previous;
          }

          return {
            width,
            height,
          };
        },
      );
    };

    measure();

    const observer =
      new ResizeObserver(
        measure,
      );

    observer.observe(svg);

    return () => {
      observer.disconnect();
    };
  }, []);

  /*
   * =============================
   * ANIMATION
   * =============================
   */
  useEffect(() => {
    if (
      surface.width <= 0 ||
      surface.height <= 0
    ) {
      return;
    }

    const now =
      performance.now();

    /*
     * Scale your original 800×450 node coordinates
     * into the ACTUAL rendered surface.
     *
     * These are only spawn positions.
     */
    const initialPositions =
      Object.fromEntries(
        nodes.map((node) => {
          const point = {
            x:
              (node.x /
                BASE_WIDTH) *
              surface.width,

            y:
              (node.y /
                BASE_HEIGHT) *
              surface.height,
          };

          return [
            node.id,
            point,
          ];
        }),
      ) as Record<
        string,
        Point
      >;

    livePositionsRef.current =
      initialPositions;

    animationRef.current =
      Object.fromEntries(
        nodes.map((node) => {
          const start =
            initialPositions[
              node.id
            ];

          const target =
            randomPointInSurface(
              surface,
              start,
            );

          return [
            node.id,
            {
              current: {
                ...start,
              },

              start: {
                ...start,
              },

              target,

              startedAt:
                now +
                randomBetween(
                  100,
                  1000,
                ),

              duration:
                travelDuration(
                  start,
                  target,
                ),

              frozen: false,
            },
          ];
        }),
      );

    const animate = (
      time: number,
    ) => {
      /*
       * =========================
       * MOVE NODES
       * =========================
       */
      for (
        const node of nodes
      ) {
        const animation =
          animationRef.current[
            node.id
          ];

        if (!animation) {
          continue;
        }

        const shouldFreeze =
          hoveredRef.current ===
            node.id ||
          focusedRef.current ===
            node.id ||
          pinnedRef.current.has(
            node.id,
          );

        if (shouldFreeze) {
          animation.frozen =
            true;
        } else {
          /*
           * Resume after hover/click freeze.
           */
          if (
            animation.frozen
          ) {
            animation.frozen =
              false;

            animation.start = {
              ...animation.current,
            };

            const nextTarget =
              randomPointInSurface(
                surface,
                animation.current,
              );

            animation.target =
              nextTarget;

            animation.duration =
              travelDuration(
                animation.current,
                nextTarget,
              );

            animation.startedAt =
              time;
          }

          if (
            time >=
            animation.startedAt
          ) {
            const elapsed =
              time -
              animation.startedAt;

            const progress =
              Math.min(
                elapsed /
                  animation.duration,
                1,
              );

            const eased =
              easeInOut(
                progress,
              );

            animation.current = {
              x:
                animation.start.x +
                (animation.target.x -
                  animation.start.x) *
                  eased,

              y:
                animation.start.y +
                (animation.target.y -
                  animation.start.y) *
                  eased,
            };

            /*
             * Destination reached.
             *
             * Immediately choose another position
             * somewhere across the WHOLE surface.
             */
            if (
              progress >= 1
            ) {
              const current = {
                ...animation.target,
              };

              const nextTarget =
                randomPointInSurface(
                  surface,
                  current,
                );

              animation.start = {
                ...current,
              };

              animation.current = {
                ...current,
              };

              animation.target =
                nextTarget;

              animation.duration =
                travelDuration(
                  current,
                  nextTarget,
                );

              animation.startedAt =
                time;
            }
          }
        }

        livePositionsRef.current[
          node.id
        ] = {
          ...animation.current,
        };

        const element =
          nodeRefs.current[
            node.id
          ];

        if (element) {
          element.setAttribute(
            "transform",
            `translate(${animation.current.x}, ${animation.current.y})`,
          );
        }
      }

      /*
       * =========================
       * MOVE CONNECTIONS
       * =========================
       */
      edges.forEach(
        ([a, b], i) => {
          const na =
            livePositionsRef
              .current[a];

          const nb =
            livePositionsRef
              .current[b];

          if (!na || !nb) {
            return;
          }

          const mx =
            (na.x + nb.x) /
              2 +
            (i % 2 === 0
              ? 20
              : -20);

          const my =
            (na.y + nb.y) /
              2 +
            (i % 3 === 0
              ? -30
              : 20);

          const edgeKey =
            `${a}-${b}-${i}`;

          const path =
            edgeRefs.current[
              edgeKey
            ];

          if (path) {
            path.setAttribute(
              "d",
              `
                M ${na.x} ${na.y}
                Q ${mx} ${my}
                ${nb.x} ${nb.y}
              `,
            );
          }
        },
      );

      frameRef.current =
        requestAnimationFrame(
          animate,
        );
    };

    frameRef.current =
      requestAnimationFrame(
        animate,
      );

    return () => {
      if (
        frameRef.current !==
        null
      ) {
        cancelAnimationFrame(
          frameRef.current,
        );
      }
    };
  }, [
    surface.width,
    surface.height,
  ]);

  /*
   * =========================
   * HOVER
   * =========================
   */
  const handleMouseEnter = (
    id: string,
  ) => {
    hoveredRef.current = id;
    setHovered(id);
  };

  const handleMouseLeave = (
    id: string,
  ) => {
    if (
      hoveredRef.current === id
    ) {
      hoveredRef.current =
        null;

      setHovered(null);
    }
  };

  /*
   * =========================
   * PIN
   * =========================
   */
  const pinNode = (
    event: MouseEvent<SVGGElement>,
    id: string,
  ) => {
    event.stopPropagation();

    setPinned(
      (previous) => {
        const next =
          new Set(previous);

        next.add(id);

        pinnedRef.current =
          next;

        return next;
      },
    );
  };

  /*
   * =========================
   * CLEAR EVERYTHING
   * =========================
   */
  const clearPinnedNodes =
    () => {
      const empty =
        new Set<string>();

      pinnedRef.current =
        empty;

      setPinned(empty);

      hoveredRef.current =
        null;

      setHovered(null);

      focusedRef.current =
        null;

      setFocused(null);

      const active =
        document.activeElement as
          | HTMLElement
          | null;

      active?.blur?.();
    };

  /*
   * =========================
   * KEYBOARD
   * =========================
   */
  const handleFocus = (
    id: string,
  ) => {
    focusedRef.current = id;
    setFocused(id);
  };

  const handleBlur = (
    id: string,
  ) => {
    if (
      focusedRef.current === id
    ) {
      focusedRef.current =
        null;

      setFocused(null);
    }
  };

  const handleKeyDown = (
    event: KeyboardEvent<SVGGElement>,
    id: string,
  ) => {
    if (
      event.key === "Enter" ||
      event.key === " "
    ) {
      event.preventDefault();
      event.stopPropagation();

      setPinned(
        (previous) => {
          const next =
            new Set(previous);

          next.add(id);

          pinnedRef.current =
            next;

          return next;
        },
      );
    }

    if (
      event.key === "Escape"
    ) {
      clearPinnedNodes();
    }
  };

  return (
    <div
      className="
        relative
        w-full
        overflow-x-auto
      "
      onClick={
        clearPinnedNodes
      }
    >
      <svg
        ref={svgRef}
        /*
         * CRITICAL:
         *
         * The coordinate space now has the same
         * dimensions as the ACTUAL rendered SVG.
         *
         * e.g.
         *
         * 1408 × 420
         *
         * instead of permanently being
         *
         * 800 × 450
         */
        viewBox={`0 0 ${surface.width} ${surface.height}`}
        className="
          w-full
          min-w-175
        "
        style={{
          height: "420px",
        }}
      >
        {/* CONNECTIONS */}
        {edges.map(
          ([a, b], i) => {
            /*
             * Initial render only.
             *
             * requestAnimationFrame immediately
             * takes control afterwards.
             */
            const na =
              livePositionsRef
                .current[a] ??
              {
                x:
                  (nodeMap[a].x /
                    BASE_WIDTH) *
                  surface.width,

                y:
                  (nodeMap[a].y /
                    BASE_HEIGHT) *
                  surface.height,
              };

            const nb =
              livePositionsRef
                .current[b] ??
              {
                x:
                  (nodeMap[b].x /
                    BASE_WIDTH) *
                  surface.width,

                y:
                  (nodeMap[b].y /
                    BASE_HEIGHT) *
                  surface.height,
              };

            const mx =
              (na.x + nb.x) /
                2 +
              (i % 2 === 0
                ? 20
                : -20);

            const my =
              (na.y + nb.y) /
                2 +
              (i % 3 === 0
                ? -30
                : 20);

            const edgeKey =
              `${a}-${b}-${i}`;

            return (
              <path
                key={edgeKey}
                ref={(
                  element,
                ) => {
                  edgeRefs.current[
                    edgeKey
                  ] = element;
                }}
                d={`
                  M ${na.x} ${na.y}
                  Q ${mx} ${my}
                  ${nb.x} ${nb.y}
                `}
                stroke="rgba(240,237,230,0.12)"
                strokeWidth="1"
                strokeDasharray="4 5"
                fill="none"
                pointerEvents="none"
              />
            );
          },
        )}

        {/* NODES */}
        {nodes.map(
          (node) => {
            const color =
              nodeColorMap[
                node.type
              ] ||
              "#F0EDE6";

            const isPinned =
              pinned.has(
                node.id,
              );

            const isHovered =
              hovered ===
              node.id;

            const isFocused =
              focused ===
              node.id;

            const showDetails =
              isPinned ||
              isHovered ||
              isFocused;

            const position =
              livePositionsRef
                .current[
                node.id
              ] ?? {
                x:
                  (node.x /
                    BASE_WIDTH) *
                  surface.width,

                y:
                  (node.y /
                    BASE_HEIGHT) *
                  surface.height,
              };

            return (
              <g
                key={node.id}
                ref={(
                  element,
                ) => {
                  nodeRefs.current[
                    node.id
                  ] =
                    element;
                }}
                transform={`translate(${position.x}, ${position.y})`}
                role="button"
                tabIndex={0}
                aria-label={`${node.label}, ${node.type}`}
                aria-pressed={
                  isPinned
                }
                onMouseEnter={() =>
                  handleMouseEnter(
                    node.id,
                  )
                }
                onMouseLeave={() =>
                  handleMouseLeave(
                    node.id,
                  )
                }
                onClick={(
                  event,
                ) =>
                  pinNode(
                    event,
                    node.id,
                  )
                }
                onFocus={() =>
                  handleFocus(
                    node.id,
                  )
                }
                onBlur={() =>
                  handleBlur(
                    node.id,
                  )
                }
                onKeyDown={(
                  event,
                ) =>
                  handleKeyDown(
                    event,
                    node.id,
                  )
                }
                style={{
                  cursor:
                    "pointer",
                  outline:
                    "none",
                }}
              >
                {/* LARGE INVISIBLE HIT AREA */}
                <circle
                  r="27"
                  fill="transparent"
                  pointerEvents="all"
                />

                {/* DOT */}
                <circle
                  r="5"
                  fill={color}
                  opacity={
                    showDetails
                      ? 1
                      : 0.9
                  }
                  pointerEvents="none"
                />

                {/* OUTER RING */}
                <circle
                  r="16"
                  fill="none"
                  stroke={color}
                  strokeWidth={
                    isPinned
                      ? 1.2
                      : 0.65
                  }
                  strokeDasharray={
                    isPinned
                      ? undefined
                      : "2 3"
                  }
                  opacity={
                    isPinned
                      ? 0.95
                      : showDetails
                        ? 0.7
                        : 0.4
                  }
                  pointerEvents="none"
                  style={{
                    transition:
                      "opacity 180ms ease, stroke-width 180ms ease",
                  }}
                />

                {/* LABEL */}
                <text
                  y={-22}
                  textAnchor="middle"
                  fill="#F0EDE6"
                  fontSize="11"
                  fontFamily="'Plus Jakarta Sans', sans-serif"
                  fontWeight="500"
                  opacity={
                    showDetails
                      ? 0.9
                      : 0
                  }
                  pointerEvents="none"
                  style={{
                    transition:
                      "opacity 160ms ease",
                  }}
                >
                  {node.label}
                </text>

                {/* SUB LABEL */}
                {node.sub && (
                  <text
                    y={-10}
                    textAnchor="middle"
                    fill="#F0EDE6"
                    fontSize="11"
                    fontFamily="'Plus Jakarta Sans', sans-serif"
                    fontWeight="500"
                    opacity={
                      showDetails
                        ? 0.9
                        : 0
                    }
                    pointerEvents="none"
                    style={{
                      transition:
                        "opacity 160ms ease",
                    }}
                  >
                    {node.sub}
                  </text>
                )}

                {/* TYPE */}
                <text
                  y={30}
                  textAnchor="middle"
                  fill={color}
                  fontSize="8"
                  fontFamily="'JetBrains Mono', monospace"
                  opacity={
                    showDetails
                      ? 0.7
                      : 0
                  }
                  letterSpacing="1"
                  pointerEvents="none"
                  style={{
                    transition:
                      "opacity 160ms ease",
                  }}
                >
                  {node.type.toUpperCase()}
                </text>
              </g>
            );
          },
        )}
      </svg>
    </div>
  );
}