import React from 'react';
import Heading from '../../modules/Heading';
import Hero from '../../modules/Hero';
import Products from '../../modules/Products';
import Footer from '../../modules/Footer';
import './style.css';

const UserLandingPage = () => {
  return (
    <>
      <Heading />
      <Hero />
      <Products />
      <Footer />
    </>
  );
};

export default UserLandingPage;