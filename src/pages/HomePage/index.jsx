
import React from 'react';
// import { HexGrid, Layout, Hexagon, Pattern, Path, Hex } from 'react-hexgrid';
// import {Link} from 'react-router-dom'
import { 
  // Col, 
  // Row, 
  Image 
} from 'react-bootstrap';
// import * as helper from './logic'
import me from "../../assets/me2.jpg"
import TypewriterText from '../../components/TypewriterText';
// import Text from "../../components/Text"
const HomePage = () => {
    return (
        <div className='HomePage' align="center">
        <Image src ={me} fluid width={400}/>
        <TypewriterText>Hi I am Alan</TypewriterText>
        </div>
    )
}

export default HomePage;
