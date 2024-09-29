// src/components/Navbar.js
import React from 'react';
import './Navbar.css';
import '../MainContent.css'; // Importando os estilos principais
import logo from '../assets/lions_seminovos_logo.jpeg'; // Caminho relativo correto

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
