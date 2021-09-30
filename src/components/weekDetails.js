import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import styl from '../components/css/abouttrack.module.css'
import session from '../assets/images/session_icon.svg'
import challanges from '../assets/images/challanges_icon.svg'
import clnd from '../assets/images/icons8-calendar-24.png'
const weekDetails = (props) => {
    return (
        <div>
          <Container>
          <Col>
            <div className="sub-heading">Syllabus</div>
            </Col>
          <Col>
            <div className="heading">What you will learn from this Track</div>
          </Col> 
            
            {
            props.SessionsDetail.map((elem,index)=>{
              const {session_1_head,session_1_detail, session_2_head, session_2_detail,challange_head, 
                challange_detail,session_1_dates, session_2_dates, challenges_date, challenges_pdf, challenges_submit} = elem;
              return (   
                <>
                <Row className={styl.weekContainer} key={index}>
                  <Col  lg={2} className={styl.weekBox}>
                    <div style={{fontSize:'15px'}}>WEEK</div>
                    <div className={styl.weekNo}>{index+1}</div>
                  </Col>
                  <Col>
                  {
                    session_1_head &&  <div className={styl.sessionCont}>
                    <div style={{display:'flex'}}><img src={session} alt="date"/>
                    <h3 >{session_1_head}</h3></div>
                    <div className={styl.date}><img src={clnd} alt="icon"/>{session_1_dates}</div>
                    <p className={styl.challenge_detail}>{session_1_detail}</p>
                    </div>
                  }
                   

                    {
                      session_2_head && <div className={styl.sessionCont}>
                      <div style={{display:'flex'}}><img src={session} alt="date"/>
                      <h3 style={{ whiteSpace: 'break-spaces' }}>{session_2_head}</h3></div>
                      <div className={styl.date}><img src={clnd} alt="icon"/>{session_2_dates}</div>
                      <p className={styl.challenge_detail}>{session_2_detail}</p>
                      </div>
                    }

                    {
                      challange_detail && 
                      <div className={styl.sessionCont}>
                    <div style={{display:'flex'}}><img src={challanges} alt="date"/>
                    <h3>{challange_head}</h3></div>
                    {
                      challenges_date && <div className={styl.date}><img src={clnd} alt="icon"/>{challenges_date}</div>
                    }
                    <p style={{whiteSpace:'pre-line'}} className={styl.challenge_detail}>{challange_detail}
                    {
                      challenges_pdf && <a href={challenges_pdf} target="_blank" rel="noreferrer" > View Challenge</a> 
                    }
                    {

                      challenges_submit && <div>
                        <a href="https://linktr.ee/DevDaysChallenges" target="_blank" rel="noreferrer" >Submit Here</a> 
                      </div>
                    }
                  
                    </p>
                    
                    </div>
                    }
                </Col>
                </Row>
              <hr/>
              </>
                )
            }
          )
      } 

        </Container> 
        </div>
    );
};

export default weekDetails;