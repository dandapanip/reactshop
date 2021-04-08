import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Footer, Header } from './';
import {Container, Row, Col} from 'react-bootstrap';

const Layout = ({children}) => (
    <>
        <div className="main">
            <div className="header-section">
                <Header/>
            </div> 
            <div className="content-section">
                {children}
            </div>
            <div className="footer-section">
                <Footer/>
            </div>
        </div>
        
    </>
);

export default Layout;