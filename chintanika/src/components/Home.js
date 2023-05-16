import React from 'react'

import HeroBanner from './HeroBanner';
import Trending from './Trending';
import InfScroll from './InfScroll';

function Home(){
    return(
        <div>
        <HeroBanner></HeroBanner>
        <Trending></Trending>
        <InfScroll></InfScroll>
        </div>
    );
}
export default Home;