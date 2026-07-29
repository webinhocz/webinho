import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #5b6ef5 0%, #a855f7 100%)",
          position: "relative",
        }}
      >
        <span
          style={{
            fontSize: 104,
            fontWeight: 800,
            color: "white",
            fontFamily: "sans-serif",
            lineHeight: 1,
          }}
        >
          w
        </span>
        <div
          style={{
            position: "absolute",
            top: 34,
            right: 40,
            width: 16,
            height: 16,
            background: "white",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
