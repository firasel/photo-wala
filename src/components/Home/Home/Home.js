import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Categories from '../Categories/Categories';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PackagePrice from '../PackagePrice/PackagePrice';
import Specialties from '../Specialties/Specialties';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header/>
            <Specialties/>
            <AboutUs/>
            <Categories/>
            <PackagePrice/>
            <Testimonial/>
            <Footer/>
        </div>
    );
};

export default Home;