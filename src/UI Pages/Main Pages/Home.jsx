import React from 'react';
import Hero from './Hero';
import SectionTitle from './SectionTitle';
import Counter from './Counter';
import AboutUs from './About';
import Gallery from './Gallery';
import Subscription from './Subscription';
import Books from './Books';

const Home = () => {
    return (
        <>
         <Hero/>
         <Counter/>
         <SectionTitle title={"About Us"}/>
         <AboutUs/>
         <SectionTitle title={"Our Books"}/>
         <Books/>
         <SectionTitle title={"Books Images"}/>
         <Gallery/>
         <SectionTitle title={"Subscribe"}/>
         <Subscription/>
        </>
    );
};

export default Home;