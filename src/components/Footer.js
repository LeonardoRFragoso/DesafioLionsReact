import React from 'react';
import './Footer.css';
import '../MainContent.css'; // Importando MainContent.css para garantir estilos consistentes
import facebookIcon from '../assets/facebook-icon.png'; // Certifique-se de que o caminho esteja correto
import youtubeLogo from '../assets/youtube-logo.png';
import linkedinLogo from '../assets/linkedin-logo.png';
import twitterIcon from '../assets/twitter-icon.png';
import instagramIcon from '../assets/instagram-icon.png';

const Footer = () => {
  return (
    <footer className="footer"> {/* Removendo a classe main-content para evitar conflitos */}
      <div className="footer-content">
        <p>&copy; 2024 Lions Seminovos. Todos os direitos reservados.</p>
        <div className="footer-links">
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Uso</a>
          <a href="#">Contato</a>
        </div>
      </div>
      <div className="footer-social">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <img src={youtubeLogo} alt="YouTube" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="Twitter" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
