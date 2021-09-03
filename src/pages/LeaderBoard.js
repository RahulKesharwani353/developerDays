import React, { useState, useEffect } from "react";
import styl from "../components/css/abouttrack.module.css";
import { Container, Row, Col, Table } from "react-bootstrap";
import svg from "../assets/images/leaderboards.svg";

const LeaderBoard = () => {
  var [UiUx, setUiUX] = useState("");
  // var [android, setAndroid] = useState("");
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
            setUiUX(csvRow);
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
            <tr style={{ border: "none" }}>
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
                      style={ index === 0? {background:"#FFC364", color:"white"}:
                      index === 1? {background:"#A8A8A8", color:"white"}:
                      index === 2? {background:"#985D19", color:"white"}:
                    {background:"white"}}
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
            <h3>UI/UX</h3>
            <TableView data = {UiUx} setData = {setUiUX} />
          </Col>
        </Row>
        <Row  style={{ fontWeight: "bold", marginTop:"20px", marginLeft:"10px" }} >
          <p>view complete points Table </p><a href="https://docs.google.com/spreadsheets/d/16wU8IICfvjI1oYFYBmqFKAF1GmyYV3uwMhik7kpwvbc/edit?usp=sharing" 
          target="_blank" rel="noreferrer">Here </a>
        </Row>
      </Container>
    </>
  );
};

export default LeaderBoard;
