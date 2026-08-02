import {
  Store,
  Bot,
  Code2,
  BarChart3,
  ArrowRight,
  Sparkles
} from "lucide-react";

const services = [
  {
    icon: <Store size={34} />,
    title: "Shopify & Ecommerce",
    text: "Store setup, redesigns, CRO, performance optimization, product management and long-term ecommerce support."
  },
  {
    icon: <Bot size={34} />,
    title: "AI & Automation",
    text: "Business automation, AI assistants, workflow optimization and intelligent systems that reduce manual work."
  },
  {
    icon: <Code2 size={34} />,
    title: "Website Development",
    text: "Modern React websites, landing pages and business platforms designed for speed and conversions."
  },
  {
    icon: <BarChart3 size={34} />,
    title: "Growth Strategy",
    text: "SEO, analytics, customer journey optimization and practical improvements that increase sales."
  }
];

export default function Services() {
  return (
    <section className="services section">
      <div className="container">

        <div className="section-heading">
          <span className="section-tag">
            <Sparkles size={15}/>
            OUR SERVICES
          </span>

          <h2>
            Technology Solutions Built Around Business Growth
          </h2>

          <p>
            We don't simply build websites. We build ecommerce systems,
            automation and digital experiences that help businesses
            operate faster and grow smarter.
          </p>
        </div>

        <div className="services-grid">

          {services.map((service) => (

            <article
              key={service.title}
              className="service-card"
            >

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <a href="#">
                Learn More
                <ArrowRight size={18}/>
              </a>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}
