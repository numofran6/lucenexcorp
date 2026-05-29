import Image from "next/image";

const clientLogos = [
  { name: "Yassir", src: "https://lucenexcorp.com/wp-content/uploads/2026/02/logo-yassir-forward-dark.svg" },
  { name: "RankMath", src: "https://lucenexcorp.com/wp-content/uploads/2026/01/rank-math-logo.svg" },
  { name: "one.com", src: "https://i0.wp.com/lucenexcorp.com/wp-content/uploads/2026/01/onecom-removebg-preview.png?fit=600%2C74&ssl=1" },
];

const techIcons = [
  { name: "Power BI", color: "#F2C811", icon: "▦" },
  { name: "Tableau", color: "#1F77B4", icon: "◈" },
  { name: "Looker", color: "#4285F4", icon: "◉" },
  { name: "Snowflake", color: "#29B5E8", icon: "❄" },
  { name: "Databricks", color: "#FF3621", icon: "◆" },
  { name: "dbt", color: "#FF694A", icon: "✕" },
  { name: "AWS", color: "#FF9900", icon: "⬡" },
  { name: "GCP", color: "#4285F4", icon: "☁" },
  { name: "Python", color: "#3776AB", icon: "⊚" },
  { name: "SQL", color: "#336791", icon: "⋮" },
  { name: "JavaScript", color: "#F7DF1E", icon: "JS" },
  { name: "WordPress", color: "#21759B", icon: "W" },
  { name: "Java", color: "#007396", icon: "☕" },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-16 px-6">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-125 rounded-full opacity-50"
          style={{ background: "radial-gradient(ellipse, rgba(180,180,240,0.4) 0%, transparent 70%)" }} />
        <div className="absolute top-10 left-1/3 w-100 h-100 rounded-full opacity-30"
          style={{ background: "radial-gradient(ellipse, rgba(160,200,230,0.5) 0%, transparent 70%)" }} />
        <div className="absolute bottom-20 right-1/4 w-87.5 h-87.5 rounded-full opacity-25"
          style={{ background: "radial-gradient(ellipse, rgba(180,160,230,0.4) 0%, transparent 70%)" }} />
      </div>

      <div className="relative flex flex-col items-center text-center max-w-3xl w-full">
        {/* Circular logo */}
        <div className="mb-5 flex items-center gap-3">
          <Image
            src="https://i0.wp.com/lucenexcorp.com/wp-content/uploads/2026/01/lucenex_logo_cropped.webp?fit=257%2C262&ssl=1"
            alt="Lucenex Corp"
            width={72}
            height={72}
            className="rounded-full"
            unoptimized
          />
          <span className="text-2xl font-bold tracking-wider text-[#0A0A1E] uppercase">LUCENEX</span>
        </div>

        {/* Tagline */}
        <p className="text-xs font-semibold tracking-widest uppercase text-[#54547E] mb-6">
          Advanced Data Intelligence &amp; AI Automation Solutions
        </p>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0A0A1E] leading-tight mb-6">
          Data, Analytics &amp; AI That Power Smarter Decisions
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-[#54547E] max-w-xl mb-10 leading-relaxed">
          Lucenex Corp builds data platforms and AI-powered software that help businesses
          automate smarter and make decisions with confidence.
        </p>

        {/* CTA */}
        <a
          href="#contact"
          className="bg-[#00221E] text-white font-semibold px-8 py-3.5 rounded-lg text-base hover:bg-[#0848C5] transition-colors mb-16"
        >
          Contact Us
        </a>

        {/* Client logos */}
        <p className="text-[10px] font-bold tracking-widest uppercase text-[#54547E] mb-6">
          Powered by expert engineers from trusted brands
        </p>
        <div className="flex items-center justify-center gap-10 mb-12 flex-wrap">
          {clientLogos.map((logo) => (
            <Image
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              width={100}
              height={28}
              className="h-7 w-auto opacity-70 hover:opacity-100 transition-opacity object-contain"
              unoptimized
            />
          ))}
        </div>

        {/* Separator */}
        <div className="w-full flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-[#54547E]/20" />
          <p className="text-[10px] font-bold tracking-widest uppercase text-[#54547E] whitespace-nowrap">
            Leveraging industry-grade tools relied on by top tech teams
          </p>
          <div className="flex-1 h-px bg-[#54547E]/20" />
        </div>

        {/* Tech icons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {techIcons.map((tech) => (
            <div
              key={tech.name}
              title={tech.name}
              className="w-11 h-11 rounded-xl flex items-center justify-center text-sm font-bold shadow-sm"
              style={{ background: `${tech.color}18`, color: tech.color, border: `1px solid ${tech.color}30` }}
            >
              {tech.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
