import React from 'react';
import Banner from '../Banner/Banner';
import Destinations from '../Destinations/Destinations';
import Services from '../Services/Services';
import Tripses from '../Tripses/Tripses';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Destinations></Destinations>
            <Services></Services>
            <Tripses></Tripses>
        </div>
    );
};

export default Home;