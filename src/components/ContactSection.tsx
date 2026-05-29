"use client";
import { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ email: "", subject: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("sent");
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[10px] font-bold tracking-widest uppercase text-[#54547E] mb-5">Contact Us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A1E] leading-tight mb-4">
            Are you ready to take<br />your business to the next level?
          </h2>
          <p className="text-[#54547E] text-base">Reach out to us and get instant clarity for your brand</p>
        </div>

        {/* Form card */}
        <div className="glass-card p-8">
          {status === "sent" ? (
            <div className="flex flex-col items-center py-10 gap-4">
              {/* Success banner */}
              <div className="flex items-center gap-3 bg-[#0A0A1E] text-white text-sm font-medium px-5 py-3 rounded-xl w-full max-w-sm">
                <svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Message sent successfully!</span>
              </div>
              <p className="text-[#54547E] text-sm mt-2">We&apos;ll be in touch within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-medium text-[#0A0A1E] mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full border border-[#54547E]/20 rounded-xl px-4 py-3 text-sm text-[#0A0A1E] bg-white/80 placeholder:text-[#54547E]/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0A0A1E] mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Enter the subject of your message"
                  className="w-full border border-[#54547E]/20 rounded-xl px-4 py-3 text-sm text-[#0A0A1E] bg-white/80 placeholder:text-[#54547E]/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0A0A1E] mb-2">Description</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full border border-[#54547E]/20 rounded-xl px-4 py-3 text-sm text-[#0A0A1E] bg-white/80 placeholder:text-[#54547E]/50 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-[#00221E] text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-[#0848C5] transition-colors text-sm disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
