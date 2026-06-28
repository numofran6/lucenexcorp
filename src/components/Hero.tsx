import Image from "next/image";
import cx from "./Hero.module.scss";

const clientLogos = [
  { name: "Yassir",   src: "/logos/logo-yassir.svg",                                                                                                     h: 28 },
  { name: "RankMath", src: "/logos/rank-math-logo.svg",                                                                                                  h: 28 },
  { name: "one.com",  src: "https://i0.wp.com/lucenexcorp.com/wp-content/uploads/2026/01/onecom-removebg-preview.png?fit=600%2C74&ssl=1",                h: 18 },
];

// All icons sourced directly from the WordPress media library — exact same assets as the original site
const techRow1 = [
  { name: "Power BI",   src: "https://i0.wp.com/lucenexcorp.com/wp-content/uploads/2026/02/icons8-power-bi-2021-50.png?fit=50%2C50" },
  { name: "Tableau",    src: "https://i0.wp.com/lucenexcorp.com/wp-content/uploads/2026/02/icons8-tableau-software-50.webp?fit=50%2C50" },
  { name: "Looker",     src: "https://i0.wp.com/lucenexcorp.com/wp-content/uploads/2026/02/icons8-google-looker-50.png?fit=50%2C50" },
  { name: "Snowflake",  src: "https://i0.wp.com/lucenexcorp.com/wp-content/uploads/2026/02/icons8-snowflake-48.webp?fit=48%2C48" },
  { name: "DuckDB",     src: "https://i0.wp.com/lucenexcorp.com/wp-content/uploads/2026/02/duckdb-icon-logo-png_seeklogo-554697.webp?fit=300%2C300" },
  { name: "Databricks", src: "https://i0.wp.com/lucenexcorp.com/wp-content/uploads/2026/02/Databricks-Red-scaled.webp?fit=2560%2C1856", cls: "w-16 h-16" },
  { name: "dbt",        src: "https://i0.wp.com/lucenexcorp.com/wp-content/uploads/2026/02/Dbt-scaled.webp?fit=300%2C206",                cls: "w-16 h-16" },
];

const techRow2 = [
  { name: "AWS",          src: "https://i0.wp.com/lucenexcorp.com/wp-content/uploads/2026/02/icons8-aws-48.webp?fit=48%2C48" },
  { name: "Google Cloud", src: "https://i0.wp.com/lucenexcorp.com/wp-content/uploads/2026/02/icons8-google-cloud-48.png?fit=48%2C48" },
  { name: "Python",       src: "https://i0.wp.com/lucenexcorp.com/wp-content/uploads/2026/02/icons8-python-48.webp?fit=48%2C48" },
  { name: "SQL",          src: "https://i0.wp.com/lucenexcorp.com/wp-content/uploads/2026/02/icons8-sql-48.png?fit=48%2C48" },
  { name: "JavaScript",   src: "https://i0.wp.com/lucenexcorp.com/wp-content/uploads/2026/02/icons8-javascript-48.webp?fit=48%2C48" },
  { name: "WordPress",    src: "https://i0.wp.com/lucenexcorp.com/wp-content/uploads/2026/02/icons8-wordpress-48.webp?fit=48%2C48" },
  { name: "Java",         src: "https://i0.wp.com/lucenexcorp.com/wp-content/uploads/2026/02/icons8-java-94.webp?fit=94%2C94" },
];

export default function Hero() {
  return (
    <section id="hero" className={`relative overflow-hidden ${cx.section}`}>

      {/* Hero blob — inline SVG, exact gradient from WP source, blur 2rem, mix-blend-mode color */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className={cx.blob}>
          <svg width="1201" height="433" viewBox="0 0 1201 433" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
            <g style={{ mixBlendMode: "color" }}>
              <path d="M608.564 0.179718C261.123 0.179718 0.860097 315.682 0.860352 421.606C0.86048 475.022 336.352 280.928 608.564 282.917C875.547 284.868 1200.86 478.886 1200.86 421.606C1200.86 306.059 946.652 0.179718 608.564 0.179718Z" fill="url(#heroGrad)"/>
            </g>
            <defs>
              <radialGradient id="heroGrad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(600.86 214.739) scale(600 228.933)">
                <stop stopColor="#F0EDE8"/>
                <stop offset="1" stopColor="#FEF6E0"/>
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Content — max-width 60rem, centered */}
      <div className={`relative mx-auto px-6 flex flex-col items-center text-center ${cx.content}`}>

        {/* Logo + brand name */}
        <div className="flex items-center gap-3 mb-6">
          <Image
            src="https://i0.wp.com/lucenexcorp.com/wp-content/uploads/2026/01/lucenex_logo_cropped.webp?fit=257%2C262&ssl=1"
            alt="Lucenex" width={64} height={64} className="rounded-full" unoptimized priority />
          <span className={cx.brandName}>
            LUCENEX
          </span>
        </div>

        {/* Overline — JetBrains Mono */}
        <p className={`mb-4 ${cx.overline}`}>
          Advanced Data Intelligence &amp; AI Automation Solutions
        </p>

        {/* Hero headline — Manrope 500, 3.5rem */}
        <h1 className={`mb-4 ${cx.headline}`}>
          Data, Analytics &amp; AI That Power Smarter Decisions
        </h1>

        {/* Subtitle */}
        <p className={`mb-6 ${cx.subtitle}`}>
          Lucenex Corp builds data platforms and AI-powered software that help
          businesses automate smarter and make decisions with confidence.
        </p>

        {/* CTA button — #013220, border-radius 10px, ring shadow */}
        <a href="#contact" className={`inline-flex items-center mb-12 text-white font-medium transition-opacity hover:opacity-90 ${cx.cta}`}>
          Contact Us
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="arr"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>

        {/* "Powered by" label — framed between two hero-divider lines */}
        <div className="flex flex-col items-center gap-3 mb-6 w-full">
          <div className="hero-divider" />
          <p className={cx.caption}>
            Powered by expert engineers from trusted brands
          </p>
          <div className="hero-divider" />
        </div>

        {/* Client logos with | separators */}
        <div className="flex flex-wrap items-center justify-center gap-y-6 mb-10">
          {clientLogos.map((logo, i) => (
            <div key={logo.name} className="flex items-center">
              {i > 0 && <div className={`mx-4 sm:mx-8 ${cx.logoSep}`} />}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logo.src} alt={logo.name}
                className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                style={{ height: logo.h, width: "auto" }} />
            </div>
          ))}
        </div>

        {/* "Leveraging" label — framed between two hero-divider lines */}
        <div className="flex flex-col items-center gap-3 mb-6 w-full">
          <div className="hero-divider" />
          <p className={cx.caption}>
            Leveraging industry-grade tools relied on by top tech teams
          </p>
          <div className="hero-divider" />
        </div>

        {/* Tech icons row 1 */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-6">
          {techRow1.map(t => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={t.name} src={t.src} alt={t.name} title={t.name}
              className={`${t.cls ?? "w-10 h-10"} object-contain opacity-80 hover:opacity-100 transition-opacity`} />
          ))}
        </div>

        {/* Tech icons row 2 */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          {techRow2.map(t => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={t.name} src={t.src} alt={t.name} title={t.name}
              className="w-10 h-10 object-contain opacity-80 hover:opacity-100 transition-opacity" />
          ))}
        </div>
      </div>
    </section>
  );
}
