


import './index.scss';
import logo from '../../assets/images/logo.png';
import carrinho from '../../assets/images/carrinho.png';
import { Instagram, Facebook, Twitter } from 'react-feather';

function App() {
  return (
    <div className="App">
      <header className="Cabecalhoow">
      <img src={logo} alt="Logo" className="logo" />
      </header>

      <div className='carrinho-compras'>
      <img src={carrinho} alt="Carrinho" className="Carrinho" />
      <h2>Seu carrinho está vazio</h2>

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


