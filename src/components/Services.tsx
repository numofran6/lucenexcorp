"use client";
import { useState } from "react";
import Image from "next/image";

const mn = "var(--font-manrope),'Manrope',sans-serif";
const jb = "var(--font-jetbrains),'JetBrains Mono',monospace";

const services = [
  { num:"1", title:"Enterprise-grade cloud architectures",
    description:"Using AWS and Azure, we deliver scalable data systems, automation, and integrations that reduce costs, increase reliability, and unlock insight.",
    detail:"We architect multi-region, fault-tolerant cloud environments with infrastructure-as-code (Terraform), container orchestration (Kubernetes/ECS), security hardening, and cost governance frameworks.",
    img:"https://i0.wp.com/lucenexcorp.com/wp-content/uploads/2026/02/ChatGPT-Image-Feb-6-2026-02_17_04-AM-1.png?fit=227%2C263&ssl=1" },
  { num:"2", title:"Scalable data pipelines",
    description:"We design and operate modern data platforms using Snowflake, dbt, Spark, Airflow, and streaming technologies, so your data is always clean, fresh, and ready for analytics.",
    detail:"From ingestion to transformation and delivery, we build observable, well-tested pipelines with full lineage tracking. We specialize in both batch and real-time streaming architectures.",
    img:"https://i0.wp.com/lucenexcorp.com/wp-content/uploads/2026/02/ChatGPT-Image-Feb-6-2026-02_17_04-AM-2.png?fit=257%2C248&ssl=1" },
  { num:"3", title:"Insight-driven analytics",
    description:"Using Power BI, Python visualizations, and Streamlit, we create scalable reporting and analytics tools that support decision-making across teams.",
    detail:"We deliver self-service dashboards, semantic models, and embedded analytics that make data accessible to every stakeholder — from data teams to the C-suite.",
    img:"https://i0.wp.com/lucenexcorp.com/wp-content/uploads/2026/02/ChatGPT-Image-Feb-6-2026-02_17_04-AM-3.png?fit=253%2C244&ssl=1" },
  { num:"4", title:"AI solutions that automate work",
    description:"We build custom machine learning models, LLM-powered automation, and generative AI tools integrated into your workflows to reduce manual effort and unlock smarter operations.",
    detail:"Our AI solutions include predictive models, RAG pipelines, fine-tuned LLMs, intelligent document processing, and custom AI agents tailored to your business processes.",
    img:"https://i0.wp.com/lucenexcorp.com/wp-content/uploads/2026/02/ChatGPT-Image-Feb-6-2026-02_17_04-AM-4.webp?fit=242%2C255&ssl=1" },
  { num:"5", title:"Custom Applications Built to Convert",
    description:"We build secure, high-performance applications that run your business. From integrated data portals, automated workflows, and real-time analytics that scale growth.",
    detail:"Full-stack applications with React/Next.js frontends, Node.js or Python APIs, and PostgreSQL/cloud databases — designed for performance, security, and business conversion.",
    img:"https://i0.wp.com/lucenexcorp.com/wp-content/uploads/2026/02/ChatGPT-Image-Feb-6-2026-02_17_04-AM-5.png?fit=252%2C249&ssl=1" },
];

export default function Services() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 px-6" style={{ backgroundColor: "#EEEEF4" }}>
      <div className="mx-auto" style={{ maxWidth: "65rem" }}>

        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-12">
          <p className="mb-4" style={{ fontFamily: jb, fontSize: "0.75rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.03em", color: "#49496D" }}>
            Our Services
          </p>
          <h2 className="mb-4" style={{
            fontFamily: "var(--font-poppins),'Poppins',sans-serif",
            fontSize: "3.4rem",
            fontWeight: 500,
            lineHeight: 1.1,
            color: "#000",
            textTransform: "uppercase",
            letterSpacing: "-0.01em",
          }}>
            Data, AI &amp; Cloud<br />Engineering Hub
          </h2>
          <p style={{ fontFamily: mn, fontSize: "1.1rem", lineHeight: 1.6, color: "#54547E", maxWidth: "40rem" }}>
            Data is the foundation of a data-driven future. By transforming raw information into
            reliable systems, actionable insights, and intelligent automation, we help businesses
            make better decisions, and scale with confidence.
          </p>
        </div>

        {/* Service cards */}
        <div className="flex flex-col gap-4">
          {services.map((s, i) => (
            <div key={s.num} className="bento-wrap">
              <div className="bento-card-white overflow-hidden">
                {/* Card content */}
                <div className="flex items-start gap-6 p-7">
                  {/* Ghost number */}
                  <div className="shrink-0 flex items-center justify-center rounded-2xl" style={{ width:60, height:60, background:"#EEEEF4", border:"1px solid #CDCDDD" }}>
                    <span style={{ fontFamily: mn, fontSize: "2rem", fontWeight: 800, color: "#CDCDDD", lineHeight: 1 }}>{s.num}</span>
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <h3 className="mb-2" style={{ fontFamily: mn, fontSize: "1.4rem", fontWeight: 500, color: "#000", lineHeight: 1.2 }}>
                      {s.title}
                    </h3>
                    <p style={{ fontFamily: mn, fontSize: "0.95rem", lineHeight: 1.6, color: "#54547E" }}>
                      {s.description}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="hidden md:block shrink-0 rounded-xl overflow-hidden" style={{ width: 220, height: 140 }}>
                    <Image src={s.img} alt={s.title} width={220} height={140}
                      className="w-full h-full object-cover" unoptimized />
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height:1, backgroundColor:"#CDCDDD", margin:"0 1.75rem" }} />

                {/* Toggle */}
                <button
                  className="w-full flex items-center gap-2 px-7 py-4 transition-opacity hover:opacity-70"
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  style={{ fontFamily: jb, fontSize: "0.75rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "#49496D", textAlign: "left" }}>
                  See process details
                  <svg className={`w-4 h-4 transition-transform duration-200 ${expanded === i ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {expanded === i && (
                  <div className="px-7 pb-6" style={{ fontFamily: mn, fontSize: "0.95rem", lineHeight: 1.6, color: "#54547E", borderTop: "1px solid #CDCDDD", paddingTop: "1rem" }}>
                    {s.detail}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
