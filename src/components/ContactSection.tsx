"use client";
import { useActionState } from "react";
import { sendContactEmail, type ContactState } from "@/app/actions/contact";

const mn = "var(--font-manrope),'Manrope',sans-serif";
const jb = "var(--font-jetbrains),'JetBrains Mono',monospace";
const pp = "var(--font-poppins),'Poppins',sans-serif";

const initial: ContactState = { status: "idle", message: "" };

export default function ContactSection() {
  const [state, formAction, pending] = useActionState(sendContactEmail, initial);

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden" style={{ backgroundColor: "#EEEEF4" }}>

      <style>{`
        /* Floating-label field wrapper */
        .cx-field { position: relative; padding-top: 1.5rem; }

        /* Base input / textarea */
        .cx-input {
          display: block; width: 100%;
          background: transparent;
          border: none; border-bottom: 1.5px solid #CDCDDD;
          padding: 0.5rem 0 0.75rem;
          font-size: var(--fs-base);
          font-family: var(--font-manrope, Manrope), sans-serif;
          color: #000; outline: none;
          border-radius: 0;
          -webkit-appearance: none; appearance: none;
          transition: border-color 0.2s ease;
          caret-color: #49496D;
        }
        .cx-input::placeholder { color: transparent; }
        .cx-input:focus { border-color: #49496D; }

        /* Floating label */
        .cx-label {
          position: absolute; top: 2.125rem; left: 0;
          font-size: var(--fs-base); color: #54547E;
          pointer-events: none; white-space: nowrap;
          line-height: 1;
          transition: transform 0.18s ease, font-size 0.18s ease,
                      color 0.18s ease, letter-spacing 0.18s ease,
                      font-family 0.18s ease;
        }

        /* Label floated state — triggered by content or focus */
        .cx-input:not(:placeholder-shown) + .cx-label,
        .cx-input:focus + .cx-label {
          transform: translateY(-1.75rem);
          font-size: var(--fs-label);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #49496D;
          font-family: var(--font-jetbrains, 'JetBrains Mono'), monospace;
        }

        /* Two-column row for email + subject */
        .cx-row-2 {
          display: grid;
          grid-template-columns: 5fr 7fr;
          gap: 2.75rem;
          margin-bottom: 2rem;
        }
        /* Row spacer for message */
        .cx-row-1 { margin-bottom: 2.25rem; }

        /* Submit row: error left, button right */
        .cx-submit-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          padding-top: 0.5rem;
        }

        /* Stack everything on narrow viewports */
        @media (max-width: 560px) {
          .cx-row-2 { grid-template-columns: 1fr; gap: 0; }
          .cx-submit-row { flex-direction: column-reverse; align-items: stretch; }
          .cx-btn { justify-content: center; }
        }

        @media (prefers-reduced-motion: reduce) {
          .cx-input, .cx-label { transition: none; }
        }
      `}</style>

      {/* CTA blob */}
      <div aria-hidden style={{
        position: "absolute", inset: "50% auto auto 50%",
        transform: "translate(-50%, -50%)",
        filter: "blur(2rem)",
        width: "75rem", maxWidth: "90vw", zIndex: 0, pointerEvents: "none",
      }}>
        <svg width="1200" height="430" viewBox="0 0 1200 430" fill="none" style={{ width: "100%", height: "auto" }}>
          <g style={{ mixBlendMode: "color" }}>
            <path d="M607.703 430C260.263 430 -0.000254676 115.959 0 10.5245C0.000128428 -42.6439 335.491 150.551 607.703 148.572C874.687 146.63 1200 -46.4896 1200 10.5245C1200 125.537 945.792 430 607.703 430Z" fill="url(#ctaGrad)" />
          </g>
          <defs>
            <radialGradient id="ctaGrad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(600 216.434) scale(600 227.873)">
              <stop stopColor="#EBFFF5" /><stop offset="1" stopColor="#E0E0FF" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="relative mx-auto" style={{ maxWidth: "50rem", zIndex: 1 }}>

        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4 opacity-60">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <rect x="2" y="8" width="32" height="22" rx="3.5" fill="#49496D" />
              <path d="M2 13 L18 23 L34 13" stroke="#EEEEF4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
          <p className="mb-4" style={{ fontFamily: jb, fontSize: "var(--fs-label)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "#49496D" }}>
            Contact Us
          </p>
          <h2 className="mb-3" style={{ fontFamily: pp, fontSize: "var(--fs-h2)", fontWeight: 500, lineHeight: 1.1, color: "#000" }}>
            Are you ready to take<br />your business to the next level?
          </h2>
          <p style={{ fontFamily: mn, fontSize: "var(--fs-lead)", color: "#54547E" }}>
            Reach out to us and get instant clarity for your brand
          </p>
        </div>

        {/* Form card */}
        <div className="bento-wrap">
          <div className="bento-card-white" style={{ padding: "2.5rem 2.75rem" }}>

            {state.status === "success" ? (

              <div className="flex flex-col items-center py-10 gap-4">
                <div style={{
                  display: "flex", alignItems: "center", gap: "0.75rem",
                  backgroundColor: "#1a1a2e", color: "#fff",
                  padding: "0.75rem 1.25rem", borderRadius: "0.75rem",
                  fontFamily: mn, fontSize: "var(--fs-sm)", fontWeight: 500,
                  width: "100%", maxWidth: "22rem",
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  Message sent successfully!
                </div>
                <p style={{ fontFamily: mn, fontSize: "var(--fs-sm)", color: "#54547E" }}>
                  We&apos;ll be in touch within 24 hours.
                </p>
              </div>

            ) : (

              <form action={formAction} noValidate>

                {/* Row 1 — Identity fields: email (5fr) + subject (7fr) */}
                <div className="cx-row-2">
                  <div className="cx-field">
                    <input
                      className="cx-input" id="email" name="email"
                      type="email" required placeholder=" "
                      autoComplete="email"
                    />
                    <label className="cx-label" htmlFor="email">Email Address</label>
                  </div>
                  <div className="cx-field">
                    <input
                      className="cx-input" id="subject" name="subject"
                      type="text" required placeholder=" "
                      autoComplete="off"
                    />
                    <label className="cx-label" htmlFor="subject">Subject</label>
                  </div>
                </div>

                {/* Row 2 — Message */}
                <div className="cx-field cx-row-1">
                  <textarea
                    className="cx-input" id="message" name="message"
                    required rows={5} placeholder=" "
                    style={{ resize: "none", lineHeight: 1.65 }}
                  />
                  <label className="cx-label" htmlFor="message">Message</label>
                </div>

                {/* Row 3 — Error + Submit */}
                <div className="cx-submit-row">
                  {state.status === "error" ? (
                    <p role="alert" style={{
                      fontFamily: jb, fontSize: "var(--fs-label)",
                      color: "#b91c1c", letterSpacing: "0.03em",
                      flex: 1,
                    }}>
                      {state.message}
                    </p>
                  ) : (
                    <div style={{
                      fontFamily: jb, fontSize: "var(--fs-label)",
                      color: "#9797B9", letterSpacing: "0.03em",
                    }}>
                      All fields required
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={pending}
                    className="cx-btn"
                    style={{
                      flexShrink: 0,
                      display: "flex", alignItems: "center", gap: "0.5rem",
                      backgroundColor: "#013220",
                      color: "#fff",
                      fontFamily: mn, fontSize: "var(--fs-sm)", fontWeight: 500,
                      padding: "0.75rem 1.625rem",
                      borderRadius: "10px",
                      border: "none", cursor: pending ? "not-allowed" : "pointer",
                      opacity: pending ? 0.6 : 1,
                      transition: "opacity 0.2s",
                      boxShadow: "var(--ring-shadow)",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {pending ? "Sending…" : (
                      <>
                        Send Message
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
