import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import styl from './css/swags.module.css'
import swags from './data/swagsData'

const Swags = () => {
    return (
        <>
         <Container id="Swags">
         <Col>
            <div className="sub-heading">Swags</div>
            </Col>
            <Col>
            <div className="heading">We appreciate your participations </div>
            </Col>
            <Row  >
                {
                    swags[0].titleSwags.map((elem,index)=>{
                        const {title,subTitle,desc,border} =elem;
                        return(
                            <Col lg={4} md={4} style={{display: 'flex', justifyContent: 'center'}} key={index}>
                            <div className={styl.swagBox} style={{borderColor: border}}>
                             <h5>{title}</h5>
                             <br/>
                             <h6>{subTitle}</h6>
                             <br/>
                             <p>{desc}</p>
                         </div>
                            </Col>
                        )
                    })
                }
                <Col style={{textAlign:'center', marginTop: '50px'}}>
                <h5>More Announcing Soon !!</h5>
                </Col>
              
            </Row>
            
             </Container>   
        </>
    );
};

export default Swags;