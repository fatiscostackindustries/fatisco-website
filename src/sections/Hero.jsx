export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 40px",
        background: "#0f172a",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "900px" }}>
        <p
          style={{
            color: "#8b5cf6",
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          Technology • Ecommerce • AI
        </p>

        <h1
          style={{
            fontSize: "64px",
            margin: "24px 0",
            lineHeight: "1.1",
          }}
        >
          Building Smarter Ecommerce Businesses Through Technology
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#cbd5e1",
            maxWidth: "700px",
            margin: "0 auto 40px",
          }}
        >
          FATISCO STACK INDUSTRIES helps ecommerce businesses improve their
          stores, automate operations, create AI-powered content and build
          digital experiences that convert visitors into customers.
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              padding: "16px 36px",
              background: "#7c3aed",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Get Started
          </button>

          <button
            style={{
              padding: "16px 36px",
              background: "transparent",
              color: "#fff",
              border: "2px solid #fff",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            View Services
          </button>
        </div>
      </div>
    </section>
  );
}