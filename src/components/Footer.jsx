import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">EcoAlerta</p>
      <div className="footer__social">
        <a href="https://seuprojeto.com" className="footer__icon" target="_blank" rel="noopener noreferrer">
          <i className='bx bx-globe'></i>
        </a>
        <a href="https://seuprojeto.com/apresentacao.pdf" className="footer__icon" target="_blank" rel="noopener noreferrer">
          <i className='bx bx-file'></i>
        </a>
        <a href="mailto:seuprojeto@email.com" className="footer__icon">
          <i className='bx bx-envelope'></i>
        </a>
      </div>
      <p className="footer__copy">&#169; EcoAlerta. Todos direitos reservados.</p>
    </footer>
  );
}

export default Footer;