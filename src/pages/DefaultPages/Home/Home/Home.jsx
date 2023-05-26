import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import TabsCategory from '../TabsCategory/TabsCategory';
import { useLoaderData } from 'react-router-dom';
import setTitle from '../../../../utls/ControlTitle/setTitle'
import OurServices from '../OurServices/OurServices';
import DealOfTheDay from '../DealOfTheDay/DealOfTheDay';
import LatestBlog from '../LatestBlog/LatestBlog';

const Home = () => {
    setTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <DealOfTheDay></DealOfTheDay>
            <Gallery></Gallery>
            <TabsCategory></TabsCategory>
            <OurServices></OurServices>
            <LatestBlog></LatestBlog>
        </div>
    );
};

export default Home;