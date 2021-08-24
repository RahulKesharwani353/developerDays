import React from "react";
import styl from "../components/css/abouttrack.module.css";
import { Container, Row, Col, Table } from "react-bootstrap";
import svg from "../assets/images/leaderboards.svg";

const LeaderBoard = () => {
  return (
    <>
      <div
        id="HeroBody"
        style={{
          background: "linear-gradient(202deg, #E2C59F  0%, #EE64A0 80%)",
        }}
      >
        <Container>
          <Row className="">
            <Col className={styl.HeroLeft} lg={6} md={6} xs={12}>
              <h3 style={{ fontWeight: "bold" }}>Leader Board</h3>
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
                style={{ width: "280px" }}
              ></div>
            </Col>
            <Col className={styl.HeroRight}>
              <img src={svg} alt="svg" style={{ width: "280px" }} />
            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <br />
      <Container>
        <Row>
          <Col lg={4}>
            <h3>Android Dev</h3>
            <div style={{background:'white', padding:'20px'}}>
              <Table borderless>
                <thead>
                  <tr style={{border:'none'}}>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Point</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{borderStyle:'none'}}>
                    <td>1</td>
                    <td>Rahul Kesharwani</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Rahul Kesharwani</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Rahul Kesharwani</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Rahul Kesharwani</td>
                    <td>20</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>

          <Col lg={4} md={6}>
            <h3>Android Dev</h3>
            <div style={{background:'white', padding:'20px'}}>
              <Table borderless>
                <thead>
                  <tr style={{border:'none'}}>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Point</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{borderStyle:'none'}}>
                    <td>1</td>
                    <td>Rahul Kesharwani</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Rahul Kesharwani</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Rahul Kesharwani</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Rahul Kesharwani</td>
                    <td>20</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>

          <Col lg={4} md={6}>
            <h3>Android Dev</h3>
            <div style={{background:'white', padding:'20px'}}>
              <Table borderless>
                <thead>
                  <tr style={{border:'none'}}>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Point</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{borderStyle:'none'}}>
                    <td>1</td>
                    <td>Rahul Kesharwani</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Rahul Kesharwani</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Rahul Kesharwani</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Rahul Kesharwani</td>
                    <td>20</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LeaderBoard;
