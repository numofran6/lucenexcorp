"use client";
import { useState } from "react";

const mn = "var(--font-manrope),'Manrope',sans-serif";
const jb = "var(--font-jetbrains),'JetBrains Mono',monospace";

function S({ children }: { children: React.ReactNode }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}

const IcoGlobe     = () => <S><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></S>;
const IcoCode      = () => <S><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></S>;
const IcoLayers    = () => <S><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></S>;
const IcoShield    = () => <S><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></S>;
const IcoDollar    = () => <S><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></S>;
const IcoActivity  = () => <S><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></S>;
const IcoDownload  = () => <S><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></S>;
const IcoArrows    = () => <S><path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/></S>;
const IcoZap       = () => <S><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></S>;
const IcoDatabase  = () => <S><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></S>;
const IcoSearch    = () => <S><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></S>;
const IcoBarChart  = () => <S><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></S>;
const IcoPieChart  = () => <S><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></S>;
const IcoLink      = () => <S><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></S>;
const IcoUsers     = () => <S><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></S>;
const IcoCpu       = () => <S><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></S>;
const IcoFileText  = () => <S><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></S>;
const IcoBot       = () => <S><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></S>;
const IcoMonitor   = () => <S><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></S>;
const IcoServer    = () => <S><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></S>;
const IcoLock      = () => <S><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></S>;

type Card = { icon: React.ReactNode; title: string; desc: string };

const details: Card[][] = [
  [
    { icon: <IcoGlobe />,    title: "Multi-region",           desc: "Fault-tolerant deployments across AWS & Azure" },
    { icon: <IcoCode />,     title: "Infrastructure as Code", desc: "Terraform-managed, version-controlled environments" },
    { icon: <IcoLayers />,   title: "Container Orchestration",desc: "Kubernetes & ECS for scalable workloads" },
    { icon: <IcoShield />,   title: "Security Hardening",     desc: "Zero-trust posture with hardened cloud configs" },
    { icon: <IcoDollar />,   title: "Cost Governance",        desc: "Frameworks to monitor and optimise cloud spend" },
    { icon: <IcoActivity />, title: "Observability",          desc: "Full-stack monitoring with alerts and runbooks" },
  ],
  [
    { icon: <IcoDownload />,  title: "Ingestion",             desc: "Connectors from databases, APIs, and streams" },
    { icon: <IcoArrows />,    title: "Transformation",        desc: "dbt models with well-tested transformation logic" },
    { icon: <IcoZap />,       title: "Real-time Streaming",   desc: "Low-latency Kafka & Spark Streaming pipelines" },
    { icon: <IcoDatabase />,  title: "Batch Processing",      desc: "Reliable scheduled loads with full error handling" },
    { icon: <IcoSearch />,    title: "Lineage Tracking",      desc: "End-to-end lineage from source to consumer" },
    { icon: <IcoActivity />,  title: "Pipeline Observability",desc: "Health dashboards and SLA monitoring built in" },
  ],
  [
    { icon: <IcoBarChart />,  title: "Self-service Dashboards",desc: "Power BI & Streamlit reports for every team" },
    { icon: <IcoLayers />,    title: "Semantic Models",        desc: "Governed metrics layers trusted across the org" },
    { icon: <IcoMonitor />,   title: "Embedded Analytics",    desc: "Analytics surfaced inside your products & portals" },
    { icon: <IcoPieChart />,  title: "Executive Views",       desc: "C-suite-ready KPI dashboards, data to decision" },
    { icon: <IcoUsers />,     title: "Team Enablement",       desc: "Training and docs so every stakeholder self-serves" },
    { icon: <IcoLink />,      title: "Governed Access",       desc: "Role-based controls so everyone sees the right data" },
  ],
  [
    { icon: <IcoCpu />,       title: "Predictive Models",     desc: "Custom ML models trained on your business data" },
    { icon: <IcoLink />,      title: "RAG Pipelines",         desc: "LLMs grounded in your private knowledge base" },
    { icon: <IcoZap />,       title: "Fine-tuned LLMs",       desc: "Domain-adapted language models for your use case" },
    { icon: <IcoFileText />,  title: "Document Processing",   desc: "Intelligent extraction from PDFs, forms & contracts" },
    { icon: <IcoBot />,       title: "AI Agents",             desc: "Autonomous agents embedded in your workflows" },
    { icon: <IcoActivity />,  title: "MLOps",                 desc: "Model versioning, monitoring & retraining pipelines" },
  ],
  [
    { icon: <IcoMonitor />,  title: "React / Next.js",        desc: "High-performance frontend apps and data portals" },
    { icon: <IcoServer />,   title: "Backend APIs",           desc: "Node.js & Python services with REST/GraphQL" },
    { icon: <IcoDatabase />, title: "Data Layer",             desc: "PostgreSQL and cloud-native databases, schema-managed" },
    { icon: <IcoLock />,     title: "Security",               desc: "Auth, rate-limiting, and compliance-ready architecture" },
    { icon: <IcoZap />,      title: "Performance",            desc: "Edge caching, CDN, and optimised rendering pipelines" },
    { icon: <IcoActivity />, title: "Monitoring",             desc: "Error tracking, uptime alerts, and real-time metrics" },
  ],
];

const services = [
  { num:"1", title:"Enterprise-grade cloud architectures",
    description:"Using AWS and Azure, we deliver scalable data systems, automation, and integrations that reduce costs, increase reliability, and unlock insight.",
    video:"/services/1.mp4" },
  { num:"2", title:"Scalable data pipelines",
    description:"We design and operate modern data platforms using Snowflake, dbt, Spark, Airflow, and streaming technologies, so your data is always clean, fresh, and ready for analytics.",
    video:"/services/2.mp4" },
  { num:"3", title:"Insight-driven analytics",
    description:"Using Power BI, Python visualizations, and Streamlit, we create scalable reporting and analytics tools that support decision-making across teams.",
    video:"/services/3.mp4" },
  { num:"4", title:"AI solutions that automate work",
    description:"We build custom machine learning models, LLM-powered automation, and generative AI tools integrated into your workflows to reduce manual effort and unlock smarter operations.",
    video:"/services/4.mp4" },
  { num:"5", title:"Custom Applications Built to Convert",
    description:"We build secure, high-performance applications that run your business. From integrated data portals, automated workflows, and real-time analytics that scale growth.",
    video:"/services/5.mp4" },
];

export default function Services() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-24 px-6" style={{ backgroundColor: "#FAFAFA" }}>
      <div className="mx-auto" style={{ maxWidth: "65rem" }}>

        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-12">
          {/* Services icon */}
          <div className="mb-4 opacity-60">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="14" height="14" rx="3" fill="#B8860B" />
              <rect x="20" y="2" width="14" height="14" rx="3" fill="#B8860B" />
              <rect x="2" y="20" width="14" height="14" rx="3" fill="#B8860B" />
              <rect x="20" y="20" width="14" height="14" rx="3" fill="#B8860B" />
            </svg>
          </div>
          <p className="mb-4" style={{ fontFamily: jb, fontSize: "var(--fs-label)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.03em", color: "#B8860B" }}>
            Our Services
          </p>
          <h2 className="mb-4" style={{
            fontFamily: "var(--font-poppins),'Poppins',sans-serif",
            fontSize: "var(--fs-h2)",
            fontWeight: 500,
            lineHeight: 1.1,
            color: "#000",
            textTransform: "uppercase",
            letterSpacing: "-0.01em",
          }}>
            Data, AI &amp; Cloud<br />Engineering Hub
          </h2>
          <p style={{ fontFamily: mn, fontSize: "var(--fs-lead)", lineHeight: 1.6, color: "#6B7280", maxWidth: "40rem" }}>
            Data is the foundation of a data-driven future. By transforming raw information into
            reliable systems, actionable insights, and intelligent automation, we help businesses
            make better decisions, and scale with confidence.
          </p>
        </div>

        {/* Service cards */}
        <div className="flex flex-col gap-4">
          {services.map((s, i) => (
            <div key={s.num} className={`bento-wrap${i === 0 ? " relative" : ""}`}>
              {i === 0 && (
                <div className="bento_lines-wrap" aria-hidden>
                  <div className="portfolio_line" />
                  <div className="spacer-medium" />
                  <div className="portfolio_line" />
                  <div className="spacer-medium" />
                  <div className="portfolio_line" />
                  <div className="spacer-medium" />
                  <div className="portfolio_line" />
                </div>
              )}
              <div className="bento-card-white relative overflow-hidden">
                {/* Card content */}
                <div className="flex items-start gap-6 p-7">
                  {/* Ghost number */}
                  <div className="shrink-0 flex items-start" style={{ width: "2.75rem", paddingTop: "0.25rem" }}>
                    <span style={{ fontFamily: jb, fontSize: "2rem", fontWeight: 700, color: "#E5E5E5", lineHeight: 1, letterSpacing: "-0.03em" }}>
                      {"0" + s.num}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <h3 className="mb-2" style={{ fontFamily: mn, fontSize: "var(--fs-card)", fontWeight: 500, color: "#000", lineHeight: 1.2 }}>
                      {s.title}
                    </h3>
                    <p style={{ fontFamily: mn, fontSize: "var(--fs-base)", lineHeight: 1.6, color: "#6B7280" }}>
                      {s.description}
                    </p>
                  </div>

                  {/* Video */}
                  <div className="hidden md:block shrink-0 rounded-xl overflow-hidden" style={{ width: 220, height: 140 }}>
                    <video src={s.video} autoPlay loop muted playsInline
                      className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Toggle container */}
                <div className="relative overflow-hidden" style={{ borderTop: "1px solid #E8E8E8" }}>
                  <div className="steps_accordion_blob" aria-hidden />
                  <button
                    className="w-full flex items-center gap-2 px-7 py-4 transition-opacity hover:opacity-70"
                    onClick={() => setExpanded(expanded === i ? null : i)}
                    style={{ fontFamily: jb, fontSize: "var(--fs-label)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "#B8860B", textAlign: "left" }}>
                    See process details
                    <svg className={`w-4 h-4 transition-transform duration-200 ${expanded === i ? "rotate-180" : ""}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Smooth accordion */}
                  <div style={{
                    display: "grid",
                    gridTemplateRows: expanded === i ? "1fr" : "0fr",
                    transition: "grid-template-rows 0.35s cubic-bezier(0.4,0,0.2,1)",
                  }}>
                    <div style={{ overflow: "hidden" }}>
                      <div style={{ padding: "0.25rem 1.75rem 2rem" }}>
                        <div style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                          gap: "0.625rem",
                        }}>
                          {details[i].map((card, j) => (
                            <div key={j} style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "0.625rem",
                              padding: "0.75rem 0",
                              borderBottom: "1px solid #E8E8E8",
                            }}>
                              <div style={{ flexShrink: 0, marginTop: "1px", color: "#B8860B" }}>
                                {card.icon}
                              </div>
                              <div style={{ minWidth: 0 }}>
                                <div style={{ fontFamily: jb, fontSize: "var(--fs-label)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.07em", color: "#374151", marginBottom: "0.2rem" }}>
                                  {card.title}
                                </div>
                                <div style={{ fontFamily: mn, fontSize: "var(--fs-sm)", lineHeight: 1.5, color: "#6B7280" }}>
                                  {card.desc}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
