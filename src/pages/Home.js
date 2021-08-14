import React from 'react';
import LandinPage from '../components/LandinPage';
import Structure from '../components/Structure';

import Sponsors from '../components/Sponsors';
import Organizers from '../components/Organizers';
import Swags from '../components/Swags';
import CommunityPartner from '../components/CommunityPartner';


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
            <Organizers />
            
        </div>
    );
};

export default Home;