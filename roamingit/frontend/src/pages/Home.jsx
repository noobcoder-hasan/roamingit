import React from 'react';
import FormlessHero from '../components/FormlessHero';
import Services from '../components/Services';
import Teams from '../components/Teams';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <>
      <FormlessHero />
      <Services />
      <Teams />
      <ContactSection />
    </>
  );
};

export default Home;
