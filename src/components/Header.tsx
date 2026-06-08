"use client";
import { useState } from "react";
import Image from "next/image";

const pp = "var(--font-poppins),'Poppins',sans-serif";
const mt = "var(--font-montserrat),'Montserrat',sans-serif";

const navLinks = [["Home","#hero"],["Services","#services"],["About","#about"],["Contact","#contact"]];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: "#EEEEF4", borderBottom: "1px solid #CDCDDD" }}>

      <div className="mx-auto px-8 flex items-center justify-between"
        style={{ maxWidth: "80rem", height: "4.5rem" }}>

        {/* Logo + brand — visible on tablet and up */}
        <div className="hidden md:flex items-center gap-2.5">
          <Image
            src="https://i0.wp.com/lucenexcorp.com/wp-content/uploads/2026/01/lucenex_logo_cropped.webp?fit=257%2C262&ssl=1"
            alt="Lucenex Corp" width={36} height={36}
            className="rounded-full" unoptimized priority />
          <span style={{ fontFamily: mt, fontSize: "0.9375rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#013220" }}>
            Lucenex Corp
          </span>
        </div>

        {/* CTA — visible on tablet and up */}
        <a href="#contact"
          className="hidden md:inline-flex items-center text-white font-medium px-5 py-2.5 rounded-[10px] transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#000", fontFamily: pp, fontSize: "0.875rem", boxShadow: "var(--ring-shadow)" }}>
          Book a Call
        </a>

        {/* Mobile: logo + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <Image
            src="https://i0.wp.com/lucenexcorp.com/wp-content/uploads/2026/01/lucenex_logo_cropped.webp?fit=257%2C262&ssl=1"
            alt="Lucenex Corp" width={30} height={30}
            className="rounded-full" unoptimized />
          <span style={{ fontFamily: mt, fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#013220" }}>
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
        <div className="md:hidden px-6 py-5 flex flex-col gap-4"
          style={{ backgroundColor: "#EEEEF4", borderTop: "1px solid #CDCDDD" }}>
          {navLinks.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}
              style={{ fontFamily: pp, fontSize: "1rem", fontWeight: 400, color: "#000" }}
              className="hover:opacity-60 transition-opacity">
              {label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            className="text-white text-sm font-medium px-5 py-2.5 rounded-[10px] text-center mt-1"
            style={{ backgroundColor: "#000", fontFamily: pp }}>
            Book a Call
          </a>
        </div>
      )}
    </header>
  );
}
