import React, { Fragment } from "react";
import { Button, Container } from "react-bootstrap";
import './../../css/Home/HeroSection.css';
import image_3 from './../../images/HeroSection/Hero Section.png';


const HeroSection = () => {

    return(
        <Container fluid className="p-0">
            <div className="herosection-img-container">
                <img src={image_3}/>
            </div>
            <div className="herosection-inner-container">
                <p className="herosection-heading">We crush your competitors, goals, and sales records - without the B.S.</p>
                <Button variant="warning" id="common-button">Get Free Consultation</Button>
            </div>
        </Container>
    )
}

export default HeroSection