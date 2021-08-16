
import styl from "../components/css/abouttrack.module.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Hero = (props) => {

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <>
      <div id="HeroBody"
        style={{
          background:props.bgColor
        }}
      >
        <Container>
          <Row className={styl.Hero}>
            <Col className={styl.HeroLeft} lg={6} md={6} xs={12}>
              <h3 style={{ fontWeight: "bold" }}>{props.title}</h3>
              <p>{props.offerBy}</p>
              {/* <button>
                <a
                  href="/register"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Register For Free
                  <p>Starting From 1 Aug</p>
                </a>
              </button> */} 
              <div 
                className="apply-button" 
                data-hackathon-slug="developerdays" 
                data-button-theme="dark-inverted"
                style={{width:'280px'}}
              ></div>
              <p>August 22 - September 26, 2021</p>
            </Col>
            <Col className={styl.HeroRight}>
              <img src={props.svg} alt="svg" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Hero;
