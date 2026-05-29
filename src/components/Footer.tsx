import Image from "next/image";

const mn = "var(--font-manrope),'Manrope',sans-serif";
const jb = "var(--font-jetbrains),'JetBrains Mono',monospace";
const mt = "var(--font-montserrat),'Montserrat',sans-serif";

export default function Footer() {
  return (
    <footer style={{ background: "linear-gradient(180deg, #EEEEF4 0%, #FFFFFF 100%)", paddingTop: "7rem", paddingBottom: "3rem" }}>
      <div className="mx-auto px-6" style={{ maxWidth: "80rem" }}>

        {/* Top — centered logo */}
        <div className="flex flex-col items-center mb-14">
          <Image
            src="https://i0.wp.com/lucenexcorp.com/wp-content/uploads/2026/01/lucenex_logo_cropped.webp?fit=257%2C262&ssl=1"
            alt="Lucenex Corp" width={72} height={72} className="rounded-full mb-4" unoptimized />
          <h3 className="mb-2" style={{ fontFamily: mt, fontSize: "2rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.03em", color: "#013220" }}>
            Lucenex Corp
          </h3>
          <p style={{ fontFamily: jb, fontSize: "0.75rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.03em", color: "#9797B9" }}>
            Advanced Data Intelligence &amp; AI Automation Solutions
          </p>
        </div>

        {/* Divider */}
        <div className="mb-12" style={{ height:1, backgroundColor:"#CDCDDD" }} />

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <div>
            <p className="mb-3" style={{ fontFamily: jb, fontSize: "0.8rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.03em", color: "#9797B9" }}>
              Get In Touch
            </p>
            <h4 className="mb-3" style={{ fontFamily: mn, fontSize: "1.25rem", fontWeight: 600, color: "#000" }}>
              Let&apos;s Discuss Your Vision
            </h4>
            <p className="mb-2" style={{ fontFamily: mn, fontSize: "0.95rem", color: "#54547E" }}>
              Simply email us at{" "}
              <a href="mailto:contact@lucenexcorp.com"
                className="ml-1"
                style={{ padding: "3px 6px", background: "#c3dcd8", fontSize: "0.75rem", borderRadius: "5px", color: "#013220", fontWeight: 900 }}>
                contact@lucenexcorp.com
              </a>
            </p>
          </div>

          <div>
            <p className="mb-3" style={{ fontFamily: jb, fontSize: "0.8rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.03em", color: "#9797B9" }}>
              Quick Links
            </p>
            <ul className="flex flex-col gap-2">
              {[["Home","#hero"],["Services","#services"],["Contact Us","#contact"]].map(([label, href]) => (
                <li key={href}>
                  <a href={href} style={{ fontFamily: mn, fontSize: "0.95rem", fontWeight: 500, color: "#000" }}
                    className="hover:opacity-60 transition-opacity">{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8" style={{ borderTop: "1px solid #CDCDDD" }}>
          <p style={{ fontFamily: jb, fontSize: "0.7rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em", color: "#9797B9" }}>
            &copy; Lucenex Corp. All Rights Reserved 2026
          </p>
          <a href="https://www.linkedin.com/company/lucenex-corp/" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 transition-opacity hover:opacity-70"
            style={{ fontFamily: jb, fontSize: "0.7rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em", color: "#9797B9" }}>
            <svg className="w-4 h-4" fill="#0A66C2" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Connect with us on LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
