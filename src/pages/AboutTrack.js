import React from 'react';
import {  Container, Nav, Row } from 'react-bootstrap';
import styl from '../components/css/abouttrack.module.css'
import dsc from '../assets/images/dcslogo.png'
import Speakers from '../components/speakers'
import Hero from '../components/Hero';
import TrackDetail from '../components/TrackDetail';
import WeekDetails from '../components/weekDetails';
const AboutTrack = () => {
    return (
      <>
      <Hero />
        <Container>
            <Row>
            <Nav activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/" className={styl.navItem}>
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className={styl.navItem}>Instructors</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className={styl.navItem}>Syllabus</Nav.Link>
            </Nav.Item>
          </Nav>
            </Row>
        </Container>
        <hr />
        <TrackDetail/>
        <br/>
        <Container>
            <h4>Offered By</h4>
            <img src={dsc} style={{height:'80px'}} alt="dsc"/>
        </Container>
        <Speakers/>
        <hr/>
        <WeekDetails/>
      </>
    );
};

export default AboutTrack;