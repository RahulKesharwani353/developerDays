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
            <div className="heading">We appreciate your participation </div>
            </Col>
            <Row  style={{display: 'flex', justifyContent: 'center'}}>
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
                   {
                    swags[0].imageLogo.map((elem,index)=>{
                        const {images,subTitle,desc,border} =elem;
                        return(
                            <Col lg={4} md={4} style={{display: 'flex', justifyContent: 'center'}}  key={index}>
                            <div className={styl.swagBox} style={{borderColor: border}}>
                             <img src={images} alt="logo" />
                             <br/>
                             <h6>{subTitle}</h6>
                             <br/>
                             <p style={{ whiteSpace: 'break-spaces' }}>{desc}</p>
                         </div>
                            </Col>
                        )
                    })
                }
              
            </Row>
            
             </Container>   
        </>
    );
};

export default Swags;