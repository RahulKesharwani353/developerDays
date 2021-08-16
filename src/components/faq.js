import React from 'react';
import { Accordion, Col, Row, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/faq.css'

const ques=[{
  question: "When will Developer Days start and for how long will it continue?",
  ans: "The league of Developer Dyas will start from the 22nd of August and will continue for 5 weeks.  "
},
{
  question: "How  many tracks the maximum number of tracks one can participate in?   ",
  ans: "There are 3 tracks: UI/UX designing, web development and android development. One person can take part in a maximum of 2 tracks.  "
},
{
  question: "Is it necessary to join Discord?",
  ans: "Yes,it is necessary to join discord server of Developer Days. Joining the server will help you with special hangout calls, regular mini events, also in discord you’ll get ticket feature to clear your doubts. It will help you to connect globally.  "
},
{
  question: "Can a beginner participate in Developer Days?",
  ans: "Yes, beginners can participate in developer days. We have planned it especially for the beginners who want to get started with development but cannot find a good/interesting way"
},
{
  question: "What is the league basically based on?",
  ans: "The league will totally be based on projects,there will be many experienced mentors to guide you in need"
},
{
  question: "Is Developer Days just a league of sessions?",
  ans: "The Developer Days league will not only consist of sessions but also many interesting and fun challenges"
},
{
  question: "Will there be sessions for different tracks or any reference would be provided?",
  ans: "Every track would consist of 2-3 hands-on sessions per week via youtube live. All the videos will be available on the channel for future reference."
},
{
  question: "Where can the participants see their score and also are there any prizes for the winners?  ",
  ans: "We will be maintaining the leaderboard on our website. Points will be awarded based on the projects you submit.(Don’t worry the challenges will be beginner-friendly)  The winners and active participants will get exciting swags and prizes.  "
}]



const FAQs = () => {
  return (
    <Container>
      <Col>
        <div className="sub-heading">FAQs</div>
      </Col>
      <Accordion>
        <Row>
          {
            ques.map((e,index)=>{
              const {question, ans} = e;
              return(
                <Col lg={6} key={index}>
                  <div className="accordion-item">
                    <Accordion.Toggle className="accordion-item-header" eventKey={index+1}>{question}
                    </Accordion.Toggle>
                    <Accordion.Collapse className="accordion-item-body" eventKey={index+1}>
                      <p className="accordion-item-body-content">{ans}</p>
                    </Accordion.Collapse>
                  </div>
                </Col>
              )
            })
          }
      
        </Row>
      </Accordion>
      <hr/>
    </Container>
  );
};

export default FAQs;