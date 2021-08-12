import React from 'react';
import { Container, Col } from 'react-bootstrap';
import logo from '../assets/images/communitypartner/codex.jpg'
import './css/speakers.css'

const speakers = () => {
    return (
        <>
        <Container>
        <Col id="speakers">
            {/* <div className="sub-heading" id= "Speakers">Speakers</div>
            </Col>
            <Col>
            <div className="heading">Meet Our Speakers</div>
            </Col> */}
            <div className="sub-heading"></div>
            </Col>
            <Col>
            <div className="heading">Our Guest And Speakers</div>
            </Col>

            <Col lg={6}>
            <div className="courses-container">
            <div className="course">
              <div className="course-preview" >
             < div className="speakers-photo">
             <img src={logo} alt="speakers" />
             <p>Full Name</p>
                 </div>
         
              </div>
              <div className="course-info">
                  <h6>About</h6>
                </div>
            </div>
          </div>
            </Col>

            <Col >
            <h5>Announcing Soon...</h5>
            </Col>
        </Container>
            
        </>
    );
};

export default speakers;