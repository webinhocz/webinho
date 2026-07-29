import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#06070b",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(91,110,245,0.25), transparent 45%), radial-gradient(circle at 78% 70%, rgba(168,85,247,0.22), transparent 45%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", fontSize: 88, fontWeight: 800, color: "#f2f3f7", fontFamily: "sans-serif" }}>
          <span>web</span>
          <span style={{ position: "relative", display: "flex", margin: "0 2px" }}>
            <span
              style={{
                position: "absolute",
                left: "50%",
                top: 4,
                width: 14,
                height: 14,
                background: "#5b6ef5",
                transform: "translateX(-50%)",
              }}
            />
            ı
          </span>
          <span>nho</span>
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 34,
            color: "#9aa1b5",
            fontFamily: "sans-serif",
          }}
        >
          Digitální vizitka vašeho byznysu, která mluví za vás.
        </div>
      </div>
    ),
    { ...size }
  );
}
