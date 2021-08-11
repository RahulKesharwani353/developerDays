import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import styl from '../components/css/abouttrack.module.css'
import session from '../assets/images/session_icon.svg'
import challanges from '../assets/images/challanges_icon.svg'
import clnd from '../assets/images/icons8-calendar-24.png'
const weekDetails = (props) => {
  console.log(props.SessionsDetail)
    return (
        <div>
                   <Container>
        <Col>
            <div className="sub-heading">Syllabus</div>
            </Col>
         <Col>
            <div className="heading">What you will learn from this course</div>
            </Col> 
            
            {
          props.SessionsDetail.map(
            (elem,index)=>{
                const {session_1_head,session_1_detail, session_2_head, session_2_detail,challange_head, challange_detail,session_1_dates, session_2_dates} =elem;
                return (
                  
            <Row className={styl.weekContainer} key={index}>
            <Col  lg={2} className={styl.weekBox}>
            <div style={{fontSize:'15px'}}>WEEK</div>
            <div className={styl.weekNo}>{index+1}</div>
            </Col>
            <Col>
              <div>
              <div style={{display:'flex'}}><img src={session} alt="date"/>
              <h3 >{session_1_head}</h3></div>
              <div className={styl.date}><img src={clnd} alt="icon"/>{session_1_dates}</div>
              <p >{session_1_detail}</p>
              </div>

              <div>
              <div style={{display:'flex'}}><img src={session} alt="date"/>
              <h3 style={{ whiteSpace: 'break-spaces' }}>{session_2_head}</h3></div>
              <div className={styl.date}><img src={clnd} alt="icon"/>{session_2_dates}</div>
              <p>{session_2_detail}</p>
              </div>

              <div>
              <div style={{display:'flex'}}><img src={challanges} alt="date"/>
              <h3>{challange_head}</h3></div>
              <p style={{whiteSpace:'pre-line'}}>{challange_detail}</p>
              </div>
            </Col>
          </Row>
                )
            }
          )
      } 

        </Container> 
        </div>
    );
};

export default weekDetails;