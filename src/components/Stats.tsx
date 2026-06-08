import Image from "next/image";

const stats = [
  { value: "10+", label: "Happy Clients" },
  { value: "35+", label: "Projects" },
  { value: "5+",  label: "Years of Experience" },
  { value: "5+",  label: "Specialists" },
];

const jb = "var(--font-jetbrains),'JetBrains Mono',monospace";
const mn = "var(--font-manrope),'Manrope',sans-serif";

export default function Stats() {
  return (
    <section id="about" className="relative pt-20 pb-10 px-6" style={{ backgroundColor: "#EEEEF4" }}>

      {/* Left bracket rail — full section height, pinned to viewport left edge */}
      <div className="pg_line-wrap hidden md:flex" style={{ position: "absolute", left: 0, top: 0, bottom: 0, height: "100%", margin: 0 }}>
        <div className="pg_line-top" /><div className="pg_line-middle" /><div className="pg_line-bottom" />
      </div>

      {/* Right bracket rail — full section height, pinned to viewport right edge */}
      <div className="pg_line-wrap right hidden md:flex" style={{ position: "absolute", right: 0, top: 0, bottom: 0, height: "100%", margin: 0 }}>
        <div className="pg_line-top" /><div className="pg_line-middle" /><div className="pg_line-bottom" />
      </div>

      <div className="mx-auto" style={{ maxWidth: "65rem" }}>

        {/* Overline */}
        <p className="text-center mb-2" style={{ fontFamily: jb, fontSize: "0.75rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.03em", color: "#49496D" }}>
          We don&apos;t just deliver
        </p>
        <p className="text-center mb-10" style={{ fontFamily: jb, fontSize: "0.75rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.03em", color: "#49496D" }}>
          We build like it&apos;s our own.
        </p>

        <div className="flex-1 min-w-0">
        {/* Consulting card — bento-wrap > bento-card-white */}
        <div className="bento-wrap mb-4">
          <div className="bento-card-white relative overflow-hidden p-6 flex flex-col md:flex-row md:items-center gap-6">
            <div className="bento-glow mint" />
            <div className="flex items-center gap-4 shrink-0">
              <Image
                src="https://i0.wp.com/lucenexcorp.com/wp-content/uploads/2026/01/lucenex_logo_cropped.webp?fit=257%2C262&ssl=1"
                alt="Lucenex" width={64} height={64} className="rounded-2xl" unoptimized />
              <h3 style={{ fontFamily: mn, fontSize: "1.5rem", fontWeight: 500, lineHeight: 1.2, color: "#000" }}>
                Consulting &amp;<br />Data Strategy
              </h3>
            </div>
            <div className="shrink-0 hidden md:block" style={{ width: 1, height: 64, backgroundColor: "#CDCDDD" }} />
            <p style={{ fontFamily: mn, fontSize: "1rem", lineHeight: 1.6, color: "#54547E" }}>
              We help you define a futureproof data and AI strategy, choose the right technology
              stack, design scalable cloud architectures, and upskill your team so organizations
              can move faster, avoid costly mistakes, and build a foundation that scales with confidence.
            </p>
          </div>
        </div>

        {/* Stats grid — 4 bento cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map(s => (
            <div key={s.label} className="bento-wrap">
              <div className="bento-card-white relative overflow-hidden p-6 text-center">
                <div className="bento-glow" />
                <p style={{ fontFamily: mn, fontSize: "2.5rem", fontWeight: 700, color: "#000", lineHeight: 1 }} className="mb-1">
                  {s.value}
                </p>
                <p style={{ fontFamily: mn, fontSize: "0.875rem", color: "#54547E" }}>{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote + CTA */}
        <div className="text-center">
          <p className="mb-6" style={{ fontFamily: mn, fontSize: "1.5rem", fontWeight: 400, color: "#000", lineHeight: 1.4 }}>
            Let&apos;s build something <strong style={{ fontWeight: 700 }}>sharp</strong>,{" "}
            <strong style={{ fontWeight: 700 }}>strategic</strong>, and{" "}
            <strong style={{ fontWeight: 700 }}>impossible to overlook.</strong>
          </p>
          <a href="#contact"
            className="inline-block text-white transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "#013220",
              borderRadius: "10px",
              padding: "0.75rem 2rem",
              fontFamily: mn,
              fontSize: "1rem",
              boxShadow: "var(--ring-shadow)",
            }}>
            Start sharpening your idea.
          </a>
        </div>
        </div>
      </div>
    </section>
  );
}
