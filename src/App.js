import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import Sobre from "./routes/Sobre";
import Solucao from "./routes/Solucao";
import Cadastrar from "./routes/Cadastrar";

import "./App.css";

function App() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2000,
      delay: 200,
    });

    sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
    sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", { delay: 400 });
    sr.reveal(".home__social-icon", { interval: 200 });
    sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 });

    sr.reveal(".contact__input:nth-child(1)", { delay: 200 });
    sr.reveal(".contact__input:nth-child(2)", { delay: 300 });
    sr.reveal(".contact__input:nth-child(3)", { delay: 400 });
    sr.reveal(".contact__input:nth-child(4)", { delay: 500 });
    sr.reveal(".contact__input:nth-child(5)", { delay: 600 });
    sr.reveal(".contact__input:nth-child(6)", { delay: 700 });
    sr.reveal(".contact__button", { delay: 800 });
  }, []);


  return (
    <>
      <Nav />
      <main className="l-main">
        <Home />
        <Sobre />
        <Solucao />
        <Cadastrar />
      </main>
      <Footer />
    </>
  );
}

export default App;