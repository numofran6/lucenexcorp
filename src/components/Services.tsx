const services = [
  {
    id: 1,
    title: "Enterprise-grade cloud architectures",
    description:
      "Scalable, resilient cloud infrastructure on AWS and Azure. We design multi-region deployments, security hardening, and cost-optimized architectures that grow with your business.",
    tags: ["AWS", "Azure", "Terraform", "Kubernetes"],
    accent: "bg-[#00221E]",
    textAccent: "text-white",
    large: true,
  },
  {
    id: 2,
    title: "Scalable data pipelines",
    description:
      "End-to-end data engineering with Snowflake, dbt, and Apache Spark. From ingestion to transformation, we build pipelines that are reliable, observable, and easy to maintain.",
    tags: ["Snowflake", "dbt", "Spark", "Airflow"],
    accent: "bg-[#F3F4F6]",
    textAccent: "text-[#030303]",
    large: false,
  },
  {
    id: 3,
    title: "Insight-driven analytics",
    description:
      "Beautiful, interactive dashboards with Power BI and Python that make your data accessible to every stakeholder — from the C-suite to the frontline team.",
    tags: ["Power BI", "Tableau", "Python", "Looker"],
    accent: "bg-[#EEF2FF]",
    textAccent: "text-[#030303]",
    large: false,
  },
  {
    id: 4,
    title: "AI solutions that automate work",
    description:
      "Custom machine learning models and LLM integrations that eliminate repetitive work, surface hidden patterns, and generate competitive intelligence automatically.",
    tags: ["LLMs", "ML Models", "RAG", "Automation"],
    accent: "bg-[#F3F4F6]",
    textAccent: "text-[#030303]",
    large: false,
  },
  {
    id: 5,
    title: "Custom applications built to convert",
    description:
      "Full-stack applications with React, Node.js, and PostgreSQL that are fast, secure, and designed to drive user engagement and business outcomes.",
    tags: ["React", "Node.js", "PostgreSQL", "Next.js"],
    accent: "bg-[#030303]",
    textAccent: "text-white",
    large: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#F3F4F6] py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#54547E] mb-3">
            What we do
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#030303] leading-tight">
            Data, AI &amp; Cloud Engineering Hub
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 1 — large, spans 2 columns on lg */}
          <div className={`${services[0].accent} rounded-2xl p-8 lg:col-span-2 flex flex-col justify-between min-h-[280px] group`}>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">{services[0].title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{services[0].description}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {services[0].tags.map((tag) => (
                <span key={tag} className="bg-white/10 text-white/80 text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <BentoCard service={services[1]} />

          {/* Card 3 */}
          <BentoCard service={services[2]} />

          {/* Card 4 */}
          <BentoCard service={services[3]} />

          {/* Card 5 — dark, spans 1 col */}
          <div className={`${services[4].accent} rounded-2xl p-8 flex flex-col justify-between min-h-[280px] group`}>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">{services[4].title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{services[4].description}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {services[4].tags.map((tag) => (
                <span key={tag} className="bg-white/10 text-white/80 text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BentoCard({ service }: { service: (typeof services)[number] }) {
  return (
    <div className={`${service.accent} border border-[#DDDDDD] rounded-2xl p-8 flex flex-col justify-between min-h-[280px] group hover:shadow-md transition-shadow`}>
      <div>
        <h3 className={`text-xl font-bold ${service.textAccent} mb-3 leading-snug`}>
          {service.title}
        </h3>
        <p className="text-[#54547E] text-sm leading-relaxed">{service.description}</p>
      </div>
      <div className="flex flex-wrap gap-2 mt-6">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="bg-white border border-[#DDDDDD] text-[#54547E] text-xs font-semibold px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
