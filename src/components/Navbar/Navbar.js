// src/components/Navbar/Navbar.js
import React, { useState } from 'react';
import './Navbar.css'; // Mantém a importação do CSS na mesma pasta
import '../../MainContent.css'; // Ajuste o caminho se o MainContent.css estiver em um nível diferente
import logo from '../../assets/lions_seminovos_logo.jpeg'; // Ajuste o caminho da imagem

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState(''); // Estado para armazenar o valor da busca

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // Atualiza o estado quando o usuário digita
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Buscando por:', searchTerm); // Aqui você pode implementar a lógica de busca real
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Lions Seminovos Logo" className="logo" />
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Buscar..."
          className="search-input"
        />
        <button type="submit" className="search-button">Pesquisar</button>
      </form>
    </nav>
  );
};

export default Navbar;
