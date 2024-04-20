import React from "react";
import { Container, Navbar, Nav} from "react-bootstrap";
import '../../css/Home/NavbarFixed.css';
import logo from '../../images/Navbar/White Logo.png';

const NavbarFixed = () => {
    return(
        <Container fluid id="navbar-container" className="m-0 p-0">
            <Navbar expand="lg" id="navbar" >
                    <Navbar.Brand href="#home"><img src={logo} id="navbar-logo"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="navbar-collapse-div">
                            <Nav.Link href="#home" id="navbar-links">Services</Nav.Link>
                            <Nav.Link href="#link" id="navbar-links">About Us</Nav.Link>
                            <Nav.Link href="#link" id="navbar-links">Contact Us</Nav.Link>
                            <Nav.Link href="#link" id="navbar-links">Careers</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

export default NavbarFixed