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
          background: "#010101",
          backgroundImage:
            "radial-gradient(circle at 70% 30%, rgba(3,19,78,0.95), transparent 55%), radial-gradient(circle at 25% 80%, rgba(1,79,250,0.18), transparent 45%)",
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
            color: "#bdbdbd",
            fontFamily: "sans-serif",
          }}
        >
          Weby, které firmám přivádějí zakázky.
        </div>
      </div>
    ),
    { ...size }
  );
}
