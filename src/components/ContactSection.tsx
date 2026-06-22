"use client";
import { useActionState } from "react";
import { sendContactEmail, type ContactState } from "@/app/actions/contact";
import cx from "./ContactSection.module.scss";

const initial: ContactState = { status: "idle", message: "" };

export default function ContactSection() {
  const [state, formAction, pending] = useActionState(sendContactEmail, initial);

  return (
    <section id="contact" className={`relative py-24 px-6 overflow-hidden ${cx.section}`}>

      {/* CTA blob */}
      <div aria-hidden className={cx.blobWrap}>
        <svg width="1200" height="430" viewBox="0 0 1200 430" fill="none" style={{ width: "100%", height: "auto" }}>
          <g style={{ mixBlendMode: "color" }}>
            <path d="M607.703 430C260.263 430 -0.000254676 115.959 0 10.5245C0.000128428 -42.6439 335.491 150.551 607.703 148.572C874.687 146.63 1200 -46.4896 1200 10.5245C1200 125.537 945.792 430 607.703 430Z" fill="url(#ctaGrad)" />
          </g>
          <defs>
            <radialGradient id="ctaGrad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(600 216.434) scale(600 227.873)">
              <stop stopColor="#F0EDE8" /><stop offset="1" stopColor="#FEF6E0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className={`relative mx-auto ${cx.contentWrap}`}>

        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4 opacity-60">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <rect x="2" y="8" width="32" height="22" rx="3.5" fill="#B8860B" />
              <path d="M2 13 L18 23 L34 13" stroke="#EEF3EC" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
          <p className={`mb-4 ${cx.overline}`}>
            Contact Us
          </p>
          <h2 className={`mb-3 ${cx.heading}`}>
            Are you ready to take<br />your business to the next level?
          </h2>
          <p className={cx.subtitle}>
            Reach out to us and get instant clarity for your brand
          </p>
        </div>

        {/* Form card */}
        <div className="bento-wrap">
          <div className={`bento-card-white ${cx.formPad}`}>

            {state.status === "success" ? (

              <div className="flex flex-col items-center py-10 gap-4">
                <div className={cx.successBanner}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  Message sent successfully!
                </div>
                <p className={cx.successMsg}>
                  We&apos;ll be in touch within 24 hours.
                </p>
              </div>

            ) : (

              <form action={formAction} noValidate>

                {/* Row 1 — Identity fields: email (5fr) + subject (7fr) */}
                <div className={cx.row2}>
                  <div className={cx.field}>
                    <input
                      className={cx.input} id="email" name="email"
                      type="email" required placeholder=" "
                      autoComplete="email"
                    />
                    <label className={cx.label} htmlFor="email">Email Address</label>
                  </div>
                  <div className={cx.field}>
                    <input
                      className={cx.input} id="subject" name="subject"
                      type="text" required placeholder=" "
                      autoComplete="off"
                    />
                    <label className={cx.label} htmlFor="subject">Subject</label>
                  </div>
                </div>

                {/* Row 2 — Message */}
                <div className={`${cx.field} ${cx.row1}`}>
                  <textarea
                    className={cx.input} id="message" name="message"
                    required rows={5} placeholder=" "
                    style={{ resize: "none", lineHeight: 1.65 }}
                  />
                  <label className={cx.label} htmlFor="message">Message</label>
                </div>

                {/* Row 3 — Error + Submit */}
                <div className={cx.submitRow}>
                  {state.status === "error" ? (
                    <p role="alert" className={cx.errorMsg}>
                      {state.message}
                    </p>
                  ) : (
                    <div className={cx.hint}>
                      All fields required
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={pending}
                    className={cx.submitBtn}
                    style={{
                      cursor: pending ? "not-allowed" : "pointer",
                      opacity: pending ? 0.6 : 1,
                      transition: "opacity 0.2s",
                    }}
                  >
                    {pending ? "Sending…" : (
                      <>
                        Send Message
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="arr">
                          <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
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
