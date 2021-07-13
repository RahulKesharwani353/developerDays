import React from 'react';
import NavBar from '../../inc/NavBar';
import LandinPage from '../../inc/LandinPage';
import Structure from '../../inc/Structure';
import Speakers from '../../inc/speakers';
import Footer from '../../inc/footer'
import Sponsors from '../../inc/Sponsors';
import Organizers from '../../inc/Organizers';

const Home = () => {
    return (
        <div>
            <NavBar/>
            <LandinPage/>
            <Structure />
            <Speakers /> 
            <Sponsors />      

            <Organizers />
            <Footer />
        </div>
    );
};

export default Home;