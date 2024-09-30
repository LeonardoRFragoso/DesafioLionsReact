// src/components/Navbar/Navbar.js
import React from 'react';
import './Navbar.css'; // Mantém a importação do CSS na mesma pasta
import '../../MainContent.css'; // Ajuste o caminho se o MainContent.css estiver em um nível diferente
import logo from '../../assets/lions_seminovos_logo.jpeg'; // Ajuste o caminho da imagem

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Lions Seminovos Logo" className="logo" />
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
