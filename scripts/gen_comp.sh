#!/bin/bash

COMP=${1:-"MyComponent"}
mkdir "src/components/$COMP"
echo "
import React from 'react';

const $COMP = () => 
{
    return (
        <div className='$COMP'>
        <h1>Implement $COMP</h1>
        </div>
    )
}

export default $COMP;" >> "src/components/$COMP/index.jsx"
echo "//stateless logic goes here">> "src/components/$COMP/logic.js"