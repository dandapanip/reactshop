import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col, Nav} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow,faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'

const Footer = () => (
    <>
    <Container fluid className="footer-section-top">
        <Row>
            <Col>
                <div className="footer-sec-top-1">
                    <img src="../logo.png" width="100" height="100"/>
                    <p><FontAwesomeIcon icon={faLocationArrow} />184 Main Rd E, St Albans VIC 3021, Australia</p>
                    <p><FontAwesomeIcon icon={faEnvelope} /><span>shopper@email.com</span></p>
                    <p><FontAwesomeIcon icon={faPhone} flip="horizontal"/><span>+01 23456789</span></p>
                </div>
            </Col>
            <Col>
                <Nav className="flex-column">
                    <Nav.Item><Link to="/">Home</Link></Nav.Item>
                    <Nav.Item><Link to="/pages/services">Services</Link></Nav.Item>
                    <Nav.Item><Link to="/pages/about-us">About Us</Link></Nav.Item>
                    <Nav.Item><Link to="/pages/contact-us">Contact Us</Link></Nav.Item>
                </Nav>
            </Col>
            <Col>
                <Nav className="flex-column">
                    <Nav.Item><Link to="/">Home</Link></Nav.Item>
                    <Nav.Item><Link to="/pages/services">Services</Link></Nav.Item>
                    <Nav.Item><Link to="/pages/about-us">About Us</Link></Nav.Item>
                    <Nav.Item><Link to="/pages/contact-us">Contact Us</Link></Nav.Item>
                </Nav>
            </Col>
            <Col>
                <Nav className="flex-column">
                    <Nav.Item><Link to="/">Home</Link></Nav.Item>
                    <Nav.Item><Link to="/pages/services">Services</Link></Nav.Item>
                    <Nav.Item><Link to="/pages/about-us">About Us</Link></Nav.Item>
                    <Nav.Item><Link to="/pages/contact-us">Contact Us</Link></Nav.Item>
                </Nav>
            </Col>
            <Col>
                <Nav className="flex-column">
                    <Nav.Item><Link to="/">Home</Link></Nav.Item>
                    <Nav.Item><Link to="/pages/services">Services</Link></Nav.Item>
                    <Nav.Item><Link to="/pages/about-us">About Us</Link></Nav.Item>
                    <Nav.Item><Link to="/pages/contact-us">Contact Us</Link></Nav.Item>
                </Nav>
            </Col>
        </Row>
    </Container>
    <Container fluid className="footer-section-bottom">
        <Row>
            <Col>
                <p>Copyright © 2021 shopper all rights reserved. Powered by Reactjs</p>
            </Col>
            <Col className="footer-btm-last-section">
                <Nav>
                    <Nav.Item><Link to="/">Home</Link></Nav.Item>
                    <Nav.Item><Link to="/pages/services">Services</Link></Nav.Item>
                    <Nav.Item><Link to="/pages/about-us">About Us</Link></Nav.Item>
                    <Nav.Item><Link to="/pages/contact-us">Contact Us</Link></Nav.Item>
                </Nav>
            </Col>
        </Row>
    </Container>
    </>
);

export default Footer;