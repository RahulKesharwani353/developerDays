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
                 Developer Days 2021 was a 5-week event with three tracks focused on different Developments and designs. It was one of its type, event focused on quick learning and implementation by learners in the 5-week long BootCamp cum Hackathon. Over 5k+ attendees registered from over 25+ countries and started their learnings along with the hands-on experience. By the end of the event, almost 1k+participants presented their projects and successfully pulled up the essence of Developer Days.

To continue the legacy and build the developer community stronger, this year Developer Days team is back with “ Developer Days2.0”
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