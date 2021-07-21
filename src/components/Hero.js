import ui_logo from "../assets/images/UI_track.svg";
import styl from "../components/css/abouttrack.module.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Hero = (props) => {
  return (
    <>
      <div
        style={{
          background: "linear-gradient(202deg, #57EBDE  0%, #123AA7 70%)",
        }}
      >
        <Container>
          <Row className={styl.Hero}>
            <Col className={styl.HeroLeft} lg={6} md={6} xs={12}>
              <h3 style={{ fontWeight: "bold" }}>{props.title}</h3>
              <p>Track offered by Developer Student Community</p>
              <button>
                <a
                  href="/register"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Register For Free
                  <p>Starting From 22 Aug</p>
                </a>
              </button>
            </Col>
            <Col className={styl.HeroRight}>
              <img src={ui_logo} alt="svg" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Hero;
