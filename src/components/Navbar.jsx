import logo from '../Assets/img/logo.png';
import React from "react";
import PropTypes from "prop-types";


function Navbar({ onClick }) {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="#lucas" className="navtext">LUCAS</a>
        <a href="#resultados" className="navtext">RESULTADOS</a>
        <a href="#faq" className="navtext">PREGUNTAS FRECUENTES</a>
      </div>
      
      <div className="nav-center">
        <img src={logo} className="imglogo" alt="logo" />
      </div>
      
      <div className="nav-right">
        <button
          onClick={(e) => {
            e.preventDefault();
            onClick?.();
            document.getElementById("calendly")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="btn-ayuda"
        >
          Necesito ayuda
        </button>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  onClick: PropTypes.func,
};

export default Navbar;

