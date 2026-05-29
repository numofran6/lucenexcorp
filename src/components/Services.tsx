"use client";
import { useState } from "react";
import Image from "next/image";

const services = [
  {
    num: "1",
    title: "Enterprise-grade cloud architectures",
    description:
      "Using AWS and Azure, we deliver scalable data systems, automation, and integrations that reduce costs, increase reliability, and unlock insight.",
    img: "https://i0.wp.com/lucenexcorp.com/wp-content/uploads/2026/02/ChatGPT-Image-Feb-6-2026-02_17_04-AM-1.png?fit=227%2C263&ssl=1",
    detail: "We architect multi-region, fault-tolerant cloud environments with infrastructure-as-code (Terraform), container orchestration (Kubernetes/ECS), security hardening, and cost governance frameworks.",
  },
  {
    num: "2",
    title: "Scalable data pipelines",
    description:
      "We design and operate modern data platforms using Snowflake, dbt, Spark, Airflow, and streaming technologies, so your data is always clean, fresh, and ready for analytics.",
    img: "https://i0.wp.com/lucenexcorp.com/wp-content/uploads/2026/02/ChatGPT-Image-Feb-6-2026-02_17_04-AM-2.png?fit=257%2C248&ssl=1",
    detail: "From ingestion to transformation and delivery, we build observable, well-tested pipelines with full lineage tracking. We specialize in both batch and real-time streaming architectures.",
  },
  {
    num: "3",
    title: "Insight-driven analytics",
    description:
      "Using Power BI, Python visualizations, and Streamlit, we create scalable reporting and analytics tools that support decision-making across teams.",
    img: "https://i0.wp.com/lucenexcorp.com/wp-content/uploads/2026/02/ChatGPT-Image-Feb-6-2026-02_17_04-AM-3.png?fit=253%2C244&ssl=1",
    detail: "We deliver self-service dashboards, semantic models, and embedded analytics that make data accessible to every stakeholder — from data teams to the C-suite.",
  },
  {
    num: "4",
    title: "AI solutions that automate work",
    description:
      "We build custom machine learning models, LLM-powered automation, and generative AI tools integrated into your workflows to reduce manual effort and unlock smarter operations.",
    img: "https://i0.wp.com/lucenexcorp.com/wp-content/uploads/2026/02/ChatGPT-Image-Feb-6-2026-02_17_04-AM-4.webp?fit=242%2C255&ssl=1",
    detail: "Our AI solutions include predictive models, RAG pipelines, fine-tuned LLMs, intelligent document processing, and custom AI agents tailored to your business processes.",
  },
  {
    num: "5",
    title: "Custom Applications Built to Convert",
    description:
      "We build secure, high-performance applications that run your business. From integrated data portals, automated workflows, and real-time analytics that scale growth.",
    img: "https://i0.wp.com/lucenexcorp.com/wp-content/uploads/2026/02/ChatGPT-Image-Feb-6-2026-02_17_04-AM-5.png?fit=252%2C249&ssl=1",
    detail: "Full-stack applications with React/Next.js frontends, Node.js or Python APIs, and PostgreSQL/cloud databases — designed for performance, security, and business conversion.",
  },
];

export default function Services() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col items-center mb-14 text-center">
          <div className="grid grid-cols-5 gap-0.5 mb-4 opacity-30">
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#54547E]" />
            ))}
          </div>
          <p className="text-[10px] font-bold tracking-widest uppercase text-[#54547E] mb-4">Our Services</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A1E] uppercase tracking-tight leading-tight mb-4">
            Data, AI &amp; Cloud<br />Engineering Hub
          </h2>
          <p className="text-[#54547E] text-base max-w-xl leading-relaxed">
            Data is the foundation of a data-driven future. By transforming raw information into
            reliable systems, actionable insights, and intelligent automation, we help businesses
            make better decisions, and scale with confidence.
          </p>
        </div>

        {/* Service cards */}
        <div className="flex flex-col gap-4">
          {services.map((s, i) => (
            <div key={s.num} className="glass-card overflow-hidden">
              {/* Main row */}
              <div className="flex items-start gap-6 p-6 md:p-8">
                {/* Ghost number */}
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-[#54547E]/8 flex items-center justify-center">
                  <span className="text-4xl font-black text-[#54547E]/25 leading-none select-none">{s.num}</span>
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-2xl font-bold text-[#0A0A1E] mb-2 leading-snug">{s.title}</h3>
                  <p className="text-[#54547E] text-sm leading-relaxed">{s.description}</p>
                </div>

                {/* Image */}
                <div className="hidden md:block shrink-0 w-48 h-32 rounded-xl overflow-hidden bg-[#0A0A1E]/5">
                  <Image
                    src={s.img}
                    alt={s.title}
                    width={192}
                    height={128}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-[#54547E]/10 mx-6 md:mx-8" />

              {/* Toggle */}
              <button
                className="w-full flex items-center gap-2 px-6 md:px-8 py-4 text-left text-[10px] font-bold tracking-widest uppercase text-[#54547E] hover:text-[#0A0A1E] transition-colors"
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                See process details
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${expanded === i ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Expanded detail */}
              {expanded === i && (
                <div className="px-6 md:px-8 pb-6 text-sm text-[#54547E] leading-relaxed border-t border-[#54547E]/10 pt-4">
                  {s.detail}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
