const clients = ["Yassir", "Rank Math", "One.com"];

const techStack = [
  { name: "Power BI", color: "#F2C811" },
  { name: "Tableau", color: "#1F77B4" },
  { name: "Looker", color: "#4285F4" },
  { name: "Snowflake", color: "#29B5E8" },
  { name: "dbt", color: "#FF694A" },
  { name: "AWS", color: "#FF9900" },
  { name: "GCP", color: "#4285F4" },
  { name: "Python", color: "#3776AB" },
  { name: "SQL", color: "#336791" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "WordPress", color: "#21759B" },
  { name: "Java", color: "#007396" },
];

// Duplicate for seamless marquee
const doubled = [...techStack, ...techStack];

export default function Reputation() {
  return (
    <section className="bg-[#F3F4F6] border-y border-[#DDDDDD] py-14">
      <div className="max-w-6xl mx-auto px-6">
        {/* Trusted by */}
        <p className="text-center text-xs font-semibold text-[#54547E] uppercase tracking-widest mb-8">
          Trusted by leading companies
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
          {clients.map((client) => (
            <span
              key={client}
              className="text-xl font-bold text-[#54547E] opacity-60 hover:opacity-100 transition-opacity tracking-tight"
            >
              {client}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-[#DDDDDD] mb-12" />

        {/* Tech stack label */}
        <p className="text-center text-xs font-semibold text-[#54547E] uppercase tracking-widest mb-8">
          Powered by
        </p>

        {/* Scrolling tech stack */}
        <div className="overflow-hidden">
          <div className="marquee-track flex items-center gap-6 w-max">
            {doubled.map((tech, i) => (
              <div
                key={`${tech.name}-${i}`}
                className="flex items-center gap-2 bg-white border border-[#DDDDDD] rounded-full px-4 py-2 whitespace-nowrap shadow-sm"
              >
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: tech.color }}
                />
                <span className="text-sm font-semibold text-[#030303]">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
