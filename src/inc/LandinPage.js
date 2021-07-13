import React from 'react';
import clipArt from '../images/ID3-2dobj.png'
import { Row, Col ,Container} from 'react-bootstrap'

const LandinPage = () => {
    return (

        <>
        <Container>
            <Row>
                <Col>
                
                <div className="landingHeading text-left">
                 <h1>Developer<br/>Days</h1>
                 <p>
                 A Collaborative boot camp brought to you by Developer Student Community, Mozilla Community and KUG Durg.
                 </p>
                </div>  
                </Col>
                <Col style={{display:'flex', justifyContent:'center'}}><img src={clipArt} alt="beta" className="landingClipArt text-center"/></Col>
            </Row>

</Container>
        </>
    );
};

export default LandinPage;