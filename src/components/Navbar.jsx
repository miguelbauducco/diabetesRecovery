import logo from '../Assets/img/logo.png';
import { useState } from "react";
import React from "react";
import PropTypes from "prop-types";
import MobileMenu from "./MobileMenu";
import { useLocation } from "react-router-dom";




function Navbar({ onClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const esLegal =
    location.pathname.includes("privacidad") ||
    location.pathname.includes("proteccion") ||
    location.pathname.includes("terminos");


  return (
    <nav className="navbar">
      <div className={`nav-left ${esLegal ? "oculto" : ""}`}>
        <a href="#lucas" className="navtext">LUCAS</a>
        <a href="#resultados" className="navtext">RESULTADOS</a>
        <a href="#faq" className="navtext">PREGUNTAS FRECUENTES</a>
      </div>
      
      <div className="nav-center">
        <img src={logo} className="imglogo" alt="logo" />
      </div>
      
      <div className={`nav-right ${esLegal ? "oculto" : ""}`}>
        <button
          onClick={(e) => {
            e.preventDefault();
            onClick?.();
            document.getElementById("calendly")?.scrollIntoView({ behavior: "smooth"});
          }}
          className="btn-ayuda"
        ><p className='btn-text'>Necesito ayuda</p>
        </button>
          
        <button className="hamburger-mobile-only" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </nav>
  );
}


Navbar.propTypes = {
  onClick: PropTypes.func,
};

export default Navbar;

