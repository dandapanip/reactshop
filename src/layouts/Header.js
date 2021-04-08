import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col, Nav, Navbar, Form, Button, FormControl} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faFlag, faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'

const Header = () => (
    <>
        <Container fluid className="header-section-top">
            <Row>
                <Col>
                <Navbar bg="light" variant="light">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home"><FontAwesomeIcon icon={faPhone} flip="horizontal"/><span>+01 23456789</span></Nav.Link>
                        <Nav.Link href="#features"><FontAwesomeIcon icon={faEnvelope} /><span>shopper@email.com</span></Nav.Link>
                    </Nav>
                    <p className="mr-auto navbar-nav">Summer sale discount off 50%!<strong> Shop Now</strong></p>
                    <Nav className="mr-auto header-btm-last-section">
                        <Nav.Link href="#home"><FontAwesomeIcon icon={faFlag} /><span>USD</span></Nav.Link>
                    </Nav>
                </Navbar>
                </Col>
                
            </Row>
        </Container>
        <Container fluid className="header-section-botton">
            <Row>
                <Col className="header-btm-logo-section">
                    <img src="../logo.png" width="75" height="75"/>
                </Col>
                <Col className="header-btm-menu-section">
                    <Nav>
                        <Nav.Item><Link to="/">Home</Link></Nav.Item>
                        <Nav.Item><Link to="/pages/services">Services</Link></Nav.Item>
                        <Nav.Item><Link to="/pages/about-us">About Us</Link></Nav.Item>
                        <Nav.Item><Link to="/pages/contact-us">Contact Us</Link></Nav.Item>
                    </Nav>
                </Col>
                <Col className="header-btm-last-section">
                    <Nav>
                        <Nav.Item><Link to="/"><FontAwesomeIcon icon={faSearch} /></Link></Nav.Item>
                        <Nav.Item><Link to="/login"><FontAwesomeIcon icon={faUser} /></Link></Nav.Item>
                        <Nav.Item><Link to="/cart"><FontAwesomeIcon icon={faShoppingBag} /></Link></Nav.Item>
                    </Nav>
                </Col>
            </Row>
        </Container>            
    </>
);

export default Header;