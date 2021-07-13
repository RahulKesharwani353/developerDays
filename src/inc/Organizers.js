import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import KUGLogo from '../images/KUG_logo_white_tranparent.png'
import MozLogo from '../images/moxDurg.png'
import DSClogo from '../images/dcslogo.png'

const Organizers = () => {
    return (
        <>
            <Container>
            <Col>
            <div className="sub-heading" id= "Speakers">Organized By</div>
            </Col>
            <Col>
            <div className="heading">With the collabration of</div>
            </Col>

            <Row>
                <Col xs ={12} md={4} className="organizer_cont">
                    <img src={MozLogo} alt="MOZ DURG"/>
                </Col>
                <Col xs ={12} md={4} className="organizer_cont">
                    <img src={KUGLogo} alt="MOZ DURG"/>
                </Col>
                <Col xs ={12} md={4} className="organizer_cont">
                    <img src={DSClogo} alt="MOZ DURG"/>
                </Col>
            </Row>
            
            </Container>
        </>
    );
};

export default Organizers;