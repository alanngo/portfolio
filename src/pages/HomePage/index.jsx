
import React from 'react';
// import { HexGrid, Layout, Hexagon, Pattern, Path, Hex } from 'react-hexgrid';
// import {Link} from 'react-router-dom'
import { 
  Col, 
  Row, 
  Image,
  Button
} from 'react-bootstrap';
// import * as helper from './logic'
import me from "../../assets/me2.jpg"
import Break from '../../components/Break';
import TypewriterText from '../../components/TypewriterText';
import Text from "../../components/Text"
import * as helper from "./logic"
// import Text from "../../components/Text"
const HomePage = () => {
    return (
        <div className='HomePage' align="center">
        <Break/>
        <Image src ={me} fluid width={400}/>
        <TypewriterText as="h1">Hi I am Alan</TypewriterText>
        <TypewriterText as="h3">Welcome to my Portfolio</TypewriterText>
        <Break number={4}/>
        <Row>
          {helper.pages.map(page =>(
            <Col>
              <Button variant={page.color} href={page.link}>
                <Text as="h2">{page.link.replace("/", "")}</Text>
              </Button>
            </Col>
          ))}
        </Row>
        </div>
    )
}

export default HomePage;
