import React from "react";

function Sobre() {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">Sobre o Projeto</h2>
      <div className="about__container bd-grid">
        <div className="about__img">
          <img src="/assets/img/5726825.jpg" alt="Abtimg" />
        </div>
        <div>
          <h2 className="about__subtitle">Sistema EcoAlerta</h2>
          <p className="about__text">
            O EcoAlerta é um sistema inteligente que envia relatórios diários com previsões de desastres naturais, como enchentes, chuvas fortes e terremotos, com base na sua localização. Criado para proteger vidas e ajudar na tomada de decisões do dia a dia, o EcoAlerta informa, antecipa e previne.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Sobre;