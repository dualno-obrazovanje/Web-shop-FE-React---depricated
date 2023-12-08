import React, { useState } from 'react';
import Heading from '../../modules/Heading';
import Hero from '../../modules/Hero';
import Products from '../../modules/Products';
import Footer from '../../modules/Footer';
import './style.scss';

const UserLandingPage = () => {
  const [modalContent, setModalContent] = useState(null);

  const handleModalOpening = (content) => {
    setModalContent(content);
  }

  return (
    <>
      <Heading setModal={handleModalOpening} />
      <Hero />
      <Products />
      <Footer />
      {
        modalContent && (
          <div className='backdrop'>
            {modalContent}
          </div>
        )
      }
    </>
  );
};

export default UserLandingPage;