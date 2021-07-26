import React from 'react';
import LandinPage from '../components/LandinPage';
import Structure from '../components/Structure';

import Sponsors from '../components/Sponsors';
import Organizers from '../components/Organizers';
import Swags from '../components/Swags';

const Home = () => {
    return (
        <div>
            <LandinPage/>
            <Structure />
            <Swags /> 
            <Sponsors />      

            <Organizers />
        </div>
    );
};

export default Home;