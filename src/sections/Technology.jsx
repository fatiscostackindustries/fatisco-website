import { Cpu, BrainCircuit, Database, ShieldCheck, Workflow, Cloud } from "lucide-react";

const technologies = [
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description:
      "AI-assisted ecommerce workflows, intelligent automation, customer support, content generation and business optimization."
  },
  {
    icon: Workflow,
    title: "Automation",
    description:
      "Reduce repetitive work with smart automations connecting your ecommerce operations together."
  },
  {
    icon: Database,
    title: "Backend Systems",
    description:
      "Reliable APIs, databases, integrations and scalable architectures built for modern online businesses."
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Fast, secure and scalable deployments designed for reliability and business growth."
  },
  {
    icon: Cpu,
    title: "Modern Development",
    description:
      "React, Next.js, Shopify, Node.js and modern technologies powering exceptional digital experiences."
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description:
      "Performance optimization, secure implementations and best practices across every project."
  }
];

export default function Technology() {
  return (
    <section className="technology">
      <div className="container">

        <div className="section-heading">
          <span className="section-label">
            TECHNOLOGY
          </span>

          <h2>
            Built With Modern Technology
          </h2>

          <p>
            Every solution combines modern development, AI, automation and
            scalable infrastructure to help businesses operate more efficiently.
          </p>
        </div>

        <div className="technology-grid">
          {technologies.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="technology-card"
              >
                <div className="technology-icon">
                  <Icon size={28} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
