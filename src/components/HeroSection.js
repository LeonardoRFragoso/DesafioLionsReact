// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';
import '../MainContent.css'; // Importando MainContent.css para garantir os estilos consistentes
import logo from '../assets/lions_seminovos_logo.jpeg'; // Importando a imagem corretamente

const HeroSection = () => {
  return (
    <section className="hero-section main-content"> {/* Adicionando a classe main-content para manter a consistência */}
      <div className="hero-content">
        <h1>Fature muito com a melhor concessionária de seminovos do Brasil</h1>
        <p>Uma oportunidade para quem quer trabalhar com autonomia e flexibilidade, e com grandes chances de ganhar muito dinheiro.</p>
        <button className="cta-button" onClick={() => window.open('https://paginaexterna.com', '_blank')}>
          Clique aqui
        </button>
      </div>
      <div className="hero-image">
        <img src={logo} alt="Logo da Lions Seminovos" />
      </div>
    </section>
  );
};

export default HeroSection;
