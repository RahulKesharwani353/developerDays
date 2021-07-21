import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import s_css from '../components/css/sponsors.module.css'
import sponsorsData from './data/sponsorsLogo'
import gold from '../assets/images/gold.svg'
const Sponsors = () => {

    console.log(sponsorsData)
    return (
        <>
           <Container id="sponsors">
        <Col>
            <div className="sub-heading">Sponsors</div>
            </Col>
            <Col>
            <div className="heading">This event was made Possible Thanks to our Sponsors</div>
            </Col>
            <br/>
            <h4>Gold Sponsors<img src={gold} /></h4>
            <br/>
            <Row>
            {
                sponsorsData.map((elem,index)=>{
                    const {images,ref} =elem;
                    return(
                        <Col lg={3} xs={6} md={3} className={s_css.sponsorsLogo} key={index}>
                   <a href={ref} target="_blank" rel="noreferrer"><img src={images} alt="sponsor logo"/></a> 
                </Col>
                    )
                })
            }
              
            </Row>

        </Container>  
        </>
    );
};

export default Sponsors;