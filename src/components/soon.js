import React from 'react';
import { Container } from 'react-bootstrap';
import soon from '../assets/images/soon.svg'

const Soon = () => {
    return (
        <div>
                <Container style={{textAlign:'center'}}>
            {/* <Widget id="YNpXJHW1" style={{ width: '100%' }} className="my-form" /> */}
            <img src={soon} alt="soon" style={{width:'60%', marginTop:'5%'}}/>
            <br/>
            <br/>
            <h2>Coming Soon</h2>
        </Container>
        </div>
    );
};

export default Soon;