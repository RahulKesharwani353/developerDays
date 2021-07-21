import React from 'react';
import android from '../assets/images/android_track.svg';
import ui from '../assets/images/UI_track.svg';
import web from '../assets/images/Web_track.svg';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Structure = () => {
    return (
        <>
        <Container>
            <Col>
            <div className="sub-heading">Structure</div>
            </Col>
            <Col>
            <div className="heading">Track Based Structure</div>
            </Col>

            <div className="structure">
                <Row>
                    <Col style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="struct-card1">
                       <div className ="struct-cardContain">
                       <img src={web} alt="WEB dev"/>
                       <h4>Web<br></br>Development</h4>
                       <p>Full Stack</p>
                       <button>  <Link to="/track/0" style={{color:'white', textDecoration:'none'}}>Learn More</Link></button>
                       </div>

                    </div>
                    </Col>

                    <Col style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="struct-card2">
                       <div className ="struct-cardContain">
                       <img src={ui} alt="UIUX dev"/>
                       <h4>UI/UX<br/>Designing</h4>
                       <p>Adobe XD, Figma</p>
                       <button><a href ="#Register" style={{textDecoration:'none', color:'white'}}>
                       <Link to="/track/1" style={{color:'white', textDecoration:'none'}}>Learn More</Link>
                           </a></button>
                       </div>

                    </div>
                    </Col>

                    <Col style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="struct-card3">
                       <div className ="struct-cardContain">
                       <img src={android} alt="mobile dev"/>
                       <h4>Android<br></br>Development</h4>
                       <p>Kotlin, Firebase</p>
                       <button> <Link to="/track/2" style={{color:'white', textDecoration:'none'}}>Learn More</Link></button>
                       </div>

                    </div>
                    </Col>
                </Row>
            </div>
        
        </Container>   
        </>
    );
};

export default Structure;