import React from 'react';
import LandinPage from '../components/LandinPage';
import Structure from '../components/Structure';

import Sponsors from '../components/Sponsors';
import Organizers from '../components/Organizers';
import Swags from '../components/Swags';
import CommunityPartner from '../components/CommunityPartner';
import FAQs from '../components/faq';


const Home = () => {
    return (
        <div>
            <LandinPage/>
            <Structure />
            <Swags /> 
            <Sponsors /> 
            <br/>     
          
            <CommunityPartner/>
            <br/>
            <br/>
            {/* <FAQ/>
            <br/>
            <br/> */}
            <FAQs />
            <Organizers />
            
        </div>
    );
};

export default Home;