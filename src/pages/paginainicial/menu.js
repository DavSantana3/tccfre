import React, { useState } from 'react';
import Menu from '../paginainicial/index.js';
import logo from '../../assets/images/logo.png';
import config from '../../assets/images/config.png';
import perfil from '../../assets/images/perfil.png';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <header className="Cabecalho">
        <img src={logo} alt="Logo" className="Logo" />
      </header>

      <div className="container">
        <div className={`menu ${menuOpen ? 'open' : ''}`}>
          {menuOpen ? <Menu /> : null}
          <div className="hamburger-button" onClick={toggleMenu}>
            &#9776; 
          </div>
        </div>
      </div>

      <div className="conteiner">
        <div className="direita">
          <img src={perfil} alt="Perfil" className="Perfil" />
          <i className="bx bx-edit"></i>
        </div>
        <div className="bem-vindo">
          <h1>Seja Bem Vindo!</h1>
        </div>
      </div>
    </div>
  );
}
