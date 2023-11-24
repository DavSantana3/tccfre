

import React, { useState } from 'react';
import './index.scss';
import logo from '../../assets/images/logo.png';
import lg1 from "../../assets/images/lg1.png";
import lg2 from "../../assets/images/lg2.png";
import lg3 from "../../assets/images/lg3.png";
import { Link } from 'react-router-dom';

import { Instagram, Facebook, Twitter } from 'react-feather';


function PaginaCompra() {
  const [quantidade, setQuantidade] = useState(1);

  const incrementQuantidade = () => {
    setQuantidade(quantidade + 1);
  };

  const decrementQuantidade = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };

  return (
    <div className="App">
     
    <div className="produtoo">
      <img src={lg1} alt="lg1" className="lg1" />
      <div className="informacoes-produto">
        <h2>SEMI LONG HONDAR 31 POLEGADAS BE HAPPY</h2>
        
        <p>Preço: R$ 584,91</p>
      </div>
      <div className="quantidade">
        <label>Quantidade:</label>
        <div className="contador">
          <button onClick={decrementQuantidade}>-</button>
          <span>{quantidade}</span>
          <button onClick={incrementQuantidade}>+</button>
        </div>
      </div>
      
     
      <Link to="/pagamento"><span className="Comprar">Comprar</span></Link>
    </div>

    <div>
      <h1>Descrição Geral</h1>
      <p>Abreviado para long, esse modelo é muito utilizado em ladeiras e descidas. Isso porque ele é mais veloz e apresenta maior estabilidade quando comparado aos outros tipos de skate. Essas características são decorrentes da sua estrutura mais rígida e rodas mais macias e maiores, que garantem uma boa aderência ao solo.</p>
      <h1>Especificações do Produto</h1>
      <table>
        <tr>
          <td>Marca:</td>
          <td>Hondar</td>
        </tr>
        <tr>
          <td>Dureza da Roda:</td>
          <td>70A</td>
        </tr>
        <tr>
          <td>Shape:</td>
          <td>Maple</td>
        </tr>
      </table>
      <h1>Sobre a Marca</h1>
      <p>A Hondar Skateboards atua a mais de 10 anos no mercado internacional desenvolvendo produtos de alta performance. No final de 2014 percebemos a deficiência no mercado para encontrar materiais de qualidade, shapes de Maple, Truck ou rodas, sempre foram muito caros, então eles começaram a produzir seus próprios produtos. Não bastava apenas produzir peças para skate, foi preciso entender como vive um skatista. O primeiro passo foi dado na modalidade de Longboard, posteriormente iniciamos o desenvolvimento do Skateboard ou Skate street, iniciando um novo marco para a Hondar, que deixaria de ser apenas um fabricante de skates e se tornar uma Marca de Skateboard. Seu time é formado pelos atletas, Aleix Gallimó, Carlos Paixão, Dougulas Dalua, Emily Pross, Evandro Dorneles, Rayana Gomes, Tiago Mohr, Yan Bertinati.</p>
    </div>
    <div className="faixa-produtos-relacionados">
      <h2>Produtos Relacionados</h2>
      <div className="produtos-container">
        <div className='produtorelacionado'>
        <img src={lg2} alt="lg2" className="lg2" />
          <h3>De R$ 649,90 R$ 584,91</h3>
          <p>SEMI LONG HONDAR 31 POLEGADAS FLOR ROSA</p>

          </div>
       <div className='produtorelacionado'>
       <img src={lg3} alt="lg3" className="lg3" />
       <h3>De R$ 599,90 R$ 479,92</h3>
          <p>LONGBOARD HONDAR 33 POLEGADAS TAIL ZEBRA</p>
          </div>
      </div>
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

function App() {
  return (
    <div className="App">
      <header className="Cabecalhooww">
        <img src={logo} alt="Logo" className="Logo" />
      </header>
      <PaginaCompra />
    </div>
  );
}

export default App;
