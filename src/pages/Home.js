import React from 'react';
import NavBar from '../components/NavBar';
import LandinPage from '../components/LandinPage';
import Structure from '../components/Structure';
import Speakers from '../components/speakers';
import Footer from '../components/footer'
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
            <Footer />
        </div>
    );
};

export default Home;