import {
Store,
ShoppingBag,
Bot,
CodeXml,
Video,
ArrowRight
} from "lucide-react";

const services=[
{
icon:<Store size={34}/>,
title:"Shopify & Ecommerce",
text:"Store setup, redesigns, optimization, migration, theme customization and conversion improvements."
},
{
icon:<Bot size={34}/>,
title:"AI & Automation",
text:"Business automation, AI workflows, customer support, internal tools and operational efficiency."
},
{
icon:<Video size={34}/>,
title:"AI Creative Studio",
text:"AI product videos, UGC content, motion graphics and promotional media for ecommerce brands."
},
{
icon:<CodeXml size={34}/>,
title:"Custom Development",
text:"Modern web applications, APIs, dashboards and scalable business platforms."
},
{
icon:<ShoppingBag size={34}/>,
title:"Growth Solutions",
text:"SEO, CRO, analytics, funnels, speed optimization and customer experience improvements."
},
{
icon:<ArrowRight size={34}/>,
title:"Future Products",
text:"SaaS platforms, internal software and digital products designed for long-term business growth."
}
];

export default function Services(){

return(

<section className="services section" id="services">

<div className="container">

<div className="section-heading">

<span className="eyebrow">

OUR SERVICES

</span>

<h2>

Everything an ecommerce business needs to grow.

</h2>

<p>

Technology, AI and creative solutions working together to build stronger online businesses.

</p>

</div>

<div className="services-grid">

{services.map(service=>(

<article
className="service-card"
key={service.title}
>

<div className="service-icon">

{service.icon}

</div>

<h3>

{service.title}

</h3>

<p>

{service.text}

</p>

</article>

))}

</div>

</div>

</section>

)

}
