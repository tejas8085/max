import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import Grid from '../Grid/Grid';
import Highlight from '../Highlight/Highlight';
import Categories from '../Categories/Categories';
import Xplore from '../Xplore/Xplore';





export default function Home(){
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Grid/>
            <Highlight/>
            <Xplore/>

            <Categories/>
        </div>

    

    )
}