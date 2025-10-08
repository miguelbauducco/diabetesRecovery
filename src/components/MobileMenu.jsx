import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="mobile-menu">
      <button className="close-btn" onClick={onClose}>✕</button>

      <a href="#lucas" onClick={onClose}>LUCAS</a>
      <a href="#resultados" onClick={onClose}>RESULTADOS</a>
      <a href="#faq" onClick={onClose}>PREGUNTAS FRECUENTES</a>
      <Link to="/privacidad">POLÍTICA DE PRIVACIDAD</Link>
      <Link to="/terminos">TÉRMINOS Y CONDICIONES</Link>
      <Link to="/proteccion">PROTECCIÓN DE DATOS</Link>
    </div>
  );
}

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MobileMenu;
