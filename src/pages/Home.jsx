import React from 'react';
import Header from '../components/Header';
import Property from './FeatureProperty';
import HowItWorks from '../components/HowItWorks';
import CountSell from '../components/CountSell';

const Home = () => {
  return (
    <>
      <Header />
      <Property />
      <HowItWorks />
      <CountSell />
    </>
  );
};

export default Home;
