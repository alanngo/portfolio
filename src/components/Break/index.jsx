
import React from 'react';
import * as helper from "./logic"
const Break  = ({ number }) =>(<>{helper.generateBreak(number).map(e => <br key={e}/>)}</>) 

export default Break;
