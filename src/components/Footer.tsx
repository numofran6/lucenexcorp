const links = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact-us" },
];

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/lucenex-corp/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#030303] text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-extrabold tracking-tight mb-3">lucenex corp</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Advanced Data Intelligence &amp; AI Automation Solutions
            </p>
            <a
              href="mailto:hello@lucenexcorp.com"
              className="text-sm text-white/40 hover:text-white transition-colors"
            >
              hello@lucenexcorp.com
            </a>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">
              Quick Links
            </p>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">
              Connect
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-white/30 hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; 2026 Lucenex Corp. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
