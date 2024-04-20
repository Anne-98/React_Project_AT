import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './../../css/Home/Faq.css';

const Faq = () => {
    return(
        <Container id="faq-container">
                    <h3 id="common-heading" className="text-center">
                        Frequently asked questions
                    </h3>
            <Row className="faq-row">
                <Col xs={9} md={11} lg={11}>
                    <h5 style={{color:"#6B3CC9"}}>Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?</h5>
                    <p>Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.</p>
                </Col>
                <Col xs={2} md={1} lg={1}>
                    <h5 className="faq-icons text-end" style={{color:"#6B3CC9"}}><i  className="fas fa-solid fa-minus" ></i></h5>
                </Col>
            </Row>
            <Row className="faq-row">
                <Col xs={9} md={11} lg={11}>
                    <h5>Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?</h5>
                </Col>
                <Col xs={2} md={1} lg={1}>
                    <h5 className="faq-icons text-end"><i className="fas fa-solid fa-plus"></i></h5>
                </Col>
            </Row>
            <Row className="faq-row">
                <Col xs={9} md={11} lg={11}>
                    <h5>Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?</h5>
                </Col>
                <Col xs={2} md={1} lg={1}>
                    <h5 className="faq-icons text-end"><i className="fas fa-solid fa-plus"></i></h5>
                </Col>
            </Row>
        </Container>
    )
}

export default Faq