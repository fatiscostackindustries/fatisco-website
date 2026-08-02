import Button from "../components/Button";
import Container from "../components/Container";
import hero from "../assets/hero.png";

export default function Hero(){

return(

<section className="hero">

<div className="hero-blur hero-blur-1"></div>

<div className="hero-blur hero-blur-2"></div>

<Container className="hero-grid">

<div className="hero-content">

<span className="hero-badge">

Technology • Ecommerce • AI

</span>

<h1>

Building Smarter

<span className="gradient-text">

 Ecommerce Businesses

</span>

Through Technology

</h1>

<p>

FATISCO STACK INDUSTRIES helps ecommerce businesses build
better online experiences through Shopify development,
AI-powered automation, conversion optimization,
creative content and scalable digital solutions.

</p>

<div className="hero-actions">

<Button>

Start Your Project

</Button>

<Button
variant="outline"
href="#services"
>

Explore Services

</Button>

</div>

<div className="hero-stats">

<div>

<h3>250+</h3>

<p>Projects Planned</p>

</div>

<div>

<h3>AI</h3>

<p>Automation Ready</p>

</div>

<div>

<h3>Global</h3>

<p>Remote Services</p>

</div>

</div>

</div>

<div className="hero-visual">

<div className="dashboard">

<img
src={hero}
alt="FATISCO STACK"
/>

<div className="floating-card">

<h4>Store Performance</h4>

<strong>+42%</strong>

<span>Conversion Growth</span>

</div>

<div className="floating-card second">

<h4>AI Automation</h4>

<strong>24/7</strong>

<span>Business Operations</span>

</div>

</div>

</div>

</Container>

</section>

);

}
