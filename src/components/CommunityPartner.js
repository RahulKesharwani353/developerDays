import React from 'react';
import s_css from '../components/css/sponsors.module.css'
import partners from './data/communityPartnerData';
import { Container, Col, Row } from 'react-bootstrap';

const CommunityPartner = () => {
    return (
        <>
            <Container id="sponsors">
        <Col>
            <div className="sub-heading">Community Partners</div>
            </Col>
            <Col>
            <div className="heading">Thanks for the support</div>
            </Col>
            <br/>
            <br/>
            <Row  style={{justifyContent: 'center'}}>
            {
                partners.map((elem,index)=>{
                    const {images,ref} =elem;
                    return(
                        <Col lg={3} xs={6} md={3} className={s_css.sponsorsLogo} key={index}>
                   <a href={ref} target="_blank" rel="noreferrer"><img src={images} alt="sponsor logo"/></a> 
                </Col>
                    )
                })
            }
              
            </Row>
            <Col style={{textAlign:'center', marginTop:'20px'}}>
            <button className={s_css.becomeComunity} ><a href="mailto:support@developerdays.tech">Become a community partner?</a> </button>
            </Col>

        </Container> 
        </>
    );
};

export default CommunityPartner;