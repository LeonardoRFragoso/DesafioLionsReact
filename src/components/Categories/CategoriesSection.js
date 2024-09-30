// src/components/Categories/CategoriesSection.js
import React from 'react';
import './CategoriesSection.css'; // Mantém a importação do CSS na mesma pasta
import '../../MainContent.css'; // Ajuste o caminho se o MainContent.css estiver em um nível diferente

// Ajustando os caminhos para as imagens
import bronzeImage from '../../assets/bronze.png';
import silverImage from '../../assets/prata.png';
import goldImage from '../../assets/ouro.png';

const CategoriesSection = () => {
  return (
    <section className="categories-section main-content"> {/* Adicionando a classe main-content para manter a consistência */}
      <h2>Conheça nossas categorias</h2>
      <div className="categories-cards">
        <div className="category-card bronze">
          <img src={bronzeImage} alt="Categoria Bronze" className="category-image" />
          <h3>BRONZE</h3>
        </div>
        <div className="category-card silver">
          <img src={silverImage} alt="Categoria Prata" className="category-image" />
          <h3>PRATA</h3>
        </div>
        <div className="category-card gold">
          <img src={goldImage} alt="Categoria Ouro" className="category-image" />
          <h3>OURO</h3>
        </div>
      </div>
      <button className="learn-more-button">Clique para saber mais</button>
    </section>
  );
};

export default CategoriesSection;
