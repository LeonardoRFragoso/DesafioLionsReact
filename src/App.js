// src/App.js
import React from 'react';
import Navbar from './components/Navbar/Navbar'; // Mantém a importação da Navbar
import HeroSection from './components/Hero/HeroSection'; // Importação da seção Hero
import InfoSection from './components/Info/InfoSection'; // Importação da seção Info
import PartnersSection from './components/Partners/PartnersSection'; // Importação da seção Partners
import CategoriesSection from './components/Categories/CategoriesSection'; // Importação da seção Categories
import Footer from './components/Footer/Footer'; // Importação do Footer

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
