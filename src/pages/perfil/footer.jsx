

import React from 'react';
import 'boxicons';

const Footer = () => (
  <footer>
    <div className="footer-content">
      <div className="footer-section">
        <h4>Redes Sociais</h4>
        <div className="social-icons">
          <i className="bx bxl-facebook-circle"></i>
          <i className="bx bxl-twitter"></i>
          <i className="bx bxl-instagram-alt"></i>
        </div>
      </div>
      <div className="footer-section">
        <h4>Contato</h4>
        <p>Email: skatt@gmail.com</p>
        <p>Telefone: (123) 456-7890</p>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2023 Skattrack. Todos os direitos reservados.</p>
    </div>
  </footer>
);

export default Footer;
