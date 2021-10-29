import React from 'react';
import { Carousel } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Why from '../Why/Why';



// https://i.ibb.co/T88tz0q/p-1-43d43fdd.png
// https://i.ibb.co/kxsYvyK/p-2-02c7fd31.png
// https://i.ibb.co/FWGX331/p-3-460015b6.png
// https://i.ibb.co/Jp5WP6z/p-4-5a3083bb.png
// https://i.ibb.co/30KkTNk/p-5-194db7b2.png
// https://i.ibb.co/Wgby02Y/p-6-1c3145eb.png

// https://i.ibb.co/3y0KCsv/banner1.png
// https://i.ibb.co/wMc3hKq/banner2.png
// https://i.ibb.co/qkCws74/banner3.png

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <Why></Why>
        </div>
    );
};

export default Home;