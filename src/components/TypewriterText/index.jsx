
import React from 'react';

import * as helper from "./logic"
const TypewriterText = ({ children, as }) => (<>{helper.getTextType(as, children)}</>)

export default TypewriterText;
