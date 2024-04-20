import React, { Fragment } from 'react';
import {Row, Col} from 'react-bootstrap';
import NavbarFixed from '../components/Home/NavbarFixed';
import HeroSection from '../components/Home/HeroSection';
import Frame498 from '../components/Home/Frame498';
import Frame499 from '../components/Home/Frame499';
import Faq from '../components/Home/Faq';
import Footer from '../components/Home/Footer';

const HomePage = () => {
    return(
        <Fragment>
            <NavbarFixed />
            <HeroSection />
            <Frame498 />
            <Frame499 />
            <Faq />
            <Footer />
        </Fragment>
    )
}

export default HomePage;