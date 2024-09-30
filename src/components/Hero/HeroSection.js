// src/components/Hero/HeroSection.js
import React from 'react';
import './HeroSection.css'; // Mantém a importação do CSS na mesma pasta
import '../../MainContent.css'; // Ajuste o caminho se o MainContent.css estiver em um nível diferente
import logo from '../../assets/lions_seminovos_logo.jpeg'; // Ajuste o caminho da imagem

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
