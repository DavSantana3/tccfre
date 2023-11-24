

import './index.scss';
import logo from '../../assets/images/logo.png';
import parede from '../../assets/images/parede.png';
import insta from '../../assets/images/insta.png';
import face from '../../assets/images/face.png';
import google from '../../assets/images/google.png';
import skat from '../../assets/images/Skat.jpg'
import skateb from '../../assets/images/Skateb.jpg'


function App() {
  return (
    <div className="App">
      <header className="Cabecalhoow">
      <img src={logo} alt="Logo" className="logo" />
      </header>

      
      <div className="principall">
      <div className="quadro">
        <div className="metade-esquerdaa">
          <img src={skateb} alt="Parede" className="parede" />
        </div>
        <div className="metade-direitaa">
          <div className="formulario-loginn">
            <h1 className="login-titlee">Login</h1>
            <br />
            <br />
            <input type="textoo" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <br />
            <br />
            <button>Entrar</button>
            <div className="custom-link">
              <a href='link'>Cadastra-se aqui</a>
            </div>
            <div className="social-icons">
              <img src={google} alt="Google" className="social-icon" />
              <img src={insta} alt="Instagram" className="social-icon" />
              <img src={face} alt="Facebook" className="social-icon" />
            </div>
          </div>
          </div>
        </div>
      
    </div>
      
    </div>
  );
}

export default App;
