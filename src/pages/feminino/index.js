import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import logo from '../../assets/images/logo.png';
import 'boxicons/css/boxicons.min.css';

import jaq1 from '../../assets/images/jaq1.png';
import mol2 from '../../assets/images/mol1.png';
import mol01 from '../../assets/images/mol01.png';
import mol4 from '../../assets/images/mol4.png';
import cap1 from '../../assets/images/cap1.png';
import cap2 from '../../assets/images/cap2.png';
import ska1 from '../../assets/images/ska1.png';
import cropped from '../../assets/images/cropped.png';
import tenis01 from '../../assets/images/tenis01.png';
import tenis02 from '../../assets/images/tenis02.png';
import  tenis03 from '../../assets/images/tenis03.png';
import mol02 from '../..//assets/images/mol02.png';


import { Instagram, Facebook, Twitter } from 'react-feather';

const products = [
  { id: 1, name: 'Jaqueta Element Hype Vermelha', image: jaq1, link: 'http://localhost:3000/comprar' },
  { id: 3, name: 'Moletom  Levels Fleece Hoodie Pink', image: mol01, link: '' },
  { id: 3, name: 'Moletom Fleece Hoodie ', image: mol02, link: '' },

  { id: 1, name: 'Cropped Manga Longa Thrasher Skate Mag Amarelo', image: cropped, link: 'http://localhost:3000/comprar' },

  { id: 1, name: 'Capacete Niggli Light Rosa', image: cap1, link: 'http://localhost:3000/comprar' },
  { id: 1, name: 'Capacete ARS Rookie Pink', image:cap2 , link: 'http://localhost:3000/comprar' },
  
  { id: 1, name: 'Tênis Nike SB x Leticia Bufoni Zoom Verona Slip Unissex', image: tenis01, link: 'http://localhost:3000/comprar' },
  { id: 1, name: 'Tênis Nike SB Zoom Blazer Mid Isso Cognac White', image: tenis02, link: 'http://localhost:3000/comprar' },
  { id: 1, name: 'Tênis Nike SB x Rayssa Leal Zoom Verona Slip Unissex', image: tenis03, link: 'http://localhost:3000/comprar' },
  
  
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
      <div className="product-container">
        {products.map(product => (
          <div key={product.id} className="product-item">
            {product.id === 1 ? (
              <a href={product.link} target="_blank" rel="noopener noreferrer">
                <img src={product.image} alt={product.name} />
              </a>
            ) : (
              <img src={product.image} alt={product.name} />
            )}
            <p>{product.name}</p>
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
  