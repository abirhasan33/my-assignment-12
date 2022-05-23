import React from 'react';
import Footer from '../../shared/Footer';
import Banar from './Banar';
import Business from './Business';
import Info from './Info';
import Input from './Input';
import Services from './Services';

const Home = () => {
    return (
        <div className='mt-16'>
            <Banar></Banar>
            <Info></Info>
            <Business></Business>
            <Services></Services>
            <Input></Input>
            <Footer></Footer>
        </div>
    );
};

export default Home;