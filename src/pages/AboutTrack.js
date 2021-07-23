import React from 'react';
import {  Container, Nav, Row } from 'react-bootstrap';
import styl from '../components/css/abouttrack.module.css'
import Speakers from '../components/speakers'
import Hero from '../components/Hero';
import TrackDetail from '../components/TrackDetail';
import WeekDetails from '../components/weekDetails';
import { withRouter } from 'react-router';
import Track from '../components/data/aboutTrackData';



// function getIndex(props) {
//   return this.props.match.params.track
// }

const AboutTrack = (props) => {

  var index = props.match.params.track
    return (
      <>
      <Hero title={Track[index].title} svg= {Track[index].svgSrc} offerBy = {Track[index].offeredBy} bgColor = {Track[index].bgColor}/>
        <Container>
            <Row>
            <Nav activeKey="/home">
            <Nav.Item>
              <Nav.Link href="#about" className={styl.navItem}>
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#inst" className={styl.navItem}>Instructors</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className={styl.navItem}>Sessions</Nav.Link>
            </Nav.Item>
          </Nav>
            </Row>
        </Container>
        <hr />
        <TrackDetail SkillData={Track[index].skills_data} about={Track[index].about} />
        <br/>
        <Container>
            <h4>Offered By</h4>
            <img src={Track[index].org} style={{height:'80px'}} alt="dsc"/>
        </Container>
        <Speakers/>
        <hr/>
        <WeekDetails SessionsDetail = {Track[index].SessionsDetail}/>
      </>
    );
};

export default withRouter(AboutTrack);