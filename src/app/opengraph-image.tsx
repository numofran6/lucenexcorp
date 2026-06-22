import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

export const alt = "Lucenex Corp — Data Engineering, Analytics & AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "src/app/icon.png"), "base64");
  const logoSrc = `data:image/png;base64,${logoData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#013220",
          padding: "72px 80px",
        }}
      >
        {/* Logo + wordmark row */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <img src={logoSrc} width={40} height={40} style={{ borderRadius: "10px" }} />
          <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "18px", fontWeight: 600, letterSpacing: "0.08em" }}>
            LUCENEX CORP
          </span>
        </div>

        {/* Central content */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center", paddingTop: "16px" }}>
          <div style={{ color: "#B8860B", fontSize: "15px", fontWeight: 700, letterSpacing: "0.18em", marginBottom: "20px" }}>
            DATA · ANALYTICS · AI ENGINEERING
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
            <span style={{ color: "#ffffff", fontSize: "72px", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.03em" }}>
              Build sharper,
            </span>
            <span style={{ color: "#ffffff", fontSize: "72px", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.03em" }}>
              scale smarter.
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: "28px", gap: "0px" }}>
            <span style={{ color: "rgba(255,255,255,0.52)", fontSize: "22px", lineHeight: 1.55 }}>
              Data engineering, cloud architecture &amp; AI automation
            </span>
            <span style={{ color: "rgba(255,255,255,0.52)", fontSize: "22px", lineHeight: 1.55 }}>
              for modern businesses.
            </span>
          </div>
        </div>

        {/* Bottom domain */}
        <div style={{ display: "flex" }}>
          <span style={{ color: "rgba(255,255,255,0.28)", fontSize: "15px", letterSpacing: "0.04em" }}>
            lucenexcorp.com
          </span>
        </div>
      </div>
    ),
    size
  );
}
