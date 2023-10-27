import React from 'react';
import Heading from '../../modules/Heading';
import Hero from '../../modules/Hero';
import ProductsGrid from '../../modules/ProductsGrid';
import Footer from '../../modules/Footer';
import './style.css';

const UserLandingPage = () => {
  return (
    <>
      <Heading />
      <Hero />
      <ProductsGrid />
      <Footer />
    </>
  );
};

export default UserLandingPage;