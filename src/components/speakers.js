import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./css/speakers.css";

const speakers = (props) => {
  return (
    <>
      <Container>
        <Col id="speakers">
          <div className="sub-heading" id= "Speakers"></div>
            </Col>
            <Col>
            <div className="heading">Meet Our Speakers</div>
            </Col>

        <Row style={{ display: "flex", justifyContent: "center" }}>
        {
          props.SpeakersDetail.map(
            (elem,index)=>{
                const {image, name, designation,linkedIn, insta, twitter, youtube, dribble, behance} =elem;
                return (
      
                    <Col
            lg={4}
            md={6}
            style={{ display: "flex", justifyContent: "center" }}
            key= {index}
          >
            <div className="card-wrapper">
              <div className="card">
                <div className="card-image">
                  <img
                    src={image}
                    alt="speaker"
                  />
                </div>

                <ul
                  className="social-icons"
                  style={{ justifyContent: "center" }}
                >
             {
               linkedIn &&      <li>
               <a a href={linkedIn} target="_blank" rel="noreferrer" >
                 <i className="fab fa-linkedin-in"></i>
               </a>
             </li>
             }
              {
                insta &&     <li>
                <a href={insta} target="_blank" rel="noreferrer" >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              }
                 {
                   twitter &&  <li>
                   <a href={twitter} target="_blank" rel="noreferrer" >
                     <i className="fab fa-twitter"></i>
                   </a>
                 </li>
                 }
                  {
                    youtube &&  <li>
                    <a href={twitter} target="_blank" rel="noreferrer" >
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                  }
                  {
                    behance &&  <li>
                    <a href={twitter} target="_blank" rel="noreferrer" >
                      <i className="fab fa-behance"></i>
                    </a>
                  </li>
                  }
                  {
                    dribble &&  <li>
                    <a href={twitter} target="_blank" rel="noreferrer" >
                      <i className="fab fa-dibbble"></i>
                    </a>
                  </li>
                  }
                </ul>

                <div className="details">
                  <h3>
                    {name}
                    <br />
                    <span className="job-title">
                     {designation}
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </Col>
                )
            }
          )
      }
          
        </Row>
        <Row style={{display:'flex', justifyContent: 'center'}}> <div>More Announcing Soon...!!!</div></Row>
      </Container>
    </>
  );
};

export default speakers;
