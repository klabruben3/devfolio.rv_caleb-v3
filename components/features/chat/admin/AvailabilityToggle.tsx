export default function AvailabilityToggle({
  isOnline,
  onToggle,
}: {
  isOnline: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <div
          onClick={onToggle}
          className="relative cursor-pointer"
          style={{
            width: "36px",
            height: "20px",
            background: isOnline ? "#7ca982" : "#2a2a20",
            borderRadius: "10px",
            border: "1px solid rgba(240,237,230,0.1)",
            transition: "background 0.2s",
          }}
        >
          <div
            className="absolute top-0.5 transition-all"
            style={{
              width: "16px",
              height: "16px",
              background: "#f0ede6",
              borderRadius: "8px",
              left: isOnline ? "17px" : "2px",
            }}
          />
        </div>
        <div>
          <span
            style={{
              fontFamily: "Plus Jakarta Sans",
              fontSize: "12px",
              color: "#f0ede6",
              fontWeight: 500,
            }}
          >
            Available for live chat
          </span>
          <div
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: "8px",
              color: isOnline ? "#7ca982" : "#7a7a6a",
              letterSpacing: "0.1em",
              marginTop: "1px",
            }}
          >
            status: {isOnline ? "online" : "offline"}
          </div>
        </div>
      </div>
      <span
        style={{
          fontFamily: "Caveat",
          fontSize: "12px",
          color: "#7a7a6a",
          opacity: 0.6,
        }}
      >
        toggle before stepping away
      </span>
    </div>
  );
}
