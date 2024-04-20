import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import image_2 from './../../images/Frame498/image 2.png';
import './../../css/Home/Frame498.css';

const Frame498 = () => {
    
    return(
        <Container className="common-frame-container">
            <Row className="frame498-row">
                <Col xs={12} sm={5} md={5} lg={5} className="justify-content-center d-flex">
                    <img src={image_2} className="frame499-img"/>
                </Col>
                
                <Col xs={12} sm={7} md={7} lg={7} className="m-auto" id="frame499-text-col-3">
                    <Container id="common-text-container">
                        <h3 id="common-heading">Web & Mobile App Development</h3>
                        <p id="frame498-text">Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
                        <Button id="common-button">LEARN MORE</Button>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Frame498