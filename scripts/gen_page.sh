#!/bin/bash

COMP=${1:-"MyPage"}
mkdir "src/pages/$COMP"
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

export default $COMP;" >> "src/pages/$COMP/index.jsx"
echo "//stateless logic goes here">> "src/pages/$COMP/logic.js"