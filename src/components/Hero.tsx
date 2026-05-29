export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20"
    >
      {/* Background blob */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="hero-blob absolute -top-32 -right-32 w-[700px] h-[700px] opacity-60">
          <svg viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="blobGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#E8F4F0" />
                <stop offset="40%" stopColor="#EEF2FF" />
                <stop offset="100%" stopColor="#F3F4F6" stopOpacity="0" />
              </radialGradient>
            </defs>
            <path
              d="M350 50C490 50 620 120 650 250C680 380 620 480 520 560C420 640 280 660 170 590C60 520 20 390 40 270C60 150 210 50 350 50Z"
              fill="url(#blobGrad)"
            />
          </svg>
        </div>
        <div className="hero-blob absolute -bottom-20 -left-20 w-[500px] h-[500px] opacity-40" style={{ animationDelay: "-4s" }}>
          <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="blobGrad2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#DBEAFE" />
                <stop offset="100%" stopColor="#F3F4F6" stopOpacity="0" />
              </radialGradient>
            </defs>
            <path
              d="M250 30C370 30 460 100 480 210C500 320 440 420 340 470C240 520 120 500 60 410C0 320 20 190 80 110C140 30 210 30 250 30Z"
              fill="url(#blobGrad2)"
            />
          </svg>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-24 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#F3F4F6] border border-[#DDDDDD] text-[#54547E] text-xs font-semibold px-4 py-1.5 rounded-full mb-8 tracking-wide uppercase">
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
          Data &amp; AI Consultancy
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#030303] leading-tight max-w-4xl mb-6">
          Data, Analytics &amp; AI That Power{" "}
          <span className="text-[#0848C5]">Smarter Decisions</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-[#54547E] max-w-2xl mb-10 leading-relaxed">
          We build modern data platforms, analytics dashboards, and AI-powered
          software that turn raw information into strategic advantage.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a
            href="#contact-us"
            className="bg-[#00221E] text-white font-semibold px-8 py-3.5 rounded-md hover:bg-[#0848C5] transition-colors text-base"
          >
            Contact Us
          </a>
          <a
            href="#services"
            className="border border-[#DDDDDD] text-[#030303] font-semibold px-8 py-3.5 rounded-md hover:border-[#030303] transition-colors text-base"
          >
            Explore Services
          </a>
        </div>

        {/* Divider line with logo */}
        <div className="flex items-center gap-4 w-full max-w-md opacity-30">
          <div className="flex-1 h-px bg-[#DDDDDD]" />
          <div className="text-xs font-bold tracking-widest text-[#54547E] uppercase">Lucenex</div>
          <div className="flex-1 h-px bg-[#DDDDDD]" />
        </div>
      </div>
    </section>
  );
}
