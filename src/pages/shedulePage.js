
import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";

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
        <div>
           
           
            {/* <iframe title ="huu" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR_arduPZvTEVLPu6c0TH0zaozqedcAE_gyS61AP5A17VHQSlylfUlD6s-SbwCkR0FZCDoY4yIqfZkG/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe> */}



            <h1>data from google sheets</h1>
      <ul>
        {data.map((item, i) => (
          <Fragment key={i}>
            <li>URL -- {item.name}</li>
            <li>Email - {item.branch}</li>
            <li>Token -t</li>
            <br />
          </Fragment>
        ))}
      </ul>
       
        </div>
    );
};

export default ShedulePage;