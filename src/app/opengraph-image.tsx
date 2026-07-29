import { readFileSync } from "fs";
import { join } from "path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const logoBase64 = readFileSync(
    join(process.cwd(), "public", "brand", "webinho-logo-white.png")
  ).toString("base64");

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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`data:image/png;base64,${logoBase64}`}
          width={480}
          height={340}
          alt="webinho"
          style={{ objectFit: "contain" }}
        />
        <div
          style={{
            marginTop: 4,
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
