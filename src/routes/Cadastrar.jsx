import React from "react";

function Cadastrar() {
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Entre para o EcoAlerta</h2>
      <div className="contact__container bd-grid">
        <form className="contact__form">
          <input type="text" placeholder="Nome completo" className="contact__input" required />
          <input type="email" placeholder="E-mail" className="contact__input" required />
          <input type="text" placeholder="Bairro" className="contact__input" required />
          <input type="text" placeholder="Cidade" className="contact__input" required />
          <input type="text" placeholder="Estado (UF)" className="contact__input" maxLength={2} required />
          <textarea placeholder="Alguma observação?" cols="0" rows="6" className="contact__input"></textarea>
          <input type="submit" value="Cadastrar" className="contact__button button" />
        </form>
      </div>
    </section>
  );
}

export default Cadastrar;