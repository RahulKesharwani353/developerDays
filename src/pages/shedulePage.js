
import React, { useEffect, useState } from "react";
import { Container, Row, Table } from "react-bootstrap";
import Tabletop from "tabletop";
import Schedule from "../components/data/SheduleData";
import css from '../components/css/schedule.module.css'

const ShedulePage = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
      Tabletop.init({
        key: "https://docs.google.com/spreadsheets/d/1TrPDoV1G0dUqQ1LGscmLsU0IE4f5AnQ0h1HJ8lUqzI8/edit?usp=sharing",
        simpleSheet: false
      })
        .then((data) => setData(data))
        .catch((err) => console.warn(err));
    }, []);

    return (
        console.log(data),
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
        <Row style={{display:'flex' ,justifyContent:'center', marginBottom:'30px',marginTop:'30px'}}>
        <h1>Event schedule</h1>
               {/* <iframe 
               style={{width:'100%', height:'100vh'}}
               title ="huu" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR_arduPZvTEVLPu6c0TH0zaozqedcAE_gyS61AP5A17VHQSlylfUlD6s-SbwCkR0FZCDoY4yIqfZkG/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe> */}
        </Row>
        
      <Table striped bordered >
  <thead>
    <tr className={css.head}>
      <th>S.No</th>
      <th>Day and Date</th>
      <th>Time</th>
      <th>Event</th>
      <th>Link</th>
    </tr>
  </thead>
  <tbody>
    {
      Schedule.map((e,index)=>{
        const {date, eventName, link, time}=e;
        return(
          <tr key={index}>
      <td>{index+1}</td>
      <td>{date}</td>
      <td>{time}</td>
      <td>{eventName}</td>
      <td>{link}</td>
    </tr>
        )
      })
  }
  </tbody>
</Table>
      </Container>
       
        </div>
    );
};

export default ShedulePage;