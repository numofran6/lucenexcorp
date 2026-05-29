"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center">
          <Image
            src="https://i0.wp.com/lucenexcorp.com/wp-content/uploads/2026/01/Autorun_dark-1-scaled.png"
            alt="Lucenex Corp"
            width={180}
            height={27}
            className="h-7 w-auto"
            unoptimized
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#hero" className="text-sm font-medium text-[#54547E] hover:text-[#030303] transition-colors">
            Home
          </a>
          <a href="#services" className="text-sm font-medium text-[#54547E] hover:text-[#030303] transition-colors">
            Services
          </a>
          <a href="#about" className="text-sm font-medium text-[#54547E] hover:text-[#030303] transition-colors">
            About
          </a>
          <a href="#contact-us" className="text-sm font-medium text-[#54547E] hover:text-[#030303] transition-colors">
            Contact
          </a>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact-us"
            className="bg-[#00221E] text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-[#0848C5] transition-colors"
          >
            Book an intro call
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-[#030303] transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[#030303] transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[#030303] transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#DDDDDD] px-6 py-4 flex flex-col gap-4">
          {["#hero|Home", "#services|Services", "#about|About", "#contact-us|Contact"].map((item) => {
            const [href, label] = item.split("|");
            return (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-[#54547E] hover:text-[#030303]"
              >
                {label}
              </a>
            );
          })}
          <a
            href="#contact-us"
            onClick={() => setMenuOpen(false)}
            className="bg-[#00221E] text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-[#0848C5] text-center"
          >
            Book an intro call
          </a>
        </div>
      )}
    </header>
  );
}
