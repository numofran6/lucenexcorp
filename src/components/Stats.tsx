import Image from "next/image";
import cx from "./Stats.module.scss";

const stats = [
  { value: "10+", label: "Happy Clients",      glow: "#D0E4CD" },
  { value: "35+", label: "Projects",            glow: "#FEF6E0" },
  { value: "5+",  label: "Years of Experience", glow: "#C3DCA8" },
  { value: "5+",  label: "Specialists",         glow: "#FFF3C4" },
];

export default function Stats() {
  return (
    <section id="about" className={`relative pt-20 pb-10 px-6 ${cx.section}`}>

      {/* Left bracket rail — full section height, pinned to viewport left edge */}
      <div className={`pg_line-wrap hidden md:flex ${cx.railAbsolute}`}>
        <div className="pg_line-top" /><div className="pg_line-middle" /><div className="pg_line-bottom" />
      </div>

      {/* Right bracket rail — full section height, pinned to viewport right edge */}
      <div className={`pg_line-wrap right hidden md:flex ${cx.railAbsoluteRight}`}>
        <div className="pg_line-top" /><div className="pg_line-middle" /><div className="pg_line-bottom" />
      </div>

      <div className={`mx-auto ${cx.inner}`}>

        {/* Section icon */}
        <div className="flex justify-center mb-4 opacity-60">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="22" width="7" height="11" rx="2" fill="#B8860B" />
            <rect x="14.5" y="13" width="7" height="20" rx="2" fill="#B8860B" />
            <rect x="26" y="3" width="7" height="30" rx="2" fill="#B8860B" />
            <polyline points="4,20 15.5,11 27,4" stroke="#B8860B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <polyline points="23,4 27,4 27,8" fill="none" stroke="#B8860B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Overline */}
        <p className={`text-center mb-2 ${cx.overline}`}>
          We don&apos;t just deliver
        </p>
        <p className={`text-center mb-10 ${cx.overline}`}>
          We build like it&apos;s our own.
        </p>

        <div className="flex-1 min-w-0">
        {/* Consulting card — bento-wrap > bento-card-white */}
        <div className="bento-wrap mb-4">
          <div className={`bento-card-white relative overflow-hidden flex flex-col md:flex-row md:items-center gap-6 ${cx.consultingCard}`}>
            <div className="flex items-center gap-4 shrink-0">
              <Image
                src="https://i0.wp.com/lucenexcorp.com/wp-content/uploads/2026/01/lucenex_logo_cropped.webp?fit=257%2C262&ssl=1"
                alt="Lucenex" width={64} height={64} className="rounded-2xl" unoptimized />
              <h3 className={cx.cardTitle}>
                Consulting &amp;<br />Data Strategy
              </h3>
            </div>
            <div className={`shrink-0 hidden md:block ${cx.divider}`} />
            <p className={cx.cardBody}>
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
                <div className="bento-glow" style={{ backgroundColor: s.glow }} />
                <p className={`mb-1 ${cx.statValue}`}>
                  {s.value}
                </p>
                <p className={cx.statLabel}>{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote + CTA */}
        <div className="text-center">
          <p className={`mb-6 ${cx.quote}`}>
            Let&apos;s build something <strong style={{ fontWeight: 700 }}>sharp</strong>,{" "}
            <strong style={{ fontWeight: 700 }}>strategic</strong>, and{" "}
            <strong style={{ fontWeight: 700 }}>impossible to overlook.</strong>
          </p>
          <a href="#contact" className={`text-white transition-opacity hover:opacity-90 ${cx.cta}`}>
            Start sharpening your idea.
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="arr"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
        </div>
      </div>
    </section>
  );
}
