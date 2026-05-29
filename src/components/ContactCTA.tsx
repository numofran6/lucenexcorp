export default function ContactCTA() {
  return (
    <section id="contact-us" className="bg-[#00221E] py-24 relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10 pointer-events-none">
        <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="300" cy="300" r="300" fill="url(#ctaGrad)" />
          <defs>
            <radialGradient id="ctaGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0848C5" />
              <stop offset="100%" stopColor="#00221E" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-4">
          Get in touch
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
          Are you ready to take your business to the next level?
        </h2>
        <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
          Let's talk about your data challenges and how we can help you build
          smarter systems, faster.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:francis.numo@group.one"
            className="bg-white text-[#00221E] font-bold px-8 py-3.5 rounded-md hover:bg-[#0848C5] hover:text-white transition-colors text-base"
          >
            Contact Us
          </a>
          <a
            href="https://www.linkedin.com/company/lucenex-corp/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/30 text-white font-semibold px-8 py-3.5 rounded-md hover:bg-white/10 transition-colors text-base"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
