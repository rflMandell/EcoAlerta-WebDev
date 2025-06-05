import React from "react";

function Solucao() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Funcionalidades</h2>
      <div className="skills__container bd-grid">
        <div>
          <h2 className="skills__subtitle">O que o EcoAlerta faz por você</h2>
          <p className="skills__text">
            Nosso sistema reúne inteligência de dados, geolocalização e alertas automatizados para garantir que você esteja sempre informado e seguro.
          </p>
          <div className="skills__data">
            <div className="skills__names">
              <i className='bx bx-envelope skills__icon'></i>
              <span className="skills__name">Alertas por E-mail</span>
            </div>
            <div className="skills__bar skills__html"></div>
            <div>
              <span className="skills__percentage">100%</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className='bx bx-map-pin skills__icon'></i>
              <span className="skills__name">Análise por Geolocalização</span>
            </div>
            <div className="skills__bar skills__css"></div>
            <div>
              <span className="skills__percentage">90%</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className='bx bx-cloud skills__icon'></i>
              <span className="skills__name">Previsão de Chuvas e Enchentes</span>
            </div>
            <div className="skills__bar skills__js"></div>
            <div>
              <span className="skills__percentage">80%</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className='bx bx-layout skills__icon'></i>
              <span className="skills__name">Interface Intuitiva</span>
            </div>
            <div className="skills__bar skills__ux"></div>
            <div>
              <span className="skills__percentage">90%</span>
            </div>
          </div>
        </div>
        <div>
          <img src="/assets/img/weatherapp2.png" alt="" className="skills__img" />
        </div>
      </div>
    </section>
  );
}

export default Solucao;