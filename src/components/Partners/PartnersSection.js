// src/components/Partners/PartnersSection.js
import React from 'react';
import './PartnersSection.css'; // Mantém a importação do CSS na mesma pasta
import '../../MainContent.css'; // Ajuste o caminho se o MainContent.css estiver em um nível diferente

// Importando a imagem correspondente
import equipeImage from '../../assets/equipe.png'; // Ajuste o caminho da imagem

const PartnersSection = () => {
  return (
    <section className="partners-section main-content"> {/* Adicionando a classe main-content para consistência */}
      <div className="partners-content">
        <div className="partners-text">
          <h2>Nossos parceiros possuem todo suporte necessário para alcançar o sucesso nas vendas.</h2>
          <p>Contamos com uma equipe totalmente especializada em vendas que acompanhará cada etapa para a realização de sua venda.</p>
        
          <div className="partners-features">
            <div className="feature-card">
              <h3>Possuímos a melhor comissão do mercado</h3>
            </div>
            <div className="feature-card">
              <h3>Diversas estratégias de vendas</h3>
            </div>
          </div>
        </div>

        <div className="partners-image">
          <img src={equipeImage} alt="Equipe de vendas" />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
