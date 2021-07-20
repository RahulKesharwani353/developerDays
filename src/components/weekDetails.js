import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import styl from '../components/css/abouttrack.module.css'
import session from '../assets/images/session_icon.svg'
import challanges from '../assets/images/challanges_icon.svg'
const weekDetails = () => {
    return (
        <div>
                   <Container>
        <Col>
            <div className="sub-heading">Syllabus</div>
            </Col>
         <Col>
            <div className="heading">What you will learn from this course</div>
            </Col>  

            <Row className={styl.weekContainer}>
              <Col  lg={2} className={styl.weekBox}>
              <div style={{fontSize:'15px'}}>WEEK</div>
              <div className={styl.weekNo}>1</div>
              </Col>
              <Col>
                <div>
                <div style={{display:'flex'}}><img src={session} alt="date"/>
                <h3>Baate badei badi</h3></div>
                <p>orem ipsum dolor sit amet, Stet clita kasd gubergren, ndolor sit amet, csed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctu</p>
                </div>

                <div>
                <div style={{display:'flex'}}><img src={session} alt="date"/>
                <h3>Baate badei badi</h3></div>
                <p>orem ipsum dolor sit amet, Stet clita kasd gubergren, ndolor sit amet, csed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctu</p>
                </div>

                <div>
                <div style={{display:'flex'}}><img src={challanges} alt="date"/>
                <h3>Challenge</h3></div>
                <p>orem ipsum dolor sit amet, Stet clita kasd gubergren, ndolor sit amet, csed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctu</p>
                </div>
              </Col>
            </Row>
        </Container> 
        </div>
    );
};

export default weekDetails;