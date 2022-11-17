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
                <Col >
                
                <div className="landingHeading text-left">
                 <h1>Developer<br/>Days</h1>
                 <p>
                 It was a 5-week event with three tracks focused on different Developments and design. The event consisted of various sessions and challenges, including lots of learning and fun.............. Soon we are coming back with New Tracks and Challenges, with a pinch of surprise for the whole developer community, so experts and newbies stay tuned..................
                 </p>
                 <div className="landingRegister">
                 {/* <div 
	                className="apply-button" 
	                data-hackathon-slug="developerdays" 
	                data-button-theme="light"
                     style={{width:'280px'}}
                ></div> */}
                 </div>
                 <p>August 22 - September 26, 2021</p>
                </div>  
                </Col>
                <Col style={{display:'flex', justifyContent:'center'}}><img src={clipArt} alt="beta" className="landingClipArt text-center"/></Col>
            </Row>

</Container>
        </>
    );
};

export default LandinPage;