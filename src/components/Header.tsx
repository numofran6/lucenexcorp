"use client";
import { useState } from "react";
import Image from "next/image";
import cx from "./Header.module.scss";

const navLinks = [["Home","#hero"],["Services","#services"],["About","#about"],["Contact","#contact"]];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${cx.header}`}>

      <div className={`mx-auto px-8 flex items-center justify-between ${cx.inner}`}>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(([label, href]) => (
            <a key={href} href={href}
              className={`nav-link hover:text-black transition-colors ${cx.desktopNavLink}`}>
              {label}
            </a>
          ))}
        </nav>

        {/* CTA — visible on tablet and up */}
        <a href="#contact"
          className={`hidden md:inline-flex items-center text-white font-medium px-5 py-2.5 rounded-[10px] transition-opacity hover:opacity-90 ${cx.cta}`}>
          Book a Call
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="arr"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.6A16 16 0 0 0 12 12.69a16 16 0 0 0 4.09 3.07l.93-.93a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        </a>

        {/* Mobile: logo + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <Image
            src="https://i0.wp.com/lucenexcorp.com/wp-content/uploads/2026/01/lucenex_logo_cropped.webp?fit=257%2C262&ssl=1"
            alt="Lucenex Corp" width={30} height={30}
            className="rounded-full" unoptimized />
          <span className={cx.brandMobile}>
            Lucenex
          </span>
        </div>
        <button className="md:hidden p-2 flex flex-col gap-1.5" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className={`block h-0.5 w-5 bg-black transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-5 bg-black transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-black transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className={`md:hidden px-6 py-5 flex flex-col ${cx.dropdown}`}>
          {navLinks.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}
              className={`flex items-center justify-between hover:text-black transition-colors ${cx.navLink}`}>
              {label}
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="arr"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            className={`text-white font-medium rounded-[10px] mt-4 flex items-center justify-center ${cx.dropdownCta}`}>
            Book a Call
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="arr"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.6A16 16 0 0 0 12 12.69a16 16 0 0 0 4.09 3.07l.93-.93a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </a>
        </div>
      )}
    </header>
  );
}
