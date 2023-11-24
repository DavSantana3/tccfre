


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import logo from '../../assets/images/logo.png';
import 'boxicons/css/boxicons.min.css';



import { Instagram, Facebook, Twitter } from 'react-feather';


import cami2 from '../../assets/images/cami2.png';
import cami1 from '../../assets/images/cami1.png';
import cami3 from '../../assets/images/cami3.png';
import cami4 from '../../assets/images/cami4.png';
import cami5 from '../../assets/images/cami5.png';
import cami7 from '../../assets/images/cami7.png';
import cami8 from '../../assets/images/cami8.png';
import cami9 from '../../assets/images/cami9.png';
import cami10 from '../../assets/images/cami10.png';

const products = [

 
  { id: 3, name: 'Camiseta Santa Cruz Arch Hand Check Preta', image: cami2, link: 'http://localhost:3000/comprar', price: 'R$99.99' },
  { id: 3, name: 'CAMISA SANTA CRUZ TRIPPER OFF WHITE BRANCA', image: cami1, link: 'http://localhost:3000/comprar', price: 'R$124.99' },
  { id: 3, name: 'Camisa Manga Longa Element Lumber Marinho', image: cami3, link: 'http://localhost:3000/comprar', price: 'R$299.99' },
  { id: 3, name: 'CAMISA INDEPENDENT UNCLE PRETA', image: cami4, link: 'http://localhost:3000/comprar', price: 'R$209.99' },
  { id: 3, name: 'Camiseta Diamond Rose Chain White', image: cami5, link: 'http://localhost:3000/comprar', price: 'R$320.00' },
  { id: 3, name: 'Jaqueta Element Basic Zip Preta', image: cami7, link: 'http://localhost:3000/comprar', price: 'R$299.99' },
  { id: 3, name: 'Tênis Vans Wayvee Pro Black White', image: cami8, link: 'http://localhost:3000/comprar', price: 'R$299.99' },
  { id: 3, name: 'Tênis Tesla TG II Black Reflect', image: cami9, link: 'http://localhost:3000/comprar', price: 'R$299.99' },
  { id: 3, name: 'Tênis Tesla Coil All Black Reflect', image: cami10, link: 'http://localhost:3000/comprar', price: 'R$299.99' },
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
      <h1>Lista de Produtos</h1>
      <div className="produtos-container">
        {products.map(product => (
          <div key={product.id} className="produtos-item">
            <a href={product.link} target="_blank" rel="noopener noreferrer">
              <img src={product.image} alt={product.name} />
            </a>
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>

      <footer className="footer">
      <div className="social-media-icons">
        <a href="https://www.instagram.com/skatttrack/" target="_blank" rel="noopener noreferrer">
          <Instagram size={30} />
        </a>
        <a href="https://www.facebook.com/skatttrack/" target="_blank" rel="noopener noreferrer">
          <Facebook size={30} />
        </a>
        <a href="https://twitter.com/skatttrack/" target="_blank" rel="noopener noreferrer">
          <Twitter size={30} />
        </a>
      </div>

      <div className="payment-methods">
       
      </div>

      <div className="contact-info">
        <p>Email: <a href="mailto:contato@skatttrack.com">contato@skatttrack.com</a></p>
        <p>Telefone: (11) 95749-1516</p>
      </div>

      <div className="address">
        <p>SkattTrack - Sua loja de rastreamento favorita</p>
        <p>Rua da Inovação, 123</p>
        <p>Cidade Inovadora - IN</p>
        <p>CEP: 12345-678</p>
      </div>
    </footer>
    </div>
  );
}

export default App;
