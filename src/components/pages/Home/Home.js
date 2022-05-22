import React from 'react';
import Banar from './Banar';
import Business from './Business';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div className='mt-16'>
            <Banar></Banar>
            <Info></Info>
            <Business></Business>
            <Services></Services>
        </div>
    );
};

export default Home;