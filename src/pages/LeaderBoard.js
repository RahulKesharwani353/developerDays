import React, { useState, useEffect } from "react";
import styl from "../components/css/abouttrack.module.css";
import { Container, Row, Col, Table } from "react-bootstrap";
import svg from "../assets/images/leaderboards.svg";

const LeaderBoard = () => {
  var [UiUx, setUiUX] = useState("");
  var [android, setAndroid] = useState("");
  // var [web, setWeb] = useState("");

  useEffect(() => {
    const csv = require("csvtojson");
    const getData = async () => {
      try {
        await fetch(
          "https://docs.google.com/spreadsheets/d/1MI5xdot235unbEXmJfOrMBoCfCYqWPol74xjmxrD8yM/export?format=csv"
        )
          .then((result) => result.text())
          .then((csvtext) => {
            return csv().fromString(csvtext);
          })
          .then((csvRow) => {
            setUiUX(csvRow);
          });
      } catch (error) {
        console.log(error);
      }

      try {
        await fetch(
          "https://docs.google.com/spreadsheets/d/1MI5xdot235unbEXmJfOrMBoCfCYqWPol74xjmxrD8yM/export?format=csv&gid=1357885820"
        )
          .then((result) => result.text())
          .then((csvtext) => {
            return csv().fromString(csvtext);
          })
          .then((csvRow) => {
            setAndroid(csvRow);
          });
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  function TableView(props) {
    return (
      <div style={{ background: "white", padding: "20px", fontWeight:"500", color:"#707070 "}}>
        <Table borderless>
          <thead>
            <tr style={{ border: "none", color: props.color }}>
              <th>Rank</th>
              <th>Name</th>
              <th>Point</th>
            </tr>
          </thead>
          <tbody>
            {props.data !== "" &&
              props.data.map((e, index) => {
                const { name, points } = e;
                return (
                  <tr key={index}>
                    <td><p className={styl.rankBg}
                    >{index + 1}</p></td>
                    <td>{name}</td>
                    <td>{points}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    );
  }

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
              <h3 style={{ fontWeight: "bold" }}>Leaderboard</h3>
              {/* <button>
                  <a
                    href="/register"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Register For Free
                    <p>Starting From 1 Aug</p>
                  </a>
                </button> */}
    
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
          <Col >
            <h3 style={{color: "#52DDDA"}}>UI/UX</h3>
            <TableView data = {UiUx} setData = {setUiUX} color="#52DDDA" />
          </Col>
          <Col >
            <h3 style={{color: "#3B478C"}}>Android Development</h3>
            <TableView data = {android} setData = {setAndroid} color="#3B478C" />
          </Col>
        </Row>
        <Row  style={{ fontWeight: "bold", marginTop:"20px", marginLeft:"10px" }} >

          <p>View Complete Points-</p> <a href="https://docs.google.com/spreadsheets/d/16wU8IICfvjI1oYFYBmqFKAF1GmyYV3uwMhik7kpwvbc/edit?usp=sharing" 
          target="_blank" rel="noreferrer"> <span/> Here </a>
        </Row>
        <Row>
        <p>*Participants with the same points have the same rank, while the leaderboard is arranged alphabetically</p>
        </Row>
      </Container>
    </>
  );
};

export default LeaderBoard;
