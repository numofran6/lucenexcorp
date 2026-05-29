"use client";
import { useState } from "react";

const mn = "var(--font-manrope),'Manrope',sans-serif";
const jb = "var(--font-jetbrains),'JetBrains Mono',monospace";
const pp = "var(--font-poppins),'Poppins',sans-serif";

export default function ContactSection() {
  const [form, setForm] = useState({ email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle"|"sending"|"sent">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    await new Promise(r => setTimeout(r, 800));
    setStatus("sent");
  }

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden" style={{ backgroundColor: "#EEEEF4" }}>
      {/* CTA blob — inverted hero blob, centered, blurred — exact from WP */}
      <div aria-hidden style={{
        position: "absolute", inset: "50% auto auto 50%",
        transform: "translate(-50%, -50%)",
        filter: "blur(2rem)",
        width: "75rem", maxWidth: "90vw", zIndex: 0, pointerEvents: "none",
      }}>
        <svg width="1200" height="430" viewBox="0 0 1200 430" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
          <g style={{ mixBlendMode: "color" }}>
            <path d="M607.703 430C260.263 430 -0.000254676 115.959 0 10.5245C0.000128428 -42.6439 335.491 150.551 607.703 148.572C874.687 146.63 1200 -46.4896 1200 10.5245C1200 125.537 945.792 430 607.703 430Z" fill="url(#ctaGrad)"/>
          </g>
          <defs>
            <radialGradient id="ctaGrad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(600 216.434) scale(600 227.873)">
              <stop stopColor="#EBFFF5"/>
              <stop offset="1" stopColor="#E0E0FF"/>
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="relative mx-auto" style={{ maxWidth: "50rem", zIndex: 1 }}>

        {/* Header */}
        <div className="text-center mb-10">
          <p className="mb-4" style={{ fontFamily: jb, fontSize: "0.75rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "#49496D" }}>
            Contact Us
          </p>
          <h2 className="mb-3" style={{ fontFamily: pp, fontSize: "3rem", fontWeight: 500, lineHeight: 1.1, color: "#000" }}>
            Are you ready to take<br />your business to the next level?
          </h2>
          <p style={{ fontFamily: mn, fontSize: "1.1rem", color: "#54547E" }}>
            Reach out to us and get instant clarity for your brand
          </p>
        </div>

        {/* Form card */}
        <div className="bento-wrap">
          <div className="bento-card-white p-8">
            {status === "sent" ? (
              <div className="flex flex-col items-center py-10 gap-4">
                <div className="flex items-center gap-3 text-white text-sm font-medium px-5 py-3 rounded-xl w-full max-w-sm"
                  style={{ backgroundColor: "#1a1a2e" }}>
                  <svg className="w-5 h-5 shrink-0" fill="none" stroke="#4ade80" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Message sent successfully!</span>
                </div>
                <p style={{ fontFamily: mn, fontSize: "0.9rem", color: "#54547E" }}>We&apos;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {[
                  { id:"email",   label:"Email Address",  type:"email",  placeholder:"Enter your email address" },
                  { id:"subject", label:"Subject",         type:"text",   placeholder:"Enter the subject of your message" },
                ].map(f => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="block mb-2" style={{ fontFamily: mn, fontSize: "0.95rem", fontWeight: 500, color: "#000" }}>{f.label}</label>
                    <input id={f.id} name={f.id} type={f.type} required placeholder={f.placeholder}
                      value={form[f.id as keyof typeof form]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm"
                      style={{ border: "1px solid #CDCDDD", backgroundColor: "#fff", color: "#000", fontFamily: mn, outline: "none" }} />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block mb-2" style={{ fontFamily: mn, fontSize: "0.95rem", fontWeight: 500, color: "#000" }}>Description</label>
                  <textarea id="message" name="message" required rows={5} placeholder="Write your message here..."
                    value={form.message} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-sm resize-none"
                    style={{ border: "1px solid #CDCDDD", backgroundColor: "#fff", color: "#000", fontFamily: mn, outline: "none" }} />
                </div>
                <button type="submit" disabled={status==="sending"}
                  className="text-white font-medium py-3 rounded-[10px] transition-opacity hover:opacity-90 disabled:opacity-60"
                  style={{ backgroundColor: "#013220", fontFamily: mn, fontSize: "1rem", boxShadow: "var(--ring-shadow)" }}>
                  {status === "sending" ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
