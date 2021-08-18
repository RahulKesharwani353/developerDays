import React, { useEffect, useState } from "react";
import { Container, Row, Table, Tab, Tabs } from "react-bootstrap";
import css from "../components/css/schedule.module.css";

const ShedulePage = () => {
  const [week1, setWeek1] = useState([]);
  const [week2, setWeek2] = useState([]);
  const [week3, setWeek3] = useState([]);
  const [week4, setWeek4] = useState([]);
  const [week5, setWeek5] = useState([]);
  const csv = require("csvtojson");
  const getData = async () => {
    try {
      await fetch(
        "https://docs.google.com/spreadsheets/d/12IgiVcgfdqZZa2xqqrGrPK3NewPkgCagrfvgOk-MK-k/export?format=csv"
      )
        .then((result) => result.text())
        .then((csvtext) => {
          return csv().fromString(csvtext);
        })
        .then((csvRow) => {
          setWeek1(csvRow);
        });

      await fetch(
        "https://docs.google.com/spreadsheets/d/12IgiVcgfdqZZa2xqqrGrPK3NewPkgCagrfvgOk-MK-k/export?format=csv&gid=499798765"
      )
        .then((result) => result.text())
        .then((csvtext) => {
          return csv().fromString(csvtext);
        })
        .then((csvRow) => {
          setWeek2(csvRow);
        });


        await fetch(
          "https://docs.google.com/spreadsheets/d/12IgiVcgfdqZZa2xqqrGrPK3NewPkgCagrfvgOk-MK-k/export?format=csv&gid=1982263128"
        )
          .then((result) => result.text())
          .then((csvtext) => {
            return csv().fromString(csvtext);
          })
          .then((csvRow) => {
            setWeek3(csvRow);
          });


          await fetch(
            "https://docs.google.com/spreadsheets/d/12IgiVcgfdqZZa2xqqrGrPK3NewPkgCagrfvgOk-MK-k/export?format=csv&gid=128104643"
          )
            .then((result) => result.text())
            .then((csvtext) => {
              return csv().fromString(csvtext);
            })
            .then((csvRow) => {
              setWeek4(csvRow);
            });

            await fetch(
              "https://docs.google.com/spreadsheets/d/12IgiVcgfdqZZa2xqqrGrPK3NewPkgCagrfvgOk-MK-k/export?format=csv&gid=1688075744"
            )
              .then((result) => result.text())
              .then((csvtext) => {
                return csv().fromString(csvtext);
              })
              .then((csvRow) => {
                setWeek5(csvRow);
              });
    } catch (error) {
      console.log(error);
    }
  };
  

  useEffect(() => {
    getData();
  });

  function TableView(props) {
    return (
      <Table striped bordered>
        <thead>
          <tr className={css.head}>
            <th>S.No</th>
            <th>Date</th>
            <th>Day</th>
            <th>Time</th>
            <th>Event</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((e, index) => {
            const { date, day, time, event, link } = e;
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{date}</td>
                <td>{day}</td>
                <td>{time}</td>
                <td>{event}</td>
                <td><a href={link} target="_blank" rel="noreferrer" >Click Here</a></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }

  return (
    //   <div>

    //       <h1>data from google sheets</h1>
    // <ul>
    //   {data.map((item, i) => (
    //     <Fragment key={i}>
    //       <li>URL -- {item.name}</li>
    //       <li>Email - {item.branch}</li>
    //       <li>Token -t</li>
    //       <br />
    //     </Fragment>
    //   ))}
    // </ul>
    <div>
      <Container>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "30px",
            marginTop: "30px",
          }}
        >
          <h1>Event schedule</h1>
        </Row>
        <Row style={{ justifyContent: "center" }}>
          <div style={{ width: "100%" }}>
            <Tabs
              defaultActiveKey="Week1"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="Week1" title="Week1">
                <TableView data={week1} />
              </Tab>
              <Tab eventKey="Week2" title="Week2">
                <TableView data={week2} />
              </Tab>
              <Tab eventKey="Week3" title="Week3">
              <TableView data={week3} />
              </Tab>
              <Tab eventKey="Week4" title="Week4">
              <TableView data={week4} />
              </Tab>
              <Tab eventKey="Week5" title="Week5">
              <TableView data={week5} />
              </Tab>
            </Tabs>
          </div>
        </Row>
        <br />
      </Container>
    </div>
  );
};

export default ShedulePage;
