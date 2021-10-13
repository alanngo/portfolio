
//stateless logic goes here
export const getTextType = (as, children) => 
{
    switch (as) 
    {
        case "h1":
            return <h1 className="customText">{children}</h1>
        case "h2":
            return <h2 className="customText">{children}</h2>
        case "h3":
            return <h3 className="customText">{children}</h3>
        case "h4":
            return <h4 className="customText">{children}</h4>
        case "h5":
            return <h5 className="customText">{children}</h5>
        case "h6":
            return <h6 className="customText">{children}</h6>
        default:
            return <p className="customText">{children}</p>
    }
}