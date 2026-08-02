export default function Button({

children,

variant="primary",

href="#"

}){

return(

<a

href={href}

className={`btn ${variant==="primary"?"btn-primary":"btn-outline"}`}

>

{children}

</a>

);

}
