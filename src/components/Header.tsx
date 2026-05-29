"use client";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-5 px-6">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5">
          <Image
            src="https://i0.wp.com/lucenexcorp.com/wp-content/uploads/2026/01/lucenex_logo_cropped.webp?fit=257%2C262&ssl=1"
            alt="Lucenex Corp"
            width={36}
            height={36}
            className="rounded-full"
            unoptimized
          />
          <span className="text-sm font-bold tracking-widest text-[#0A0A1E] uppercase">Lucenex</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[["Home", "#hero"], ["Services", "#services"], ["About", "#about"], ["Contact", "#contact"]].map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-medium text-[#54547E] hover:text-[#0A0A1E] transition-colors">
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex bg-[#00221E] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#0848C5] transition-colors"
        >
          Book a Call
        </a>

        {/* Mobile toggle */}
        <button className="md:hidden p-2 flex flex-col gap-1.5" onClick={() => setOpen(!open)}>
          <span className={`block h-0.5 w-5 bg-[#0A0A1E] transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-5 bg-[#0A0A1E] transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-[#0A0A1E] transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-4 glass-card px-6 py-4 flex flex-col gap-4">
          {[["Home", "#hero"], ["Services", "#services"], ["About", "#about"], ["Contact", "#contact"]].map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="text-sm font-medium text-[#54547E]">{label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="bg-[#00221E] text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center">Book a Call</a>
        </div>
      )}
    </header>
  );
}
