import React, { useState, useEffect } from "react";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY;
      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute("id");
        const link = document.querySelector(`.nav__menu a[href="#${sectionId}"]`);
        if (link) {
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            link.classList.add("active-link");
          } else {
            link.classList.remove("active-link");
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <a href="#home" className="nav__logo">EcoAlerta</a>
        </div>
        <div className={`nav__menu${menuOpen ? " show" : ""}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item"><a href="#home" className="nav__link active-link">Home</a></li>
            <li className="nav__item"><a href="#about" className="nav__link">Sobre</a></li>
            <li className="nav__item"><a href="#skills" className="nav__link">Funcionalidades</a></li>
            <li className="nav__item"><a href="#work" className="nav__link">Seja da equipe</a></li>
            <li className="nav__item"><a href="#contact" className="nav__link">Contato</a></li>
          </ul>
        </div>
        <div className="nav__toggle" id="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <i className='bx bx-menu'></i>
        </div>
      </nav>
    </header>
  );
}

export default Nav;