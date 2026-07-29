import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 7,
          position: "relative",
        }}
      >
        <span
          style={{
            fontSize: 20,
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
            top: 6,
            right: 7,
            width: 3,
            height: 3,
            background: "white",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
