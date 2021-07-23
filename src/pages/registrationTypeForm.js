import React from 'react';
import { Widget } from '@typeform/embed-react'
import { Container } from 'react-bootstrap';
import soon from '../assets/images/soon.svg'
const registrationTypeForm = () => {
    return (
        <>
           <Container style={{textAlign:'center'}}>
            {/* <Widget id="YNpXJHW1" style={{ width: '100%' }} className="my-form" /> */}
            <img src={soon} alt="soon" style={{width:'60%', marginTop:'5%'}}/>
            <br/>
            <br/>
            <h2>Starting From 1st August, 2021</h2>
        </Container>

        </>

         
    );
};

export default registrationTypeForm;