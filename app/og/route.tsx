import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Ruben Caleb Portfolio";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

function Home({ iconUrl }: { iconUrl: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        background: "#0d0d0b",
        color: "#f0ede6",
        padding: "64px",
      }}
    >
      {/* Giant Background Letter */}
      <div
        style={{
          position: "absolute",
          right: -40,
          top: -120,
          fontSize: 520,
          lineHeight: 1,
          color: "rgba(233,180,76,0.05)",
          fontFamily: "serif",
          fontWeight: 700,
        }}
      >
        R
      </div>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 8,
          height: "100%",
          background: "#e9b44c",
        }}
      />

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            maxWidth: 680,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div
              style={{
                fontSize: 22,
                letterSpacing: 6,
                textTransform: "uppercase",
                color: "#e9b44c",
              }}
            >
              Ruben Caleb
            </div>

            <div
              style={{
                width: 120,
                height: 2,
                background: "#7ca982",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div
              style={{
                fontFamily: "serif",
                fontWeight: 400,
                fontSize: 88,
                lineHeight: 0.95,
                letterSpacing: -3,
              }}
            >
              Crafting thoughtful digital products
            </div>

            <div
              style={{
                fontSize: 26,
                color: "#7a7a6a",
              }}
            >
              Full Stack Developer • Next.js • TypeScript
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div
              style={{
                fontSize: 15,
                color: "#7a7a6a",
                fontFamily: "monospace",
                textDecoration: "underline",
                lineHeight: 1.5,
              }}
            >
              &gt; building for the web since 2022
            </div>

            <div style={{ fontSize: 15, color: "#7a7a6a" }}>
              devfolio_rv-caleb
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 320,
          }}
        >
          <div
            style={{
              width: 350,
              height: 350,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid rgba(240,237,230,0.12)",
              borderRadius: 23
            }}
          >
            <img
              src={iconUrl}
              width={350}
              height={350}
              alt="icon"
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function GET() {
  return new ImageResponse(<Home iconUrl={"https://devfolio-rv-caleb-v3.vercel.app/og"} />, size);
}
