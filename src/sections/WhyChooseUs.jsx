import { ShieldCheck, GaugeCircle, Bot, Headset } from "lucide-react";

const items = [
  {
    icon: <GaugeCircle size={32} />,
    title: "Performance First",
    text: "Every recommendation is focused on speed, conversions and measurable business growth."
  },
  {
    icon: <Bot size={32} />,
    title: "AI Powered",
    text: "We combine modern AI tools with practical ecommerce experience to automate repetitive work."
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Reliable Solutions",
    text: "Clean systems, scalable architecture and long-term thinking instead of quick temporary fixes."
  },
  {
    icon: <Headset size={32} />,
    title: "Business Partnership",
    text: "We work alongside businesses, helping them continuously improve rather than delivering one-off projects."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="why section">
      <div className="container">
        <div className="section-heading center">
          <span className="eyebrow">WHY FATISCO STACK</span>

          <h2>
            Technology built around
            <span> business growth.</span>
          </h2>

          <p>
            We don't simply build websites. We build ecommerce systems that help
            businesses operate smarter, sell more and prepare for long-term
            growth.
          </p>
        </div>

        <div className="why-grid">
          {items.map((item) => (
            <article className="why-card" key={item.title}>
              <div className="why-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
