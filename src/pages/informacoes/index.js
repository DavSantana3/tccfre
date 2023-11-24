


import React from 'react';
import './index.scss';
import 'boxicons';
import logo from '../../assets/images/logo.png';
import perfilImg from '../../assets/images/perfil.png';
import lg1 from '../../assets/images/lg1.png';
import lg2 from '../../assets/images/lg2.png';
import sk6 from '../../assets/images/sk6.png';
import sk2 from '../../assets/images/sk2.png';
import lg3 from '../../assets/images/lg3.png';

const Cabecalho = () => (
  <header className="Cabecalhooo">
    <img src={logo} alt="Logo" className="Logo" />
  </header>
);

const PerfilSection = () => (
  <section className="perfil">
    <Cabecalho />
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
    <Cabecalho />
    <PerfilSection />
    <h2>Status do Pedido</h2>
    <div className="status">
      {/* ... conteúdo do status ... */}
    </div>
  </section>
);

const CuponsSection = () => (
  <section>
    <Cabecalho />
    <h2>Faixa de Cupons</h2>
    <div className="cupon">
      {/* ... conteúdo dos cupons ... */}
    </div>
  </section>
);

const ServicesSection = () => (
  <section>
    <Cabecalho />
    <h2>Mais Serviços</h2>
    <div className="servico">
      {/* ... conteúdo dos serviços ... */}
    </div>
  </section>
);

const FavoritesSection = () => (
  <section>
    <Cabecalho />
    <h2>Favoritos</h2>
    <div className="favoritos">
      {/* ... conteúdo dos favoritos ... */}
    </div>
  </section>
);

function App() {
  return (
    <div className="App">
      <StatusSection />
      <CuponsSection />
      <ServicesSection />
      <FavoritesSection />
    </div>
  );
}

export default App;
