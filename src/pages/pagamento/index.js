


import React, { useState } from 'react';
import './index.scss';
import logo from '../../assets/images/logo.png';
import visa from '../../assets/images/visa.png';
import pix from '../../assets/images/pix.png';
import elo from '../../assets/images/elo.png';
import mastercard from '../../assets/images/mastercard.png';
function App() {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [paymentOption, setPaymentOption] = useState('');

  const handleCepChange = (e) => {
    setCep(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handlePaymentOptionChange = (e) => {
    setPaymentOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div className="App">
         <header className="Cabecalhoow">
        <img src={logo} alt="Logo" className="logo" />
      </header>
      <div className='fundo'>
      <div className="payment-container">
        <div className="address-form">
          <h2>Endereço de Entrega</h2>
          <label htmlFor="cep">CEP:</label>
          <input
            type="text"
            id="cep"
            value={cep}
            onChange={handleCepChange}
            placeholder="Digite o CEP"
          />
          <label htmlFor="address">Endereço:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={handleAddressChange}
            placeholder="Digite o endereço"
          />
          <label htmlFor="number">Número:</label>
          <input
            type="text"
            id="number"
            value={number}
            onChange={handleNumberChange}
            placeholder="Digite o número"
          />
        </div>

        <div className="payment-options">
          <h2>Opções de Pagamento</h2>
          <div className="payment-buttons">
            <button className="payment-button">
            <img src={mastercard} alt="Logo" className="logo" />
            </button>
            <button className="payment-button">
            <img src={visa} alt="Logo" className="logo" />
            </button>
            <button className="payment-button">
            <img src={elo} alt="Logo" className="logo" />
            </button>
            <button
              className="payment-button"
              id="pix-button"
              value="pix"
              onClick={handlePaymentOptionChange}
            >
              PIX
            </button>
          </div>
        </div>
      </div>

      <button onClick={handleSubmit}>Finalizar Pagamento</button>
      </div>
      
    </div>
  );
}

export default App;
