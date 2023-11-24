

import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { ReactComponent as HamburgerIcon } from 'boxicons/svg/regular/bx-menu.svg';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import banner from '../../assets/images/banner.png';
import sk2 from '../../assets/images/sk2.png';
import sk03 from '../../assets/images/sk03.png';
import './index.scss';
import sk5 from '../../assets/images/sk5.png';
import sk7 from '../../assets/images/sk7.png';
import sk8 from '../../assets/images/sk8.png';
import sk9 from '../../assets/images/sk9.png';
import sk02 from '../../assets/images/sk02.png';
import sk04 from '../../assets/images/sk04.png';


function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'gray' }}
      onClick={onClick}
    />
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'gray' }}
      onClick={onClick}
    />
  );
}

function CarrosselDeProdutos() {
  const [produtos, setProdutos] = useState([
   
    { id: 1, imagem: sk2, alt: 'Produto 1', avaliacao: 4, favoritado: false },
    { id: 1, imagem: sk5, alt: 'Produto 1', avaliacao: 4, favoritado: false },
  ]);

  const configuracoes = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Alterado para exibir 5 produtos por slide
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const alternarFavorito = (produtoId) => {
    setProdutos((produtosAnteriores) =>
      produtosAnteriores.map((produto) =>
        produto.id === produtoId ? { ...produto, favoritado: !produto.favoritado } : produto
      )
    );
  };

  return (
    <div className="carrossel-de-produtos">
      <Slider {...configuracoes}>
        {produtos.map((produto) => (
          <div key={produto.id} className="item-do-carrossel-de-produtos">
            <img src={produto.imagem} alt={produto.alt} />
            <div className="avaliacao">
              {Array.from({ length: produto.avaliacao }, (_, index) => (
                <FaStar key={index} />
              ))}
              {Array.from({ length: 5 - produto.avaliacao }, (_, index) => (
                <FaRegStar key={index} />
              ))}
            </div>
            <span className="coracao" onClick={() => alternarFavorito(produto.id)}>
              {produto.favoritado ? <BsHeartFill /> : <BsHeart />}
            </span>
          </div>
        ))}
      </Slider>
    </div>
  );
}

function App() {
  const [mostrarMenu, setMostrarMenu] = useState(false);

  const toggleMenu = () => {
    setMostrarMenu(!mostrarMenu);
  };

  return (
    <div className="App">
      <header className="Cabecalhooo">
        <img src={logo} alt="Logo" className="Logo" />
        <div className="conteiner-de-busca">
          <div className="container-de-busca">
            <i className='bx bx-search search-icon'></i>
            <input type="text" placeholder="Pesquisar" />
          </div>
        </div>
        <div className="grupo-de-icones">
          <Link to="/perfil"><i className='bx bx-user'></i></Link>
          <a href="#"><i className='bx bx-cart'></i></a>
          <Link to="/logincliente"><span className="EntrarCadastrar">Entrar</span></Link>
          <Link to="/cadastrase"><span className="EntrarCadastrar">Cadastrar</span></Link>
        </div>
      </header>

      <div className='banner'>
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
          <HamburgerIcon />
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

      <CarrosselDeProdutos />

    </div>
  );
}

export default App;

