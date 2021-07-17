import React from 'react';
import LandinPage from '../components/LandinPage';
import Structure from '../components/Structure';
import Speakers from '../components/speakers';
import Sponsors from '../components/Sponsors';
import Organizers from '../components/Organizers';

const Home = () => {
    return (
        <div>
            <LandinPage/>
            <Structure />
            <Speakers /> 
            <Sponsors />      

            <Organizers />
        </div>
    );
};

export default Home;