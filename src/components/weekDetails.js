import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import styl from '../components/css/abouttrack.module.css'
import gold from '../assets/images/gold.svg'
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

            <Row>
              <Col  lg={2} className={styl.weekBox}>
              <div style={{fontSize:'15px'}}>WEEK</div>
              <div className={styl.weekNo}>1</div>
              </Col>
              <Col>
                <div style={{display:'flex'}}><img src={gold}/>
                <h3>Baate badei badi</h3></div>
                <p>orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctu</p>
              </Col>
            </Row>
        </Container> 
        </div>
    );
};

export default weekDetails;