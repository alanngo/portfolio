
import React from 'react';
import "../../styles/Typewriter.css"
const TypewriterText = ({children}) => 
{
    return (
        <h1 className="typewriter customText" as="h1">{children}</h1>
    )
}

export default TypewriterText;
