


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import logo from '../../assets/images/logo.png';
import 'boxicons/css/boxicons.min.css';


import banner from '../../assets/images/banner.png';
import lg01 from '../../assets/images/lg01.png';
import lg02 from '../../assets/images/lg02.png';
import lg03 from '../../assets/images/lg03.png';
import lg04 from '../../assets/images/lg04.png';
import lg05 from '../../assets/images/lg05.png';
import lg06 from '../../assets/images/lg06.png';
import lg07 from "../../assets/images/lg07.png";
import lg08 from "../../assets/images/lg08.png";
import lg09 from "../../assets/images/lg09.png";
import lg10 from "../../assets/images/lg10.png";

import feminino from '../../assets/images/feminino.png';
import masculino from '../../assets/images/masculino.png';
import infantil from '../../assets/images/infantil.png';
import sk5 from '../../assets/images/sk5.png';
import sk7 from '../../assets/images/sk7.png';
import sk8 from '../../assets/images/sk8.png';
import sk9 from '../../assets/images/sk9.png';
import sk02 from '../../assets/images/sk02.png';
import sk03 from '../../assets/images/sk03.png';
import sk04 from '../../assets/images/sk04.png';
import sk06 from '../../assets/images/sk04.png';
import sk2 from '../../assets/images/sk2.png';
import sk6 from '../../assets/images/sk6.png';
import sk10 from '../../assets/images/sk10.png';
import sk20 from '../../assets/images/sk20.png';
import sk21 from '../../assets/images/sk21.png';
import sk22 from '../../assets/images/sk22.png';
import divulg from '../../assets/images/divulg.png';



import cam01 from '../../assets/images/cam01.png';
import cam02 from '../../assets/images/cam02.png';
import cam03 from '../../assets/images/cam03.png';
import cam04 from '../../assets/images/cam04.png';
import cam05 from '../../assets/images/cam05.png';
import cam06 from '../../assets/images/cam06.png';



import eq1 from '../../assets/images/eq1.png';
import eq2 from '../../assets/images/eq2.png';
import eq3 from '../../assets/images/eq3.png';
import eq4 from '../../assets/images/eq4.png';
import eq5 from '../../assets/images/eq5.png';
import eq6 from '../../assets/images/eq6.png';
import amortecedor from '../../assets/images/amortecedor.png';
import kit from  '../../assets/images/kit.png';
import banq from  '../../assets/images/banq.png';

import { Instagram, Facebook, Twitter } from 'react-feather';


function App() {
  const produtos = [
    
    { imagem: sk8, nome: 'Skate Ahead 8.0 Collab 3S Skaters Logo', preco: 'R$ 230.90', classificacao: 5, link: 'http://localhost:3000/comprar' },
    { imagem: sk9, nome: 'Skate Ahead 8.0 Collab 3S Skaters Digo Red', preco: 'R$ 80.99', classificacao: 4 },
    { imagem: sk5, nome: 'Skate  Ahead Military All Black', preco: 'R$ 120.99', classificacao: 4 },
    { imagem: sk02, nome: 'Skate Ahead Military All Blue', preco: 'R$ 129.99', classificacao: 4 },
    { imagem: sk10, nome: 'SKATE PURPLE INICIANTE DONUT I', preco: 'R$ 89.99', classificacao: 5 },
    { imagem: sk03, nome: 'SKATE MONTADO AHEAD MILITARY RED', preco: 'R$ 289.90', classificacao: 5 },
    { imagem: sk04, nome: 'Skate Completo Ahead Tie Dye Cloud', preco: 'R$ 269.99', classificacao: 5 },
    { imagem: sk7, nome: 'Skate Ahead Completo Amador 8.0 Blue', preco: 'R$ 89.99', classificacao: 5 },
    { imagem: sk20, nome: 'Skate Completo Ahead Tie Dye 70', preco: 'R$ 89.99', classificacao: 5 },
    { imagem: sk21, nome: 'Skate Ahead Completo Amador 8.0 Purple', preco: 'R$ 89.99', classificacao: 5 },
    { imagem: sk22, nome: 'Skate Completo Ahead Tie Dye On Impression', preco: 'R$ 89.99', classificacao: 5 },
  ];

  const produtosLongboard = [
    { imagem: lg01, nome: 'Skate Longboard FISH 500 ', preco: 'R$ 199.99', classificacao: 5 },
    { imagem: lg02, nome: 'Semi Long Hondar 31 Polegadas Be Happy Verde', preco: 'R$ 189.99', classificacao: 4, link: 'http://localhost:3000/comprar'},

    { imagem: lg03, nome: 'Skate Longboard Montado Completo Allyb', preco: 'R$ 179.99', classificacao: 3  },
    { imagem: lg04, nome: 'Long Skateboard - Caveira', preco: 'R$ 169.99', classificacao: 4 },
    { imagem: lg05, nome: 'Longboard Hondar Freeride', preco: 'R$ 159.99', classificacao: 5 },
    { imagem: lg06, nome: 'Longboard Hondar Roxo - Personagem', preco: 'R$ 149.99', classificacao: 4 },
    { imagem: lg07, nome: 'Longboard Caveira - Amarelo', preco: 'R$ 139.99', classificacao: 3 },
    { imagem: lg08, nome: 'Longboard Blackstar', preco: 'R$ 129.99', classificacao: 4 },
    { imagem: lg09, nome: 'Skate Longboard  Beach 500', preco: 'R$ 119.99', classificacao: 5 },
    { imagem: lg10, nome: 'Longboard Iniciante Completo Unic Skateboard - Caveira', preco: 'R$ 109.99', classificacao: 4 },
  ];

  const [mostrarMenu, setMostrarMenu] = useState(false);
  const toggleMenu = () => {
    setMostrarMenu(!mostrarMenu);
  };

  const [indiceAtual, setIndiceAtual] = useState(0);
  const [indiceAtualLongboard, setIndiceAtualLongboard] = useState(0);
  const [favoritos, setFavoritos] = useState(Array(produtos.length).fill(false));
  const [favoritosLongboard, setFavoritosLongboard] = useState(Array(produtosLongboard.length).fill(false));

  const irParaAnterior = (produtosArray, setIndiceAtual) => {
    setIndiceAtual((indiceAnterior) =>
      indiceAnterior === 0 ? produtosArray.length - 1 : indiceAnterior - 1
    );
  };

  const irParaProximo = (produtosArray, setIndiceAtual) => {
    setIndiceAtual((indiceAnterior) =>
      indiceAnterior === produtosArray.length - 1 ? 0 : indiceAnterior + 1
    );
  };

  const irParaAnteriorLongboard = () => {
    irParaAnterior(produtosLongboard, setIndiceAtualLongboard);
  };

  const irParaProximoLongboard = () => {
    irParaProximo(produtosLongboard, setIndiceAtualLongboard);
  };

  const toggleFavorito = (categoria, indice) => {
    if (categoria === 'skate') {
      setFavoritos((prevFavoritos) => {
        const novosFavoritos = [...prevFavoritos];
        novosFavoritos[indice] = !novosFavoritos[indice];
        return novosFavoritos;
      });
    } else if (categoria === 'longboard') {
      setFavoritosLongboard((prevFavoritos) => {
        const novosFavoritos = [...prevFavoritos];
        novosFavoritos[indice] = !novosFavoritos[indice];
        return novosFavoritos;
      });
    }
  };

  const camisas = [
    { imagem: cam01, nome: 'Camiseta Thrasher Preta', preco: 'R$ 89.99' },
    { imagem: cam05, nome: 'Camiseta Vans OTW Boys Black', preco: 'R$ 79.00' },
    { imagem: cam03, nome: 'Camiseta Diamond Brilliant Pink', preco: 'R$ 159.99' },
    { imagem: cam02, nome: 'Camiseta Element Logo Azul Mescla', preco: 'R$ 69.00' },
    { imagem: cam04, nome: 'Camiseta Element Bottom Logo Rosa Mescla', preco: 'R$ 120.99' },
    { imagem: cam06, nome: 'Camisa Manga Longa Element Lumber Preto', preco: 'R$ 80.99' },
  ];

  const [camisaIndex, setCamisaIndex] = useState(0);
  const [favoritosCamisas, setFavoritosCamisas] = useState(Array(camisas.length).fill(false));

  const handlePrevCamisa = () => {
    setCamisaIndex((prevIndex) => (prevIndex === 0 ? camisas.length - 1 : prevIndex - 1));
  };

  const handleNextCamisa = () => {
    setCamisaIndex((prevIndex) => (prevIndex === camisas.length - 1 ? 0 : prevIndex + 1));
  };

  const handleToggleFavoritoCamisa = (index) => {
    setFavoritosCamisas((prevFavoritos) => {
      const novosFavoritos = [...prevFavoritos];
      novosFavoritos[index] = !novosFavoritos[index];
      return novosFavoritos;
    });
  };const imagensLongboard = [lg01, lg02, lg03, lg04, lg05, lg06];
  
  const equipamentos = [
    { imagem: eq1, nome: 'Shape Element Underdog', preco: 'R$ 99.99', favorito: false },
    { imagem: kit, nome: 'Kit Proteção ARS', preco: 'R$ 79.99', favorito: false },
    { imagem: eq3, nome: 'Capacete Niggli Light Rosa', preco: 'R$ 129.99', favorito: false },
    { imagem: banq, nome: 'Banqueta Essenza RL', preco: 'R$ 349.99', favorito: false },
    { imagem: eq5, nome: 'Shape Concept 8.25 Wolf', preco: 'R$ 89.99', favorito: false },
    { imagem: amortecedor, nome: 'Amortecedor SDS Co Hard Cilindrico Black 94A', preco: 'R$ 109.99', favorito: false },
  ];

  const [equipamentoIndex, setEquipamentoIndex] = useState(0);
  const [favoritosEquipamentos, setFavoritosEquipamentos] = useState(
    Array(equipamentos.length).fill(false)
  );

  const handlePrevEquipamento = () => {
    setEquipamentoIndex((prevIndex) =>
      prevIndex === 0 ? equipamentos.length - 1 : prevIndex - 1
    );
  };

  const handleNextEquipamento = () => {
    setEquipamentoIndex((prevIndex) =>
      prevIndex === equipamentos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleToggleFavoritoEquipamento = (index) => {
    setFavoritosEquipamentos((prevFavoritos) => {
      const novosFavoritos = [...prevFavoritos];
      novosFavoritos[index] = !novosFavoritos[index];
      return novosFavoritos;
    });
  };


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
          <Link to="/carrinho"><i className='bx bx-cart'></i></Link>
          <Link to="/logincliente"><span className="EntrarCadastrar">Entrar</span></Link>
          <Link to="/cadastrase"><span className="EntrarCadastrar">Cadastrar</span></Link>
        </div>
      </header>
      <div className="banner">
        <img src={banner} alt="Banner" className="Banner" />
       

      </div>
      <div className="BarraNavegacao">
        <div className="ItensNav">
          <Link to="/" className="ItemNav"> SKATE</Link>
          <Link to="/" className="ItemNav">LONGBOARD</Link>
          <Link to="/" className="ItemNav">TÊNIS</Link>
          <Link to="/" className="ItemNav">ACESSÓRIO</Link>
          <Link to="/" className="ItemNav">PROTEÇÃO</Link>
          <Link to="/" className="ItemNav">PROMOÇÃO</Link>
        </div>

        <div className="Hamburguer" onClick={toggleMenu}>
          
          &#9776;
        </div>

        {mostrarMenu && (
          <div className="MenuMobile">
            <Link to="/" className="ItemMenuMobile">TÊNIS SKATE</Link>
            <Link to="/" className="ItemMenuMobile">LONGBOARD</Link>
            <Link to="/" className="ItemMenuMobile">ACESSÓRIO</Link>
            <Link to="/" className="ItemMenuMobile">PROTEÇÃO</Link>
            <Link to="/" className="ItemMenuMobile">PROMOÇÃO</Link>
          </div>
        )}
      </div>
      <div className="container-de-produtos">
        <h1>Skate</h1>
        <button className="carousel-button prev" onClick={() => irParaAnterior(produtos, setIndiceAtual)}>
          &#10094;
        </button>
        <div className="carousel">
          {produtos.map((produto, index) => (
            
            <div
              key={index}
              className={`produto ${index === indiceAtual ? 'ativo' : ''}`}
            >
              <img src={produto.imagem} alt={produto.nome} className="ImagemProduto" />
              <h2>{produto.nome}</h2>
              <p>{produto.preco}</p>
              <div className="classificacao">
                {[...Array(produto.classificacao)].map((_, i) => (
                  <i key={i} className="bx bxs-star"></i>
                ))}
              </div>
              <i
                className={`bx ${favoritos[index] ? 'bxs-heart' : 'bx-heart'} icone-coracao`}
                onClick={() => toggleFavorito('skate', index)}
              ></i>
            </div>
          ))}
        </div>
        <button className="carousel-button next" onClick={() => irParaProximo(produtos, setIndiceAtual)}>
          &#10095;
        </button>
      </div>
    
      <div>
      
      <div className="carousel">
  {produtosLongboard.map((produto, index) => (
    <div key={index} className={`produto ${index === indiceAtualLongboard ? 'ativo' : ''}`}>
      <Link to="/comprar">
        <img src={produto.imagem} alt={produto.nome} />
      </Link>
      <h2>{produto.nome}</h2>
      <p>{produto.preco}</p>
      <div className="classificacao">
        {[...Array(produto.classificacao)].map((_, i) => (
          <i key={i} className="bx bxs-star"></i>
        ))}
      </div>
      <i
        className={`bx ${favoritosLongboard[index] ? 'bxs-heart' : 'bx-heart'} icone-coracao`}
        onClick={() => toggleFavorito('longboard', index)}
      ></i>
    </div>
  ))}
</div>
      <button className="carousel-button next" onClick={irParaProximoLongboard}>
        &#10095;
      </button>
</div>
        
       



      
      
<div class="categorias">
  <div class="categoria">
    <Link to="/Feminino" className="categoria-link">
      <img src={feminino} alt="Feminino" className="Feminino" />
      <span className="Feminino">Feminino</span>
    </Link>
  </div>

  <div class="categoria">
    <Link to="/Masculino" className="categoria-link">
      <img src={masculino} alt="Masculino" className="Masculino" />
      <span className="Masculino">Masculino</span>
    </Link>
  </div>

  <div class="categoria">
    <Link to="/Infantil" className="categoria-link">
      <img src={infantil} alt="Infantil" className="Infantil" />
      <span className="Infantil">Infantil</span>
    </Link>
  </div>
</div>
<div className='categ'>
        <h1>Camisas</h1>

        <div className='produtos-camisas'>
          {camisas.map((camisa, index) => (
            <div key={index} className={`camisa ${index === camisaIndex ? 'ativo' : ''}`}>
              <img src={camisa.imagem} alt={camisa.nome} className="imagem-camisa" />
              <h2>{camisa.nome}</h2>
              <p>{camisa.preco}</p>
              <i
                className={`bx ${favoritosCamisas[index] ? 'bxs-heart' : 'bx-heart'} icone-coracao`}
                onClick={() => handleToggleFavoritoCamisa(index)}
              ></i>
            </div>
          ))}
        </div>

        <button className="carousel-button prev" onClick={handlePrevCamisa}>
          &#10094;
        </button>
        <button className="carousel-button next" onClick={handleNextCamisa}>
          &#10095;
        </button>
      </div>
      <div className="equipamentos">
      <h1>Equipamentos</h1>
      <div className="produtos-equipamentos">
        {equipamentos.map((equipamento, index) => (
          <div
            key={index}
            className={`equipamento ${index === equipamentoIndex ? 'ativo' : ''}`}
          >
            <img src={equipamento.imagem} alt={equipamento.nome} />
            <h2>{equipamento.nome}</h2>
            <p>{equipamento.preco}</p>
            <i
              className={`bx ${
                favoritosEquipamentos[index] ? 'bxs-heart' : 'bx-heart'
              } icone-coracao`}
              onClick={() => handleToggleFavoritoEquipamento(index)}
            ></i>
          </div>
        ))}
      </div>
      <button className="carousel-button prev" onClick={handlePrevEquipamento}>
        &#10094;
      </button>
      <button className="carousel-button next" onClick={handleNextEquipamento}>
        &#10095;
      </button>
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
    <div className='admin'>
              <Link to="/login" className="ItemNav"> @admin</Link>

              </div>


    </div>
  );
}

export default App;
