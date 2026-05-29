"use client";
import { useState } from "react";
import Image from "next/image";

const navLinks = [["Home","#hero"],["Services","#services"],["About","#about"],["Contact","#contact"]];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: "#EEEEF4" }}>
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 mx-auto">
          {navLinks.map(([label, href]) => (
            <a key={href} href={href}
              style={{ fontFamily:"var(--font-poppins),'Poppins',sans-serif", fontSize:"16px", fontWeight:400, color:"#000" }}
              className="hover:opacity-70 transition-opacity">
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#contact"
          className="hidden md:inline-flex items-center text-white text-sm font-semibold px-5 py-2.5 rounded-[10px] transition-opacity hover:opacity-90"
          style={{ backgroundColor:"#000000", boxShadow:"var(--ring-shadow)", fontFamily:"var(--font-poppins),'Poppins',sans-serif" }}>
          Book a Call
        </a>

        {/* Mobile toggle */}
        <button className="md:hidden p-2 flex flex-col gap-1.5 ml-auto" onClick={() => setOpen(!open)}>
          <span className={`block h-0.5 w-5 bg-black transition-all ${open?"rotate-45 translate-y-2":""}`} />
          <span className={`block h-0.5 w-5 bg-black transition-all ${open?"opacity-0":""}`} />
          <span className={`block h-0.5 w-5 bg-black transition-all ${open?"-rotate-45 -translate-y-2":""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden px-8 py-4 border-t border-[#CDCDDD] flex flex-col gap-4" style={{ backgroundColor:"#EEEEF4" }}>
          {navLinks.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}
              style={{ fontFamily:"var(--font-poppins),'Poppins',sans-serif", fontSize:"16px" }}>
              {label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            className="bg-black text-white text-sm font-semibold px-5 py-2.5 rounded-[10px] text-center">
            Book a Call
          </a>
        </div>
      )}
    </header>
  );
}
