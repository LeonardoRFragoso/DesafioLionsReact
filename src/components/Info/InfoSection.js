// src/components/Info/InfoSection.js
import React from 'react';
import './InfoSection.css'; // Mantém a importação do CSS na mesma pasta
import '../../MainContent.css'; // Ajuste o caminho se o MainContent.css estiver em um nível diferente

// Importando as imagens correspondentes
import rendaExtraImage from '../../assets/ganhe-renda.png'; // Ajuste o caminho da imagem
import trabalheDeOndeQuiserImage from '../../assets/trabalhe.png'; // Ajuste o caminho da imagem
import lucroAltoImage from '../../assets/lucro-alto.png'; // Ajuste o caminho da imagem

const InfoSection = () => {
  return (
    <section className="info-section main-content"> {/* Adicionando a classe main-content para manter a consistência */}
      <div className="info-card">
        <img src={rendaExtraImage} alt="Ganhe uma renda extra" className="info-image" />
        <h3>Ganhe uma renda extra</h3>
        <p>Uma ótima oportunidade para complementar sua renda.</p>
      </div>
      <div className="info-card">
        <img src={trabalheDeOndeQuiserImage} alt="Trabalhe de onde quiser" className="info-image" />
        <h3>Trabalhe de onde quiser</h3>
        <p>Liberdade para você escolher o melhor lugar para trabalhar.</p>
      </div>
      <div className="info-card">
        <img src={lucroAltoImage} alt="Lucro alto" className="info-image" />
        <h3>Lucro alto</h3>
        <p>Possibilidade de ganhos significativos.</p>
      </div>
    </section>
  );
};

export default InfoSection;
