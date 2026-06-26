import { edges, nodeColorMap, nodeMap, nodes } from "@/data";

export default function EcosystemMap() {
  return (
    <div className="relative w-full overflow-x-auto">
      <svg
        viewBox="0 0 800 450"
        className="w-full min-w-[700px]"
        style={{ height: "420px" }}
      >
        {edges.map(([a, b], i) => {
          const na = nodeMap[a];
          const nb = nodeMap[b];
          const mx = (na.x + nb.x) / 2 + (i % 2 === 0 ? 20 : -20);
          const my = (na.y + nb.y) / 2 + (i % 3 === 0 ? -30 : 20);
          return (
            <path
              key={`${a}-${b}`}
              d={`M ${na.x} ${na.y} Q ${mx} ${my} ${nb.x} ${nb.y}`}
              stroke="rgba(240,237,230,0.12)"
              strokeWidth="1"
              strokeDasharray="4 5"
              fill="none"
            />
          );
        })}

        {nodes.map((node) => {
          const color = nodeColorMap[node.type] || "#F0EDE6";
          return (
            <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
              <circle r="5" fill={color} opacity="0.9" />
              <circle
                r="16"
                fill="none"
                stroke={color}
                strokeWidth="0.6"
                strokeDasharray="2 3"
                opacity="0.4"
              />
              <text
                y={-22}
                textAnchor="middle"
                fill="#F0EDE6"
                fontSize="11"
                fontFamily="'Plus Jakarta Sans', sans-serif"
                fontWeight="500"
                opacity="0.85"
              >
                {node.label}
              </text>
              {node.sub && (
                <text
                  y={-10}
                  textAnchor="middle"
                  fill="#F0EDE6"
                  fontSize="11"
                  fontFamily="'Plus Jakarta Sans', sans-serif"
                  fontWeight="500"
                  opacity="0.85"
                >
                  {node.sub}
                </text>
              )}
              <text
                y={30}
                textAnchor="middle"
                fill={color}
                fontSize="8"
                fontFamily="'JetBrains Mono', monospace"
                opacity="0.6"
                letterSpacing="1"
              >
                {node.type.toUpperCase()}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}