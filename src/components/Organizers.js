import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import KUGLogo from '../assets/images/KUG_logo_white_tranparent.png'
import MozLogo from '../assets/images/moxDurg.png'
import DSClogo from '../assets/images/dcslogo.png'

const Organizers = () => {
    return (
        <>
            <Container>
            <Col>
            <div className="sub-heading" id= "Speakers">Organized By</div>
            </Col>
            <Col>
            <div className="heading">With the collaboration of</div>
            </Col>

            <Row>
                <Col xs ={12} md={4} >
                    <a href="https://discord.gg/KwRbYAVCeP" target="_blank" rel="noreferrer" className="organizer_cont">
                    <img src={MozLogo} alt="MOZ DURG"/>
                    </a>
                </Col>
                <Col xs ={12} md={4}>
                <a href="https://discord.gg/wbJc5m7hWN" target="_blank" rel="noreferrer" className="organizer_cont" >
                    <img src={KUGLogo} alt="MOZ DURG"/>
                    </a>
                </Col>
                <Col xs ={12} md={4} >
                <a href="https://discord.gg/26ewkaV" target="_blank" rel="noreferrer" className="organizer_cont" style={{marginTop:'25px'}} >
                    <img src={DSClogo} alt="MOZ DURG"/>
                    </a>
                </Col>
            </Row>
            
            </Container>
        </>
    );
};

export default Organizers;