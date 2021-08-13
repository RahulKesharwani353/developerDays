import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import s_css from '../components/css/sponsors.module.css'
import sponsorsData from './data/sponsorsLogo'
import gold from '../assets/images/gold.svg'
import bronze from '../assets/images/bronze.svg'
import silver from '../assets/images/silver.svg'
import dev from '../assets/images/sponsorslogo/Devfolio_Logo-Colored.svg'
import swao from '../assets/images/sponsorslogo/sawolabs.png'
const Sponsors = () => {

    console.log(sponsorsData)
    return (
        <>
           <Container id="sponsors">
        <Col>
            <div className="sub-heading">Sponsors</div>
            </Col>
            <Col>
            <div className="heading">Thanks for making this event successful</div>
            </Col>
            <br/>
            <Row style={{justifyContent: 'center'}}>
                
                
                <Col className={s_css.sponsorsLogo} >
                <h4>Diamond Sponsors💎</h4>
                <br/>
                   <a href="https://devfolio.co/" target="_blank" rel="noreferrer"><img src={dev} alt="sponsor logo" /></a> 
                </Col>
                <Col className={s_css.sponsorsLogo} >
                <h4>Authentication Partner🤝</h4>
                <br/>
                <a href="https://sawolabs.com/" target="_blank" rel="noreferrer"><img src= {swao} alt="sponsor logo" style={{width:'40%'}}/></a> 
                </Col>
            </Row>
            
            <br/>
            <br/>
        
            <br/>
            <br/>
            <h4>Gold Sponsors<img src={gold} alt="gold" /></h4>
            <Row style={{justifyContent: 'center'}}>
            {
                sponsorsData[0].gold.map((elem,index)=>{
                    const {images,ref} =elem;
                    return(
                        <Col lg={3} xs={6} md={3} className={s_css.sponsorsLogo} key={index}>
                   <a href={ref} target="_blank" rel="noreferrer"><img src={images} alt="sponsor logo"/></a> 
                </Col>
                    )
                })
            }
              
            </Row>
            
            <br/>
            <br/>
            <h4>Silver Sponsors<img src={silver} alt="gold" /></h4>
            <Row  style={{justifyContent: 'center'}}>
            {
                sponsorsData[0].silver.map((elem,index)=>{
                    const {images,ref} =elem;
                    return(
                        <Col lg={3} xs={6} md={3} className={s_css.sponsorsLogo} key={index}>
                   <a href={ref} target="_blank" rel="noreferrer"><img src={images} alt="sponsor logo"/></a> 
                </Col>
                    )
                })
            }
              
            </Row>
            <br/>
            <br/>
            <h4>Bronze Sponsors<img src={bronze} alt="gold" /></h4>
            <Row style={{justifyContent: 'center'}}>
            {
                sponsorsData[0].bronze.map((elem,index)=>{
                    const {images,ref} =elem;
                    return(
                        <Col lg={3} xs={6} md={3} className={s_css.sponsorsLogo} key={index}>
                   <a href={ref} target="_blank" rel="noreferrer"><img src={images} alt="sponsor logo"/></a> 
                </Col>
                    )
                })
            }
              
            </Row>

            <br/>
            <br/>
            {/* <h4>Sticker Partner</h4>
            <Row style={{justifyContent: 'center'}}>
            {
                sponsorsData[0].sticker.map((elem,index)=>{
                    const {images,ref} =elem;
                    return(
                        <Col lg={3} xs={6} md={3} className={s_css.sponsorsLogo} key={index}>
                   <a href={ref} target="_blank" rel="noreferrer"><img src={images} alt="sponsor logo"/></a> 
                </Col>
                    )
                })
            }
              
            </Row> */}

            <Col style={{textAlign:'center', marginTop:'20px'}}>
            <button className={s_css.sponsourUs} ><a href="mailto:sponsorship@developerdays.tech">Sponsor Us</a> </button>
            </Col>

        </Container>  
        </>
    );
};

export default Sponsors;