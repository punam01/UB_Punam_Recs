import React from 'react'

import HeroBanner from './HeroBanner';
import Trending from './Trending';
import InfScroll from './InfScroll';
import Navbar from './Navbar';

function Home(){
    return(
        <>
        <Navbar heading="Chintanika" title="WELCOME"/>
        <div>
        <HeroBanner></HeroBanner>
        <Trending></Trending>
        <InfScroll></InfScroll>
        </div>
        </>
    );
}
export default Home;