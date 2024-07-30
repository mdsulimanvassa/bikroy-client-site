import React from 'react';
import MainHeader from '../MainHeader/MainHeader';
import Product from '../Product/Product';
import Many from '../Many/Many';
import BikroyInfo from '../BikroyInfo/BikroyInfo';
import BikroyMarket from '../BikroyMarket/BikroyMarket';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <MainHeader></MainHeader>
            <Product></Product>
            <Many></Many>
            <BikroyInfo></BikroyInfo>
            <BikroyMarket></BikroyMarket>
            <Footer></Footer>
        </div>
    );
};

export default Home;