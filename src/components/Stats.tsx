import Image from "next/image";

const stats = [
  { value: "10+", label: "Happy Clients" },
  { value: "35+", label: "Projects" },
  { value: "5+", label: "Years of Experience" },
  { value: "5+", label: "Specialists" },
];

export default function Stats() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Decorative header */}
        <div className="flex flex-col items-center mb-12">
          <div className="grid grid-cols-5 gap-0.5 mb-4 opacity-30">
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#54547E]" />
            ))}
          </div>
          <p className="text-[10px] font-bold tracking-widest uppercase text-[#54547E] text-center leading-relaxed">
            We don&apos;t just deliver<br />We build like it&apos;s our own.
          </p>
        </div>

        {/* Consulting card */}
        <div className="glass-card p-6 mb-4 flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex items-center gap-4 md:w-64 shrink-0">
            <Image
              src="https://i0.wp.com/lucenexcorp.com/wp-content/uploads/2026/01/lucenex_logo_cropped.webp?fit=257%2C262&ssl=1"
              alt="Lucenex"
              width={64}
              height={64}
              className="rounded-2xl"
              unoptimized
            />
            <div>
              <h3 className="text-xl font-bold text-[#0A0A1E] leading-tight">
                Consulting &amp;<br />Data Strategy
              </h3>
            </div>
          </div>
          <div className="h-px md:h-16 w-full md:w-px bg-[#54547E]/15 shrink-0" />
          <p className="text-[#54547E] text-sm leading-relaxed">
            We help you define a futureproof data and AI strategy, choose the right technology
            stack, design scalable cloud architectures, and upskill your team so organizations
            can move faster, avoid costly mistakes, and build a foundation that scales with confidence.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((s) => (
            <div key={s.label} className="glass-card p-6 text-center">
              <p className="text-4xl font-bold text-[#0A0A1E] mb-1">{s.value}</p>
              <p className="text-xs font-medium text-[#54547E]">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Quote + CTA */}
        <div className="text-center">
          <p className="text-2xl md:text-3xl font-semibold text-[#0A0A1E] mb-6 leading-snug">
            Let&apos;s build something{" "}
            <strong className="font-bold">sharp</strong>,{" "}
            <strong className="font-bold">strategic</strong>, and{" "}
            <strong className="font-bold">impossible to overlook.</strong>
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white/60 border border-[#54547E]/20 text-[#0A0A1E] font-medium px-6 py-3 rounded-full hover:bg-white transition-colors text-sm"
          >
            Start sharpening your idea.
          </a>
        </div>
      </div>
    </section>
  );
}
