import React from "react";
import { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import image_4 from './../../images/Navbar/White Logo.png';
import './../../css/Home/Footer.css';

const Footer = () => {
    return(
        <Container fluid id="footer-container">
            <Row id="footer-row-1">
                <Col xs={12} sm={12} md={6} lg={6} id="footer-row-1-col-1">
                    <img id="footer-logo" src={image_4} />
                    <p id="footer-paragraph">Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
                </Col>
                
                <Col xs={12} sm={6} md={3} lg={3} id="footer-row-1-col-2">
                    <h1>Our Technologies</h1>
                    <p>ReactJS</p>
                    <p>Gatsby</p>
                    <p>NextJS</p>
                    <p>NodeJS</p>
                </Col>
                
                <Col xs={12} sm={6} md={3} lg={3} id="footer-row-1-col-3">
                    <h1>Our Services</h1>
                    <p>Social Media Marketing</p>
                    <p>Web & Mobile App Development</p>
                    <p>Data & Analytics</p>
                </Col>
            </Row>
            
            <Row id="footer-row-2">
                <Container fluid id="footer-row-2-container">
                    <Row style={{padding:"10px"}}>
                        <Col style={{borderRight:"1px solid #FFFFFF", fontWeight:"500"}} className="text-end">Privacy Policy</Col>
                        <Col style={{fontWeight:"500"}}>Terms & Conditions</Col>
                    </Row>
                </Container>
            </Row>
        </Container>
    )
}

export default Footer