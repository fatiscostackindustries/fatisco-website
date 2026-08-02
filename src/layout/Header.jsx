export default function Header(){

const links=[
"Solutions",
"Services",
"Industries",
"Technology",
"Marketplace",
"Contact"
]

return(

<header className="header">

<div className="container nav">

<div className="logo">

<div className="logo-mark"></div>

<div>

<h3>FATISCO STACK</h3>

<span>INDUSTRIES</span>

</div>

</div>

<nav>

{links.map(link=>

<a key={link} href="#">
{link}
</a>

)}

</nav>

<div className="nav-buttons">

<a className="btn-secondary" href="#">
Sign In
</a>

<a className="btn-primary" href="#">
Get Started
</a>

</div>

</div>

</header>

)

}
