// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import InfoSection from './components/InfoSection';
import PartnersSection from './components/PartnersSection';
import CategoriesSection from './components/CategoriesSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <InfoSection />
      <PartnersSection />
      <CategoriesSection />
      <Footer />
    </div>
  );
};

export default App;
