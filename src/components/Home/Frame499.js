import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import image_1 from './../../images/Frame499/image 1.png';

const Frame499 = () => {
    
    return(
        <Container className="common-frame-container">
            <Row className="frame498-row">
                
                <Col xs={12} sm={7} md={7} lg={7} className="m-auto" id="frame499-text-col-1">
                    <Container id="common-text-container">
                        <h3 id="common-heading">Digital Strategy Consulting</h3>
                        <p>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
                        <Button id="common-button">LEARN MORE</Button>
                    </Container>
                </Col>
                <Col xs={12} sm={5} md={5} lg={5} className="justify-content-center d-flex">
                    <img src={image_1} className="frame499-img"/>
                </Col>
                <Col xs={12} sm={7} md={7} lg={7} className="m-auto" id="frame499-text-col-2">
                    <Container id="common-text-container">
                        <h3 id="common-heading">Digital Strategy Consulting</h3>
                        <p>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
                        <Button id="common-button">LEARN MORE</Button>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Frame499