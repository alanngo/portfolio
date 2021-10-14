import "../../styles/Typewriter.css"
import "../../styles/CustomText.css"
//stateless logic goes here
export const getTextType = (as, children) => {
    switch (as) {
        case "h1":
            return <h1 className="customText typewriter">{children}</h1>
        case "h2":
            return <h2 className="customText typewriter">{children}</h2>
        case "h3":
            return <h3 className="customText typewriter">{children}</h3>
        case "h4":
            return <h4 className="customText typewriter">{children}</h4>
        case "h5":
            return <h5 className="customText typewriter">{children}</h5>
        case "h6":
            return <h6 className="customText typewriter">{children}</h6>
        default:
            return <p className="customText typewriter">{children}</p>
    }
}