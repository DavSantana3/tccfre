




import React from 'react';
import './index.scss';
import 'boxicons';
import Header from './header.jsx';
import Footer from './footer.jsx';

import logo from '../../assets/images/logo.png';
import perfilImg from '../../assets/images/perfil.png';
import lg1 from '../../assets/images/lg1.png';
import lg2 from '../../assets/images/lg2.png';
import lg3 from '../../assets/images/lg3.png';

const PerfilSection = () => (
  <section className="perfil">
    <div className="perfil-info">
      <img src={perfilImg} alt="Foto de Perfil" className="perfil-img" />
      <div>
        <h2>Bem-vindo!</h2>
        <p>Nome do Usuário</p>
      </div>
    </div>
  </section>
);

const StatusSection = () => (
  <section>
    <PerfilSection />
    <h2>Status do Pedido</h2>
    <div className="status">
      <div className="status-item pago">
        <i className="bx bxs-check-circle icon"></i> Pago
      </div>
      <div className="status-item processamento">
        <i className="bx bx-refresh icon"></i> Em Processamento
      </div>
      <div className="status-item enviados">
        <i className="bx bxs-truck icon"></i> Enviados
      </div>
    </div>
  </section>
);

const CuponsSection = () => (
  <section>
    <h2>Faixa de Cupons</h2>
    <div className="cupon">
      <span><i className="bx bx-badge-check icon"></i> Cupom 1: DESCONTO10</span>
      <span><i className="bx bx-badge-check icon"></i> Cupom 2: FRETEGRATIS</span>
    </div>
  </section>
);

const ServicesSection = () => (
  <section>
    <h2>Mais Serviços</h2>
    <div className="servico">
      <span><i className="bx bx-package icon"></i> Serviço 1: Entrega Rápida</span>
      <span><i className="bx bx-package icon"></i> Serviço 2: Embalagem Premium</span>
    </div>
  </section>
);

const FavoritesSection = () => (
  <section>
    <h2>Favoritos</h2>
    <div className="favoritos">
      <div className="favorito-item">
        <img src={lg1} alt="lg1" className="lg1" />
        <h5>SEMI LONG HONDAR 31 POLEGADAS BE HAPPY VERDE</h5>
        <i className="bx bxs-heart icon"></i>
      </div>
      <div className="favorito-item">
        <img src={lg2} alt="lg2" className="lg2" />
        <h5>SEMI LONG HONDAR 31 POLEGADAS FLOR ROSA..</h5>
        <i className="bx bxs-heart icon"></i>
      </div>
      <div className="favorito-item">
        <img src={lg3} alt="lg3" className="lg3" />
        <h5>SHAPE SANTA CRUZ 8.5 CRIME TEAM BLACK</h5>
        <i className="bx bxs-heart icon"></i>
      </div>
    </div>
    
  </section>
);

function App() {
  return (
    <div className="App">
      <Header /> {/* Adicione o componente Header no início do seu aplicativo */}
      <StatusSection />
      <CuponsSection />
      <ServicesSection />
      <FavoritesSection />
      <Footer /> {/* Adicione o componente Footer no final do seu aplicativo */}
    </div>
  );
}

export default App;
