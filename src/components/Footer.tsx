import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-[#54547E]/15">
      <div className="max-w-5xl mx-auto">
        {/* Top — centered logo */}
        <div className="flex flex-col items-center mb-14">
          <Image
            src="https://i0.wp.com/lucenexcorp.com/wp-content/uploads/2026/01/lucenex_logo_cropped.webp?fit=257%2C262&ssl=1"
            alt="Lucenex Corp"
            width={72}
            height={72}
            className="rounded-full mb-4"
            unoptimized
          />
          <h3 className="text-xl font-bold tracking-widest text-[#0A0A1E] uppercase mb-2">Lucenex Corp</h3>
          <p className="text-[10px] font-semibold tracking-widest uppercase text-[#54547E] text-center">
            Advanced Data Intelligence &amp; AI Automation Solutions
          </p>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          {/* Get in touch */}
          <div>
            <p className="text-[10px] font-bold tracking-widest uppercase text-[#54547E] mb-3">Get In Touch</p>
            <h4 className="text-lg font-bold text-[#0A0A1E] mb-3">Let&apos;s Discuss Your Vision</h4>
            <p className="text-sm text-[#54547E] mb-1">Simply email us at</p>
            <a
              href="mailto:contact@lucenexcorp.com"
              className="inline-block text-sm font-medium text-[#0A0A1E] bg-[#54547E]/10 px-3 py-1.5 rounded-lg hover:bg-[#54547E]/20 transition-colors"
            >
              contact@lucenexcorp.com
            </a>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-[10px] font-bold tracking-widest uppercase text-[#54547E] mb-3">Quick Links</p>
            <ul className="flex flex-col gap-2">
              {[["Home", "#hero"], ["Services", "#services"], ["Contact Us", "#contact"]].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-sm font-medium text-[#0A0A1E] hover:text-[#0848C5] transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#54547E]/15 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-semibold tracking-widest uppercase text-[#54547E]">
            &copy; Lucenex Corp. All rights reserved 2026
          </p>
          <a
            href="https://www.linkedin.com/company/lucenex-corp/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[10px] font-semibold tracking-widest uppercase text-[#54547E] hover:text-[#0848C5] transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Connect with us on LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
