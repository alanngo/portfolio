
import React from 'react';

import { 
  Col, 
  Row, 
  Image,
  Button
} from 'react-bootstrap';
import * as helper from './logic'
import me from "../../assets/me2.jpg"
import Break from '../../components/Break';
import TypewriterText from '../../components/TypewriterText';
import Text from "../../components/Text"
import "../../styles/Positioning.css"
// import Text from "../../components/Text"
const HomePage = () => {
    return (
        <div className='HomePage' align="center">
        <Break/>
        <Image src ={me} fluid width={400}/>
        <TypewriterText as="h1">Hi I am Alan Ngo</TypewriterText>
        <Break number={4}/>
        <div className="bottomRight" align="right">
          <Row>
              {helper.pages.map(page =>(
                <Col>
                  <Button variant={page.color} href={page.link}>
                    <Text as="h5">{page.link.replace("/", "")}</Text>
                  </Button>
                </Col>
              ))}
            </Row>
        </div>
        </div>
    )
}

export default HomePage;
