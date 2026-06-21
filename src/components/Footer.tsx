import Image from "next/image";

const mn = "var(--font-manrope),'Manrope',sans-serif";
const jb = "var(--font-jetbrains),'JetBrains Mono',monospace";
const mt = "var(--font-montserrat),'Montserrat',sans-serif";

const links = [["Home","#hero"],["Services","#services"],["Contact Us","#contact"]];

export default function Footer() {
  return (
    <footer style={{ background: "linear-gradient(180deg, #EEEEF4 0%, #FFFFFF 100%)", paddingBottom: "3rem" }}>

      {/* ── Top: logo + cloud blobs ─────────────────────────────── */}
      <div className="relative flex flex-col items-center" style={{ paddingTop: "6rem", paddingBottom: "4rem" }}>

        {/* Cloud Left */}
        <div aria-hidden style={{
          position: "absolute", left: 0, top: "50%",
          transform: "translateY(-50%)",
          width: "40%", maxWidth: "520px",
          pointerEvents: "none",
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://cdn.prod.website-files.com/67f510f568bf33e1f98526f9/683476c785757945959acf7c_768d2b7b27279bd55483e2319c8b7397_cloud%20L.avif"
            alt="" className="w-full h-auto opacity-70" />
        </div>

        {/* Cloud Right */}
        <div aria-hidden style={{
          position: "absolute", right: 0, top: "50%",
          transform: "translateY(-50%)",
          width: "40%", maxWidth: "520px",
          pointerEvents: "none",
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://cdn.prod.website-files.com/67f510f568bf33e1f98526f9/683476ca07fbd2d53025b667_3431aeb77ddc0d16652ac568fc3fb236_cloud%20R.avif"
            alt="" className="w-full h-auto opacity-70" />
        </div>

        {/* Logo + brand */}
        <div className="relative flex flex-col items-center z-10">
          <Image
            src="https://i0.wp.com/lucenexcorp.com/wp-content/uploads/2026/01/lucenex_logo_cropped.webp?fit=257%2C262&ssl=1"
            alt="Lucenex Corp" width={80} height={80} className="rounded-full mb-5" unoptimized />
          <h3 className="mb-2" style={{
            fontFamily: mt, fontSize: "2rem", fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "0.05em", color: "#013220",
          }}>
            Lucenex Corp
          </h3>
          <p style={{
            fontFamily: jb, fontSize: "var(--fs-label)", fontWeight: 500,
            textTransform: "uppercase", letterSpacing: "0.08em", color: "#9797B9",
            textAlign: "center",
          }}>
            Advanced Data Intelligence &amp;<br />AI Automation Solutions
          </p>
        </div>
      </div>

      {/* ── Divider ─────────────────────────────────────────────── */}
      <div className="mx-auto px-8" style={{ maxWidth: "80rem" }}>
        <div style={{ height: 1, backgroundColor: "#CDCDDD", marginBottom: "3rem" }} />

        {/* ── Two columns ─────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10 mb-12">

          {/* Get In Touch */}
          <div>
            <p className="mb-3" style={{
              fontFamily: jb, fontSize: "var(--fs-label)", fontWeight: 500,
              textTransform: "uppercase", letterSpacing: "0.1em", color: "#9797B9",
            }}>
              Get In Touch
            </p>
            <h4 className="mb-3" style={{
              fontFamily: mn, fontSize: "var(--fs-card)", fontWeight: 600, color: "#000",
            }}>
              Let&apos;s Discuss Your Vision
            </h4>
            <p style={{ fontFamily: mn, fontSize: "var(--fs-base)", color: "#54547E", marginBottom: "0.75rem" }}>
              Simply email us at
            </p>
            <a href="mailto:contact@lucenexcorp.com"
              style={{
                fontFamily: jb, fontSize: "var(--fs-label)", fontWeight: 500, letterSpacing: "0.02em",
                color: "#013220", textDecoration: "none",
                borderBottom: "1.5px solid #013220", paddingBottom: "2px",
                display: "inline-block",
              }}>
              contact@lucenexcorp.com
            </a>
          </div>

          {/* Quick Links — right-aligned */}
          <div className="md:text-right">
            <p className="mb-3" style={{
              fontFamily: jb, fontSize: "var(--fs-label)", fontWeight: 500,
              textTransform: "uppercase", letterSpacing: "0.1em", color: "#9797B9",
            }}>
              Quick Links
            </p>
            <ul className="flex flex-col" style={{ borderTop: "1px solid #CDCDDD" }}>
              {links.map(([label, href]) => (
                <li key={href} style={{ borderBottom: "1px solid #CDCDDD" }}>
                  <a href={href}
                    style={{ fontFamily: mn, fontSize: "var(--fs-sm)", fontWeight: 500, color: "#54547E", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.6rem 0", textDecoration: "none" }}
                    className="hover:text-black transition-colors">
                    {label}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ──────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid #CDCDDD" }}>
          <p style={{ fontFamily: jb, fontSize: "var(--fs-label)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em", color: "#9797B9" }}>
            &copy; Lucenex Corp. All Rights Reserved 2026
          </p>
          <a href="https://www.linkedin.com/company/lucenex-corp/" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-70 transition-opacity"
            style={{ fontFamily: jb, fontSize: "var(--fs-label)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em", color: "#9797B9" }}>
            <svg className="w-4 h-4 shrink-0" fill="#0A66C2" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Connect with us on LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
