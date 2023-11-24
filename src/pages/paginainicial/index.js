import './index.scss';
import logo from '../../assets/images/logo.png';
import config from '../../assets/images/config.png';
import perfil from '../../assets/images/perfil.png';
import menu from '../paginainicial/menu.js'

import 'boxicons/css/boxicons.min.css';



function App() {
  return (
    <div className="App">
      <header className="Cabecalho">
        <img src={logo} alt="Logo" className="Logo" />
      </header>

      <div className="container">
      <div className="menu">
    <p>Editar Perfil</p>
            <p>Estoque</p>
            <p>Cadastrar Produtos</p>
            <p>Status de Vendas</p>
            <p>Relatório de Pedidos</p>
            <p>Gráfico</p>

  <div className="hamburger-button">
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
<a href="/cadastro-produtos">Cadastrar Produtos</a>
export default App;
