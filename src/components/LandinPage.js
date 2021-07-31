import React from 'react';
import clipArt from '../assets/images/ID3-2dobj.png'
import { Row, Col ,Container} from 'react-bootstrap'

const LandinPage = () => {

  React.useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://apply.devfolio.co/v2/sdk.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        return () => {
          document.body.removeChild(script);
        }
      }, []);

    return (

        <>
        <Container>
            <Row>
                <Col>
                
                <div className="landingHeading text-left">
                 <h1>Developer<br/>Days</h1>
                 <p>
                 It is a 5-week long event. It consists of three tracks that are Web Development, Android Development, and UI/UX Design. The event consists of various sessions and challenges. Various swags and prizes will be awarded to the winners and participants.
                 </p>
                 <div className="landingRegister">
                 <div 
	                className="apply-button" 
	                data-hackathon-slug="developerdays" 
	                data-button-theme="light"
                     style={{width:'280px'}}
                ></div>
                 </div>
                </div>  
                </Col>
                <Col style={{display:'flex', justifyContent:'center'}}><img src={clipArt} alt="beta" className="landingClipArt text-center"/></Col>
            </Row>

</Container>
        </>
    );
};

export default LandinPage;