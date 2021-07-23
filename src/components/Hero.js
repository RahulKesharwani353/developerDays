
import styl from "../components/css/abouttrack.module.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Hero = (props) => {

  console.log(props.bgColor)

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
              <button>
                <a
                  href="/register"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Register For Free
                  <p>Starting From 1 Aug</p>
                </a>
              </button>
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
