const stats = [
  { value: "10+", label: "Clients" },
  { value: "35+", label: "Projects delivered" },
  { value: "5+", label: "Years experience" },
  { value: "5+", label: "Specialists" },
];

export default function Stats() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-20">
          {/* Left column */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#54547E] mb-4">
              Who we are
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#030303] leading-tight mb-6">
              Consulting &amp; Data Strategy
            </h2>
            <p className="text-[#54547E] text-lg leading-relaxed mb-8">
              We partner with growth-stage companies to design and deliver data
              infrastructure, analytics systems, and AI solutions that accelerate
              decision-making and unlock competitive advantage.
            </p>
            <blockquote className="border-l-4 border-[#00221E] pl-5 text-[#030303] font-semibold text-lg leading-snug">
              "Let's build something sharp, strategic, and impossible to overlook."
            </blockquote>
          </div>

          {/* Right column — stats grid */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#F3F4F6] rounded-2xl p-8 flex flex-col justify-between group hover:bg-[#00221E] transition-colors duration-300"
              >
                <span className="text-5xl font-extrabold text-[#030303] group-hover:text-white transition-colors">
                  {stat.value}
                </span>
                <span className="text-sm font-semibold text-[#54547E] group-hover:text-white/70 transition-colors mt-2">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
