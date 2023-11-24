

import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import logo from '../../assets/images/logo.png';
import 'boxicons/css/boxicons.min.css';
import inf1 from '../../assets/images/inf1.png';
import inf2 from '../../assets/images/inf2.png';
import inf4 from '../../assets/images/inf4.png';
import inf3 from '../../assets/images/inf3.png';
import inf5 from '../../assets/images/inf5.png';
import inf6 from '../../assets/images/inf6.png';

const outrosProdutos = [
  { id: 4, nome: 'Camiseta Element Juvenil Seal TN Azul', imagem: inf1, link: 'http://localhost:3000/comprar' },
  { id: 4, nome: 'Camiseta Element Juvenil Escape Heaven Preta', imagem: inf2, link: 'http://localhost:3000/comprar' },
  { id: 4, nome: 'Camiseta Element Juvenil Vertical Rosa Escuro Mescla', imagem: inf4, link: 'http://localhost:3000/comprar' },
  { id: 4, nome: 'Camiseta Santa Cruz Juvenil Flaming Dot Front White', imagem: inf3, link: 'http://localhost:3000/comprar' },
  { id: 4, nome: 'Moletom Vans Juvenil Boys Exposition Check Crew Black', imagem: inf5, link: 'http://localhost:3000/comprar' },
  { id: 4, nome: 'Moletom Element Juvenil Fech Vertical TN Roxo', imagem: inf6, link: 'http://localhost:3000/comprar' },

];

function App() {
  return (
    <div className="App">
      <header className="Cabecalhooo">
        <img src={logo} alt="Logo" className="Logo" />
        <div className="conteiner-de-busca">
          <div className="search-container">
            <i className="bx bx-search search-icon"></i>
            <input type="text" placeholder="Pesquisar" />
          </div>
        </div>
        <div className='grupo-de-icones'>
          <Link to="/perfil"><i className='bx bx-user'></i></Link>
          <a href="#"><i className='bx bx-cart'></i></a>
        </div>
      </header>

      <div className="ContainerDeProdutos">
        {outrosProdutos.map(produto => (
          <div key={produto.id} className="ItemDeProduto">
            {produto.id === 4 ? (
              <a href={produto.link} target="_blank" rel="noopener noreferrer">
                <img src={produto.imagem} alt={produto.nome} />
              </a>
            ) : (
              <img src={produto.imagem} alt={produto.nome} />
            )}
            <p>{produto.nome}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
