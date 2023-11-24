import './index.scss';

import perfil from '../../assets/images/skate.jpeg';
import logo from '../../assets/images/logo.png';
import skatista from '../../assets/images/skatista.png';
function App() {
    return (
      <div className="App">
      <header className="Cabecalho">
      <img src={logo} alt="Logo" className="Logo" />
        </header>
        
        <div className="principal">
        <div className="metade-esquerda">
        
        </div>
        <div className="metade-direita">
        <div className="formulario-login"> 
        <h1 className="login-title">Login</h1>
        <br />
        <br />
        <input type="textooo" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <br />
         <br />
         <button>Entrar</button>
        </div>
        </div>
      </div>
      

      

         



        
  
        
  
      </div>
      
  
    );
  }
  <a href="/cadastro-produtos">Cadastrar Produtos</a>
  export default App;
  