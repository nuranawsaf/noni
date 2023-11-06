import React from 'react';
import Hero from './hero/Hero';
import HomeCategories from './homeCategories/HomeCategories';
import PopularSweets from './popularSweets/PopularSweets';
import HomeAddress from './homeAddress/HomeAddress';
import HomeFeedback from './homeFeedback/HomeFeedback';
import Footer from './footer/Footer';

const MainHome = () => {
  return (
    <div className="">
      <Hero />
      <HomeCategories />
      <PopularSweets />
      <HomeAddress />
      <HomeFeedback />
      <Footer />
    </div>
  );
};

export default MainHome;
