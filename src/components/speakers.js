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
          {/* <div className="sub-heading"></div>
        </Col>
        <Col>
          <div className="heading">Our Guest And Speakers</div>
        </Col> */}

        {/* <Col lg={6}>
          <div className="courses-container">
            <div className="course">
              <div className="course-preview">
                <div className="speakers-photo">
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

        <Col>
          <h5>Announcing Soon...</h5>
        </Col>

        <Row>
          <div className="col-md-3 col-sm-6 col-6">
            <div className="our-team">
              <div className="pic">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/developerstudentcommunit-web.appspot.com/o/teamMembers%2FKARTIKEY_RAWAT.png?alt=media&token=dc8310b9-dad5-4236-8276-14a5146bfb90"
                  alt=""
                />
                <ul className="social">
                  <li>
                    <a href="https://github.com/carrycooldude" target="_blank">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://linkedin.com/in/carrycooldude"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="http://twitter.com/carrycooldude" target="_blank">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="team-content">
                <h3 className="title">Kartikey Rawat</h3>
                <span className="post">Founder</span>
              </div>
            </div>
          </div>
        </Row> */}

        <Row style={{ display: "flex", justifyContent: "center" }}>
        {
          props.SpeakersDetail.map(
            (elem,index)=>{
                const {image, name, designation,linkedIn, insta, twitter} =elem;
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
                  <li>
                    <a a href={linkedIn} target="_blank" rel="noreferrer" >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href={insta} target="_blank" rel="noreferrer" >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href={twitter} target="_blank" rel="noreferrer" >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
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
